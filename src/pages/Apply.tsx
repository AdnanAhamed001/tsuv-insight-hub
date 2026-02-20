import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { ArrowRight, ArrowLeft, Upload } from "lucide-react";

const Apply = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", linkedin: "", city: "",
    startupName: "", website: "", sector: "", oneLiner: "", problem: "",
    stage: "", revenue: "", priorFunding: "",
    pitchDeck: null as File | null, videoLink: "",
  });

  const updateForm = (key: string, value: string | File | null) => setForm((p) => ({ ...p, [key]: value }));

  const sectors = ["AgriTech", "HealthTech", "SaaS", "E-Commerce", "CleanTech", "EdTech", "FinTech", "Social Impact", "Other"];
  const stages = ["Idea", "MVP", "Early Revenue", "Scaling"];

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";
  const labelClass = "mb-1 block text-sm font-medium text-foreground";

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground">APPLY FOR THE TSUV COHORT</h1>
          <p className="text-primary-foreground/70">Join Bharat's most dedicated startup accelerator.</p>
          <div className="mt-4 rounded-md bg-secondary/20 px-4 py-2 text-sm text-secondary">
            Applications are currently open. Apply before the deadline to secure your spot.
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          {/* Step Indicator */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${s === step ? "bg-secondary text-secondary-foreground" : s < step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{s}</div>
                {s < 4 && <div className={`h-0.5 w-8 ${s < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="mb-4 font-display text-xl font-bold">Founder Details</h2>
              <div><label className={labelClass}>Full Name *</label><input className={inputClass} value={form.fullName} onChange={(e) => updateForm("fullName", e.target.value)} /></div>
              <div><label className={labelClass}>Email *</label><input type="email" className={inputClass} value={form.email} onChange={(e) => updateForm("email", e.target.value)} /></div>
              <div><label className={labelClass}>Phone Number *</label><input className={inputClass} value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} /></div>
              <div><label className={labelClass}>LinkedIn Profile</label><input className={inputClass} value={form.linkedin} onChange={(e) => updateForm("linkedin", e.target.value)} /></div>
              <div><label className={labelClass}>Base Location / City</label><input className={inputClass} placeholder="Focusing on Tier II & III cities" value={form.city} onChange={(e) => updateForm("city", e.target.value)} /></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="mb-4 font-display text-xl font-bold">Startup Overview</h2>
              <div><label className={labelClass}>Startup Name & Website</label><input className={inputClass} value={form.startupName} onChange={(e) => updateForm("startupName", e.target.value)} /></div>
              <div>
                <label className={labelClass}>Sector</label>
                <select className={inputClass} value={form.sector} onChange={(e) => updateForm("sector", e.target.value)}>
                  <option value="">Select sector</option>
                  {sectors.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div><label className={labelClass}>One-line pitch (max 150 chars)</label><input maxLength={150} className={inputClass} value={form.oneLiner} onChange={(e) => updateForm("oneLiner", e.target.value)} /></div>
              <div><label className={labelClass}>Problem & Solution</label><textarea rows={4} className={inputClass} value={form.problem} onChange={(e) => updateForm("problem", e.target.value)} /></div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="mb-4 font-display text-xl font-bold">Traction & Stage</h2>
              <div>
                <label className={labelClass}>Current Stage</label>
                <select className={inputClass} value={form.stage} onChange={(e) => updateForm("stage", e.target.value)}>
                  <option value="">Select stage</option>
                  {stages.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div><label className={labelClass}>Monthly Revenue / Key Metric</label><input className={inputClass} value={form.revenue} onChange={(e) => updateForm("revenue", e.target.value)} /></div>
              <div>
                <label className={labelClass}>Have you raised prior funding?</label>
                <select className={inputClass} value={form.priorFunding} onChange={(e) => updateForm("priorFunding", e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="mb-4 font-display text-xl font-bold">Attachments & Pitch</h2>
              <div>
                <label className={labelClass}>Upload Pitch Deck (PDF)</label>
                <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input px-4 py-6 text-sm text-muted-foreground hover:border-secondary">
                  <Upload size={20} /> {form.pitchDeck ? form.pitchDeck.name : "Click to upload PDF"}
                  <input type="file" accept=".pdf" className="hidden" onChange={(e) => updateForm("pitchDeck", e.target.files?.[0] || null)} />
                </label>
              </div>
              <div><label className={labelClass}>1-Minute Video Pitch Link (Optional)</label><input className={inputClass} value={form.videoLink} onChange={(e) => updateForm("videoLink", e.target.value)} /></div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted">
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <div className="ml-auto">
              {step < 4 ? (
                <button onClick={() => setStep(step + 1)} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90">
                  Submit Application <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-center font-display text-2xl font-bold">What Happens Next?</h2>
          <div className="space-y-4">
            {[
              { week: "Week 1", desc: "Application Review & Initial Due Diligence" },
              { week: "Week 2", desc: "Founder Interviews" },
              { week: "Week 3", desc: "Final Cohort Selection" },
            ].map((w) => (
              <div key={w.week} className="flex items-center gap-4 rounded-lg border border-border bg-card px-6 py-4">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">{w.week}</span>
                <span className="text-sm text-foreground">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Apply;
