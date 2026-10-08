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

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id.replace('#', ''));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
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
