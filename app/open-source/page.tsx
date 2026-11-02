import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  Github, 
  Code2, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  ExternalLink,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'Open Source — zero-sql Desktop Database Studio',
  description: 'Zero-SQL is an open-source developer project. Explore the repository, architecture, tech stack, and contribution guide.',
};

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/open-source" />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <Github className="w-3.5 h-3.5" />
          Open Source Software
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Built in the Open for the Developer Community
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
          Zero-SQL is released under the permissive ISC License. Transparent code, zero telemetry, and independent engineering.
        </p>
      </section>

      {/* Repository Card */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-[#141720] border border-white/10 p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white font-mono">LochanJangid / zero_sql</h2>
              <p className="text-xs text-slate-400">
                Official Public Repository • Next.js Landing & Desktop Distribution Releases
              </p>
            </div>
            <a
              href="https://github.com/LochanJangid/zero_sql"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors w-fit"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-slate-300">
                <span className="text-emerald-400 block font-bold">Electron 45</span>
                <span className="text-[10px] text-slate-400">Native Desktop Shell</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-slate-300">
                <span className="text-blue-400 block font-bold">React 19</span>
                <span className="text-[10px] text-slate-400">High-Performance UI</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-slate-300">
                <span className="text-purple-400 block font-bold">Monaco Editor</span>
                <span className="text-[10px] text-slate-400">VS Code Editor Engine</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-slate-300">
                <span className="text-amber-400 block font-bold">Python 3.12</span>
                <span className="text-[10px] text-slate-400">PyInstaller Standalone</span>
              </div>
            </div>
          </div>

          {/* Building Locally */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Local Development</h3>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-400"># Clone repository</div>
              <div className="text-emerald-300">git clone https://github.com/LochanJangid/zero_sql.git</div>
              <div className="text-slate-400 pt-1"># Install dependencies</div>
              <div className="text-emerald-300">npm install</div>
              <div className="text-slate-400 pt-1"># Run Next.js web studio in development mode</div>
              <div className="text-emerald-300">npm run dev</div>
            </div>
          </div>
        </div>
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}
