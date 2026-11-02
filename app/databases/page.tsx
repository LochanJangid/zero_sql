import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CreatorSection from '../../components/CreatorSection';
import { 
  Database, 
  HardDrive, 
  Server, 
  FileSpreadsheet, 
  FileText, 
  FileCode, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';

export const metadata = {
  title: 'Supported Databases — zero-sql Desktop Database Studio',
  description: 'Complete compatibility guide for zero-sql: SQLite, DuckDB, PostgreSQL, MySQL, SQL Server, and flat file queries (CSV, Excel, JSON).',
};

const DATABASES = [
  {
    id: 'sqlite',
    name: 'SQLite',
    version: '3.45+ (Bundled)',
    type: 'Embedded File',
    badge: 'Local First',
    icon: HardDrive,
    color: 'emerald',
    description: 'Direct file access for SQLite databases (.db, .sqlite, .sqlite3). Includes WAL mode concurrency, 30s busy timeout, and instant read-only locks.',
    connectionExample: 'Open file directly from disk or supply path: /path/to/database.db',
    features: ['WAL mode concurrency', '30s busy_timeout protection', 'Read-only URI mode', 'No background daemon'],
  },
  {
    id: 'duckdb',
    name: 'DuckDB',
    version: '1.1+ (Bundled)',
    type: 'Analytical OLAP',
    badge: 'Vectorized Engine',
    icon: Zap,
    color: 'amber',
    description: 'Blazing-fast columnar execution for analytical datasets and Parquet/DuckDB files (.duckdb, .ddb). Query millions of rows with vectorized SIMD processing.',
    connectionExample: 'Open file directly or connect in-memory: :memory: or /data/warehouse.duckdb',
    features: ['Columnar storage engine', 'Vectorized query execution', 'Parquet & Arrow integration', 'Sub-millisecond aggregates'],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    version: '12 to 16+',
    type: 'Client-Server RDBMS',
    badge: 'Production Server',
    icon: Server,
    color: 'blue',
    description: 'Full support for PostgreSQL instances, Amazon RDS, Supabase, Neon, and CockroachDB with SSL/TLS, schema introspection, and JSONB operators.',
    connectionExample: 'postgresql://postgres:password@localhost:5432/my_database?sslmode=prefer',
    features: ['SSL/TLS encryption', 'JSONB syntax highlighting', 'pg_catalog introspection', 'Search path support'],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    version: '8.0+ & MariaDB',
    type: 'Client-Server RDBMS',
    badge: 'Relational DB',
    icon: Database,
    color: 'purple',
    description: 'Connect to standard MySQL, MariaDB, AWS Aurora, and PlanetScale databases with full schema exploration and InnoDB table engine support.',
    connectionExample: 'mysql://root:password@127.0.0.1:3306/catalog_db',
    features: ['MySQL 8.0+ dialect', 'InnoDB transaction safety', 'Multi-statement execution', 'Performance schema hints'],
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server',
    version: '2016 through 2022',
    type: 'Enterprise Database',
    badge: 'Enterprise T-SQL',
    icon: Server,
    color: 'cyan',
    description: 'First-class support for Microsoft SQL Server and Azure SQL. Seamlessly parses T-SQL dialect with TOP N, CROSS APPLY, and schema partition introspection.',
    connectionExample: 'mssql://sa:StrongPassword123@localhost:1433/EnterpriseDB',
    features: ['T-SQL dialect optimizer', 'TOP N & OFFSET clauses', 'Azure SQL support', 'Safe query hints (NOLOCK)'],
  },
  {
    id: 'files',
    name: 'Flat Data Files',
    version: 'CSV • XLSX • JSON',
    type: 'In-Memory Query Engine',
    badge: 'Zero Setup',
    icon: FileSpreadsheet,
    color: 'emerald',
    description: 'Query arbitrary spreadsheets and log dumps directly with standard SQL. Zero database installation required; streams data into memory instantly.',
    connectionExample: 'Drag and drop sales.csv, forecast.xlsx, or logs.json directly into zero-sql',
    features: ['Auto-infer column types', 'Multi-sheet Excel parsing', 'Cross-file SQL joins', 'Instant export to .xlsx/.csv'],
  },
];

export default function DatabasesPage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar currentPath="/databases" />

      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <Database className="w-3.5 h-3.5" />
          Engine Compatibility
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          One Unified Studio for All Your Databases
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
          Whether you are inspecting an embedded SQLite database on disk, querying millions of rows in DuckDB, 
          connecting to a production PostgreSQL cluster, or analyzing an Excel spreadsheet, Zero-SQL handles it natively.
        </p>
      </section>

      {/* Database Engines Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATABASES.map((db) => {
            const Icon = db.icon;
            return (
              <div 
                key={db.id} 
                id={db.id}
                className="rounded-2xl bg-[#141720] border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/30 transition-all shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {db.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{db.name}</h3>
                    <div className="text-xs font-mono text-slate-400">{db.version} • {db.type}</div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {db.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {db.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection URI box */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 break-all space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-sans block font-semibold">
                    Example Connection:
                  </span>
                  <span className="text-emerald-300">{db.connectionExample}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Matrix Table */}
      <section className="py-20 border-t border-white/5 bg-[#0b0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white tracking-tight">Feature Compatibility Matrix</h2>
            <p className="text-sm text-slate-400">All supported engines include complete schema introspection and natural language synthesis.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#141720]">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#101218] border-b border-white/10 text-slate-300">
                  <th className="py-3 px-4 font-semibold">Database Engine</th>
                  <th className="py-3 px-4 font-semibold text-center">Schema Tree</th>
                  <th className="py-3 px-4 font-semibold text-center">AI Synthesis</th>
                  <th className="py-3 px-4 font-semibold text-center">EXPLAIN Plan</th>
                  <th className="py-3 px-4 font-semibold text-center">Read-Only Safety</th>
                  <th className="py-3 px-4 font-semibold text-center">Excel Export</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {['SQLite (.db)', 'DuckDB (.duckdb)', 'PostgreSQL', 'MySQL / MariaDB', 'SQL Server (T-SQL)', 'CSV / Excel (.xlsx)'].map((name, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-sans font-medium text-white">{name}</td>
                    <td className="py-3 px-4 text-center text-emerald-400">✓ Native</td>
                    <td className="py-3 px-4 text-center text-emerald-400">✓ Native</td>
                    <td className="py-3 px-4 text-center text-emerald-400">✓ Native</td>
                    <td className="py-3 px-4 text-center text-emerald-400">✓ Supported</td>
                    <td className="py-3 px-4 text-center text-emerald-400">✓ 1-Click</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CreatorSection />
      <Footer />
    </div>
  );
}
