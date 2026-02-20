import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const CustomerPayback = () => {
  const [cac, setCac] = useState(5000);
  const [monthlyProfit, setMonthlyProfit] = useState(500);
  const payback = monthlyProfit > 0 ? cac / monthlyProfit : 0;
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Customer Payback Period Calculator" description="Understand how quickly acquisition costs are recovered." breadcrumb="Customer Payback" cta={{ text: "Calculate your LTV", link: "/resources/ltv-calculator" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Customer Acquisition Cost (₹)</label><input type="number" className={inputClass} value={cac} onChange={(e) => setCac(+e.target.value)} /></div>
          <div><label className={labelClass}>Monthly Gross Profit per Customer (₹)</label><input type="number" className={inputClass} value={monthlyProfit} onChange={(e) => setMonthlyProfit(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className={`rounded-lg p-6 text-center ${payback <= 12 ? "bg-green-50" : "bg-secondary/20"}`}>
            <span className="block text-xs text-muted-foreground">Payback Period</span>
            <span className="font-display text-3xl font-bold">{payback.toFixed(1)} months</span>
            <p className="mt-2 text-xs text-muted-foreground">{payback <= 12 ? "✅ Healthy — under 12 months" : "⚠️ Consider improving unit economics"}</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default CustomerPayback;
