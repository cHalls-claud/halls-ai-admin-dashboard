import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  Bitcoin,
  BriefcaseBusiness,
  DollarSign,
  Gem,
  Globe,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const stats = [
  { label: 'Total Portfolio', value: '$24.8M', delta: '+18.4%', positive: true, icon: Wallet },
  { label: 'Active Projects', value: '12', delta: '+2 this week', positive: true, icon: BriefcaseBusiness },
  { label: 'Bot Yield', value: '14.6%', delta: '+2.1%', positive: true, icon: TrendingUp },
  { label: 'Risk Score', value: 'Low', delta: '-6.2%', positive: true, icon: ShieldCheck },
];

const projects = [
  { name: 'HALLS AI OS', type: 'Platform', value: '$8.4M', roi: '+31.2%', status: 'Active', color: 'emerald' },
  { name: 'Trade Bot FX', type: 'Forex', value: '$3.7M', roi: '+22.8%', status: 'Scaling', color: 'cyan' },
  { name: 'Crypto Alpha', type: 'Crypto', value: '$4.2M', roi: '+28.9%', status: 'Active', color: 'violet' },
  { name: 'Futures Capture', type: 'Futures', value: '$2.9M', roi: '+17.4%', status: 'Monitoring', color: 'amber' },
  { name: 'Saham Growth', type: 'Equity', value: '$2.1M', roi: '+12.7%', status: 'Optimizing', color: 'rose' },
  { name: 'AI Signal Labs', type: 'Analytics', value: '$1.4M', roi: '+21.1%', status: 'Active', color: 'indigo' },
];

const chartBars = [52, 78, 64, 88, 92, 75, 98, 86, 70, 93, 80, 97];

const conversionRates = {
  USD: 1,
  IDR: 16000,
  EUR: 0.92,
  GBP: 0.79,
  BTC: 0.000016,
  ETH: 0.00024,
  USDT: 1,
  SGD: 1.35,
};

const performanceRows = [
  { name: 'AI Bot Core', return: '+18.8%', drawdown: '8.1%', status: 'Healthy' },
  { name: 'FX Automation', return: '+12.5%', drawdown: '6.7%', status: 'Healthy' },
  { name: 'Crypto Swing', return: '+24.7%', drawdown: '13.4%', status: 'Watch' },
  { name: 'Futures Trader', return: '+9.4%', drawdown: '5.2%', status: 'Healthy' },
];

const accountOverview = [
  { label: 'Equity', value: '$18.2M' },
  { label: 'Cash Flow', value: '$4.8M' },
  { label: 'Open Positions', value: '36' },
  { label: 'Exposure', value: '43%' },
];

function App() {
  const [amount, setAmount] = useState(2500);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('IDR');

  const convertedValue = useMemo(() => {
    const usdValue = amount / conversionRates[from];
    const result = usdValue * conversionRates[to];
    return result;
  }, [amount, from, to]);

  const totalValuation = useMemo(
    () => projects.reduce((sum, item) => sum + Number.parseFloat(item.value.replace(/[$,M]/g, '')) * (item.value.includes('M') ? 1_000_000 : 1), 0),
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[1600px] p-4 md:p-6">
        <div className="flex min-h-[calc(100vh-2rem)] gap-4">
          <aside className="panel-glow hidden w-72 shrink-0 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 lg:flex lg:flex-col">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg font-bold text-slate-950">
                H
              </div>
              <div>
                <p className="text-lg font-semibold text-white">HALLS AI OS</p>
                <p className="text-xs text-slate-400">Admin Console</p>
              </div>
            </div>

            <nav className="space-y-2 text-sm">
              {[
                ['Overview', true],
                ['Projects', false],
                ['Valuation', false],
                ['Trading Bot', false],
                ['Risk Control', false],
                ['Reports', false],
                ['Settings', false],
              ].map(([label, active]) => (
                <button
                  key={label}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
                      : 'text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{label}</span>
                  {active && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                </button>
              ))}
            </nav>

            <div className="mt-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-300">
                <Sparkles size={16} />
                <span className="text-sm font-medium">AI Status</span>
              </div>
              <p className="text-2xl font-bold text-white">Online</p>
              <p className="mt-1 text-xs text-emerald-200/80">12 strategies active • 99.98% uptime</p>
            </div>
          </aside>

          <main className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-6">
            <header className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Operations Overview</p>
                <h1 className="mt-1 text-2xl font-bold text-white md:text-3xl">HALLS AI Admin Dashboard</h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-300 md:flex">
                  <Search size={16} className="text-slate-400" />
                  Search project or asset
                </div>
                <button className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400">
                  Export Report
                </button>
              </div>
            </header>

            <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map(({ label, value, delta, positive, icon: Icon }) => (
                <div key={label} className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm text-slate-400">{label}</p>
                    <div className="rounded-lg bg-slate-800 p-2 text-emerald-400">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white">{value}</p>
                    </div>
                    <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${positive ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                      {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {delta}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="mb-6 grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Growth</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Valuation Trend</h2>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    +24.9% YoY
                  </div>
                </div>

                <div className="flex h-56 items-end gap-2">
                  {chartBars.map((value, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                      <div className="w-full rounded-t-xl bg-gradient-to-t from-emerald-500 via-cyan-500 to-sky-400" style={{ height: `${value}%` }} />
                      <span className="text-[10px] text-slate-500">{['J','F','M','A','M','J','J','A','S','O','N','D'][index]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Account</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Overview</h2>
                  </div>
                  <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                    Stable
                  </div>
                </div>

                <div className="space-y-3">
                  {accountOverview.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3">
                      <span className="text-sm text-slate-400">{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-6 grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Project Portfolio</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Active Projects</h2>
                  </div>
                  <button className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs text-slate-200">
                    Manage All
                  </button>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {projects.map(({ name, type, value, roi, status, color }) => (
                    <div key={name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${color}-500/15 text-${color}-300`}>
                          <Gem size={18} />
                        </div>
                        <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                          {status}
                        </span>
                      </div>

                      <p className="text-base font-semibold text-white">{name}</p>
                      <p className="mt-1 text-sm text-slate-400">{type}</p>

                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Value</p>
                          <p className="mt-1 text-xl font-bold text-white">{value}</p>
                        </div>
                        <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                          {roi}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Converter</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Asset Value</h2>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-2 text-cyan-300">
                    <DollarSign size={18} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value) || 0)}
                      className="w-full border-0 bg-transparent text-xl font-semibold text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-200 outline-none"
                    >
                      {Object.keys(conversionRates).map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>

                    <select
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-200 outline-none"
                    >
                      {Object.keys(conversionRates).map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Converted</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {convertedValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} {to}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Strategy Monitor</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Performance Summary</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200">
                    <BarChart3 size={14} />
                    Real-time
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-800">
                  <table className="min-w-full text-left text-sm text-slate-200">
                    <thead className="bg-slate-900 text-slate-400">
                      <tr>
                        <th className="px-4 py-3 font-medium">Strategy</th>
                        <th className="px-4 py-3 font-medium">Return</th>
                        <th className="px-4 py-3 font-medium">Drawdown</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceRows.map(({ name, return: rtn, drawdown, status }) => (
                        <tr key={name} className="border-t border-slate-800 bg-slate-950/40">
                          <td className="px-4 py-3 font-medium text-white">{name}</td>
                          <td className="px-4 py-3 text-emerald-300">{rtn}</td>
                          <td className="px-4 py-3 text-slate-300">{drawdown}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                              {status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="panel-glow rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Total</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">Project Valuation</h2>
                  </div>
                  <div className="rounded-full bg-violet-500/10 p-2 text-violet-300">
                    <Layers3 size={18} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Estimated Value</p>
                    <p className="mt-2 text-3xl font-bold text-white">
                      ${((totalValuation / 1000000).toFixed(1))}M
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                      <span className="flex items-center gap-2">
                        <Bitcoin size={15} className="text-amber-400" />
                        Crypto
                      </span>
                      <span className="font-semibold text-white">$8.1M</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                      <span className="flex items-center gap-2">
                        <Globe size={15} className="text-cyan-400" />
                        Forex
                      </span>
                      <span className="font-semibold text-white">$6.4M</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                      <span className="flex items-center gap-2">
                        <BadgeDollarSign size={15} className="text-emerald-400" />
                        Equity
                      </span>
                      <span className="font-semibold text-white">$5.3M</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2">
                      <span className="flex items-center gap-2">
                        <Zap size={15} className="text-rose-400" />
                        Futures
                      </span>
                      <span className="font-semibold text-white">$4.2M</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
