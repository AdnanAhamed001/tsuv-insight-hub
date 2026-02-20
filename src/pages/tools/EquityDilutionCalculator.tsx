import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["hsl(198,100%,22%)", "hsl(37,96%,62%)", "hsl(198,20%,70%)"];

const EquityDilutionCalculator = () => {
  const [preMoney, setPreMoney] = useState(5000000);
  const [investment, setInvestment] = useState(1000000);
  const [founderPct, setFounderPct] = useState(100);
  const [esopPct, setEsopPct] = useState(10);
  const [hasRound2, setHasRound2] = useState(false);
  const [preMoney2, setPreMoney2] = useState(10000000);
  const [investment2, setInvestment2] = useState(2000000);
  const [esopPct2, setEsopPct2] = useState(5);

  const postMoney = preMoney + investment;
  const investorPct = (investment / postMoney) * 100;
  const founderNew = founderPct * (1 - investorPct / 100 - esopPct / 100);

  let founderFinal = founderNew;
  let investor2Pct = 0;
  if (hasRound2) {
    const postMoney2 = preMoney2 + investment2;
    investor2Pct = (investment2 / postMoney2) * 100;
    founderFinal = founderNew * (1 - investor2Pct / 100 - esopPct2 / 100);
  }

  const chartData = hasRound2
    ? [
        { name: "Founder", value: founderFinal },
        { name: "Investor 1", value: investorPct },
        { name: "Investor 2", value: investor2Pct },
        { name: "ESOP", value: esopPct + esopPct2 },
      ]
    : [
        { name: "Founder", value: founderNew },
        { name: "Investor", value: investorPct },
        { name: "ESOP", value: esopPct },
      ];

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Equity Dilution Calculator" description="Understand how funding rounds impact founder ownership before you sign a term sheet." breadcrumb="Equity Dilution" cta={{ text: "Ready to pitch to investors?", link: "/resources/fundraising-readiness" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold">Round 1</h3>
          <div><label className={labelClass}>Pre-Money Valuation (₹)</label><input type="number" className={inputClass} value={preMoney} onChange={(e) => setPreMoney(+e.target.value)} /></div>
          <div><label className={labelClass}>Investment Amount (₹)</label><input type="number" className={inputClass} value={investment} onChange={(e) => setInvestment(+e.target.value)} /></div>
          <div><label className={labelClass}>Founder Current Ownership (%)</label><input type="number" className={inputClass} value={founderPct} onChange={(e) => setFounderPct(+e.target.value)} /></div>
          <div><label className={labelClass}>ESOP Pool (%)</label><input type="number" className={inputClass} value={esopPct} onChange={(e) => setEsopPct(+e.target.value)} /></div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={hasRound2} onChange={(e) => setHasRound2(e.target.checked)} className="rounded" />
            Add Second Round
          </label>

          {hasRound2 && (
            <>
              <h3 className="font-display text-lg font-semibold pt-2">Round 2</h3>
              <div><label className={labelClass}>Pre-Money Valuation (₹)</label><input type="number" className={inputClass} value={preMoney2} onChange={(e) => setPreMoney2(+e.target.value)} /></div>
              <div><label className={labelClass}>Investment Amount (₹)</label><input type="number" className={inputClass} value={investment2} onChange={(e) => setInvestment2(+e.target.value)} /></div>
              <div><label className={labelClass}>ESOP Pool 2 (%)</label><input type="number" className={inputClass} value={esopPct2} onChange={(e) => setEsopPct2(+e.target.value)} /></div>
            </>
          )}
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <span className="block text-xs text-muted-foreground">Post-Money Valuation</span>
              <span className="font-display text-xl font-bold text-primary">₹{postMoney.toLocaleString()}</span>
            </div>
            <div className="rounded-lg bg-secondary/20 p-4 text-center">
              <span className="block text-xs text-muted-foreground">Founder Ownership</span>
              <span className="font-display text-xl font-bold text-secondary">{(hasRound2 ? founderFinal : founderNew).toFixed(2)}%</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}>
                  {chartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default EquityDilutionCalculator;
