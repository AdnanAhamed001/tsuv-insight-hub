import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const MarketSizing = () => {
  const [totalCustomers, setTotalCustomers] = useState(10000000);
  const [arpu, setArpu] = useState(500);
  const [targetPct, setTargetPct] = useState(20);
  const [capturePct, setCapturePct] = useState(5);

  const tam = totalCustomers * arpu;
  const sam = tam * (targetPct / 100);
  const som = sam * (capturePct / 100);

  const fmt = (v: number) => v >= 10000000 ? `₹${(v / 10000000).toFixed(1)}Cr` : v >= 100000 ? `₹${(v / 100000).toFixed(1)}L` : `₹${v.toLocaleString()}`;
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  return (
    <ToolLayout title="Market Sizing Tool (TAM / SAM / SOM)" description="Quantify your total market opportunity." breadcrumb="Market Sizing" cta={{ text: "Validate your idea", link: "/resources/idea-validator" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div><label className={labelClass}>Total Potential Customers</label><input type="number" className={inputClass} value={totalCustomers} onChange={(e) => setTotalCustomers(+e.target.value)} /></div>
          <div><label className={labelClass}>Average Revenue Per Customer (₹)</label><input type="number" className={inputClass} value={arpu} onChange={(e) => setArpu(+e.target.value)} /></div>
          <div><label className={labelClass}>Target Market Percentage (%)</label><input type="number" className={inputClass} value={targetPct} onChange={(e) => setTargetPct(+e.target.value)} /></div>
          <div><label className={labelClass}>Expected Capture Percentage (%)</label><input type="number" className={inputClass} value={capturePct} onChange={(e) => setCapturePct(+e.target.value)} /></div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-primary/10 p-4"><span className="block text-xs text-muted-foreground">TAM (Total Addressable Market)</span><span className="font-display text-xl font-bold text-primary">{fmt(tam)}</span></div>
            <div className="rounded-lg bg-secondary/20 p-4"><span className="block text-xs text-muted-foreground">SAM (Serviceable Available Market)</span><span className="font-display text-xl font-bold text-secondary">{fmt(sam)}</span></div>
            <div className="rounded-lg bg-muted p-4"><span className="block text-xs text-muted-foreground">SOM (Serviceable Obtainable Market)</span><span className="font-display text-xl font-bold">{fmt(som)}</span></div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default MarketSizing;
