'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PROFILE } from '@/lib/data';
import { Shield, RotateCw, Mail, Linkedin, Github, FileText, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, MessageCircle } from 'lucide-react';

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="section-padding bg-[#f4f2ee] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2">
              01 — Verification & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Security <span className="font-serif-accent font-normal italic">Profile</span> & Background
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-sm mt-4 md:mt-0">
            Grounding all claims strictly in verified educational credentials, academic research, and documented projects.
          </p>
        </div>

        {/* Main Grid: Interactive ID Card & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left / Center: Flippable Security Identity Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md perspective-1000">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsFlipped(!isFlipped);
                  }
                }}
                aria-label={isFlipped ? 'Flip security profile card back to front' : 'Flip security profile card to view focus areas'}
                className={`relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl transition-transform duration-700 transform-style-3d shadow-xl bg-white border border-[#0d0d0d]/15 cursor-pointer select-none group focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between backface-hidden bg-gradient-to-b from-white to-[#f4f2ee] rounded-3xl">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[#0d0d0d]/10 pb-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <span className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#0d0d0d]">
                        SECURITY PROFILE
                      </span>
                    </div>
                    <span className="font-mono-tech text-[10px] px-2.5 py-1 rounded-full bg-[#0d0d0d] text-emerald-400 font-semibold uppercase flex items-center gap-1 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      VERIFIED ID
                    </span>
                  </div>

                  {/* Card Portrait & Basic Info */}
                  <div className="flex flex-col items-center text-center my-auto py-4">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#0d0d0d] shadow-inner mb-4 bg-white ring-4 ring-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/about-portrait.webp"
                        alt={PROFILE.name}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d]">
                      {PROFILE.name}
                    </h3>
                    <p className="text-xs font-mono-tech text-[#77756f] mt-1">
                      {PROFILE.headline}
                    </p>

                    <div className="mt-4 px-4 py-2 rounded-xl bg-white border border-[#0d0d0d]/10 text-xs font-mono-tech text-[#3a3a3a] text-center max-w-xs shadow-sm flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{PROFILE.status}</span>
                    </div>
                  </div>

                  {/* Card Footer & Flip Action */}
                  <div className="pt-4 border-t border-[#0d0d0d]/10 flex items-center justify-between">
                    <div className="text-[11px] font-mono-tech text-[#77756f]">
                      <span>REF: CV-2026-RM</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-700 font-bold group-hover:underline">
                      <span>Click Card to Flip</span>
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between backface-hidden rotate-y-180 bg-[#0d0d0d] text-[#f4f2ee] rounded-3xl">
                  {/* Back Header */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="font-mono-tech text-xs uppercase tracking-wider font-bold text-emerald-400">
                      WHAT I FOCUS ON
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#a9a6a0] group-hover:text-emerald-400 transition-colors">
                      <span>Click Card to Flip Back</span>
                      <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Back Focus Details */}
                  <div className="space-y-4 my-auto py-2 text-xs">
                    <div>
                      <span className="font-mono-tech text-[10px] text-rose-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-rose-400 inline" />
                        01 — CYBER SECURITY & OWASP THREATS
                      </span>
                      <p className="text-[#f4f2ee] font-medium mt-0.5">
                        Web application vulnerabilities, XSS payload research, OWASP Top 10 mitigation techniques.
                      </p>
                    </div>

                    <div>
                      <span className="font-mono-tech text-[10px] text-emerald-400 font-bold uppercase tracking-wider block flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
                        02 — COMPUTER NETWORKS & DEFENSE
                      </span>
                      <p className="text-[#f4f2ee] font-medium mt-0.5">
                        Network architecture, systems administration, routing fundamentals, and defensive protocol design.
                      </p>
                    </div>

                    <div>
                      <span className="font-mono-tech text-[10px] text-[#a9a6a0] uppercase tracking-wider block">
                        03 — AI APPLIED TO SECURITY
                      </span>
                      <p className="text-[#f4f2ee] font-medium mt-0.5">
                        Using Python, Scikit-learn, XGBoost, and TensorFlow to build automated threat classification models.
                      </p>
                    </div>

                    <div>
                      <span className="font-mono-tech text-[10px] text-[#a9a6a0] uppercase tracking-wider block">
                        04 — SOFTWARE ENGINEERING FOUNDATION
                      </span>
                      <p className="text-[#f4f2ee] font-medium mt-0.5">
                        Pearson BTEC HND in Software Engineering providing clean code structure, database design, and API discipline.
                      </p>
                    </div>
                  </div>

                  {/* Back Footer */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono-tech text-[#a9a6a0]">
                    <span className="text-emerald-400">STATUS: ACTIVE STUDENT</span>
                    <span>LOCATION: {PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs font-mono-tech text-[#77756f] mt-4 text-center">
              Click anywhere on the card to flip.
            </p>
          </div>

          {/* Right Side: Quick Facts & Verification Table */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold tracking-tight text-[#0d0d0d]">
                Verified Background & Career Intent
              </h3>
              <p className="text-base text-[#3a3a3a] leading-relaxed">
                {PROFILE.summary}
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="bg-white rounded-2xl p-6 border border-[#0d0d0d]/10 space-y-4 shadow-sm">
              <span className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#0d0d0d] block border-b border-[#0d0d0d]/10 pb-3 flex items-center justify-between">
                <span>Quick Facts & Key Metrics</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">VERIFIED</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech">
                <div>
                  <span className="text-[#77756f] block">CURRENT STATUS</span>
                  <span className="text-[#0d0d0d] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {PROFILE.status}
                  </span>
                </div>
                <div>
                  <span className="text-[#77756f] block">HIGHEST COMPLETED</span>
                  <span className="text-[#0d0d0d] font-semibold">Pearson BTEC HND Software Eng.</span>
                </div>
                <div>
                  <span className="text-[#77756f] block">KEY RESEARCH ACCURACY</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                    99.81% (XGBoost XSS Model)
                  </span>
                </div>
                <div>
                  <span className="text-[#77756f] block">LOCATION</span>
                  <span className="text-[#0d0d0d] font-semibold">{PROFILE.location}</span>
                </div>
              </div>
            </div>

            {/* Direct Professional Links with Brand Color Hover Animations */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#0d0d0d]/15 text-xs font-mono-tech text-[#0d0d0d] hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#77756f] group-hover:text-[#25D366] group-hover:scale-110 transition-all duration-300" />
                <span>WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* LinkedIn Button */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#0d0d0d]/15 text-xs font-mono-tech text-[#0d0d0d] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.25)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#77756f] group-hover:text-[#0A66C2] group-hover:scale-110 transition-all duration-300" />
                <span>LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Gmail / Email Direct Button */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#0d0d0d]/15 text-xs font-mono-tech text-[#0d0d0d] hover:border-[#EA4335] hover:text-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.25)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#77756f] group-hover:text-[#EA4335] group-hover:scale-110 transition-all duration-300" />
                <span>Gmail Direct</span>
              </a>

              {/* GitHub Profile Button */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#0d0d0d]/15 text-xs font-mono-tech text-[#0d0d0d] hover:border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white hover:shadow-[0_0_15px_rgba(13,13,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Github className="w-4 h-4 text-[#77756f] group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                <span>GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Download CV (PDF) Button */}
              <a
                href={PROFILE.resumeUrl}
                download="Rusaick_Mufthi_CyberSecurity_CV.pdf"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0d0d0d] text-xs font-mono-tech text-emerald-400 hover:bg-emerald-400 hover:text-[#0d0d0d] hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:-translate-y-0.5 transition-all duration-300 font-bold shadow-md"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
