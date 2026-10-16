'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PROFILE } from '@/lib/data';
import { Volume2, VolumeX, Shield, ArrowDown, Lock, ShieldCheck, AlertTriangle, Download } from 'lucide-react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-pause video when Hero is out of viewport, auto-resume when visible
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            videoEl.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[95vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#f4f2ee]"
    >
      {/* Background Ghost Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-mono-tech text-[14vw] sm:text-[16vw] font-black uppercase text-transparent stroke-text tracking-tighter opacity-[0.06] whitespace-nowrap">
          RUSAICK
        </span>
      </div>

      <div className="container-custom relative z-10 flex flex-col justify-between h-full grow">
        {/* Top Hero Label & Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#0d0d0d]/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#0d0d0d]/30 shrink-0 bg-white shadow-sm ring-2 ring-emerald-500/20">
              <Image
                src="/about-portrait.webp"
                alt={PROFILE.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="font-mono-tech text-xs uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#0d0d0d] text-[#f4f2ee] flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              01 — Cyber Security
            </span>
            <span className="font-mono-tech text-xs text-[#77756f] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {PROFILE.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#77756f]">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Identity Verified via Résumé</span>
          </div>
        </div>

        {/* Central Hero Grid: Video + Wording */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0d0d0d] leading-[1.05]">
              Building toward a <span className="font-serif-accent font-normal italic">more secure</span> digital world.
            </h1>

            <p className="text-base sm:text-lg text-[#3a3a3a] max-w-xl leading-relaxed">
              Software Engineering foundation transitioning into Computer Networks and Cyber Security. Specialized in web security, XSS threat analysis, and ML-driven security analytics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-full bg-[#0d0d0d] dark:bg-emerald-400 text-[#f4f2ee] dark:text-[#0d0d0d] font-mono-tech text-xs uppercase tracking-wider hover:bg-emerald-500 dark:hover:bg-emerald-300 transition-all duration-300 shadow-md dark:shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 font-bold"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-emerald-400 dark:text-[#0d0d0d] group-hover:translate-y-1 transition-transform duration-300" />
              </a>

              <a
                href="#about"
                className="group px-6 py-3.5 rounded-full bg-white dark:bg-[#12161f] border border-[#0d0d0d]/15 dark:border-emerald-500/40 text-[#0d0d0d] dark:text-white font-mono-tech text-xs uppercase tracking-wider hover:border-emerald-500/60 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-[#e9e6e0] dark:hover:bg-[#181d26] dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 font-semibold"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <span>About Security Profile</span>
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
                className="group px-6 py-3.5 rounded-full bg-white dark:bg-[#12161f] border border-emerald-600/40 dark:border-emerald-500/40 text-[#0d0d0d] dark:text-[#f4f2ee] font-mono-tech text-xs uppercase tracking-wider hover:bg-emerald-500 hover:border-emerald-500 hover:text-[#0d0d0d] dark:hover:bg-emerald-400 dark:hover:border-emerald-400 dark:hover:text-[#0d0d0d] hover:shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 font-semibold shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:text-[#0d0d0d] group-hover:translate-y-0.5 transition-all duration-300" />
                <span>Download Résumé</span>
              </a>
            </div>
          </div>

          {/* Right Video Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div
              id="hero-video-container"
              onClick={toggleSound}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSound();
                }
              }}
              aria-label={isMuted ? 'Click to unmute video audio' : 'Click to mute video audio'}
              title="Click anywhere on the video to toggle audio"
              className="relative w-full max-w-md aspect-[3/4] sm:aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-[#ffffff] border border-[#0d0d0d]/15 dark:border-emerald-500/40 shadow-xl group cursor-pointer transition-all duration-300 select-none hover:shadow-2xl"
            >
              {/* Video Element with mix-blend-mode multiply */}
              <video
                ref={videoRef}
                src="/hero/hero.mp4"
                poster="/about-portrait.webp"
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-500"
              />

              {/* Sound Toggle Button & Indicator */}
              <div
                className="absolute bottom-5 right-5 p-3 sm:px-4 sm:py-2.5 rounded-full bg-white/95 dark:bg-[#090b0e]/95 backdrop-blur-md border border-[#0d0d0d]/15 dark:border-emerald-500/50 text-[#0d0d0d] dark:text-white shadow-lg dark:shadow-[0_0_20px_rgba(52,211,153,0.3)] group-hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 z-20"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-[#77756f] dark:text-emerald-400 shrink-0" />
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider font-semibold text-[#3a3a3a] dark:text-[#f4f2ee]">
                      Click Anywhere to Unmute
                    </span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse shrink-0" />
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-300">
                      Audio Playing • Click to Mute
                    </span>
                  </>
                )}
              </div>

              {/* Top-Right Video Status Badge (Compact & Unobtrusive) */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#090b0e]/90 backdrop-blur-md border border-[#0d0d0d]/10 dark:border-emerald-500/40 text-[10px] font-mono-tech text-[#0d0d0d] dark:text-emerald-400 flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(52,211,153,0.2)] pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-semibold tracking-wide">Talking Introduction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#0d0d0d]/10 text-xs font-mono-tech">
          <div>
            <span className="text-[#77756f] block">CURRENT FOCUS</span>
            <span className="text-[#0d0d0d] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              BSc Computer Networks
            </span>
          </div>
          <div>
            <span className="text-[#77756f] block">FOUNDATION</span>
            <span className="text-[#0d0d0d] font-medium">HND Software Engineering</span>
          </div>
          <div>
            <span className="text-[#77756f] block">KEY RESEARCH</span>
            <span className="text-[#0d0d0d] font-medium flex items-center gap-1">
              XSS ML Detection
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">99.81%</span>
            </span>
          </div>
          <div>
            <span className="text-[#77756f] block">LOCATION</span>
            <span className="text-[#0d0d0d] font-medium">{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
