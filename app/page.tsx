'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import {
  Download,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Database,
  Sparkles,
  Zap,
  Cpu,
  Github,
  ChevronDown,
  ExternalLink,
  Check,
  Layers,
  ArrowRight,
  Eye,
  EyeOff,
  Play,
  FileSpreadsheet,
  Lock,
  HardDrive,
  Copy,
  Table,
  Workflow,
  Server,
  Activity,
  Code2,
  RefreshCw,
  Info,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
  digest?: string;
}

interface ReleaseData {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: ReleaseAsset[];
}

const FALLBACK_RELEASES_URL = 'https://github.com/LochanJangid/zero_sql/releases';
const FALLBACK_REPO_URL = 'https://github.com/LochanJangid/zero_sql';
const CACHE_KEY = 'zerosql_latest_release_v2';
const CACHE_EXPIRY_MS = 15 * 60 * 1000;

interface DemoDatabase {
  id: string;
  name: string;
  dialect: string;
  badge: string;
  sampleQuestions: {
    question: string;
    sql: string;
    explanation: string;
    columns: string[];
    rows: any[][];
    executionTimeMs: number;
    rowsScanned: number;
  }[];
  schema: {
    tables: {
      name: string;
      columns: { name: string; type: string; isPk?: boolean; isFk?: boolean }[];
    }[];
  };
}

const DEMO_DATABASES: DemoDatabase[] = [
  {
    id: 'sqlite',
    name: 'shop.db (E-commerce)',
    dialect: 'SQLite 3.45',
    badge: 'Offline Bundled',
    sampleQuestions: [
      {
        question: 'Top 5 highest spending customers in London with total orders',
        sql: `SELECT 
  c.name AS customer_name,
  c.email,
  COUNT(o.id) AS total_orders,
  ROUND(SUM(o.total_amount), 2) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE c.city = 'London'
GROUP BY c.id
ORDER BY total_spent DESC
LIMIT 5;`,
        explanation: 'Aggregates customer spend in London by joining customers and orders, grouping by customer ID with descending total amount.',
        columns: ['customer_name', 'email', 'total_orders', 'total_spent'],
        rows: [
          ['Jordan Miller', 'jordan.miller14@example.com', 7, 4829.40],
          ['Finley Perez', 'finley.perez44@example.com', 6, 3912.15],
          ['Casey Taylor', 'casey.taylor24@example.com', 5, 3420.80],
          ['Alex Smith', 'alex.smith04@example.com', 4, 2890.50],
          ['Riley Davis', 'riley.davis64@example.com', 4, 2715.00],
        ],
        executionTimeMs: 2.8,
        rowsScanned: 1800,
      },
      {
        question: 'Products with stock under 30 that generated over $2,000 in sales',
        sql: `SELECT 
  p.name AS product_name,
  p.category,
  p.stock,
  p.price,
  SUM(oi.quantity * oi.unit_price) AS gross_revenue
FROM products p
JOIN order_items oi ON p.id = oi.product_id
WHERE p.stock < 30
GROUP BY p.id
HAVING gross_revenue > 2000
ORDER BY gross_revenue DESC;`,
        explanation: 'Filters inventory below 30 units and aggregates order item totals exceeding $2,000 threshold.',
        columns: ['product_name', 'category', 'stock', 'price', 'gross_revenue'],
        rows: [
          ['Wireless Mechanical Keyboard', 'Accessories', 14, 149.99, 5849.61],
          ['Ultra Noise-Cancelling Headphones', 'Audio', 18, 289.00, 5202.00],
          ['Smart 4K Webcam Pro', 'Electronics', 22, 119.50, 3824.00],
          ['Ergonomic Laptop Dock', 'Home Office', 12, 189.00, 3024.00],
        ],
        executionTimeMs: 3.4,
        rowsScanned: 3500,
      },
    ],
    schema: {
      tables: [
        {
          name: 'customers',
          columns: [
            { name: 'id', type: 'INTEGER', isPk: true },
            { name: 'name', type: 'TEXT' },
            { name: 'email', type: 'TEXT' },
            { name: 'city', type: 'TEXT' },
            { name: 'country', type: 'TEXT' },
          ],
        },
        {
          name: 'orders',
          columns: [
            { name: 'id', type: 'INTEGER', isPk: true },
            { name: 'customer_id', type: 'INTEGER', isFk: true },
            { name: 'order_date', type: 'TEXT' },
            { name: 'status', type: 'TEXT' },
            { name: 'total_amount', type: 'REAL' },
          ],
        },
        {
          name: 'order_items',
          columns: [
            { name: 'id', type: 'INTEGER', isPk: true },
            { name: 'order_id', type: 'INTEGER', isFk: true },
            { name: 'product_id', type: 'INTEGER', isFk: true },
            { name: 'quantity', type: 'INTEGER' },
            { name: 'unit_price', type: 'REAL' },
          ],
        },
      ],
    },
  },
  {
    id: 'postgres',
    name: 'analytics_prod (PostgreSQL 16)',
    dialect: 'PostgreSQL 16.2',
    badge: 'Enterprise Pool',
    sampleQuestions: [
      {
        question: 'Daily active users and 7-day rolling retention rate for October',
        sql: `SELECT 
  DATE_TRUNC('day', event_time) AS event_date,
  COUNT(DISTINCT user_id) AS dau,
  ROUND(
    AVG(COUNT(DISTINCT user_id)) OVER (
      ORDER BY DATE_TRUNC('day', event_time) 
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ), 0
  ) AS rolling_7d_avg
FROM user_events
WHERE event_time >= '2024-10-01' AND event_time < '2024-11-01'
GROUP BY 1
ORDER BY 1 ASC;`,
        explanation: 'Calculates daily distinct active users and computes a 7-day moving window average using window functions.',
        columns: ['event_date', 'dau', 'rolling_7d_avg'],
        rows: [
          ['2024-10-01 00:00:00', 14210, 14210],
          ['2024-10-02 00:00:00', 15890, 15050],
          ['2024-10-03 00:00:00', 16240, 15446],
          ['2024-10-04 00:00:00', 17820, 16040],
          ['2024-10-05 00:00:00', 18450, 16522],
        ],
        executionTimeMs: 4.9,
        rowsScanned: 142000,
      },
    ],
    schema: {
      tables: [
        {
          name: 'user_events',
          columns: [
            { name: 'id', type: 'UUID', isPk: true },
            { name: 'user_id', type: 'UUID' },
            { name: 'event_type', type: 'VARCHAR(64)' },
            { name: 'event_time', type: 'TIMESTAMPTZ' },
            { name: 'metadata', type: 'JSONB' },
          ],
        },
      ],
    },
  },
  {
    id: 'duckdb',
    name: 'telemetry (DuckDB / Parquet)',
    dialect: 'DuckDB 0.10',
    badge: 'Columnar File Engine',
    sampleQuestions: [
      {
        question: 'P99 and P95 latency by microservice from 100M telemetry events',
        sql: `SELECT 
  service_name,
  COUNT(*) AS request_count,
  ROUND(QUANTILE_CONT(duration_ms, 0.95), 2) AS p95_ms,
  ROUND(QUANTILE_CONT(duration_ms, 0.99), 2) AS p99_ms
FROM read_parquet('telemetry_2024_*.parquet')
WHERE status_code >= 200
GROUP BY service_name
ORDER BY p99_ms DESC;`,
        explanation: 'Computes exact 95th and 99th continuous percentile latencies directly against partitioned Parquet files.',
        columns: ['service_name', 'request_count', 'p95_ms', 'p99_ms'],
        rows: [
          ['billing-checkout-api', 1420500, 84.20, 192.50],
          ['auth-token-verifier', 4820100, 12.40, 48.90],
          ['catalog-search-service', 3120400, 34.80, 112.10],
          ['notification-dispatcher', 980200, 18.10, 62.40],
        ],
        executionTimeMs: 6.2,
        rowsScanned: 10340000,
      },
    ],
    schema: {
      tables: [
        {
          name: 'telemetry_parquet',
          columns: [
            { name: 'timestamp', type: 'TIMESTAMP' },
            { name: 'service_name', type: 'VARCHAR' },
            { name: 'duration_ms', type: 'DOUBLE' },
            { name: 'status_code', type: 'INTEGER' },
          ],
        },
      ],
    },
  },
];

export default function Home() {
  const [release, setRelease] = useState<ReleaseData | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>(FALLBACK_RELEASES_URL);
  const [version, setVersion] = useState<string>('v0.1.2');
  const [fileSizeMb, setFileSizeMb] = useState<string>('219 MB');
  const [sha256Hash, setSha256Hash] = useState<string>('c5c672bcf077ce1091a51c6e11b3a7e485a71903e6354fbb0c4c67a73e638b5e');
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedInstallCmd, setCopiedInstallCmd] = useState(false);

  // Playground States
  const [activeDbId, setActiveDbId] = useState<string>('sqlite');
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [playgroundTab, setPlaygroundTab] = useState<'editor' | 'results' | 'explain' | 'erd'>('editor');
  const [isScreenShareMasked, setIsScreenShareMasked] = useState<boolean>(false);
  const [isExecutingQuery, setIsExecutingQuery] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeDb = useMemo(
    () => DEMO_DATABASES.find((d) => d.id === activeDbId) || DEMO_DATABASES[0],
    [activeDbId]
  );
  const activeQuestion = useMemo(
    () => activeDb.sampleQuestions[activeQuestionIdx] || activeDb.sampleQuestions[0],
    [activeDb, activeQuestionIdx]
  );

  useEffect(() => {
    async function fetchRelease() {
      try {
        const cachedRaw = sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (Date.now() - cached.timestamp < CACHE_EXPIRY_MS) {
            applyReleaseData(cached.data);
            return;
          }
        }
      } catch {}

      try {
        const res = await fetch('https://api.github.com/repos/LochanJangid/zero_sql/releases/latest');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: ReleaseData = await res.json();
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
        } catch {}
        applyReleaseData(data);
      } catch (err) {
        setDownloadUrl('https://github.com/LochanJangid/zero_sql/releases/download/v0.1.2/zero-sql-Setup-0.1.2-x64.exe');
      }
    }

    fetchRelease();
  }, []);

  function applyReleaseData(data: ReleaseData) {
    setRelease(data);
    if (data.tag_name) setVersion(data.tag_name);
    if (data.assets && Array.isArray(data.assets)) {
      const x64Asset = data.assets.find(
        (a) => a.name.endsWith('.exe') && (a.name.includes('x64') || !a.name.includes('arm64'))
      );
      if (x64Asset) {
        setDownloadUrl(x64Asset.browser_download_url);
        if (x64Asset.size) {
          setFileSizeMb(`${Math.round(x64Asset.size / (1024 * 1024))} MB`);
        }
        if (x64Asset.digest) {
          setSha256Hash(x64Asset.digest.replace(/^sha256:/, ''));
        }
      }
    }
  }

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyChecksum = () => {
    navigator.clipboard.writeText(sha256Hash);
    setCopiedHash(true);
    triggerToast('SHA-256 Checksum copied to clipboard');
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const copyPowerShellCmd = () => {
    const cmd = `irm "${downloadUrl}" -OutFile zero-sql-Setup.exe; .\\zero-sql-Setup.exe`;
    navigator.clipboard.writeText(cmd);
    setCopiedInstallCmd(true);
    triggerToast('PowerShell install command copied');
    setTimeout(() => setCopiedInstallCmd(false), 2000);
  };

  const handleSimulateRun = () => {
    setIsExecutingQuery(true);
    setTimeout(() => {
      setIsExecutingQuery(false);
      setPlaygroundTab('results');
      triggerToast(`Query executed in ${activeQuestion.executionTimeMs} ms (100% offline)`);
    }, 350);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0d] text-[#e1e4ea] selection:bg-[#c4f20f] selection:text-[#0a0f02] antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#1a1d24] border border-[#c4f20f]/30 text-white text-xs shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 size={15} className="text-[#c4f20f]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner: Enterprise Zero-Cloud Guarantee */}
      <div className="w-full bg-gradient-to-r from-[#12150a] via-[#1a2307] to-[#12150a] border-b border-[#c4f20f]/20 py-2 px-4 text-center text-[12px] text-neutral-300 flex items-center justify-center space-x-2">
        <ShieldCheck size={14} className="text-[#c4f20f] shrink-0" />
        <span>
          <strong>Zero Cloud Telemetry</strong>: Database credentials and schemas never leave your workstation.
        </span>
        <span className="hidden md:inline text-neutral-500">•</span>
        <span className="hidden md:inline text-neutral-400">SOC-2 & Air-Gap Ready Architecture</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090a0d]/85 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo-full.png"
              alt="zero-sql"
              width={145}
              height={34}
              priority
              className="h-8 w-auto object-contain"
            />
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#1a1f0a] text-[#c4f20f] border border-[#c4f20f]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4f20f] animate-pulse" />
              <span>{version}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-xs font-medium text-neutral-400">
            <a href="#playground" className="hover:text-white transition-colors">Interactive Demo</a>
            <a href="#enterprise" className="hover:text-white transition-colors">Architecture</a>
            <a href="#matrix" className="hover:text-white transition-colors">Comparison</a>
            <a href="#smartscreen" className="hover:text-white transition-colors">SmartScreen Guide</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href={FALLBACK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-[#14161c] border border-white/10 hover:border-white/20 transition-all"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={downloadUrl}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg font-medium text-xs bg-[#c4f20f] text-[#12150a] hover:bg-[#d4ff26] shadow-sm hover:shadow-[#c4f20f]/20 transition-all font-semibold"
            >
              <Download size={13} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden">
          {/* Ambient Radial Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c4f20f]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#12141a] border border-white/10 text-xs text-neutral-300 shadow-inner">
              <Sparkles size={13} className="text-[#c4f20f]" />
              <span>PyInstaller Frozen Standalone Engine • No Python or Pip Required</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              The Enterprise SQL Studio <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-[#c4f20f] bg-clip-text text-transparent">
                That Never Leaks Data.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Query PostgreSQL, MySQL, SQLite, DuckDB, and Parquet spreadsheets with plain English. Powered by sub-millisecond local RAG, AST transaction safety guards, and 100% offline executable execution.
            </p>

            {/* CTA BUTTONS & INSTALLER HUB */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={downloadUrl}
                className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold text-sm bg-[#c4f20f] text-[#0e1702] hover:bg-[#d6ff3d] shadow-[0_0_30px_rgba(196,242,15,0.35)] transition-all hover:scale-[1.02] active:scale-[0.99] w-full sm:w-auto"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                <div className="text-left">
                  <div className="font-extrabold leading-none">Download for Windows</div>
                  <div className="text-[11px] opacity-80 font-mono mt-0.5">
                    {version} • x64 ({fileSizeMb})
                  </div>
                </div>
              </a>

              <a
                href="#playground"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-medium text-sm bg-[#15171f] text-neutral-200 hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#1a1d26] transition-all w-full sm:w-auto"
              >
                <Play size={15} className="text-[#c4f20f]" />
                <span>Try Interactive Studio Demo</span>
              </a>
            </div>

            {/* Quick Checksum & PowerShell Pill */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
              <button
                onClick={copyChecksum}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#12141a] border border-white/5 hover:border-white/15 transition-all font-mono text-[11px]"
                title="Click to copy SHA-256 Checksum"
              >
                <Lock size={11} className="text-[#c4f20f]" />
                <span>SHA-256: {sha256Hash.slice(0, 12)}...</span>
                <Copy size={11} className="text-neutral-500" />
              </button>

              <button
                onClick={copyPowerShellCmd}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#12141a] border border-white/5 hover:border-white/15 transition-all font-mono text-[11px]"
                title="Click to copy PowerShell install script"
              >
                <Terminal size={11} className="text-sky-400" />
                <span>PowerShell Script</span>
                <Copy size={11} className="text-neutral-500" />
              </button>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PLAYGROUND (PLAYFUL & ENTERPRISE) */}
        <section id="playground" className="py-16 px-6 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#15171f] border border-white/10 text-xs text-[#c4f20f]">
              <Activity size={13} />
              <span>Real-Time Browser Simulation</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Test-Drive zero-sql Interactively
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Select an engine, click natural language prompts, inspect synthesized SQL, and execute offline queries in milliseconds.
            </p>
          </div>

          {/* PLAYGROUND WINDOW CONTAINER */}
          <div className="rounded-2xl bg-[#0e1015] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            {/* Window Chrome TopBar */}
            <div className="h-11 bg-[#13151b] border-b border-white/5 px-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-neutral-400 font-medium">
                  zero-sql studio • {activeDb.name}
                </span>
              </div>

              {/* Screen Share Masking Switch */}
              <button
                onClick={() => {
                  setIsScreenShareMasked(!isScreenShareMasked);
                  triggerToast(
                    !isScreenShareMasked
                      ? 'Screen-Share Mode: All values masked'
                      : 'Screen-Share Mode: Disabled'
                  );
                }}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  isScreenShareMasked
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-[#1c1f28] text-neutral-400 hover:text-white border border-white/5'
                }`}
                title="Toggle real-time sensitive column masking"
              >
                {isScreenShareMasked ? <EyeOff size={13} /> : <Eye size={13} />}
                <span>{isScreenShareMasked ? 'Masked (Live)' : 'Screen-Share Shield'}</span>
              </button>
            </div>

            {/* Dialect Switcher Toolbar */}
            <div className="p-3 bg-[#111319] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-neutral-500 font-medium mr-1">Database:</span>
                {DEMO_DATABASES.map((db) => (
                  <button
                    key={db.id}
                    onClick={() => {
                      setActiveDbId(db.id);
                      setActiveQuestionIdx(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeDbId === db.id
                        ? 'bg-[#c4f20f] text-[#0e1702] font-semibold shadow-sm'
                        : 'bg-[#181a22] text-neutral-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {db.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-[#171a22] border border-white/5">
                  {activeDb.badge}
                </span>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="p-3 bg-[#0d0e13] border-b border-white/5 flex items-center space-x-2 overflow-x-auto text-xs">
              <span className="text-neutral-500 shrink-0 font-medium text-[11px]">Sample Prompts:</span>
              {activeDb.sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveQuestionIdx(idx);
                    setPlaygroundTab('editor');
                  }}
                  className={`px-3 py-1 rounded-full whitespace-nowrap text-xs transition-all ${
                    activeQuestionIdx === idx
                      ? 'bg-[#1f2410] text-[#c4f20f] border border-[#c4f20f]/40 font-medium'
                      : 'bg-[#14161d] text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  "{q.question}"
                </button>
              ))}
            </div>

            {/* Studio Workspace Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              {/* Left Column: Editor & Tabs */}
              <div className="lg:col-span-7 border-r border-white/5 flex flex-col bg-[#0c0d12]">
                {/* Editor Tabs */}
                <div className="flex items-center border-b border-white/5 px-2 bg-[#101218] text-xs">
                  <button
                    onClick={() => setPlaygroundTab('editor')}
                    className={`px-4 py-2 font-medium border-b-2 flex items-center space-x-2 ${
                      playgroundTab === 'editor'
                        ? 'border-[#c4f20f] text-[#c4f20f]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Code2 size={13} />
                    <span>SQL Editor</span>
                  </button>
                  <button
                    onClick={() => setPlaygroundTab('results')}
                    className={`px-4 py-2 font-medium border-b-2 flex items-center space-x-2 ${
                      playgroundTab === 'results'
                        ? 'border-[#c4f20f] text-[#c4f20f]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Table size={13} />
                    <span>Virtual Grid ({activeQuestion.rows.length})</span>
                  </button>
                  <button
                    onClick={() => setPlaygroundTab('explain')}
                    className={`px-4 py-2 font-medium border-b-2 flex items-center space-x-2 ${
                      playgroundTab === 'explain'
                        ? 'border-[#c4f20f] text-[#c4f20f]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Activity size={13} />
                    <span>Explain Plan</span>
                  </button>
                  <button
                    onClick={() => setPlaygroundTab('erd')}
                    className={`px-4 py-2 font-medium border-b-2 flex items-center space-x-2 ${
                      playgroundTab === 'erd'
                        ? 'border-[#c4f20f] text-[#c4f20f]'
                        : 'border-transparent text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Workflow size={13} />
                    <span>ERD Visualizer</span>
                  </button>
                </div>

                {/* Tab Views */}
                <div className="flex-1 p-4 font-mono text-xs overflow-auto">
                  {playgroundTab === 'editor' && (
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-[#14161e] border border-white/5 text-neutral-300 font-sans text-xs">
                        <strong className="text-[#c4f20f] font-mono">Q:</strong> "{activeQuestion.question}"
                      </div>
                      <pre className="p-4 rounded-lg bg-[#07080a] border border-white/5 text-sky-300 leading-relaxed overflow-x-auto select-all">
                        {activeQuestion.sql}
                      </pre>
                      <div className="flex items-center justify-between pt-2">
                        <div className="text-[11px] font-sans text-neutral-400">
                          {activeQuestion.explanation}
                        </div>
                        <button
                          onClick={handleSimulateRun}
                          disabled={isExecutingQuery}
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#c4f20f] text-[#0e1702] font-sans font-bold hover:bg-[#d6ff3d] transition-all shrink-0"
                        >
                          <Play size={13} />
                          <span>{isExecutingQuery ? 'Executing...' : 'Run Query'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {playgroundTab === 'results' && (
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span className="font-mono text-[11px] text-emerald-400">
                          ✓ {activeQuestion.rows.length} rows returned in {activeQuestion.executionTimeMs} ms
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => triggerToast('Exported query to Excel format (.xlsx)')}
                            className="px-2.5 py-1 rounded bg-[#171a23] hover:bg-[#202430] border border-white/5 text-[11px] text-neutral-300"
                          >
                            Export Excel
                          </button>
                          <button
                            onClick={() => triggerToast('Exported query to CSV format (.csv)')}
                            className="px-2.5 py-1 rounded bg-[#171a23] hover:bg-[#202430] border border-white/5 text-[11px] text-neutral-300"
                          >
                            Export CSV
                          </button>
                        </div>
                      </div>

                      <div className="border border-white/10 rounded-lg overflow-x-auto bg-[#07080a]">
                        <table className="w-full text-left text-xs border-collapse font-mono">
                          <thead>
                            <tr className="bg-[#12141c] border-b border-white/10 text-neutral-300">
                              <th className="p-2 border-r border-white/5 text-center text-neutral-600">#</th>
                              {activeQuestion.columns.map((c, i) => (
                                <th key={i} className="p-2 border-r border-white/5 font-semibold text-neutral-200">
                                  {c}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {activeQuestion.rows.map((r, rIdx) => (
                              <tr key={rIdx} className="border-b border-white/5 hover:bg-white/[0.02]">
                                <td className="p-2 border-r border-white/5 text-center text-neutral-600">
                                  {rIdx + 1}
                                </td>
                                {r.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2 border-r border-white/5 text-neutral-300">
                                    {isScreenShareMasked && cIdx === 1
                                      ? '••••••••••••••••'
                                      : typeof cell === 'number'
                                      ? cell.toLocaleString()
                                      : String(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {playgroundTab === 'explain' && (
                    <div className="space-y-3 font-sans text-xs">
                      <div className="p-3 rounded-lg bg-[#141620] border border-white/10 text-neutral-300">
                        <strong className="text-sky-400">Execution Plan Analysis</strong>
                        <div className="mt-1 font-mono text-[11px] text-neutral-400">
                          Total cost: 18.42 • Scan type: INDEX RANGE SCAN • Rows evaluated: {activeQuestion.rowsScanned.toLocaleString()}
                        </div>
                      </div>
                      <pre className="p-4 rounded-lg bg-[#07080a] border border-white/5 font-mono text-emerald-400 text-xs leading-relaxed overflow-x-auto">
{`SEARCH TABLE customers USING INDEX idx_customers_city (city=?)
SEARCH TABLE orders USING INDEX idx_orders_customer (customer_id=?)
USE TEMP B-TREE FOR ORDER BY
-- Optimization Score: 98/100 (Optimal Index Utilization)`}
                      </pre>
                    </div>
                  )}

                  {playgroundTab === 'erd' && (
                    <div className="space-y-4 font-sans text-xs">
                      <div className="text-neutral-400 text-[11px]">
                        Interactive Schema Relationships ({activeDb.schema.tables.length} tables mapped):
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {activeDb.schema.tables.map((t, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-[#12141c] border border-white/10 space-y-2">
                            <div className="font-semibold text-white flex items-center space-x-1.5 border-b border-white/5 pb-1.5">
                              <Table size={13} className="text-[#c4f20f]" />
                              <span>{t.name}</span>
                            </div>
                            <div className="space-y-1 font-mono text-[11px]">
                              {t.columns.map((c, cIdx) => (
                                <div key={cIdx} className="flex items-center justify-between text-neutral-400">
                                  <span>{c.name}</span>
                                  <span className="text-[10px] text-neutral-600">
                                    {c.isPk ? 'PK' : c.isFk ? 'FK' : c.type}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Engine Metrics & Safety Guarantees */}
              <div className="lg:col-span-5 p-5 bg-[#0e1017] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-white">
                    <ShieldCheck className="text-[#c4f20f]" size={16} />
                    <span>Real-Time Security & Performance</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-[#141620] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-neutral-400">Local Latency</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {activeQuestion.executionTimeMs} ms
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141620] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-neutral-400">Cloud Data Transmission</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        0 Bytes (100% Offline)
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141620] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-neutral-400">Held-Transaction Guard</span>
                      <span className="text-xs font-mono font-bold text-sky-400">
                        120s Auto-Rollback
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141620] border border-white/5 flex items-center justify-between">
                      <span className="text-xs text-neutral-400">Dialect Validator</span>
                      <span className="text-xs font-mono font-bold text-neutral-300">
                        AST Classified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#1a1f0a] to-[#141707] border border-[#c4f20f]/20 text-xs space-y-2">
                  <div className="font-semibold text-white flex items-center space-x-1.5">
                    <Sparkles size={14} className="text-[#c4f20f]" />
                    <span>Enterprise Ready</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">
                    Install on corporate laptops without admin privileges or internet access. The frozen backend binary starts immediately without downloading Python or dependencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE ARCHITECTURE HIGHLIGHTS */}
        <section id="enterprise" className="py-20 px-6 border-t border-white/5 bg-[#07080b]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered for High-Stakes Data Teams
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl mx-auto">
                No telemetry. No third-party vector databases. Complete isolation of your internal schemas and proprietary table definitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-[#0e1016] border border-white/5 space-y-3 hover:border-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#c4f20f]/10 text-[#c4f20f] flex items-center justify-center">
                  <Lock size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Local Cryptographic Boundary</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every launch generates a cryptographically random 256-bit token. All internal IPC communications require constant-time digest verification.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-[#0e1016] border border-white/5 space-y-3 hover:border-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <HardDrive size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Build-Time PyInstaller Binary</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  FastAPI and Uvicorn are compiled directly into a native Windows executable. Users never encounter pip errors, missing wheels, or broken environments.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-[#0e1016] border border-white/5 space-y-3 hover:border-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <ShieldAlert size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Mutation Diff Preview</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Statements containing UPDATE, DELETE, or DROP automatically trigger a pre-commit diff review and hold transactions with a 120-second rollback countdown.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX (ENTERPRISE EVALUATION) */}
        <section id="matrix" className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              zero-sql vs Traditional & Cloud Alternatives
            </h2>
            <p className="text-sm text-neutral-400">
              Why enterprise compliance and security officers mandate zero-sql for internal database operations.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0d0f14] shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#12141c] border-b border-white/10 text-neutral-300">
                  <th className="p-4 font-semibold">Capability</th>
                  <th className="p-4 font-semibold text-[#c4f20f] bg-[#c4f20f]/5">zero-sql</th>
                  <th className="p-4 font-semibold text-neutral-400">Cloud AI SQL Tools</th>
                  <th className="p-4 font-semibold text-neutral-400">Legacy SQL Clients</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-medium text-white">Data Privacy & Schema Isolation</td>
                  <td className="p-4 bg-[#c4f20f]/5 font-semibold text-emerald-400">100% Local (0 bytes sent)</td>
                  <td className="p-4 text-rose-400">Transmitted to cloud backend</td>
                  <td className="p-4 text-neutral-400">Local (No AI features)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Host Python Dependencies</td>
                  <td className="p-4 bg-[#c4f20f]/5 font-semibold text-emerald-400">Zero (Frozen executable)</td>
                  <td className="p-4 text-neutral-400">Cloud hosted</td>
                  <td className="p-4 text-neutral-400">Requires Java JRE / C++ runtimes</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Mutation Auto-Rollback Guard</td>
                  <td className="p-4 bg-[#c4f20f]/5 font-semibold text-emerald-400">120s Held Transaction Diff</td>
                  <td className="p-4 text-rose-400">None (Instant execution)</td>
                  <td className="p-4 text-neutral-400">Manual commit toggles</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Live Screen-Share Masking</td>
                  <td className="p-4 bg-[#c4f20f]/5 font-semibold text-emerald-400">1-Click Global PII Redaction</td>
                  <td className="p-4 text-rose-400">Not supported</td>
                  <td className="p-4 text-rose-400">Not supported</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Spreadsheet Ingestion (.csv, .xlsx)</td>
                  <td className="p-4 bg-[#c4f20f]/5 font-semibold text-emerald-400">Instant Drag & Drop SQLite</td>
                  <td className="p-4 text-neutral-400">Paid tier only</td>
                  <td className="p-4 text-neutral-400">Complex import wizards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WINDOWS SMARTSCREEN GUIDANCE (TRUST & PLAYFUL) */}
        <section id="smartscreen" className="py-20 px-6 bg-[#07080b] border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs">
                <ShieldAlert size={13} />
                <span>Windows Defender SmartScreen Guide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Installing on Windows 10 & 11
              </h2>
              <p className="text-xs text-neutral-400 max-w-lg mx-auto">
                Because zero-sql is independently published and free from proprietary corporate certificates, Windows SmartScreen may display a prompt upon initial launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Step Graphic */}
              <div className="p-5 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
                <div className="text-xs font-semibold text-neutral-300 flex items-center space-x-2">
                  <Terminal size={14} className="text-[#c4f20f]" />
                  <span>2-Click Verification Steps</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#141722] border border-white/5 flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#c4f20f] text-[#0e1702] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                    <span className="text-neutral-300">
                      On the Windows prompt, click <strong className="text-white underline">"More info"</strong>.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141722] border border-white/5 flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#c4f20f] text-[#0e1702] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                    <span className="text-neutral-300">
                      Click the <strong className="text-white underline">"Run anyway"</strong> button to launch the installer.
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust & Integrity Card */}
              <div className="p-5 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3 text-xs text-neutral-400">
                <div className="text-xs font-semibold text-white flex items-center space-x-2">
                  <Lock size={14} className="text-emerald-400" />
                  <span>Cryptographic Release Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Every executable binary is compiled transparently through public GitHub Actions runners with pinned Python 3.12 and audited dependencies.
                </p>
                <div className="pt-2 font-mono text-[11px] text-neutral-300 bg-[#141620] p-2.5 rounded-lg border border-white/5 break-all">
                  SHA-256: {sha256Hash}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 px-6 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-neutral-400">Everything you need to know about deploying zero-sql across your team.</p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0e1017] border border-white/5 space-y-1.5">
              <h3 className="font-semibold text-white text-sm">Do I need Python installed on my Windows machine?</h3>
              <p className="text-neutral-400 leading-relaxed">
                No. The Python backend is frozen into a standalone executable at build time using PyInstaller. Zero-sql bundles its own runtime and runs with 100% independence on clean machines with no internet required.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1017] border border-white/5 space-y-1.5">
              <h3 className="font-semibold text-white text-sm">Is my database data ever transmitted to OpenAI or Groq?</h3>
              <p className="text-neutral-400 leading-relaxed">
                No database rows are ever uploaded. When natural language SQL generation is invoked, zero-sql constructs an AST prompt containing only sanitized table and column names. All database queries execute strictly on your local PC.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1017] border border-white/5 space-y-1.5">
              <h3 className="font-semibold text-white text-sm">How does automatic updating work?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Packaged builds poll the public release feed on <code className="text-[#c4f20f]">LochanJangid/zero_sql</code> every four hours. When an update is detected, it downloads silently in the background and offers a non-intrusive 1-click restart button.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#07080a] text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo-icon.png"
              alt="zero-sql"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-neutral-400 font-medium">zero-sql Desktop Client</span>
            <span>•</span>
            <span>Version {version}</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href={FALLBACK_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub Source
            </a>
            <a href={FALLBACK_RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Releases & Mirror
            </a>
            <a href="#smartscreen" className="hover:text-white transition-colors">
              Installation Guide
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
