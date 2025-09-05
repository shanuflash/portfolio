'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');

    setIsDark(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (!mounted) {
    return <div className="p-2 w-9 h-9 rounded-md" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground" strokeWidth={2} />
      ) : (
        <Moon className="w-5 h-5 text-foreground" strokeWidth={2} />
      )}
    </button>
  );
}
