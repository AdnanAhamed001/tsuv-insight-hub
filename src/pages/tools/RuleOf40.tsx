import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const RuleOf40 = () => {
  const [revenueGrowth, setRevenueGrowth] = useState(60);
  const [ebitdaMargin, setEbitdaMargin] = useState(-10);
  const score = revenueGrowth + ebitdaMargin;
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Rule of 40 Calculator" description="Evaluate SaaS growth and profitability balance." breadcrumb="Rule of 40" cta={{ text: "Check burn multiple", link: "/resources/burn-multiple" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Annual Revenue Growth (%)</label><input type="number" className={inputClass} value={revenueGrowth} onChange={(e) => setRevenueGrowth(+e.target.value)} /></div>
          <div><label className={labelClass}>EBITDA Margin (%)</label><input type="number" className={inputClass} value={ebitdaMargin} onChange={(e) => setEbitdaMargin(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className={`rounded-lg p-6 text-center ${score >= 40 ? "bg-green-50" : "bg-secondary/20"}`}>
            <span className="block text-xs text-muted-foreground">Rule of 40 Score</span>
            <span className="font-display text-4xl font-bold">{score}</span>
            <p className="mt-2 text-sm font-medium">{score >= 40 ? "✅ Strong — above 40" : "⚠️ Below 40 — needs improvement"}</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default RuleOf40;
