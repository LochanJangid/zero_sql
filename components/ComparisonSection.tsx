'use client';

import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Database, 
  Lock, 
  ArrowRight,
  TrendingUp,
  BarChart2,
  Code2,
  Building2,
  CheckCircle2
} from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  category: string;
  zeroSql: boolean | string;
  dbeaver: boolean | string;
  dataGrip: boolean | string;
  cloudAiTools: boolean | string;
  note: string;
}

const COMPARISON_DATA: ComparisonFeature[] = [
  {
    feature: 'Local AI Natural Language SQL',
    category: 'Intelligence',
    zeroSql: true,
    dbeaver: false,
    dataGrip: 'Plugin ($$)',
    cloudAiTools: true,
    note: 'Zero-SQL generates schema-aware queries locally without streaming your database rows to third-party servers.',
  },
  {
    feature: 'Zero Cloud Data Telemetry',
    category: 'Security',
    zeroSql: true,
    dbeaver: 'Partial',
    dataGrip: 'Configurable',
    cloudAiTools: false,
    note: 'Guaranteed 100% offline-ready. Queries and credentials never leave your machine.',
  },
  {
    feature: 'Built-in Visual Charts & KPI Summaries',
    category: 'Analytics',
    zeroSql: true,
    dbeaver: false,
    dataGrip: 'Basic Tables',
    cloudAiTools: 'Limited',
    note: 'Instant Area, Bar, and Donut charts with automatic KPI summaries (Total Sum, Mean, Peak %).',
  },
  {
    feature: 'Safe Read-Only Guardrails',
    category: 'Safety',
    zeroSql: true,
    dbeaver: 'Connection Level',
    dataGrip: 'Manual Txn',
    cloudAiTools: false,
    note: 'AST parser blocks destructive UPDATE/DELETE/DROP operations before they ever touch your database.',
  },
  {
    feature: 'Direct Spreadsheet & File Querying',
    category: 'Data Sources',
    zeroSql: 'CSV, TSV, XLSX, Parquet',
    dbeaver: 'Import Required',
    dataGrip: 'Import Required',
    cloudAiTools: 'Upload to Cloud',
    note: 'Query local CSV and spreadsheet files directly as virtual SQL tables with zero server setup.',
  },
  {
    feature: 'Interactive ERD Visualizer',
    category: 'Architecture',
    zeroSql: true,
    dbeaver: true,
    dataGrip: true,
    cloudAiTools: false,
    note: 'Automated relationship graphs map foreign keys and column data types dynamically.',
  },
  {
    feature: 'Lightweight Standalone Binary',
    category: 'Performance',
    zeroSql: '~280MB (Self-Contained)',
    dbeaver: 'Heavy (Java JRE)',
    dataGrip: 'Heavy (>1.2GB)',
    cloudAiTools: 'Web Browser',
    note: 'No Java JRE, no Node.js, and no Python runtime required on your host machine.',
  },
  {
    feature: 'Pricing & Licensing',
    category: 'Business',
    zeroSql: 'Free & Private',
    dbeaver: 'Freemium / $199/yr',
    dataGrip: '$229/yr / seat',
    cloudAiTools: '$20-$100/mo',
    note: 'Complete desktop studio with zero subscription traps and zero per-seat licensing fees.',
  },
];

const PERSONAS = [
  {
    id: 'developers',
    title: 'For Software Engineers',
    icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    badge: 'Developer Velocity',
    heading: 'Stop Wrestling with Clunky Java Interfaces',
    description: 'Zero-SQL starts in 1 second, formats your clauses onto clean new lines with Monaco IntelliSense, and translates tricky JOINs and aggregations instantly.',
    bullets: [
      'Instant startup with zero background daemon bloat',
      'Monaco editor with colorful syntax highlights and newline formatting',
      'Deep PostgreSQL, MySQL, SQLite, and DuckDB support out of the box',
      'One-click query EXPLAIN plans with performance bottleneck warnings',
    ],
  },
  {
    id: 'analysts',
    title: 'For Data Analysts & Leads',
    icon: <BarChart2 className="w-4 h-4 text-cyan-400" />,
    badge: 'Analytical Speed',
    heading: 'From Raw Question to Executive Visuals in Seconds',
    description: 'Ask questions in plain English, inspect generated SQL, and transform result tables into presentation-ready Area, Bar, and Donut charts without switching to Python or Excel.',
    bullets: [
      'Conversational intent translated to validated SQL with prompt inspection',
      'Automated KPI insights banner calculating Sums, Averages, and Peak percentages',
      'Export high-resolution 2x charts as PNGs or download CSV/Excel spreadsheets',
      'Query raw CSV, TSV, and XLSX spreadsheets as native SQL tables',
    ],
  },
  {
    id: 'security',
    title: 'For Security, Compliance & CTOs',
    icon: <ShieldCheck className="w-4 h-4 text-teal-400" />,
    badge: 'Enterprise Governance',
    heading: 'Guaranteed Zero Telemetry & Air-Gap Compliance',
    description: 'Ensure compliance with HIPAA, GDPR, and enterprise data protection standards. Your database credentials, production schemas, and query results never cross the network.',
    bullets: [
      'Strict local-first architecture with zero remote query logging or tracking',
      'Cryptographic SHA-256 verification hash published for every Windows build',
      'Safe Read-Only guardrails prevent accidental data deletion on production replicas',
      'Screen-Share Privacy Shield automatically masks sensitive strings during live demos',
    ],
  },
];

export default function ComparisonSection() {
  const [activePersona, setActivePersona] = useState(PERSONAS[0]);

  return (
    <section id="comparison" className="py-24 border-t border-white/[0.08] bg-[#0c0d12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/[0.06] via-teal-500/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Competitive Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Engineers Are Choosing Zero-SQL
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Legacy database GUIs are bloated and slow. Cloud AI copilots leak production records. Zero-SQL combines the speed of modern desktop tools with privacy-first local AI.
          </p>
        </div>

        {/* 1. Comparison Table */}
        <div className="rounded-2xl bg-[#12151e] border border-white/[0.1] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#151924]">
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/3">
                    Capabilities
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border-x border-emerald-500/20 text-center">
                    <span className="flex items-center justify-center gap-1.5 font-extrabold text-sm text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                      Zero-SQL
                    </span>
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">
                    DBeaver
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">
                    DataGrip
                  </th>
                  <th className="py-4 px-5 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">
                    Cloud AI Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    {/* Feature & Note */}
                    <td className="py-4 px-6 space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{row.feature}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 leading-relaxed">
                        {row.note}
                      </div>
                    </td>

                    {/* Zero-SQL Column (Highlighted) */}
                    <td className="py-4 px-5 bg-emerald-500/[0.04] border-x border-emerald-500/20 text-center font-semibold text-emerald-300">
                      {typeof row.zeroSql === 'boolean' ? (
                        row.zeroSql ? (
                          <div className="w-6 h-6 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                            <X className="w-4 h-4 stroke-[3]" />
                          </div>
                        )
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                          {row.zeroSql}
                        </span>
                      )}
                    </td>

                    {/* DBeaver */}
                    <td className="py-4 px-5 text-center text-slate-400">
                      {typeof row.dbeaver === 'boolean' ? (
                        row.dbeaver ? (
                          <div className="w-5 h-5 mx-auto rounded-full bg-slate-800 text-slate-300 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 mx-auto rounded-full bg-slate-800/80 text-slate-500 flex items-center justify-center">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">{row.dbeaver}</span>
                      )}
                    </td>

                    {/* DataGrip */}
                    <td className="py-4 px-5 text-center text-slate-400">
                      {typeof row.dataGrip === 'boolean' ? (
                        row.dataGrip ? (
                          <div className="w-5 h-5 mx-auto rounded-full bg-slate-800 text-slate-300 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 mx-auto rounded-full bg-slate-800/80 text-slate-500 flex items-center justify-center">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">{row.dataGrip}</span>
                      )}
                    </td>

                    {/* Cloud AI Tools */}
                    <td className="py-4 px-5 text-center text-slate-400">
                      {typeof row.cloudAiTools === 'boolean' ? (
                        row.cloudAiTools ? (
                          <div className="w-5 h-5 mx-auto rounded-full bg-slate-800 text-slate-300 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 mx-auto rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">{row.cloudAiTools}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Interactive Persona & Buyer Value Switcher */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Tailored for Your Entire Engineering Organization
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Select your role to explore how Zero-SQL accelerates your day-to-day data workflow.
            </p>
          </div>

          {/* Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#141722] rounded-2xl border border-white/[0.08] max-w-xl mx-auto">
            {PERSONAS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePersona(p)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activePersona.id === p.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {p.icon}
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          {/* Active Persona Box */}
          <div className="rounded-3xl bg-[#141722] border border-white/[0.1] p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase">
                  {activePersona.badge}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {activePersona.heading}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {activePersona.description}
                </p>
              </div>

              <div className="md:col-span-5 bg-[#0e1016] p-5 rounded-2xl border border-white/[0.06] space-y-3">
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Key Advantages
                </div>
                {activePersona.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
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
