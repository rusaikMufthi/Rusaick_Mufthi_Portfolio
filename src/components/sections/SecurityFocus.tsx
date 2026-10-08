'use client';

import { SECURITY_PATHWAY } from '@/lib/data';
import { ArrowRight, ShieldCheck, Cpu, Network, Lock, Layers } from 'lucide-react';

export function SecurityFocus() {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Cpu className="w-5 h-5 text-[#0d0d0d]" />;
      case '02':
        return <Network className="w-5 h-5 text-emerald-600" />;
      case '03':
        return <Lock className="w-5 h-5 text-emerald-600" />;
      case '04':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-[#0d0d0d]" />;
    }
  };

  return (
    <section id="security-focus" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2 font-bold">
              02 — Professional Direction
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Academic &amp; Career <span className="font-serif-accent font-normal italic text-emerald-800">Progression</span>.
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            A deliberate progression from software engineering foundations to computer networks, building toward a career in Network Security and Cyber Security Engineering.
          </p>
        </div>

        {/* Career Progression Pathway */}
        <div className="relative">
          {/* Subtle Vertical Connector Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#0d0d0d]/5 via-emerald-500/30 to-[#0d0d0d]/5 -translate-x-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SECURITY_PATHWAY.map((step) => {
              const isTarget = step.number === '04';
              return (
                <div
                  key={step.number}
                  className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isTarget
                      ? 'bg-[#0d0d0d] text-[#f4f2ee] border-emerald-500/50 shadow-xl ring-2 ring-emerald-500/20'
                      : 'bg-[#f4f2ee] text-[#0d0d0d] border-[#0d0d0d]/10 hover:border-[#0d0d0d]/30 hover:bg-white'
                  }`}
                >
                  <div>
                    {/* Step Top Index & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono-tech text-xs uppercase px-3 py-1 rounded-full font-bold ${
                          isTarget
                            ? 'bg-emerald-400 text-[#0d0d0d]'
                            : 'bg-white text-[#0d0d0d] border border-[#0d0d0d]/10'
                        }`}
                      >
                        STAGE {step.number}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isTarget ? 'bg-white/10 text-emerald-400 border border-emerald-500/30' : 'bg-white text-[#0d0d0d]'
                        }`}
                      >
                        {getIcon(step.number)}
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-2xl font-bold tracking-tight mb-1">{step.title}</h3>
                    <p
                      className={`font-mono-tech text-xs mb-4 ${
                        isTarget ? 'text-emerald-400 font-semibold' : 'text-[#77756f]'
                      }`}
                    >
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isTarget ? 'text-[#e9e6e0]' : 'text-[#3a3a3a]'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Skills / Focus Tags */}
                  <div className="pt-4 border-t border-current/10">
                    <span
                      className={`font-mono-tech text-[10px] uppercase tracking-wider block mb-2 ${
                        isTarget ? 'text-emerald-400' : 'text-[#77756f]'
                      }`}
                    >
                      {step.focusArea}
                    </span>

                    <div className="flex flex-wrap gap-1.5">
                      {step.keySkills.map((skill) => {
                        const isHighlight = skill.toLowerCase().includes('cyber') || skill.toLowerCase().includes('network');
                        return (
                          <span
                            key={skill}
                            className={`text-[11px] font-mono-tech px-2.5 py-1 rounded-md ${
                              isTarget
                                ? isHighlight
                                  ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                                  : 'bg-white/10 text-white border border-white/10'
                                : 'bg-white text-[#0d0d0d] border border-[#0d0d0d]/10'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progression Summary */}
        <div className="mt-16 p-8 rounded-3xl bg-[#f4f2ee] border border-[#0d0d0d]/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0d0d0d] text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0d0d0d]">
                Software Engineering Grounding + Networking Focus → Cyber Security Direction
              </h4>
              <p className="text-xs font-mono-tech text-[#77756f] mt-0.5">
                Bridging software development discipline and computer networking principles to build toward a career in Cyber Security Engineering.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 px-6 py-3 rounded-full bg-[#0d0d0d] text-emerald-400 font-mono-tech text-xs uppercase tracking-wider hover:bg-emerald-400 hover:text-[#0d0d0d] transition-all duration-300 font-bold flex items-center gap-2 shadow-md"
          >
            <span>View Security Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

