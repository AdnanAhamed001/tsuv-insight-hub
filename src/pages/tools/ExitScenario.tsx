import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const ExitScenario = () => {
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [initialOwnership, setInitialOwnership] = useState(20);
  const [futureDilution, setFutureDilution] = useState(30);
  const [exitValuation, setExitValuation] = useState(50000000);

  const finalOwnership = initialOwnership * (1 - futureDilution / 100) / 100;
  const returnValue = exitValuation * finalOwnership;
  const roiMultiple = returnValue / investmentAmount;
  const profit = returnValue - investmentAmount;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Exit Scenario (ROI) Calculator" description="Project investor returns and ownership at exit." breadcrumb="Exit Scenario" cta={{ text: "Calculate your IRR", link: "/resources/irr-calculator" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Investment Amount (₹)</label><input type="number" className={inputClass} value={investmentAmount} onChange={(e) => setInvestmentAmount(+e.target.value)} /></div>
          <div><label className={labelClass}>Initial Ownership (%)</label><input type="number" className={inputClass} value={initialOwnership} onChange={(e) => setInitialOwnership(+e.target.value)} /></div>
          <div><label className={labelClass}>Total Future Dilution (%)</label><input type="number" className={inputClass} value={futureDilution} onChange={(e) => setFutureDilution(+e.target.value)} /></div>
          <div><label className={labelClass}>Exit Valuation (₹)</label><input type="number" className={inputClass} value={exitValuation} onChange={(e) => setExitValuation(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="block text-xs text-muted-foreground">Final Ownership</span><span className="font-display text-xl font-bold text-primary">{(finalOwnership * 100).toFixed(2)}%</span></div>
            <div className="rounded-lg bg-secondary/20 p-4 text-center"><span className="block text-xs text-muted-foreground">Return Value</span><span className="font-display text-xl font-bold text-secondary">₹{returnValue.toLocaleString()}</span></div>
            <div className="rounded-lg bg-muted p-4 text-center"><span className="block text-xs text-muted-foreground">ROI Multiple</span><span className="font-display text-xl font-bold">{roiMultiple.toFixed(2)}x</span></div>
            <div className={`rounded-lg p-4 text-center ${profit > 0 ? "bg-green-50" : "bg-destructive/10"}`}><span className="block text-xs text-muted-foreground">Profit</span><span className="font-display text-xl font-bold">₹{profit.toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ExitScenario;
