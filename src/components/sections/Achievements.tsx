'use client';

import { ACHIEVEMENTS } from '@/lib/data';
import { Trophy, CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#f4f2ee] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2">
              07 — Benchmark Metrics & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Verified <span className="font-serif-accent font-normal italic">Achievements</span>
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            Factual research scores, society leadership reach, and algorithmic benchmarks documented in official academic records.
          </p>
        </div>

        {/* Achievement Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => {
            const isSecurityMetric = ach.id === 'a1';
            return (
              <div
                key={ach.id}
                className={`group p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                  isSecurityMetric
                    ? 'border-emerald-500/30 hover:border-emerald-500 ring-1 ring-emerald-500/20'
                    : 'border-[#0d0d0d]/10 hover:border-[#0d0d0d]'
                }`}
              >
                <div>
                  {/* Header: Index & Org */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-tech text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#0d0d0d] text-emerald-400 border border-emerald-500/30">
                      METRIC #{ach.number}
                    </span>
                    <span className="font-mono-tech text-xs text-[#77756f]">
                      {ach.organization}
                    </span>
                  </div>

                  {/* Big Stat Value */}
                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-700 font-mono-tech block">
                      {ach.value}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-[#0d0d0d] mt-2">
                      {ach.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#3a3a3a] leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Bottom Verification Label */}
                <div className="pt-6 border-t border-[#0d0d0d]/10 mt-6 flex items-center justify-between text-[11px] font-mono-tech text-[#77756f]">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified via CV</span>
                  </div>
                  <span>BCAS Campus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
