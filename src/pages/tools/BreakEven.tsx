import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const BreakEven = () => {
  const [fixedCosts, setFixedCosts] = useState(500000);
  const [sellingPrice, setSellingPrice] = useState(500);
  const [variableCost, setVariableCost] = useState(200);

  const contributionMargin = sellingPrice - variableCost;
  const breakEvenUnits = contributionMargin > 0 ? fixedCosts / contributionMargin : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Break-Even Calculator" description="Determine revenue required to cover costs." breadcrumb="Break-Even" cta={{ text: "Check your runway", link: "/resources/runway-burn-rate" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Fixed Costs (₹)</label><input type="number" className={inputClass} value={fixedCosts} onChange={(e) => setFixedCosts(+e.target.value)} /></div>
          <div><label className={labelClass}>Selling Price per Unit (₹)</label><input type="number" className={inputClass} value={sellingPrice} onChange={(e) => setSellingPrice(+e.target.value)} /></div>
          <div><label className={labelClass}>Variable Cost per Unit (₹)</label><input type="number" className={inputClass} value={variableCost} onChange={(e) => setVariableCost(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4"><span className="block text-xs text-muted-foreground">Contribution Margin</span><span className="font-display text-xl font-bold text-primary">₹{contributionMargin.toLocaleString()}</span></div>
            <div className="rounded-lg bg-secondary/20 p-4"><span className="block text-xs text-muted-foreground">Break-Even Units</span><span className="font-display text-xl font-bold text-secondary">{Math.ceil(breakEvenUnits).toLocaleString()}</span></div>
            <div className="rounded-lg bg-muted p-4"><span className="block text-xs text-muted-foreground">Break-Even Revenue</span><span className="font-display text-xl font-bold">₹{breakEvenRevenue.toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default BreakEven;
