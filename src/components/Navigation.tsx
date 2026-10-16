'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_ITEMS, PROFILE } from '@/lib/data';
import { useActiveSection, useScrollProgress } from '@/lib/hooks';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, ArrowDownRight, Shield } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href);
  const [activeSection, setActiveSection] = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Scroll Progress Line - Green Accent */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-white/10 z-[100] pointer-events-none">
        <div
          className="h-full bg-emerald-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header / Navigation Bar (Dark Styling) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'py-5 bg-[#0d0d0d] border-b border-white/5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo & Name with Portrait Image */}
          <a
            href="#hero"
            onClick={() => setActiveSection('')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Home - Mohamed Rusaick Mufthi"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-500/50 group-hover:scale-105 transition-transform shadow-md shrink-0 bg-white ring-2 ring-emerald-500/20">
              <Image
                src="/about-portrait.webp"
                alt={PROFILE.name}
                fill
                className="object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d0d0d] z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono-tech text-xs tracking-wider uppercase font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-[11px] text-[#a9a6a0] flex items-center gap-1 font-mono-tech">
                <Shield className="w-3 h-3 text-emerald-400 inline" />
                Cyber Security &amp; Networks
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-inner"
          >
            {NAV_ITEMS.map((item) => {
              const cleanId = item.href.replace('#', '');
              const isActive = activeSection === cleanId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(cleanId)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono-tech transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0d0d0d] font-bold bg-emerald-400 shadow-sm'
                      : 'text-[#e9e6e0] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href={PROFILE.resumeUrl}
              download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-400 hover:text-[#0d0d0d] transition-all duration-300 shadow-sm"
            >
              <span>Résumé</span>
              <span className="text-[10px]">↓</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none hover:bg-white/20 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay (Dark Theme) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#0d0d0d] text-[#f4f2ee] z-40 flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="pt-20">
            <p className="font-mono-tech text-xs text-emerald-400 uppercase tracking-widest mb-8">
              Navigation Index
            </p>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const cleanId = item.href.replace('#', '');
                const isActive = activeSection === cleanId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(cleanId);
                      setMobileMenuOpen(false);
                    }}
                    className="group flex items-center justify-between py-2.5 border-b border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-tech text-xs text-emerald-400">
                        {item.index}
                      </span>
                      <span
                        className={`text-2xl font-medium transition-colors ${
                          isActive ? 'text-emerald-400 font-bold' : 'text-white group-hover:text-emerald-300'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <ArrowDownRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="flex justify-between items-center text-xs font-mono-tech text-[#a9a6a0]">
              <span>{PROFILE.location}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase">Theme:</span>
                <ThemeToggle showLabel className="px-3 py-1" />
              </div>
            </div>
            <a
              href={PROFILE.resumeUrl}
              download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-emerald-400 text-[#0d0d0d] font-mono-tech text-xs font-bold tracking-wider uppercase shadow-md"
            >
              Download Résumé ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
