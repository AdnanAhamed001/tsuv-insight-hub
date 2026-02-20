import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const BurnMultiple = () => {
  const [netBurn, setNetBurn] = useState(500000);
  const [netNewARR, setNetNewARR] = useState(600000);
  const multiple = netNewARR > 0 ? netBurn / netNewARR : 0;
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Burn Multiple Calculator" description="Measure capital efficiency against growth. Used by VCs." breadcrumb="Burn Multiple" cta={{ text: "Plan capital deployment", link: "/resources/capital-deployment" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Net Burn (Monthly, ₹)</label><input type="number" className={inputClass} value={netBurn} onChange={(e) => setNetBurn(+e.target.value)} /></div>
          <div><label className={labelClass}>Net New ARR (₹)</label><input type="number" className={inputClass} value={netNewARR} onChange={(e) => setNetNewARR(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className={`rounded-lg p-6 text-center ${multiple < 1 ? "bg-green-50" : multiple <= 2 ? "bg-secondary/20" : "bg-destructive/10"}`}>
            <span className="block text-xs text-muted-foreground">Burn Multiple</span>
            <span className="font-display text-4xl font-bold">{multiple.toFixed(2)}x</span>
            <p className="mt-2 text-sm font-medium">{multiple < 1 ? "🟢 Excellent" : multiple <= 2 ? "🟡 Acceptable" : "🔴 Risky"}</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default BurnMultiple;
