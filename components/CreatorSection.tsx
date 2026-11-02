import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Globe, Download, ArrowUpRight, ShieldCheck, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function CreatorSection() {
  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-[#0d0e11] via-[#101217] to-[#0a0b0e] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Code2 className="w-3.5 h-3.5" />
            Independent Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built by Lochan Jangid
          </h2>
          <p className="max-w-2xl mx-auto text-base text-slate-400 leading-relaxed">
            Zero-SQL is an independently developed project by Lochan Jangid, created to rethink how developers interact with databases. The vision is simple: make database operations more intuitive through natural language while preserving developer control, transparency and data privacy.
          </p>
        </div>

        {/* Creator Card */}
        <div className="bg-[#14171f] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/80">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Avatar / Portrait Frame */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-slate-800 to-blue-600/20 border-2 border-white/15 p-1 flex items-center justify-center shadow-xl overflow-hidden group">
                <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    LJ
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                    Engineer
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#14171f] flex items-center justify-center shadow-lg" title="Active Developer">
                <Terminal className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Lochan Jangid
                </h3>
                <p className="text-emerald-400 font-medium text-sm mt-0.5">
                  Creator & Developer of Zero-SQL
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Full-stack systems and developer-tools developer passionate about local-first software, compiler architecture, and developer workflows. Frustrated by legacy, bloated database clients and privacy-invasive SaaS AI query assistants, Lochan engineered Zero-SQL from the ground up to combine a native Monaco SQL workspace, an offline frozen Python RAG engine, and zero-telemetry database adapters into an intuitive, lightweight desktop application.
              </p>

              {/* Guiding Principles Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5 justify-center md:justify-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Local Privacy
                  </div>
                  <p className="text-[11px] text-slate-400">Zero database connection details or query rows sent to cloud servers.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5 justify-center md:justify-start">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Augmented SQL
                  </div>
                  <p className="text-[11px] text-slate-400">Natural language without losing raw SQL precision and transaction control.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5 justify-center md:justify-start">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    Fast Standalone
                  </div>
                  <p className="text-[11px] text-slate-400">Packaged into a single native installer with zero Python/Node host requirements.</p>
                </div>
              </div>

              {/* Official Social & Portfolio Links */}
              <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a 
                  href="https://www.linkedin.com/in/lochan-jangid/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a 
                  href="https://lochan.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all group"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link 
                  href="/download"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-all group"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Desktop App</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
