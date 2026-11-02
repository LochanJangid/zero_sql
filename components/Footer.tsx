import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Github, 
  Linkedin, 
  Globe, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Heart,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0b0e] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Brand & Mission (Spans 2 cols) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center overflow-hidden">
                <Image src="/icon.png" alt="zero-sql logo" width={28} height={28} className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">zero-sql</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The privacy-first desktop database studio with local AI SQL synthesis. Zero cloud leakage, 
              multi-dialect acceleration, and standalone packaging with no local runtime requirements.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com/LochanJangid/zero_sql" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lochan-jangid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://lochan.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Creator Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Local Engine: 100% Offline • Zero Telemetry
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">Overview</Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/databases" className="hover:text-white transition-colors">Databases</Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-white transition-colors">Download</Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-white transition-colors flex items-center gap-1">
                  Changelog
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded border border-emerald-500/20">v0.1.3</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Databases & Engines */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Engines</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/databases#sqlite" className="hover:text-white transition-colors">SQLite (.db)</Link>
              </li>
              <li>
                <Link href="/databases#duckdb" className="hover:text-white transition-colors">DuckDB (.duckdb)</Link>
              </li>
              <li>
                <Link href="/databases#postgres" className="hover:text-white transition-colors">PostgreSQL</Link>
              </li>
              <li>
                <Link href="/databases#mysql" className="hover:text-white transition-colors">MySQL</Link>
              </li>
              <li>
                <Link href="/databases#mssql" className="hover:text-white transition-colors">SQL Server</Link>
              </li>
              <li>
                <Link href="/databases#files" className="hover:text-white transition-colors">CSV, XLSX & JSON</Link>
              </li>
            </ul>
          </div>

          {/* Security & Docs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Security</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/security" className="hover:text-white transition-colors">Privacy Architecture</Link>
              </li>
              <li>
                <Link href="/security#local-execution" className="hover:text-white transition-colors">Local Sandbox</Link>
              </li>
              <li>
                <Link href="/security#credentials" className="hover:text-white transition-colors">Credential Vault</Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="/docs#shortcuts" className="hover:text-white transition-colors">Keybindings</Link>
              </li>
              <li>
                <Link href="/docs#smartscreen" className="hover:text-white transition-colors">SmartScreen Guide</Link>
              </li>
            </ul>
          </div>

          {/* Community & Creator */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Developer</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/LochanJangid" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Lochan Jangid <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://lochan.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Portfolio <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lochan-jangid/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/open-source" className="hover:text-white transition-colors">Open Source</Link>
              </li>
              <li>
                <a href="https://github.com/LochanJangid/zero_sql/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  GitHub Releases <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Required Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} zero-sql. Released under the ISC License.
          </div>

          {/* Strict required attribution */}
          <div className="flex items-center gap-1.5 font-medium text-slate-300">
            <span>Designed and developed by</span>
            <a 
              href="https://github.com/LochanJangid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors font-semibold underline underline-offset-4 decoration-white/20 hover:decoration-emerald-400"
            >
              Lochan Jangid
            </a>.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/security" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/open-source" className="hover:text-slate-300 transition-colors">License</Link>
            <Link href="/changelog" className="hover:text-slate-300 transition-colors">Release Notes</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
