'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Database, 
  Table as TableIcon, 
  Columns, 
  Check, 
  Copy, 
  Download, 
  Terminal, 
  Layers, 
  RefreshCw, 
  ShieldAlert, 
  Sliders, 
  FileSpreadsheet, 
  Eye, 
  EyeOff,
  ChevronRight,
  ChevronDown,
  Clock,
  HardDrive
} from 'lucide-react';

export type Dialect = 'sqlite' | 'postgres' | 'duckdb' | 'mysql' | 'mssql' | 'files';

interface DialectConfig {
  name: string;
  badge: string;
  dbLabel: string;
  schemaTree: {
    tables: Array<{ name: string; rows: string; columns: string[] }>;
  };
  samplePrompt: string;
  generatedSql: string;
  executionTime: string;
  columns: string[];
  rows: Array<Array<string | number | null>>;
  explainPlan: string;
}

const DIALECT_DATA: Record<Dialect, DialectConfig> = {
  sqlite: {
    name: 'SQLite 3.45',
    badge: 'Embedded File',
    dbLabel: 'shop.db (local)',
    schemaTree: {
      tables: [
        { name: 'orders', rows: '4,281', columns: ['id INT PK', 'customer_id INT', 'amount NUMERIC', 'status TEXT', 'created_at TEXT'] },
        { name: 'customers', rows: '1,200', columns: ['id INT PK', 'name TEXT', 'email TEXT', 'country TEXT', 'tier TEXT'] },
        { name: 'products', rows: '350', columns: ['id INT PK', 'sku TEXT', 'price NUMERIC', 'stock INT'] },
      ],
    },
    samplePrompt: 'Find top customers by total spend with over 3 completed orders in 2026',
    generatedSql: `-- Synthesized by zero-sql RAG Engine for SQLite
SELECT 
  c.id,
  c.name,
  c.email,
  c.country,
  COUNT(o.id) AS total_orders,
  ROUND(SUM(o.amount), 2) AS total_spend
FROM customers c
INNER JOIN orders o ON o.customer_id = c.id
WHERE o.status = 'completed'
  AND strftime('%Y', o.created_at) = '2026'
GROUP BY c.id
HAVING COUNT(o.id) >= 3
ORDER BY total_spend DESC
LIMIT 5;`,
    executionTime: '2.4ms',
    columns: ['id', 'name', 'email', 'country', 'total_orders', 'total_spend'],
    rows: [
      [104, 'Sophia Martinez', 'sophia.m@enterprise.io', 'United States', 6, '$4,820.50'],
      [218, 'Alexander Wright', 'alex.w@cloudscale.uk', 'United Kingdom', 5, '$3,940.00'],
      [89, 'Elena Rostova', 'elena@nordicdata.se', 'Sweden', 4, '$3,410.75'],
      [312, 'Marcus Thorne', 'm.thorne@apexglobal.ca', 'Canada', 4, '$2,980.20'],
      [441, 'Lucas Chen', 'l.chen@singaporetech.sg', 'Singapore', 3, '$2,650.00'],
    ],
    explainPlan: `0|0|0|SEARCH c USING INDEX sqlite_autoindex_customers_1 (id=?)
0|1|1|SEARCH o USING INDEX idx_orders_customer_id (customer_id=?)
0|0|0|USE TEMP B-TREE FOR GROUP BY`,
  },
  postgres: {
    name: 'PostgreSQL 16',
    badge: 'Production Server',
    dbLabel: 'analytics_prod (port 5432)',
    schemaTree: {
      tables: [
        { name: 'user_events', rows: '8.4M', columns: ['event_id UUID PK', 'user_id UUID', 'event_type VARCHAR', 'payload JSONB', 'occurred_at TIMESTAMPTZ'] },
        { name: 'subscriptions', rows: '42.1K', columns: ['id UUID PK', 'plan_tier VARCHAR', 'mrr NUMERIC(10,2)', 'is_active BOOL'] },
        { name: 'workspaces', rows: '12.8K', columns: ['id UUID PK', 'org_name VARCHAR', 'seat_count INT'] },
      ],
    },
    samplePrompt: 'Calculate MRR churn rate per plan tier for active workspaces this quarter',
    generatedSql: `-- Synthesized by zero-sql RAG Engine for PostgreSQL
SELECT 
  s.plan_tier,
  COUNT(DISTINCT w.id) AS active_workspaces,
  SUM(s.mrr) AS current_mrr,
  ROUND(
    AVG(CASE WHEN s.is_active = FALSE THEN s.mrr ELSE 0 END) / NULLIF(SUM(s.mrr), 0) * 100, 
    2
  ) AS churn_rate_pct
FROM subscriptions s
JOIN workspaces w ON w.id = s.id
GROUP BY s.plan_tier
ORDER BY current_mrr DESC;`,
    executionTime: '8.1ms',
    columns: ['plan_tier', 'active_workspaces', 'current_mrr', 'churn_rate_pct'],
    rows: [
      ['Enterprise Dedicated', 420, '$420,000.00', '0.45%'],
      ['Team Scale', 2850, '$285,000.00', '1.12%'],
      ['Developer Pro', 9400, '$188,000.00', '2.84%'],
      ['Starter Cloud', 14200, '$71,000.00', '4.20%'],
    ],
    explainPlan: `HashAggregate (cost=1240.20..1245.50 rows=4 width=48)
  -> Hash Join (cost=450.00..1180.00 rows=12000 width=32)
       Hash Cond: (s.id = w.id)
       -> Seq Scan on subscriptions s (cost=0.00..620.00 rows=42100)
       -> Hash (cost=320.00..320.00 rows=12800)`,
  },
  duckdb: {
    name: 'DuckDB 1.1',
    badge: 'Analytical OLAP',
    dbLabel: 'telemetry_lake.duckdb',
    schemaTree: {
      tables: [
        { name: 'metrics_stream', rows: '25.2M', columns: ['timestamp TIMESTAMP', 'service_name VARCHAR', 'latency_ms DOUBLE', 'status_code INT'] },
        { name: 'hosts', rows: '850', columns: ['host_id VARCHAR PK', 'region VARCHAR', 'cores INT'] },
      ],
    },
    samplePrompt: 'Compute p95 and p99 request latency for API services grouped by HTTP code',
    generatedSql: `-- Synthesized by zero-sql RAG Engine for DuckDB
SELECT 
  service_name,
  status_code,
  COUNT(*) AS total_requests,
  ROUND(QUANTILE_CONT(latency_ms, 0.50), 2) AS p50_latency,
  ROUND(QUANTILE_CONT(latency_ms, 0.95), 2) AS p95_latency,
  ROUND(QUANTILE_CONT(latency_ms, 0.99), 2) AS p99_latency
FROM metrics_stream
WHERE timestamp >= CURRENT_DATE - INTERVAL 7 DAYS
GROUP BY service_name, status_code
ORDER BY total_requests DESC
LIMIT 4;`,
    executionTime: '5.2ms (Vectorized)',
    columns: ['service_name', 'status_code', 'total_requests', 'p50_latency', 'p95_latency', 'p99_latency'],
    rows: [
      ['auth-service', 200, '4,892,100', '12.4ms', '34.8ms', '82.1ms'],
      ['payments-api', 200, '3,120,400', '45.1ms', '118.2ms', '240.5ms'],
      ['query-gateway', 200, '2,890,000', '8.6ms', '22.0ms', '48.9ms'],
      ['payments-api', 402, '48,200', '21.0ms', '52.4ms', '110.0ms'],
    ],
    explainPlan: `PHYSICAL_PLAN:
PROJECTION [service_name, status_code, count_star(), quantile_cont(...)]
  ORDER_BY [total_requests DESC] LIMIT 4
    HASH_GROUP_BY [service_name, status_code]
      VECTORIZED_SCAN [metrics_stream] (Filtered: 25.2M rows -> 3.2M rows)`,
  },
  mysql: {
    name: 'MySQL 8.0',
    badge: 'Relational DB',
    dbLabel: 'catalog_db (InnoDB)',
    schemaTree: {
      tables: [
        { name: 'inventory_items', rows: '68.5K', columns: ['item_id INT PK', 'warehouse_id INT', 'sku VARCHAR(64)', 'quantity INT'] },
        { name: 'warehouses', rows: '48', columns: ['id INT PK', 'city VARCHAR(100)', 'capacity INT'] },
      ],
    },
    samplePrompt: 'Identify warehouses with critical low stock for fast-moving items',
    generatedSql: `-- Synthesized by zero-sql RAG Engine for MySQL
SELECT 
  w.city AS warehouse_city,
  COUNT(i.item_id) AS critical_skus,
  MIN(i.quantity) AS lowest_stock,
  ROUND(AVG(i.quantity), 1) AS avg_stock_level
FROM warehouses w
INNER JOIN inventory_items i ON i.warehouse_id = w.id
WHERE i.quantity < 15
GROUP BY w.id, w.city
ORDER BY critical_skus DESC
LIMIT 5;`,
    executionTime: '4.6ms',
    columns: ['warehouse_city', 'critical_skus', 'lowest_stock', 'avg_stock_level'],
    rows: [
      ['Chicago Hub A', 142, 2, '6.4'],
      ['Dallas Central', 98, 1, '8.1'],
      ['Frankfurt Logistics', 76, 4, '9.2'],
      ['Tokyo East', 54, 3, '7.8'],
      ['London Gateway', 41, 5, '10.5'],
    ],
    explainPlan: `-> Limit: 5 row(s) (cost=1420.5 rows=5)
  -> Sort: critical_skus DESC
    -> Table scan on <temporary>
      -> Aggregate using temporary table
        -> Nested loop inner join (cost=980.2)`,
  },
  mssql: {
    name: 'SQL Server',
    badge: 'Enterprise T-SQL',
    dbLabel: 'CORP_ERP (T-SQL)',
    schemaTree: {
      tables: [
        { name: 'LedgerEntries', rows: '1.8M', columns: ['EntryID BIGINT PK', 'AccountID INT', 'Amount MONEY', 'PostingDate DATETIME2'] },
        { name: 'ChartOfAccounts', rows: '450', columns: ['AccountID INT PK', 'Category VARCHAR(50)', 'AccountName VARCHAR(100)'] },
      ],
    },
    samplePrompt: 'Quarterly debit vs credit totals aggregated by account category',
    generatedSql: `-- Synthesized by zero-sql RAG Engine for Microsoft SQL Server
SELECT TOP 5
  c.Category,
  COUNT(l.EntryID) AS TotalPostings,
  FORMAT(SUM(CASE WHEN l.Amount >= 0 THEN l.Amount ELSE 0 END), 'C', 'en-US') AS TotalDebits,
  FORMAT(SUM(CASE WHEN l.Amount < 0 THEN ABS(l.Amount) ELSE 0 END), 'C', 'en-US') AS TotalCredits
FROM ChartOfAccounts c WITH (NOLOCK)
INNER JOIN LedgerEntries l WITH (NOLOCK) ON l.AccountID = c.AccountID
WHERE l.PostingDate >= '2026-01-01'
GROUP BY c.Category
ORDER BY SUM(ABS(l.Amount)) DESC;`,
    executionTime: '6.9ms',
    columns: ['Category', 'TotalPostings', 'TotalDebits', 'TotalCredits'],
    rows: [
      ['Operational Expenses', '412,890', '$14,820,900.00', '$1,240,000.00'],
      ['Revenue & Licensing', '289,140', '$890,000.00', '$38,450,000.00'],
      ['Payroll & Benefits', '94,200', '$8,940,200.00', '$0.00'],
      ['Capital Assets', '12,400', '$4,120,000.00', '$320,000.00'],
    ],
    explainPlan: `StmtText: SELECT TOP 5 c.Category, COUNT(l.EntryID)...
|--Top(TOP EXPRESSION:((5)))
   |--Sort(ORDER BY:([Expr1008] DESC))
      |--Hash Match(Aggregate, HASH:([c].[Category]))
         |--Hash Match(Inner Join, HASH:([l].[AccountID])=([c].[AccountID]))`,
  },
  files: {
    name: 'Flat Files Engine',
    badge: 'CSV • XLSX • JSON',
    dbLabel: 'q4_churn_data.csv (in-memory)',
    schemaTree: {
      tables: [
        { name: 'q4_churn_data.csv', rows: '150,000', columns: ['customer_id', 'monthly_charges', 'tenure_months', 'contract_type', 'churned'] },
        { name: 'sales_forecast.xlsx', rows: '12,500', columns: ['region', 'quota', 'actual_sales', 'variance'] },
      ],
    },
    samplePrompt: 'Calculate churn rate and average tenure for month-to-month contracts vs annual',
    generatedSql: `-- Synthesized by zero-sql Flat File Query Engine
SELECT 
  contract_type,
  COUNT(*) AS total_records,
  ROUND(AVG(tenure_months), 1) AS avg_tenure_months,
  ROUND(AVG(monthly_charges), 2) AS avg_monthly_bill,
  ROUND(SUM(CASE WHEN churned = 'Yes' THEN 1.0 ELSE 0.0 END) / COUNT(*) * 100, 2) AS churn_rate_pct
FROM "q4_churn_data.csv"
GROUP BY contract_type
ORDER BY churn_rate_pct DESC;`,
    executionTime: '3.1ms (Direct File Query)',
    columns: ['contract_type', 'total_records', 'avg_tenure_months', 'avg_monthly_bill', 'churn_rate_pct'],
    rows: [
      ['Month-to-month', '82,450', '18.2', '$73.50', '42.80%'],
      ['One year', '38,200', '41.5', '$65.20', '11.20%'],
      ['Two year', '29,350', '56.8', '$60.80', '2.85%'],
    ],
    explainPlan: `STREAMING CSV INGESTION PIPELINE:
Direct Memory Map -> SIMD Delimiter Parser (q4_churn_data.csv)
  Vectorized Aggregation across 150,000 rows
  Memory footprint: 14.2 MB • Zero server setup required`,
  },
};

export default function DesktopWindow() {
  const [activeDialect, setActiveDialect] = useState<Dialect>('sqlite');
  const [activeTab, setActiveTab] = useState<'editor' | 'explain' | 'erd'>('editor');
  const [copied, setCopied] = useState(false);
  const [screenShareMode, setScreenShareMode] = useState(false);

  const data = DIALECT_DATA[activeDialect];

  const handleCopy = () => {
    navigator.clipboard.writeText(data.generatedSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0f1117] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden text-slate-300">
      
      {/* Dialect Switcher Bar (Beekeeper-style engine selector) */}
      <div className="bg-[#141720] border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            Switch Active Engine:
          </span>
          <div className="flex flex-wrap items-center gap-1">
            {(Object.keys(DIALECT_DATA) as Dialect[]).map((key) => {
              const item = DIALECT_DATA[key];
              const isSelected = activeDialect === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDialect(key)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status indicator & Privacy Mode toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setScreenShareMode(!screenShareMode)}
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
              screenShareMode
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
            title="Screen-share Privacy Shield masks sensitive strings"
          >
            {screenShareMode ? <EyeOff className="w-3 h-3 text-purple-400" /> : <Eye className="w-3 h-3" />}
            <span>Screen-Share Shield: {screenShareMode ? 'ON' : 'OFF'}</span>
          </button>

          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Connected: {data.dbLabel}
          </span>
        </div>
      </div>

      {/* Window Title Bar */}
      <div className="bg-[#12141a] px-4 py-2 border-b border-white/5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-black/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-black/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-black/20"></span>
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            zero-sql — {data.dbLabel} • [Read-Write Safe Mode]
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span>Engine: <strong className="text-white">{data.name}</strong></span>
          <span className="px-1.5 py-0.2 rounded bg-white/5 text-[10px] text-emerald-400 border border-emerald-500/20">
            {data.badge}
          </span>
        </div>
      </div>

      {/* Main Studio Body (Split into Left Sidebar + Main Editor Area) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
        
        {/* Left Sidebar: Schema Explorer (3 cols) */}
        <div className="lg:col-span-3 bg-[#111319] border-r border-white/5 p-3 flex flex-col justify-between select-none text-xs">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-slate-400 font-semibold uppercase text-[10px] tracking-wider px-1">
              <span>Schema Explorer</span>
              <span className="text-emerald-400 font-mono">3 tables</span>
            </div>

            {/* Tree nodes */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 text-white font-medium">
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                <span className="truncate">{data.dbLabel.split(' ')[0]}</span>
              </div>

              <div className="pl-4 space-y-1">
                {data.schemaTree.tables.map((tbl, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5 text-slate-300 hover:text-white cursor-pointer group">
                      <div className="flex items-center gap-1.5 truncate">
                        <TableIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span className="font-mono text-xs truncate">{tbl.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300">{tbl.rows}</span>
                    </div>

                    {/* Columns preview under first table */}
                    {i === 0 && (
                      <div className="pl-5 space-y-0.5 text-[11px] font-mono text-slate-400">
                        {tbl.columns.slice(0, 4).map((col, idx) => (
                          <div key={idx} className="flex items-center gap-1 hover:text-slate-200">
                            <span className="text-slate-400">•</span>
                            <span className="truncate">{col}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Footer Stats */}
          <div className="pt-4 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400 font-mono">
            <div className="flex justify-between">
              <span>RAG Context:</span>
              <span className="text-emerald-400">Cached (100% Local)</span>
            </div>
            <div className="flex justify-between">
              <span>Transaction Mode:</span>
              <span className="text-slate-300">AUTO-COMMIT SAFE</span>
            </div>
          </div>
        </div>

        {/* Right Main Area: Natural Language Prompt + Editor + Results (9 cols) */}
        <div className="lg:col-span-9 flex flex-col bg-[#0d0e12]">
          
          {/* AI Prompt Input Bar */}
          <div className="p-3 bg-[#13161f] border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0e12] border border-white/10 flex-1">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-400 shrink-0 font-medium">Ask AI:</span>
              <input 
                type="text" 
                readOnly 
                value={data.samplePrompt} 
                className="bg-transparent text-xs text-white focus:outline-none w-full font-sans cursor-default" 
              />
            </div>
            <button 
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-md shadow-emerald-500/20"
            >
              <Terminal className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Synthesize SQL</span>
            </button>
          </div>

          {/* Editor Header Tabs */}
          <div className="bg-[#101218] border-b border-white/5 px-3 flex items-center justify-between">
            <div className="flex items-center gap-1 pt-1.5">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1.5 rounded-t-lg text-xs font-mono flex items-center gap-2 border-t-2 transition-all ${
                  activeTab === 'editor'
                    ? 'bg-[#0d0e12] text-white border-emerald-400 font-semibold'
                    : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                <span>query_analysis.sql</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </button>

              <button
                onClick={() => setActiveTab('explain')}
                className={`px-3 py-1.5 rounded-t-lg text-xs font-mono flex items-center gap-1.5 border-t-2 transition-all ${
                  activeTab === 'explain'
                    ? 'bg-[#0d0e12] text-white border-blue-400 font-semibold'
                    : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                <span>EXPLAIN Plan</span>
              </button>
            </div>

            {/* Editor Action Buttons */}
            <div className="flex items-center gap-2 py-1">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors"
                title="Copy SQL Query"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy SQL'}</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold shadow transition-all"
                title="Execute Query [Ctrl+Enter]"
              >
                <Play className="w-3 h-3 fill-slate-950" />
                <span>Run (Ctrl+Enter)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Monaco Code View */}
          {activeTab === 'editor' && (
            <div className="p-4 bg-[#0d0e12] font-mono text-xs overflow-x-auto leading-relaxed border-b border-white/5 select-text min-h-[160px]">
              <pre className="text-slate-300">
                {data.generatedSql.split('\n').map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="w-8 shrink-0 text-slate-400 select-none text-right pr-4 font-mono text-[11px]">
                      {idx + 1}
                    </span>
                    <span className={
                      line.startsWith('--') 
                        ? 'text-slate-400 italic' 
                        : line.includes('SELECT') || line.includes('FROM') || line.includes('WHERE') || line.includes('GROUP BY') || line.includes('ORDER BY')
                        ? 'text-emerald-400 font-semibold'
                        : line.includes('JOIN') || line.includes('HAVING') || line.includes('LIMIT')
                        ? 'text-blue-400 font-semibold'
                        : 'text-slate-200'
                    }>
                      {line}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          )}

          {/* Tab 2: Explain Plan */}
          {activeTab === 'explain' && (
            <div className="p-4 bg-[#0d0e12] font-mono text-xs overflow-x-auto leading-relaxed border-b border-white/5 min-h-[160px]">
              <div className="text-slate-400 mb-2 font-sans font-medium text-xs flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Query Execution Plan Optimizer:
              </div>
              <pre className="text-emerald-300 bg-black/40 p-3 rounded-lg border border-white/5 leading-relaxed text-[11px]">
                {data.explainPlan}
              </pre>
            </div>
          )}

          {/* Bottom Results Grid Header */}
          <div className="bg-[#111319] px-4 py-2 border-b border-white/5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white">Query Results</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-400 font-medium">{data.rows.length} rows returned in {data.executionTime}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="hover:text-white cursor-pointer">Export: CSV</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">Excel</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">JSON</span>
            </div>
          </div>

          {/* Virtualized Data Table View */}
          <div className="overflow-x-auto flex-1 bg-[#0d0e12]">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#141720] border-b border-white/10 text-slate-300">
                  <th className="py-2 px-3 w-10 text-slate-400 select-none border-r border-white/5 text-center">#</th>
                  {data.columns.map((col, idx) => (
                    <th key={idx} className="py-2 px-3 border-r border-white/5 font-semibold text-slate-200">
                      <div className="flex items-center justify-between gap-2">
                        <span>{col}</span>
                        <span className="text-[10px] text-slate-400">↕</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-2 px-3 text-slate-400 border-r border-white/5 text-center select-none text-[11px]">
                      {rIdx + 1}
                    </td>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2 px-3 border-r border-white/5 text-slate-200 truncate max-w-[200px]">
                        {screenShareMode && typeof cell === 'string' && cell.includes('@') ? (
                          <span className="filter blur-[3px] select-none text-slate-400">user***@***.***</span>
                        ) : cell === null ? (
                          <span className="text-slate-400 italic">NULL</span>
                        ) : (
                          String(cell)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Status Bar */}
          <div className="bg-[#101217] px-4 py-1.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span>Status: <strong className="text-emerald-400">200 OK</strong></span>
              <span>Memory: <strong>14.2 MB</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span>Scroll Virtualization: Active</span>
              <span className="text-slate-400">•</span>
              <span>Format: Strict</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
