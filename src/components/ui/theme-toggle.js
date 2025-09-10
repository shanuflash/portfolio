'use client';
// Based on magicui.design/docs/components/animated-theme-toggler

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

    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = async () => {
    if (!buttonRef.current || !mounted) return;

    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transition API
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

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  if (!mounted) {
    return <div className="p-2 w-9 h-9 rounded-md" />;
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-accent/10 hover:text-accent transition-all duration-100 focus:outline-none transform hover:rotate-12"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <Sun
          className="w-5 h-5 text-foreground transition-transform duration-300"
          strokeWidth={2}
        />
      ) : (
        <Moon
          className="w-5 h-5 text-foreground transition-transform duration-300"
          strokeWidth={2}
        />
      )}
    </button>
  );
}
