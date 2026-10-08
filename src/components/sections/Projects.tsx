'use client';

import { useState } from 'react';
import { PROJECTS, FEATURED_PROJECT } from '@/lib/data';
import { ShieldAlert, BarChart3, Cpu, CheckCircle2, ChevronRight, Terminal, Activity, Layers, AlertTriangle, Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const [activeProject, setActiveProject] = useState<string>(FEATURED_PROJECT.id);
  const isXSS = true;

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2 font-bold">
              04 — Applied Security Research &amp; Technical Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Security &amp; <span className="font-serif-accent font-normal italic">Technical</span> Work
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            Factual implementations and academic research benchmarked against OWASP web security standards and machine learning algorithms.
          </p>
        </div>

        {/* --- SECTION 15: FEATURED SECURITY RESEARCH PROJECT HIGHLIGHT --- */}
        <div className="mb-20 rounded-3xl bg-[#0d0d0d] text-[#f4f2ee] p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
          {/* Background Mesh Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Research Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech text-xs uppercase font-bold border border-emerald-500/40">
                  {FEATURED_PROJECT.badge}
                </span>
                <span className="font-mono-tech text-xs text-[#a9a6a0]">
                  {FEATURED_PROJECT.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {FEATURED_PROJECT.title}
              </h3>

              <p className="text-base text-[#e9e6e0] leading-relaxed">
                {FEATURED_PROJECT.summary}
              </p>

              {/* Verified Research Highlights */}
              <div className="space-y-3 pt-2">
                {FEATURED_PROJECT.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e9e6e0] leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Research Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                {FEATURED_PROJECT.metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-2xl sm:text-3xl font-bold font-mono-tech text-emerald-400 block">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono-tech text-[#a9a6a0] block mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stack Tags & GitHub Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PROJECT.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white font-mono-tech text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono-tech text-xs font-bold hover:bg-emerald-400 hover:text-[#0d0d0d] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository →</span>
                </a>
              </div>
            </div>

            {/* Right Column: Illustrative SOC Triage UI Mockup */}
            <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/15 backdrop-blur-sm space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-white">
                    Streamlit SOC Triage Mockup
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Illustrative UI
                </span>
              </div>

              {/* Classification Output Box (Green/Red Alert Decoration) */}
              <div className="p-4 rounded-xl bg-black/70 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-[#a9a6a0]">Model Evaluation:</span>
                  <span className="font-mono-tech text-xs font-bold text-emerald-400">XGBoost Classifier</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="font-mono-tech text-xs text-white">Result:</span>
                  <span
                    className={`font-mono-tech text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                      isXSS
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
                    }`}
                  >
                    {isXSS ? (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        <span>MALICIOUS (XSS ATTACK)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>BENIGN PAYLOAD</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex justify-between text-[11px] font-mono-tech text-[#a9a6a0]">
                    <span>Classification Confidence</span>
                    <span className={isXSS ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                      {isXSS ? '99.81%' : '99.12%'}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isXSS ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                      }`}
                      style={{ width: isXSS ? '99.81%' : '99.12%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono-tech text-[#a9a6a0] text-center italic">
                * Note: Illustrative representation of the Streamlit triage tool built during research.
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 14: EXPANDABLE PROJECT ACCORDION GALLERY --- */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0d0d0d] mb-6">
            All Verified Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {PROJECTS.map((proj) => {
              const isSelected = activeProject === proj.id;
              const isSecurity = proj.category.toLowerCase().includes('security');

              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProject(proj.id)}
                  className={`cursor-pointer rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isSelected
                      ? 'lg:col-span-8 bg-[#f4f2ee] border-[#0d0d0d] p-8 shadow-md ring-2 ring-emerald-500/20'
                      : 'lg:col-span-4 bg-white border-[#0d0d0d]/10 p-6 hover:border-[#0d0d0d]/30'
                  }`}
                >
                  <div className="flex flex-col h-full justify-between space-y-6">
                    {/* Card Top Bar */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#0d0d0d] text-[#f4f2ee]">
                        PROJ {proj.number}
                      </span>
                      <span className={`font-mono-tech text-xs font-semibold ${isSecurity ? 'text-emerald-700' : 'text-[#77756f]'}`}>
                        {proj.category}
                      </span>
                    </div>

                    {/* Card Main Header */}
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d]">
                        {proj.title}
                      </h4>
                      <p className="font-mono-tech text-xs text-[#77756f] mt-1">
                        {proj.subtitle}
                      </p>
                    </div>

                    {/* Expanded Details View */}
                    {isSelected ? (
                      <div className="space-y-6 pt-4 border-t border-[#0d0d0d]/10 animate-in fade-in duration-300">
                        <p className="text-sm text-[#3a3a3a] leading-relaxed">
                          {proj.summary}
                        </p>

                        <div className="space-y-2">
                          <span className="font-mono-tech text-xs text-[#77756f] uppercase block">
                            Key Accomplishments:
                          </span>
                          {proj.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#0d0d0d]">
                              <ChevronRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stack badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {proj.stack.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 rounded-md bg-white border border-[#0d0d0d]/10 font-mono-tech text-[11px] text-[#0d0d0d]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-[#77756f] line-clamp-2">
                        {proj.summary}
                      </p>
                    )}

                    <div className="pt-4 border-t border-[#0d0d0d]/10 flex items-center justify-between text-xs font-mono-tech">
                      <span className="text-[#77756f]">{proj.date}</span>
                      <span className="text-[#0d0d0d] font-semibold flex items-center gap-1 text-emerald-700">
                        {isSelected ? 'Active View' : 'Click to Expand →'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
