import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#00516F", "#FBB040", "#0088A3", "#D4941F", "#006080", "#E8A020", "#004D5E", "#C08010"];

const defaultExpenses = [
  { name: "Salaries & Hiring", monthly: 150000 },
  { name: "Product & Engineering", monthly: 50000 },
  { name: "Marketing & Growth", monthly: 40000 },
  { name: "Sales Expenses", monthly: 30000 },
  { name: "Operations / Office", monthly: 20000 },
  { name: "Technology & SaaS Tools", monthly: 15000 },
  { name: "Legal & Compliance", monthly: 10000 },
  { name: "Admin & Miscellaneous", monthly: 10000 },
];

const CapitalDeployment = () => {
  const [targetRaise, setTargetRaise] = useState(5000000);
  const [cashBalance, setCashBalance] = useState(500000);
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [duration, setDuration] = useState(18);
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [growthMode, setGrowthMode] = useState(false);
  const [growthPct, setGrowthPct] = useState(10);

  const totalMonthlyBurn = expenses.reduce((a, e) => a + e.monthly, 0);
  const totalPlannedSpend = totalMonthlyBurn * duration;
  const newCash = cashBalance + targetRaise;
  const runway = totalMonthlyBurn > 0 ? newCash / totalMonthlyBurn : 0;

  const revenueGrowth = monthlyRevenue * (growthPct / 100);
  const adjustedBurn = Math.max(0, totalMonthlyBurn - revenueGrowth);
  const adjustedRunway = adjustedBurn > 0 ? newCash / adjustedBurn : Infinity;

  const chartData = expenses.filter(e => e.monthly > 0).map(e => ({ name: e.name, value: e.monthly * duration }));

  const updateExpense = (i: number, val: number) => {
    const n = [...expenses]; n[i] = { ...n[i], monthly: val }; setExpenses(n);
  };

  const insights: string[] = [];
  const salaryPct = expenses[0].monthly / totalMonthlyBurn * 100;
  const marketingPct = expenses[2].monthly / totalMonthlyBurn * 100;
  if (salaryPct > 60) insights.push("High team-heavy allocation. Ensure productivity scaling.");
  if (marketingPct > 50) insights.push("Marketing spend is high. Validate product-market fit.");
  if (runway < 12) insights.push("Consider raising for 12–18 months stability.");

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Capital Deployment Planner" description="Plan raise amount, allocation, and runway impact." breadcrumb="Capital Deployment">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold">Fund Details</h3>
          <div><label className={labelClass}>Target Raise Amount (₹)</label><input type="number" className={inputClass} value={targetRaise} onChange={(e) => setTargetRaise(+e.target.value)} /></div>
          <div><label className={labelClass}>Current Cash Balance (₹)</label><input type="number" className={inputClass} value={cashBalance} onChange={(e) => setCashBalance(+e.target.value)} /></div>
          <div><label className={labelClass}>Monthly Revenue (₹)</label><input type="number" className={inputClass} value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(+e.target.value)} /></div>
          <div><label className={labelClass}>Planned Duration (months)</label><input type="number" className={inputClass} value={duration} onChange={(e) => setDuration(+e.target.value)} /></div>

          <h3 className="font-display text-lg font-semibold pt-2">Monthly Expenses</h3>
          {expenses.map((e, i) => (
            <div key={e.name}><label className={labelClass}>{e.name}</label><input type="number" className={inputClass} value={e.monthly} onChange={(ev) => updateExpense(i, +ev.target.value)} /></div>
          ))}

          <label className="flex items-center gap-2 text-sm pt-2">
            <input type="checkbox" checked={growthMode} onChange={(e) => setGrowthMode(e.target.checked)} /> Enable Growth Mode
          </label>
          {growthMode && (
            <div><label className={labelClass}>Expected Monthly Revenue Growth (%)</label><input type="number" className={inputClass} value={growthPct} onChange={(e) => setGrowthPct(+e.target.value)} /></div>
          )}
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="block text-xs text-muted-foreground">Monthly Burn</span><span className="font-display text-lg font-bold text-primary">₹{totalMonthlyBurn.toLocaleString()}</span></div>
            <div className="rounded-lg bg-secondary/20 p-4 text-center"><span className="block text-xs text-muted-foreground">Total Planned Spend</span><span className="font-display text-lg font-bold text-secondary">₹{totalPlannedSpend.toLocaleString()}</span></div>
            <div className={`rounded-lg p-4 text-center ${runway >= 12 ? "bg-green-50" : "bg-destructive/10"}`}><span className="block text-xs text-muted-foreground">Runway</span><span className="font-display text-lg font-bold">{runway.toFixed(1)} mo</span></div>
            {growthMode && (
              <div className="rounded-lg bg-green-50 p-4 text-center"><span className="block text-xs text-muted-foreground">Adjusted Runway</span><span className="font-display text-lg font-bold">{adjustedRunway === Infinity ? "∞" : `${adjustedRunway.toFixed(1)} mo`}</span></div>
            )}
          </div>

          {totalPlannedSpend > targetRaise && (
            <p className="mb-4 text-sm text-destructive font-medium">⚠️ Planned spend exceeds raise target. Consider raising ₹{totalPlannedSpend.toLocaleString()}.</p>
          )}

          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                {chartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie><Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} /></PieChart>
            </ResponsiveContainer>
          </div>

          {insights.length > 0 && (
            <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4">
              <h4 className="mb-2 font-display text-sm font-semibold">Smart Insights</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">{insights.map((i, idx) => <li key={idx}>• {i}</li>)}</ul>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default CapitalDeployment;
