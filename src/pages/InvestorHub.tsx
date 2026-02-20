import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Eye, Users, Building2, ArrowRight } from "lucide-react";

const InvestorHub = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", type: "", message: "" });

  const pillars = [
    { icon: TrendingUp, title: "Focus on Bharat", desc: "Tapping into the unserved entrepreneurial talent pool outside major metros." },
    { icon: Shield, title: "Early-Stage Acceleration", desc: "Targeting MVP to early-revenue startups where strategic intervention yields the highest valuation multiples." },
    { icon: Building2, title: "Mount Judi India Micro Fund", desc: "Investing up to ₹1 Crore in promising ventures to bridge the gap to larger VC rounds." },
  ];

  const whyInvest = [
    { icon: Eye, title: "Impact & Metrics", desc: "Clear tracking of job creation, regional economic impact, and startup survival rates." },
    { icon: Shield, title: "Governance & Transparency", desc: "Rigorous legal, business, technical, and financial due diligence applied before any startup enters the cohort." },
    { icon: TrendingUp, title: "De-risked Pipeline", desc: "Startups undergo a 3-month intensive incubation before being presented to our investor network." },
  ];

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Back Bharat's Category-Defining <span className="text-secondary">Founders.</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-primary-foreground/80">
            Partner with The StepUp Ventures to invest in highly vetted, early-stage startups from Tier II and Tier III cities. We provide the governance, pipeline, and ecosystem; you provide the catalyst for growth.
          </p>
          <a href="#partner-form" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
            Partner With Us <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Our Investment Philosophy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="tool-card text-center">
                <p.icon className="mx-auto mb-4 h-10 w-10 text-secondary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Why Co-Invest With Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {whyInvest.map((w) => (
              <div key={w.title} className="tool-card">
                <w.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">An Ecosystem of Capital</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="tool-card text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Angel Network</h3>
              <p className="text-sm text-muted-foreground">150+ active individual investors</p>
            </div>
            <div className="tool-card text-center">
              <Building2 className="mx-auto mb-3 h-8 w-8 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Institutional Investors</h3>
              <p className="text-sm text-muted-foreground">100X.VC, Fluid Ventures, Cognitive, Klub, Anicut</p>
            </div>
            <div className="tool-card text-center">
              <Shield className="mx-auto mb-3 h-8 w-8 text-secondary" />
              <h3 className="font-display text-lg font-semibold">Corporate Backers</h3>
              <p className="text-sm text-muted-foreground">Strategic corporate alliances for market access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snapshot */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">Portfolio Performance at a Glance</h2>
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            <div><span className="block font-display text-3xl font-bold text-secondary">65+</span><span className="text-sm text-primary-foreground/70">Startups Incubated</span></div>
            <div><span className="block font-display text-3xl font-bold text-secondary">₹700Cr+</span><span className="text-sm text-primary-foreground/70">Combined Valuation</span></div>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 font-semibold text-secondary-foreground hover:bg-secondary/90">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our Network Says</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="tool-card">
              <p className="mb-4 text-sm italic text-muted-foreground">"The quality of the deal flow and the rigorous screening process sets TSUV apart from other accelerators in the ecosystem."</p>
              <p className="font-display text-sm font-semibold">— Ecosystem Partner</p>
            </div>
            <div className="tool-card">
              <p className="mb-4 text-sm italic text-muted-foreground">"The transparency, governance, and real impact on the Tier II/III ecosystem is unmatched. A true partner in building Bharat."</p>
              <p className="font-display text-sm font-semibold">— LP Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center font-display text-3xl font-bold">Join the StepUp Investor Network</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">Whether you are an angel investor, a family office, or a corporate venturing arm, let's explore how we can build Bharat together.</p>
          <div className="space-y-4">
            <input className={inputClass} placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={inputClass} placeholder="Organization / Fund Name" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
            <input type="email" className={inputClass} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className={inputClass} placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select className={inputClass} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="">Investor Type</option>
              <option>Angel</option>
              <option>VC/Institutional</option>
              <option>Corporate</option>
              <option>Family Office</option>
              <option>Other</option>
            </select>
            <textarea rows={4} className={inputClass} placeholder="Message / Areas of Interest" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              Request Portfolio Access
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestorHub;
