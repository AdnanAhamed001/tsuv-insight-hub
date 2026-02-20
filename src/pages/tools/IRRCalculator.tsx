import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const IRRCalculator = () => {
  const [investment, setInvestment] = useState(1000000);
  const [exitValue, setExitValue] = useState(10000000);
  const [years, setYears] = useState(5);

  const irr = years > 0 && investment > 0 ? (Math.pow(exitValue / investment, 1 / years) - 1) * 100 : 0;
  const roiMultiple = investment > 0 ? exitValue / investment : 0;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="IRR (Internal Rate of Return) Calculator" description="Estimate annualized investor return." breadcrumb="IRR Calculator" cta={{ text: "Plan your exit scenario", link: "/resources/exit-scenario" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Investment Amount (₹)</label><input type="number" className={inputClass} value={investment} onChange={(e) => setInvestment(+e.target.value)} /></div>
          <div><label className={labelClass}>Exit Value (₹)</label><input type="number" className={inputClass} value={exitValue} onChange={(e) => setExitValue(+e.target.value)} /></div>
          <div><label className={labelClass}>Years to Exit</label><input type="number" className={inputClass} value={years} onChange={(e) => setYears(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="block text-xs text-muted-foreground">IRR</span><span className="font-display text-xl font-bold text-primary">{irr.toFixed(1)}%</span></div>
            <div className="rounded-lg bg-secondary/20 p-4 text-center"><span className="block text-xs text-muted-foreground">ROI Multiple</span><span className="font-display text-xl font-bold text-secondary">{roiMultiple.toFixed(1)}x</span></div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default IRRCalculator;
