'use client';

import { EDUCATION, EXPERIENCE, REFERENCES } from '@/lib/data';
import { GraduationCap, Users, UserCheck, Calendar, MapPin, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2">
              06 — Academic Evolution & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              Education & <span className="font-serif-accent font-normal italic">Leadership</span>
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            Chronological path showing academic foundation, society governance, and technical leadership at BCAS Campus and CINEC / Wolverhampton.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-[#0d0d0d]/10 pb-4">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d]">
                Academic Path
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#0d0d0d]/15">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node circle */}
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0d0d0d] group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors shadow-sm" />

                  <div className="bg-[#f4f2ee] p-6 rounded-2xl border border-[#0d0d0d]/10 space-y-3 group-hover:border-emerald-500/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-tech text-xs text-[#0d0d0d] font-bold px-2.5 py-0.5 rounded bg-white border border-[#0d0d0d]/10">
                        {edu.period}
                      </span>
                      <span className="font-mono-tech text-[11px] text-emerald-700 font-semibold">
                        Degree / Diploma
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#0d0d0d]">
                      {edu.degree}
                    </h4>

                    <p className="font-mono-tech text-xs text-[#77756f] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 inline text-[#0d0d0d]" />
                      {edu.institution}
                    </p>

                    <p className="text-xs text-[#3a3a3a] leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.modules && (
                      <div className="pt-2">
                        <span className="font-mono-tech text-[10px] text-[#77756f] uppercase block mb-1">
                          Relevant Modules:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.modules.map((mod) => (
                            <span
                              key={mod}
                              className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white text-[#0d0d0d] border border-[#0d0d0d]/10"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Official Academic References */}
          <div className="lg:col-span-6 space-y-12">
            {/* Leadership Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#0d0d0d]/10 pb-4">
                <Users className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d]">
                  Leadership & Society Governance
                </h3>
              </div>

              <div className="space-y-4">
                {EXPERIENCE.map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f4f2ee] p-6 rounded-2xl border border-[#0d0d0d]/10 space-y-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono-tech text-xs text-[#0d0d0d] font-bold px-2.5 py-0.5 rounded bg-white border border-[#0d0d0d]/10">
                        {exp.period}
                      </span>
                      <span className="font-mono-tech text-[11px] text-emerald-700 font-semibold">
                        {exp.type}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#0d0d0d]">
                        {exp.role} — {exp.organization}
                      </h4>
                      <span className="font-mono-tech text-xs text-[#77756f] block mt-0.5">
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-[#3a3a3a] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic References Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#0d0d0d]/10 pb-4">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold tracking-tight text-[#0d0d0d]">
                  Academic References
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REFERENCES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#0d0d0d]/15 shadow-sm space-y-2 text-xs relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#0d0d0d]">{ref.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#77756f] block">
                      {ref.qualifications}
                    </span>
                    <p className="text-[#3a3a3a] font-medium">{ref.title}</p>
                    <span className="font-mono-tech text-[#77756f] block">{ref.organization}</span>
                    <div className="pt-2 border-t border-[#0d0d0d]/10 font-mono-tech text-[11px] text-[#0d0d0d] space-y-1">
                      <p>Email: <span className="text-emerald-700 font-semibold">{ref.email}</span></p>
                      <p>Phone: {ref.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
