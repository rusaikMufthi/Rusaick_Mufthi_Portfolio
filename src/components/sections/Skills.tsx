'use client';

import { useState } from 'react';
import { SKILL_GROUPS } from '@/lib/data';
import { Shield, Cpu, Terminal, Wrench, Layers } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.title)];

  const allSkills = SKILL_GROUPS.flatMap((group, groupIdx) =>
    group.skills.map((skill, skillIdx) => ({
      ...skill,
      groupTitle: group.title,
      index: `${groupIdx + 1}.${skillIdx + 1}`,
    }))
  );

  const filteredSkills =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.groupTitle === activeCategory);

  return (
    <section id="skills" className="section-padding bg-[#f4f2ee] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#0d0d0d]/10">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] block mb-2">
              03 — Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0d0d0d]">
              The Security <span className="font-serif-accent font-normal italic">Stack</span> & Tooling
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-[#77756f] max-w-md mt-4 md:mt-0">
            Categorized technical capabilities, core algorithms, security principles, and Python libraries derived directly from CV credentials.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0d0d0d] text-emerald-400 font-bold shadow-md border border-emerald-500/30'
                  : 'bg-white text-[#3a3a3a] border border-[#0d0d0d]/10 hover:border-[#0d0d0d]/30 hover:text-[#0d0d0d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => {
            const isSecurity = skill.category === 'Security' || skill.category === 'Networks';
            const isThreat = skill.name.toLowerCase().includes('owasp') || skill.name.toLowerCase().includes('threat');
            
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between aspect-[4/3] ${
                  isSecurity
                    ? 'bg-white border-emerald-500/30 shadow-sm hover:shadow-md hover:border-emerald-500 ring-1 ring-emerald-500/10'
                    : skill.highlight
                    ? 'bg-white border-[#0d0d0d]/25 shadow-sm hover:shadow-md hover:border-[#0d0d0d]'
                    : 'bg-white/70 border-[#0d0d0d]/10 hover:bg-white hover:border-[#0d0d0d]/25'
                }`}
              >
                {/* Tile Top Header: Index & Symbol */}
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] text-[#77756f]">
                    #{skill.index}
                  </span>
                  <span
                    className={`font-mono-tech text-xs font-bold px-2 py-0.5 rounded ${
                      isSecurity
                        ? 'bg-[#0d0d0d] text-emerald-400 border border-emerald-500/30'
                        : skill.highlight
                        ? 'bg-[#0d0d0d] text-[#f4f2ee]'
                        : 'bg-[#f4f2ee] text-[#0d0d0d]'
                    }`}
                  >
                    {skill.symbol}
                  </span>
                </div>

                {/* Tile Body: Name & Category */}
                <div className="my-2">
                  <h3 className="text-sm font-semibold text-[#0d0d0d] leading-snug group-hover:text-emerald-700 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono-tech text-[10px] text-[#77756f] block mt-1">
                    {skill.category}
                  </span>
                </div>

                {/* Tile Bottom Indicator */}
                <div className="pt-2 border-t border-[#0d0d0d]/5 flex items-center justify-between text-[10px] font-mono-tech text-[#a9a6a0]">
                  <span>{skill.groupTitle.split(' ')[0]}</span>
                  {isThreat ? (
                    <span className="w-2 h-2 rounded-full bg-rose-500" title="Security Threat/OWASP Focus" />
                  ) : isSecurity ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Defensive Core Skill" />
                  ) : skill.highlight ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono-tech text-[#77756f]">
            Note: Software development and AI tools serve as supporting technical capabilities to accelerate security tooling and vulnerability classification.
          </p>
        </div>
      </div>
    </section>
  );
}
