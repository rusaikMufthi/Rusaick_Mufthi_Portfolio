'use client';

import { useState, useEffect, useCallback } from 'react';

export function useReducedMotion(): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMatches(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return matches;
}

export function useActiveSection(sectionIds: string[]): [string, (id: string) => void] {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const cleanIds = sectionIds.map((id) => id.replace('#', ''));

    const handleScroll = () => {
      // Check if user is scrolled to the very bottom of the page
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (isBottom) {
        setActiveId(cleanIds[cleanIds.length - 1]);
        return;
      }

      // Check if user is at the top in the hero section
      if (window.scrollY < 200) {
        setActiveId('');
        return;
      }

      // Calculate scroll position with offset for header
      const scrollPosition = window.scrollY + 240;

      // Scan backwards from bottom to top to find current section
      for (let i = cleanIds.length - 1; i >= 0; i--) {
        const id = cleanIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return [activeId, setActiveId];
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return progress;
}

export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) return false;

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), timeout);
        return true;
      } catch (err) {
        console.error('Copy failed', err);
        return false;
      }
    },
    [timeout]
  );

  return { isCopied, copy };
}
