'use client';

import React from 'react';
import { 
  Cpu, 
  Database, 
  Lock, 
  Terminal, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Server,
  Zap
} from 'lucide-react';

export default function ArchitectureSection() {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Prompt & Raw SQL Input',
      badge: 'Client Layer',
      description: 'You type conversational intent in English or write SQL in the Monaco editor. Kept strictly in local process memory.',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
    },
    {
      step: '02',
      title: 'Local Schema Introspector',
      badge: 'Zero-Leakage RAG',
      description: 'Zero-SQL extracts only column names, types, and foreign key relations. Table rows and data records are NEVER extracted or sent.',
      icon: <Layers className="w-5 h-5 text-teal-400" />,
    },
    {
      step: '03',
      title: 'Local or Fast LLM Inference',
      badge: 'Inference Control',
      description: 'Synthesizes optimized SQL using Groq Llama 3.3 (0 data retention) or your own 100% offline local model (Ollama / vLLM).',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '04',
      title: 'Sandboxed Python/C Engine',
      badge: 'Execution Core',
      description: 'The query runs inside an embedded standalone runtime using native C drivers. No Python or Node.js required on your host OS.',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
    },
    {
      step: '05',
      title: 'Direct Database Target',
      badge: 'Direct Protocol',
      description: 'Executes directly over local socket or TLS encrypted connection to your PostgreSQL, MySQL, SQLite, DuckDB, or CSV file.',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="architecture" className="py-24 border-t border-white/[0.08] bg-[#0c0d12] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-500/[0.05] via-emerald-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Zero Data Leakage
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Understand how Zero-SQL provides AI synthesis while guaranteeing that your database rows never touch third-party servers.
          </p>
        </div>

        {/* Visual Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pipelineSteps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#12151e] border border-white/[0.08] hover:border-teal-500/40 transition-all flex flex-col justify-between space-y-4 group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-teal-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-semibold block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.05] flex items-center text-[11px] font-mono text-slate-500">
                <span>100% Local Pipeline</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Comparison Banner */}
        <div className="rounded-2xl bg-[#141722] border border-white/[0.1] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Traditional Cloud SQL Copilots vs Zero-SQL
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Cloud copilots stream full query logs, production tables, and API keys through external SaaS servers. Zero-SQL executes the entire query engine right on your operating system.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero-SQL: Zero Cloud Telemetry</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
