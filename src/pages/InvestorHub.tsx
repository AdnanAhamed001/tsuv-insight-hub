import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Shield, TrendingUp, Eye, Users, Building2, ArrowRight, Target,
  BarChart3, Handshake, Globe, Award, CheckCircle, ChevronDown
} from "lucide-react";

const InvestorHub = () => {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", type: "", message: "" });

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  const philosophy = [
    { icon: Target, title: "Focus on Bharat", desc: "Tapping into the unserved entrepreneurial talent pool outside major metros — Tier II and Tier III cities." },
    { icon: TrendingUp, title: "Early-Stage Acceleration", desc: "Targeting MVP to early-revenue startups where strategic intervention yields the highest valuation multiples." },
    { icon: Building2, title: "Mount Judi India Micro Fund", desc: "Investing up to ₹1 Crore in promising ventures to bridge the gap to larger VC rounds." },
  ];

  const fundStrategy = [
    { label: "Investment Size", value: "Up to ₹1 Crore" },
    { label: "Target Stage", value: "MVP to Early Revenue" },
    { label: "Focus Sectors", value: "AgriTech, HealthTech, EdTech, SaaS, CleanTech" },
    { label: "Geography", value: "Bharat — Tier II & III Cities" },
    { label: "Program Duration", value: "3 Months Incubation + 3 Months Portfolio Mgmt" },
  ];

  const whyInvest = [
    { icon: Eye, title: "Impact & Metrics", desc: "Clear tracking of job creation, regional economic impact, and startup survival rates across every cohort." },
    { icon: Shield, title: "Governance & Transparency", desc: "Rigorous legal, business, technical, and financial due diligence applied before any startup enters the cohort." },
    { icon: TrendingUp, title: "De-risked Pipeline", desc: "Startups undergo a 3-month intensive incubation before being presented to our investor network." },
    { icon: BarChart3, title: "Structured Reporting", desc: "Monthly portfolio updates, quarterly reviews, and annual impact reports for all partners." },
  ];

  const network = [
    { icon: Users, title: "Angel Network", value: "150+", desc: "Active individual investors across sectors" },
    { icon: Building2, title: "Institutional Investors", value: "10+", desc: "100X.VC, Fluid Ventures, Cognitive, Klub, Anicut" },
    { icon: Handshake, title: "Corporate Backers", value: "80+", desc: "Strategic corporate alliances for market access" },
    { icon: Globe, title: "Ecosystem Affiliations", value: "25,000+", desc: "Community of founders, mentors, and professionals" },
  ];

  const testimonials = [
    { quote: "The quality of the deal flow and the rigorous screening process sets TSUV apart from other accelerators in the ecosystem.", author: "Ecosystem Partner" },
    { quote: "The transparency, governance, and real impact on the Tier II/III ecosystem is unmatched. A true partner in building Bharat.", author: "LP Partner" },
    { quote: "StepUp's structured approach to founder development and their commitment to governance gives us confidence as co-investors.", author: "Angel Investor" },
  ];

  const faqs = [
    { q: "What is the minimum investment amount?", a: "Investment amounts are flexible and discussed on a case-by-case basis. Our micro fund invests up to ₹1 Crore per startup." },
    { q: "How are startups selected for the cohort?", a: "Through a multi-stage due diligence process covering legal, business, technical, and financial parameters. Only 10 startups are selected per cohort." },
    { q: "What governance mechanisms are in place?", a: "We maintain rigorous legal compliance, regular financial audits, and structured reporting to all partners and LPs." },
    { q: "How do I co-invest alongside StepUp?", a: "Partners can co-invest in specific startups during or after the incubation program. Reach out via the form below to discuss." },
    { q: "What sectors do you focus on?", a: "AgriTech, HealthTech, EdTech, SaaS, FinTech, CleanTech, and Social Impact — primarily from Tier II and III cities." },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Investors</p>
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
          <h2 className="mb-3 text-center font-display text-3xl font-bold">Our Investment Philosophy</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">We believe that the next generation of category-defining companies will emerge from India's heartland.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <div key={p.title} className="tool-card text-center">
                <p.icon className="mx-auto mb-4 h-10 w-10 text-secondary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Strategy */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Fund Strategy</h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {fundStrategy.map((s) => (
              <div key={s.label} className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4">
                <span className="font-display text-sm font-semibold">{s.label}</span>
                <span className="text-sm text-secondary font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Why Invest With <span className="text-secondary">StepUp?</span></h2>
          <div className="grid gap-6 md:grid-cols-2">
            {whyInvest.map((w) => (
              <div key={w.title} className="tool-card flex items-start gap-4">
                <w.icon className="mt-1 h-8 w-8 shrink-0 text-secondary" />
                <div>
                  <h3 className="mb-1 font-display text-lg font-semibold">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
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
            <div><span className="block font-display text-3xl font-bold text-secondary">8</span><span className="text-sm text-primary-foreground/70">Completed Cohorts</span></div>
            <div><span className="block font-display text-3xl font-bold text-secondary">1000+</span><span className="text-sm text-primary-foreground/70">Jobs Created</span></div>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 font-semibold text-secondary-foreground hover:bg-secondary/90">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Co-Investment & Network */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center font-display text-3xl font-bold">Co-Investment & Network</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">An ecosystem of capital — from angels to institutions to corporates.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {network.map((n) => (
              <div key={n.title} className="tool-card text-center">
                <n.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <span className="block font-display text-2xl font-bold text-primary">{n.value}</span>
                <h3 className="font-display text-sm font-semibold">{n.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Governance & Transparency</h2>
          <div className="mx-auto max-w-3xl grid gap-4 md:grid-cols-2">
            {[
              "Multi-stage legal and financial due diligence",
              "Audited financial records and clean cap tables",
              "Monthly portfolio updates to all partners",
              "Quarterly performance reviews and annual impact reports",
              "SEBI-compliant fund structure",
              "Independent advisory board oversight",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our Network Says</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-lg border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-display text-sm font-semibold">
                  {f.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form — CTA for investors & corporates */}
      <section id="partner-form" className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center font-display text-3xl font-bold">Partner With Us</h2>
          <p className="mb-8 text-center text-sm text-primary-foreground/70">Whether you are an angel investor, a family office, or a corporate venturing arm, let's explore how we can build Bharat together.</p>
          <div className="space-y-4">
            <input className={inputClass} placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={inputClass} placeholder="Organization / Fund Name" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
            <input type="email" className={inputClass} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className={inputClass} placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select className={inputClass} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="">Investor Type</option>
              <option>Angel</option>
              <option>VC / Institutional</option>
              <option>Corporate</option>
              <option>Family Office</option>
              <option>Other</option>
            </select>
            <textarea rows={4} className={inputClass} placeholder="Message / Areas of Interest" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="w-full rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
              Request Portfolio Access
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestorHub;
