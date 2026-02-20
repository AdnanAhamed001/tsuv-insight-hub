import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Plus, Trash2 } from "lucide-react";

const COLORS = ["hsl(198,100%,22%)", "hsl(37,96%,62%)", "hsl(198,50%,40%)", "hsl(37,70%,45%)", "hsl(198,30%,50%)", "hsl(37,50%,55%)", "hsl(198,20%,60%)", "hsl(37,30%,65%)", "hsl(198,40%,35%)", "hsl(37,80%,50%)"];

interface CustomExpense {
  name: string;
  monthly: number;
  oneTime: number;
  duration: number;
}

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
  const [customExpenses, setCustomExpenses] = useState<CustomExpense[]>([]);
  const [growthMode, setGrowthMode] = useState(false);
  const [growthPct, setGrowthPct] = useState(10);

  // Step 1: Total Monthly Burn
  const standardMonthlyBurn = expenses.reduce((a, e) => a + e.monthly, 0);
  const customMonthlyBurn = customExpenses.reduce((a, e) => a + e.monthly, 0);
  const totalMonthlyBurn = standardMonthlyBurn + customMonthlyBurn;

  // Step 2: Total One-Time Costs
  const totalOneTimeCosts = customExpenses.reduce((a, e) => a + e.oneTime, 0);

  // Step 3: Total Planned Spend
  const totalPlannedSpend = (totalMonthlyBurn * duration) + totalOneTimeCosts;

  // Step 4: New Cash Available
  const newCash = cashBalance + targetRaise;

  // Step 5: Runway After Raise
  const runway = totalMonthlyBurn > 0 ? newCash / totalMonthlyBurn : Infinity;

  // Growth Mode
  const revenueGrowth = monthlyRevenue * (growthPct / 100);
  const adjustedBurn = Math.max(0, totalMonthlyBurn - revenueGrowth);
  const adjustedRunway = adjustedBurn > 0 ? newCash / adjustedBurn : Infinity;
  const burnReduction = totalMonthlyBurn > 0 ? ((totalMonthlyBurn - adjustedBurn) / totalMonthlyBurn) * 100 : 0;

  // Step 6: Allocation per category (pie chart)
  const allCategories = [
    ...expenses.map(e => ({ name: e.name, totalSpend: e.monthly * duration })),
    ...customExpenses.map(e => ({ name: e.name || "Custom", totalSpend: (e.monthly * (e.duration || duration)) + e.oneTime })),
  ].filter(c => c.totalSpend > 0);

  const updateExpense = (i: number, val: number) => {
    const n = [...expenses]; n[i] = { ...n[i], monthly: val }; setExpenses(n);
  };

  const addCustomExpense = () => {
    setCustomExpenses([...customExpenses, { name: "", monthly: 0, oneTime: 0, duration }]);
  };

  const updateCustomExpense = (i: number, field: keyof CustomExpense, val: string | number) => {
    const n = [...customExpenses];
    n[i] = { ...n[i], [field]: val };
    setCustomExpenses(n);
  };

  const removeCustomExpense = (i: number) => {
    setCustomExpenses(customExpenses.filter((_, idx) => idx !== i));
  };

  // Smart Insights
  const insights: string[] = [];
  const salaryPct = totalMonthlyBurn > 0 ? (expenses[0].monthly / totalMonthlyBurn) * 100 : 0;
  const marketingPct = totalMonthlyBurn > 0 ? (expenses[2].monthly / totalMonthlyBurn) * 100 : 0;
  if (salaryPct > 60) insights.push("High team-heavy allocation. Ensure productivity scaling.");
  if (marketingPct > 50) insights.push("Marketing spend is high. Validate product-market fit.");
  if (runway < 12 && runway !== Infinity) insights.push("Consider raising for 12–18 months stability.");
  if (growthMode && adjustedRunway > runway * 1.3) insights.push("Revenue growth dramatically improves runway sustainability.");

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

          <h3 className="font-display text-lg font-semibold pt-2">Custom Expenses</h3>
          {customExpenses.map((ce, i) => (
            <div key={i} className="rounded-lg border border-border p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Custom #{i + 1}</span>
                <button onClick={() => removeCustomExpense(i)} className="text-destructive hover:text-destructive/80"><Trash2 size={14} /></button>
              </div>
              <div><label className={labelClass}>Expense Name</label><input type="text" className={inputClass} value={ce.name} onChange={(e) => updateCustomExpense(i, "name", e.target.value)} placeholder="e.g. Contractor fees" /></div>
              <div><label className={labelClass}>Monthly Cost (₹)</label><input type="number" className={inputClass} value={ce.monthly} onChange={(e) => updateCustomExpense(i, "monthly", +e.target.value)} /></div>
              <div><label className={labelClass}>One-Time Cost (₹)</label><input type="number" className={inputClass} value={ce.oneTime} onChange={(e) => updateCustomExpense(i, "oneTime", +e.target.value)} /></div>
              <div><label className={labelClass}>Duration (months)</label><input type="number" className={inputClass} value={ce.duration} onChange={(e) => updateCustomExpense(i, "duration", +e.target.value)} /></div>
            </div>
          ))}
          <button onClick={addCustomExpense} className="flex items-center gap-2 rounded-md border border-dashed border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted w-full justify-center">
            <Plus size={14} /> Add Custom Expense
          </button>

          <label className="flex items-center gap-2 text-sm pt-2">
            <input type="checkbox" checked={growthMode} onChange={(e) => setGrowthMode(e.target.checked)} className="rounded" /> Enable Growth Mode
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
            <div className={`rounded-lg p-4 text-center ${runway >= 12 ? "bg-green-50" : "bg-destructive/10"}`}><span className="block text-xs text-muted-foreground">Runway</span><span className="font-display text-lg font-bold">{runway === Infinity ? "∞" : `${runway.toFixed(1)} mo`}</span></div>
            {totalOneTimeCosts > 0 && (
              <div className="rounded-lg bg-muted p-4 text-center"><span className="block text-xs text-muted-foreground">One-Time Costs</span><span className="font-display text-lg font-bold">₹{totalOneTimeCosts.toLocaleString()}</span></div>
            )}
            {growthMode && (
              <>
                <div className="rounded-lg bg-green-50 p-4 text-center"><span className="block text-xs text-muted-foreground">Adjusted Runway</span><span className="font-display text-lg font-bold">{adjustedRunway === Infinity ? "∞" : `${adjustedRunway.toFixed(1)} mo`}</span></div>
                <div className="rounded-lg bg-green-50 p-4 text-center"><span className="block text-xs text-muted-foreground">Burn Reduction</span><span className="font-display text-lg font-bold">{burnReduction.toFixed(1)}%</span></div>
              </>
            )}
          </div>

          {totalPlannedSpend > targetRaise && (
            <p className="mb-4 text-sm text-destructive font-medium">⚠️ Planned spend exceeds raise target. Consider raising ₹{totalPlannedSpend.toLocaleString()}.</p>
          )}

          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={allCategories} cx="50%" cy="50%" outerRadius={80} dataKey="totalSpend" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                {allCategories.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie><Tooltip formatter={(v: number) => `₹${v.toLocaleString()}`} /></PieChart>
            </ResponsiveContainer>
          </div>

          {/* Allocation Table */}
          <div className="mb-4 rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted"><tr><th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">Category</th><th className="px-3 py-2 text-right text-xs font-medium text-muted-foreground">Total</th><th className="px-3 py-2 text-right text-xs font-medium text-muted-foreground">%</th></tr></thead>
              <tbody>
                {allCategories.map((c, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-3 py-2">{c.name}</td>
                    <td className="px-3 py-2 text-right">₹{c.totalSpend.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right">{totalPlannedSpend > 0 ? ((c.totalSpend / totalPlannedSpend) * 100).toFixed(1) : 0}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {insights.length > 0 && (
            <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4">
              <h4 className="mb-2 font-display text-sm font-semibold">Smart Insights</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">{insights.map((ins, idx) => <li key={idx}>• {ins}</li>)}</ul>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default CapitalDeployment;
