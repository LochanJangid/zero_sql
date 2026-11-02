import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  BookOpen, 
  Terminal, 
  Database, 
  Key, 
  HelpCircle, 
  Download, 
  CheckCircle2, 
  Sliders, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Documentation — zero-sql Desktop Database Studio',
  description: 'Official guides, connection setup, keyboard shortcuts, and troubleshooting for zero-sql desktop database studio.',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/docs" />

      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          Documentation Portal
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          zero-sql Documentation & Guides
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
          Everything you need to connect your databases, write safe AI-augmented SQL, and configure zero-sql on your workstation.
        </p>
      </section>

      {/* Main Docs Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Docs Sidebar */}
        <aside className="lg:col-span-3 space-y-6 text-sm">
          <div className="sticky top-24 space-y-6 bg-[#141720] border border-white/10 rounded-2xl p-5">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Quickstart</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#installation" className="text-emerald-400 hover:underline">Installation (Windows)</a></li>
                <li><a href="#first-connection" className="text-slate-300 hover:text-white">Your First Connection</a></li>
                <li><a href="#sample-db" className="text-slate-300 hover:text-white">Exploring Sample Data</a></li>
              </ul>
            </div>

            <div className="space-y-2 border-t border-white/5 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Database Guides</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#sqlite-guide" className="text-slate-300 hover:text-white">SQLite (.db)</a></li>
                <li><a href="#duckdb-guide" className="text-slate-300 hover:text-white">DuckDB (.duckdb)</a></li>
                <li><a href="#postgres-guide" className="text-slate-300 hover:text-white">PostgreSQL & CockroachDB</a></li>
                <li><a href="#mysql-guide" className="text-slate-300 hover:text-white">MySQL & MariaDB</a></li>
                <li><a href="#mssql-guide" className="text-slate-300 hover:text-white">SQL Server (T-SQL)</a></li>
                <li><a href="#flat-files" className="text-slate-300 hover:text-white">CSV, XLSX & JSON</a></li>
              </ul>
            </div>

            <div className="space-y-2 border-t border-white/5 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Reference</div>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#shortcuts" className="text-slate-300 hover:text-white">Keyboard Shortcuts</a></li>
                <li><a href="#smartscreen" className="text-slate-300 hover:text-white">Windows SmartScreen</a></li>
                <li><a href="#troubleshooting" className="text-slate-300 hover:text-white">Troubleshooting</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 space-y-16">
          
          {/* Section: Installation */}
          <section id="installation" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              Installation & Requirements
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Zero-SQL is packaged as an automated Windows NSIS installer (<code className="text-emerald-300 font-mono text-xs">zero-sql-Setup-0.1.3-x64.exe</code>).
              It ships with a fully frozen Python 3.12 backend compiled via PyInstaller, meaning <strong>no Python, Node.js, or pip installations are required on your PC</strong>.
            </p>
            <div className="p-4 rounded-xl bg-[#141720] border border-white/10 space-y-2 font-mono text-xs text-slate-300">
              <div className="text-slate-400 font-sans font-medium text-xs">System Requirements:</div>
              <div>• OS: Windows 10 (64-bit) or Windows 11 (64-bit)</div>
              <div>• Architecture: x64 (x86_64)</div>
              <div>• RAM: 4 GB minimum (8 GB recommended)</div>
              <div>• Disk: ~500 MB free space for installer and local app assets</div>
            </div>
          </section>

          {/* Section: Connecting Databases */}
          <section id="first-connection" className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              Connecting to Databases
            </h2>

            <div className="space-y-4">
              <h3 id="sqlite-guide" className="text-base font-bold text-white">1. SQLite (.db, .sqlite, .sqlite3)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click <strong>&ldquo;Open File&rdquo;</strong> in the connection modal or pass an absolute path. Zero-SQL mounts the file with <code className="text-emerald-300 font-mono text-xs">PRAGMA busy_timeout = 30000;</code> and WAL mode to prevent concurrency locks.
              </p>

              <h3 id="postgres-guide" className="text-base font-bold text-white pt-2">2. PostgreSQL Connection Strings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provide a standard PostgreSQL URI. Supported URI format:
              </p>
              <div className="p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-emerald-300 break-all">
                postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require
              </div>

              <h3 id="flat-files" className="text-base font-bold text-white pt-2">3. Flat Data Files (CSV, Excel, JSON)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Simply click <strong>&ldquo;Open Data File&rdquo;</strong> and select any <code className="text-emerald-300 font-mono text-xs">.csv</code>, <code className="text-emerald-300 font-mono text-xs">.xlsx</code>, or <code className="text-emerald-300 font-mono text-xs">.json</code> file. Zero-SQL creates an in-memory SQL catalog table named after your file.
              </p>
            </div>
          </section>

          {/* Section: Shortcuts */}
          <section id="shortcuts" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-400" />
              Keyboard Shortcuts Cheatsheet
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#141720]">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#101218] border-b border-white/10 text-slate-300">
                    <th className="py-2.5 px-4 font-semibold">Shortcut</th>
                    <th className="py-2.5 px-4 font-semibold">Action</th>
                    <th className="py-2.5 px-4 font-semibold">Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">Ctrl + Enter</td>
                    <td className="py-2.5 px-4">Execute current query or active selection</td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans">Monaco Editor</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">Ctrl + Shift + F</td>
                    <td className="py-2.5 px-4">Format active SQL query according to dialect rules</td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans">Monaco Editor</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">Ctrl + K</td>
                    <td className="py-2.5 px-4">Focus Natural Language AI Prompt bar</td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans">Global Studio</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">Ctrl + S</td>
                    <td className="py-2.5 px-4">Save current SQL buffer to disk (.sql file)</td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans">Global Studio</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">Ctrl + O</td>
                    <td className="py-2.5 px-4">Open an existing .sql file from disk</td>
                    <td className="py-2.5 px-4 text-slate-400 font-sans">Global Studio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: SmartScreen */}
          <section id="smartscreen" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              Windows SmartScreen Instructions
            </h2>
            <div className="p-5 rounded-2xl bg-[#141720] border border-amber-500/20 space-y-3 text-xs text-slate-300">
              <p className="leading-relaxed">
                Because Zero-SQL is an independently built desktop application without an expensive commercial EV code-signing certificate, Windows SmartScreen may show a prompt saying &ldquo;Windows protected your PC&rdquo;.
              </p>
              <div className="space-y-2 pl-4 border-l-2 border-amber-400">
                <div>1. Click <strong>&ldquo;More info&rdquo;</strong> on the SmartScreen dialog.</div>
                <div>2. Click <strong>&ldquo;Run anyway&rdquo;</strong> to continue with the installation.</div>
                <div>3. The NSIS installer will run, install Zero-SQL to your user directory, and create desktop/start-menu shortcuts.</div>
              </div>
              <p className="text-[11px] text-slate-400 pt-1 font-mono">
                You can independently verify the installer SHA-256 hash using PowerShell: <code className="text-emerald-300">Get-FileHash zero-sql-Setup-0.1.3-x64.exe</code>
              </p>
            </div>
          </section>

        </main>
      </div>

      <CreatorSection />
      <Footer />
    </div>
  );
}
