'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { PROFILE } from '@/lib/data';
import { Volume2, VolumeX, Shield, ArrowDown, Lock, ShieldCheck, AlertTriangle } from 'lucide-react';

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
                className="px-6 py-3.5 rounded-full bg-[#0d0d0d] text-[#f4f2ee] font-mono-tech text-xs uppercase tracking-wider hover:bg-emerald-500 hover:text-[#0d0d0d] transition-all duration-300 shadow-md flex items-center gap-2 font-semibold"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-full bg-white border border-[#0d0d0d]/15 text-[#0d0d0d] font-mono-tech text-xs uppercase tracking-wider hover:border-emerald-500/50 hover:bg-[#e9e6e0] transition-colors"
              >
                About Security Profile
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
                className="px-6 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 font-mono-tech text-xs uppercase tracking-wider hover:bg-emerald-500 hover:text-[#0d0d0d] transition-all"
              >
                Résumé ↓
              </a>
            </div>
          </div>

          {/* Right Video Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-[#ffffff] border border-[#0d0d0d]/15 shadow-xl group">
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

              {/* Sound Toggle Button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-5 right-5 p-3.5 rounded-full bg-white/90 backdrop-blur-md border border-[#0d0d0d]/15 text-[#0d0d0d] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 focus:outline-none z-20"
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                title={isMuted ? 'Click to hear audio introduction' : 'Click to mute audio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-[#77756f]" />
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider">Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider font-semibold text-emerald-700">Sound On</span>
                  </>
                )}
              </button>

              {/* Top Video Status Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#0d0d0d]/10 text-[11px] font-mono-tech text-[#0d0d0d] flex items-center gap-2 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Video Introduction</span>
              </div>

              {/* Red Threat Indicator Accent Pill */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-rose-950/80 backdrop-blur-md border border-rose-500/30 text-[10px] font-mono-tech text-rose-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span>OWASP XSS RESEARCH</span>
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
