import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const RunwayBurnRate = () => {
  const [fixedCosts, setFixedCosts] = useState(200000);
  const [variableCosts, setVariableCosts] = useState(50000);
  const [revenue, setRevenue] = useState(80000);
  const [cashBalance, setCashBalance] = useState(3000000);

  const totalCosts = fixedCosts + variableCosts;
  const monthlyBurn = revenue >= totalCosts ? 0 : totalCosts - revenue;
  const runway = monthlyBurn > 0 ? cashBalance / monthlyBurn : Infinity;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Startup Runway & Burn Rate Calculator" description="Measure survival timeline and capital efficiency." breadcrumb="Runway & Burn Rate" cta={{ text: "Plan your capital deployment", link: "/resources/capital-deployment" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Monthly Fixed Costs (₹)</label><input type="number" className={inputClass} value={fixedCosts} onChange={(e) => setFixedCosts(+e.target.value)} /></div>
          <div><label className={labelClass}>Monthly Variable Costs (₹)</label><input type="number" className={inputClass} value={variableCosts} onChange={(e) => setVariableCosts(+e.target.value)} /></div>
          <div><label className={labelClass}>Monthly Revenue (₹)</label><input type="number" className={inputClass} value={revenue} onChange={(e) => setRevenue(+e.target.value)} /></div>
          <div><label className={labelClass}>Current Cash Balance (₹)</label><input type="number" className={inputClass} value={cashBalance} onChange={(e) => setCashBalance(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <span className="block text-xs text-muted-foreground">Monthly Burn Rate</span>
              <span className="font-display text-xl font-bold text-primary">₹{monthlyBurn.toLocaleString()}</span>
            </div>
            <div className={`rounded-lg p-4 text-center ${runway < 6 ? "bg-destructive/10" : runway < 12 ? "bg-secondary/20" : "bg-green-50"}`}>
              <span className="block text-xs text-muted-foreground">Runway</span>
              <span className="font-display text-xl font-bold">{runway === Infinity ? "∞" : `${runway.toFixed(1)} months`}</span>
            </div>
          </div>
          {runway < 6 && runway !== Infinity && <p className="mt-4 text-sm text-destructive font-medium">⚠️ Critical: Less than 6 months of runway. Consider fundraising immediately.</p>}
          {runway >= 6 && runway < 12 && <p className="mt-4 text-sm text-secondary font-medium">⚡ Caution: 6-12 months of runway. Start planning your next raise.</p>}
        </div>
      </div>
    </ToolLayout>
  );
};

export default RunwayBurnRate;
