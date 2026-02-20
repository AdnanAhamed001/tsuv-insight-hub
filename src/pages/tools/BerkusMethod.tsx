import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";

const BerkusMethod = () => {
  const [soundIdea, setSoundIdea] = useState(300000);
  const [prototype, setPrototype] = useState(200000);
  const [managementTeam, setManagementTeam] = useState(400000);
  const [strategicRelationships, setStrategicRelationships] = useState(250000);
  const [productRollout, setProductRollout] = useState(350000);

  const total = soundIdea + prototype + managementTeam + strategicRelationships + productRollout;
  const maxVal = 2500000;

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none";
  const labelClass = "mb-1 block text-xs font-medium text-muted-foreground";

  const categories = [
    { label: "Sound Idea", value: soundIdea, set: setSoundIdea },
    { label: "Prototype", value: prototype, set: setPrototype },
    { label: "Management Team", value: managementTeam, set: setManagementTeam },
    { label: "Strategic Relationships", value: strategicRelationships, set: setStrategicRelationships },
    { label: "Product Rollout / Sales", value: productRollout, set: setProductRollout },
  ];

  return (
    <ToolLayout title="Berkus Method Valuation" description="Early-stage valuation without revenue. Each category capped at ₹500,000." breadcrumb="Berkus Method" cta={{ text: "Check your equity dilution", link: "/resources/equity-dilution" }}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {categories.map((c) => (
            <div key={c.label}>
              <label className={labelClass}>{c.label} Value (₹, max 500,000)</label>
              <input type="number" max={500000} className={inputClass} value={c.value} onChange={(e) => c.set(Math.min(500000, +e.target.value))} />
            </div>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold">Results</h3>
          <div className="rounded-lg bg-primary/10 p-6 text-center">
            <span className="block text-xs text-muted-foreground">Total Pre-Money Valuation</span>
            <span className="font-display text-3xl font-bold text-primary">₹{total.toLocaleString()}</span>
            <span className="block mt-2 text-xs text-muted-foreground">Maximum: ₹{maxVal.toLocaleString()}</span>
          </div>
          <div className="mt-4 space-y-2">
            {categories.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="w-40 text-xs text-muted-foreground">{c.label}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${(c.value / 500000) * 100}%` }} />
                </div>
                <span className="text-xs font-semibold w-16 text-right">₹{(c.value / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default BerkusMethod;
