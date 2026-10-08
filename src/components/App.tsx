'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/sections/About';
import { SecurityFocus } from '@/components/sections/SecurityFocus';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Experience } from '@/components/sections/Experience';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#f4f2ee] text-[#0d0d0d] font-sans antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <SecurityFocus />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
