'use client';

import { CERTIFICATIONS } from '@/lib/data';
import { Award, ArrowUpRight, ShieldCheck, Sparkles, Code2 } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#f4f2ee] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2">
              05 — Verified Continuous Learning
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Always <span className="font-serif-accent font-normal italic">learning</span>.
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            Professional certifications and accredited course completions in Cyber Security, Machine Learning, AWS, and Software Engineering.
          </p>
        </div>

        {/* Certification Numbered Index Table */}
        <div className="divide-y divide-[#0d0d0d]/10 border-t border-b border-[#0d0d0d]/10">
          {CERTIFICATIONS.map((cert, index) => {
            const isSecurity = cert.category === 'Security';
            const numStr = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={cert.id}
                className="group relative p-6 sm:p-8 transition-all duration-300 hover:bg-[#0d0d0d] hover:text-[#f4f2ee] cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Left Side: Index, Name, Issuer */}
                <div className="flex items-start sm:items-center gap-6">
                  <span className="font-mono-tech text-sm font-semibold text-[#77756f] group-hover:text-emerald-400 shrink-0">
                    {numStr}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-[#f4f2ee] transition-colors">
                        {cert.name}
                      </h3>
                      {isSecurity && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 group-hover:bg-emerald-950 group-hover:text-emerald-300 group-hover:border-emerald-500/40">
                          Security Core
                        </span>
                      )}
                    </div>
                    <span className="font-mono-tech text-xs text-[#77756f] group-hover:text-[#a9a6a0] block mt-1">
                      Issued by: {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Right Side: Category Badge & Hover Arrow */}
                <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0">
                  <span
                    className={`font-mono-tech text-xs px-3 py-1 rounded-full border transition-colors ${
                      isSecurity
                        ? 'border-emerald-600/30 text-emerald-800 group-hover:text-emerald-300 group-hover:border-emerald-400'
                        : 'border-[#0d0d0d]/15 text-[#3a3a3a] group-hover:text-[#f4f2ee] group-hover:border-white/20'
                    }`}
                  >
                    {cert.category}
                  </span>

                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#77756f]">
          <span>TOTAL CERTIFICATIONS RECORDED: {CERTIFICATIONS.length}</span>
          <span className="text-emerald-700 font-bold">ALL CREDENTIALS DOCUMENTED IN OFFICIAL RESUME PDF</span>
        </div>
      </div>
    </section>
  );
}
