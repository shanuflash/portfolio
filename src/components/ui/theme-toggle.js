'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { flushSync } from 'react-dom';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    setIsDark(savedTheme !== 'light');
  }, []);

  const toggleTheme = async () => {
    if (!buttonRef.current || !mounted) return;

    if (!document.startViewTransition) {
      const newTheme = !isDark;
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }).ready;

    // Straight wipe: the new theme is revealed behind a hard horizontal edge
    // sweeping top → down the sheet. Rectilinear, matching the grid.
    document.documentElement.animate(
      {
        clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  if (!mounted) {
    return <div className="w-11" />;
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="group/theme flex h-full w-11 items-center justify-center transition-colors duration-300 hover:bg-foreground/3 focus:outline-none"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="relative h-4 w-4">
        <Sun
          className={`absolute inset-0 h-4 w-4 text-foreground/90 transition-all duration-300 ease-out group-hover/theme:text-accent ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-50 opacity-0'
          }`}
          strokeWidth={2}
          aria-hidden={!isDark}
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 text-foreground/90 transition-all duration-300 ease-out group-hover/theme:text-accent ${
            isDark
              ? 'rotate-90 scale-50 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
          strokeWidth={2}
          aria-hidden={isDark}
        />
      </span>
    </button>
  );
}
