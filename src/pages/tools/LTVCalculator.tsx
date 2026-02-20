import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const LTVCalculator = () => {
  const [arpu, setArpu] = useState(1000);
  const [grossMargin, setGrossMargin] = useState(70);
  const [churnRate, setChurnRate] = useState(5);

  const lifetime = churnRate > 0 ? 1 / (churnRate / 100) : 0;
  const ltv = arpu * (grossMargin / 100) * lifetime;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="LTV (Customer Lifetime Value) Calculator" description="Calculate long-term customer profitability." breadcrumb="LTV Calculator" cta={{ text: "Check your payback period", link: "/resources/customer-payback" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Average Revenue Per User (₹/month)</label><input type="number" className={inputClass} value={arpu} onChange={(e) => setArpu(+e.target.value)} /></div>
          <div><label className={labelClass}>Gross Margin (%)</label><input type="number" className={inputClass} value={grossMargin} onChange={(e) => setGrossMargin(+e.target.value)} /></div>
          <div><label className={labelClass}>Monthly Churn Rate (%)</label><input type="number" className={inputClass} value={churnRate} onChange={(e) => setChurnRate(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4"><span className="block text-xs text-muted-foreground">Customer Lifetime</span><span className="font-display text-xl font-bold text-primary">{lifetime.toFixed(1)} months</span></div>
            <div className="rounded-lg bg-secondary/20 p-4"><span className="block text-xs text-muted-foreground">Customer Lifetime Value</span><span className="font-display text-xl font-bold text-secondary">₹{ltv.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default LTVCalculator;
