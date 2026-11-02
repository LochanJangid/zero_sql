import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  ShieldCheck, 
  Lock, 
  HardDrive, 
  Key, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  Workflow, 
  Server,
  FileCheck
} from 'lucide-react';

export const metadata = {
  title: 'Security & Privacy Architecture — zero-sql Desktop Database Studio',
  description: 'Detailed security whitepaper on zero-sql: local execution boundaries, OS keychain credential encryption, zero cloud telemetry, and safe transaction rollback.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/security" />

      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          Security Whitepaper
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Privacy-First Architecture by Design
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Zero-SQL is engineered from the ground up for teams with strict compliance, SOC2, and data isolation standards. 
          Your database connections, credentials, and query data never touch our servers.
        </p>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#141720] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Local-First Execution</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Queries execute directly between your workstation and the database target via loopback (<code className="text-emerald-300 font-mono">127.0.0.1</code>). No cloud proxy exists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141720] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">OS Keychain Encryption</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Passwords and URI secrets are encrypted using Windows DPAPI / macOS Keychain via Electron <code className="text-blue-300 font-mono">safeStorage</code> before writing to disk.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141720] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Screen-Share Shield</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              One-click live masking of sensitive table columns, emails, and credentials so you can share your screen during demos without leaking PII.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141720] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Destructive Mutation Guards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatic warnings and transaction confirmation dialogs when running queries containing <code className="text-amber-300 font-mono">DROP</code>, <code className="text-amber-300 font-mono">DELETE</code>, or <code className="text-amber-300 font-mono">TRUNCATE</code>.
            </p>
          </div>

        </div>
      </section>

      {/* AI Boundary Explanation */}
      <section className="py-20 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              The AI Context Boundary: What Leaves Your Machine vs. What Stays
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              We believe in total transparency. Here is the strict technical boundary between local operations and AI synthesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What NEVER leaves */}
            <div className="p-6 rounded-2xl bg-[#141720] border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span>NEVER Leaves Your Workstation</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Database row values, customer records, and financial numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Database passwords, SSH keys, certificates, or tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Internal server IP addresses or connection hostnames</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Query result sets or exported Excel / CSV sheets</span>
                </li>
              </ul>
            </div>

            {/* What is shared with the AI Engine */}
            <div className="p-6 rounded-2xl bg-[#141720] border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Sent Exclusively for SQL Synthesis</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Your natural language prompt (&ldquo;Show top revenue customers in 2026&rdquo;)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Table column names & data types (e.g. <code className="text-emerald-300 font-mono">orders(amount NUMERIC)</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Foreign key relationship references needed to build JOIN statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Target SQL dialect identifier (e.g. PostgreSQL, SQLite, T-SQL)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 text-center leading-relaxed font-mono">
            Zero telemetry. Zero tracking pixels. Zero background telemetry pings.
          </div>
        </div>
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}
