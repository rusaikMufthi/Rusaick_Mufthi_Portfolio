'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
      setTheme('light');
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-white/10 border border-white/15 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
        isDark
          ? 'bg-white/10 border-white/20 text-emerald-400 hover:bg-white/15 hover:border-emerald-400/50 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]'
          : 'bg-white/10 border-white/15 text-amber-300 hover:bg-white/15 hover:border-amber-300/50 hover:shadow-[0_0_12px_rgba(252,211,77,0.3)]'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-emerald-300 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-amber-300 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>

      {showLabel && (
        <span className="font-mono-tech text-xs tracking-wider uppercase font-semibold">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
