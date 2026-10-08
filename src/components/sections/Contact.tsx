'use client';

import { PROFILE } from '@/lib/data';
import { useCopyToClipboard } from '@/lib/hooks';
import { Mail, Linkedin, Github, Copy, Check, ArrowUp, Shield, MapPin, Download, ShieldCheck, MessageCircle } from 'lucide-react';

export function Contact() {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <section id="contact" className="section-padding bg-[#0d0d0d] text-[#f4f2ee] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-emerald-400 block mb-2 font-bold">
              08 — Direct Communication
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Let&apos;s build something <br />
              <span className="font-serif-accent font-normal italic text-emerald-300">more secure</span>.
            </h2>
          </div>

          {/* Rotating Circular Say Hello Badge */}
          <div className="relative w-28 h-28 hidden lg:flex items-center justify-center shrink-0">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="font-mono-tech text-[10px] uppercase fill-emerald-400/80 tracking-widest font-bold">
                <textPath href="#circlePath" startOffset="0%">
                  SAY HELLO • GET IN TOUCH • NETWORK SECURITY •
                </textPath>
              </text>
            </svg>
            <ShieldCheck className="w-6 h-6 text-emerald-400 absolute" />
          </div>
        </div>

        {/* Main Grid: Direct Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Primary Email Copy Card */}
          <div className="lg:col-span-7 bg-white/5 p-8 sm:p-10 rounded-3xl border border-white/15 space-y-6 shadow-2xl hover:border-[#EA4335]/50 hover:shadow-[0_0_30px_rgba(234,67,53,0.15)] transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[#a9a6a0] uppercase tracking-wider block group-hover:text-[#EA4335] transition-colors">
                PRIMARY EMAIL ADDRESS
              </span>
              <Mail className="w-4 h-4 text-[#a9a6a0] group-hover:text-[#EA4335] transition-colors" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 group-hover:border-[#EA4335]/30 transition-colors">
              <span className="text-xl sm:text-2xl font-bold font-mono-tech text-white break-all">
                {PROFILE.email}
              </span>

              <button
                onClick={() => copy(PROFILE.email)}
                className={`shrink-0 px-5 py-2.5 rounded-xl font-mono-tech text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                  isCopied
                    ? 'bg-[#EA4335] text-white shadow-[0_0_15px_rgba(234,67,53,0.5)]'
                    : 'bg-white text-[#0d0d0d] hover:bg-[#EA4335] hover:text-white hover:shadow-[0_0_15px_rgba(234,67,53,0.4)]'
                }`}
                aria-label="Copy email address to clipboard"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
            <div aria-live="polite" className="sr-only">
              {isCopied ? 'Email address copied to clipboard' : ''}
            </div>

            <p className="text-xs font-mono-tech text-[#a9a6a0]">
              Open to opportunities in Cyber Security, Network Security, and Security Engineering.
            </p>
          </div>

          {/* Social Links & WhatsApp */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="font-mono-tech text-[10px] text-[#a9a6a0] uppercase tracking-wider block mb-1 group-hover:text-[#25D366] transition-colors">
                WHATSAPP DIRECT CHAT
              </span>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold font-mono-tech text-white group-hover:text-[#25D366] transition-colors">
                  {PROFILE.phone} (WhatsApp) →
                </span>
                <MessageCircle className="w-5 h-5 text-[#a9a6a0] group-hover:text-[#25D366] group-hover:scale-110 transition-all duration-300" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2dba4e]/50 hover:shadow-[0_0_20px_rgba(45,186,78,0.2)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="font-mono-tech text-[10px] text-[#a9a6a0] uppercase tracking-wider block mb-1 group-hover:text-[#2dba4e] transition-colors">
                CODE REPOSITORIES & SECURITY SCRIPTS
              </span>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold font-mono-tech text-white group-hover:text-[#2dba4e] transition-colors">
                  github.com/rusaikMufthi →
                </span>
                <Github className="w-5 h-5 text-[#a9a6a0] group-hover:text-[#2dba4e] group-hover:scale-110 transition-all duration-300" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="font-mono-tech text-[10px] text-[#a9a6a0] uppercase tracking-wider block mb-1 group-hover:text-[#0A66C2] transition-colors">
                PROFESSIONAL NETWORK
              </span>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold font-mono-tech text-white group-hover:text-[#0A66C2] transition-colors">
                  LinkedIn Profile →
                </span>
                <Linkedin className="w-5 h-5 text-[#a9a6a0] group-hover:text-[#0A66C2] group-hover:scale-110 transition-all duration-300" />
              </div>
            </a>

            {/* Location & CV Download */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-[#a9a6a0]">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PROFILE.location}</span>
              </div>
              <a
                href={PROFILE.resumeUrl}
                download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold hover:bg-emerald-400 hover:text-[#0d0d0d] hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#a9a6a0]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js 15, React 19 & Tailwind CSS 4</span>

            <a
              href="#hero"
              className="flex items-center gap-1 text-emerald-400 hover:underline focus:outline-none font-semibold"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

