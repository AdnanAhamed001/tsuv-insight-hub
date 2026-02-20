import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, Target, Users, TrendingUp, Handshake,
  Calendar, Rocket, Award, BarChart3, ChevronDown, Lightbulb, Shield
} from "lucide-react";

const phases = [
  { name: "Phase 1", title: "Business Model Review", desc: "Deep dive into your business model, value proposition, and market positioning.", duration: "Month 1" },
  { name: "Phase 2", title: "Sales Strategy & Growth Hacking", desc: "Develop go-to-market strategy, customer acquisition channels, and growth playbooks.", duration: "Month 2" },
  { name: "Phase 3", title: "Financials & Investor Readiness", desc: "Financial modeling, pitch deck refinement, and preparation for investor demo day.", duration: "Month 3" },
];

const selectionSteps = [
  { step: "Scouting & Outreach", desc: "Online and physical outreach across Tier II/III cities — scouting is ongoing." },
  { step: "Due Diligence", desc: "Initial Legal, Business, Technical, and Financial due diligence." },
  { step: "Two-Level Shortlisting", desc: "Panel review and structured evaluation of shortlisted startups." },
  { step: "Cohort Selection", desc: "Final cohort of 10 startups selected per batch." },
];

const whatYouGet = [
  { icon: Lightbulb, title: "Training & Coaching", desc: "Structured workshops on product, sales, finance, and leadership." },
  { icon: Handshake, title: "Mentorship", desc: "1-on-1 mentors from industry — 50+ domain experts across sectors." },
  { icon: TrendingUp, title: "Investor Access", desc: "Demo day, curated investor intros, and fundraising support." },
  { icon: Shield, title: "Market Access", desc: "Curated corporate partnerships and B2B customer introductions." },
  { icon: Award, title: "Brand & PR", desc: "Media features, startup showcases, and community visibility." },
  { icon: BarChart3, title: "Tools & Resources", desc: "Full access to StepUp's library of calculators, assessments, and playbooks." },
];

const cohortDates = [
  { label: "Next Cohort", value: "Cohort 9 — August 2026" },
  { label: "Application Deadline", value: "July 15, 2026" },
  { label: "Interview Window", value: "July 16 – July 30, 2026" },
  { label: "Cohort Kickoff", value: "August 4, 2026" },
  { label: "Demo Day", value: "November 2026" },
  { label: "Cohort Size", value: "10 Startups" },
];

const testimonials = [
  { name: "Nakul", role: "Founder & CEO — BidWheelz", quote: "The StepUp Ventures have been very instrumental in not just validating the business model but also creating the pathway for the future business." },
  { name: "Swati", role: "Founder & CEO — DoseTap", quote: "TSUV has really helped me in refining my business model. The people and the mentors at TSUV are very closely connected." },
  { name: "Iram", role: "Founder & CEO — E Waste Social", quote: "The TSUV approach has been very hands-on as all the mentors and the cohort team have been very involved from the beginning." },
];

const faqs = [
  { q: "What stage should my startup be at?", a: "We focus on startups with an MVP or early revenue. Idea-stage ventures can use our tools to prepare before applying." },
  { q: "How long is the program?", a: "3 months of intensive incubation followed by 3 months of portfolio management and fundraising support." },
  { q: "Is there a fee to join?", a: "Program fees and equity arrangements are discussed during the selection process. Our model is founder-friendly." },
  { q: "What happens after the program?", a: "We continue supporting startups through fundraising rounds, investor intros, and ecosystem events." },
  { q: "What sectors do you support?", a: "AgriTech, HealthTech, EdTech, SaaS, FinTech, CleanTech, Social Impact — from Tier II/III cities." },
  { q: "How many startups are in each cohort?", a: "Each cohort is limited to 10 startups to ensure personalized attention and deep engagement." },
  { q: "Who are the mentors?", a: "50+ domain experts from industry, academia, and successful entrepreneurship backgrounds." },
  { q: "Can I apply if I'm a solo founder?", a: "Yes, but we encourage having at least a co-founder or committed team by program start." },
];

const Program = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">For Founders</p>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Build. Validate. <span className="text-secondary">Scale.</span>
          </h1>
          <p className="mb-4 max-w-3xl text-lg text-primary-foreground/90">
            TSUV works with startups over a 3-month period to help them refine their product and pitch to culminate in a demo day to potential investors.
          </p>
          <p className="max-w-3xl text-primary-foreground/70">
            StepUp Ventures co-invests with seed investors to help startups along the journey to scale. We help entrepreneurs build and validate their startup to garner support from the Indian Startup ecosystem.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Is StepUp Right for <span className="text-secondary">You?</span></h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="tool-card">
              <Target className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="mb-3 font-display text-xl font-semibold">Who This Is For</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Startups with MVP or early revenue</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Founders from Tier II & III cities</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Teams ready for intensive 3-month acceleration</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Sectors: AgriTech, HealthTech, EdTech, SaaS, CleanTech</li>
              </ul>
            </div>
            <div className="tool-card">
              <Rocket className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="mb-3 font-display text-xl font-semibold">What Makes Us Different</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Two-tier coaching + mentorship model</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Co-investment through Mount Judi Micro Fund</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Investor Demo Day at program end</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> 3-month post-program portfolio support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">What We Offer Beyond <span className="text-secondary">Capital</span></h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map((w) => (
              <div key={w.title} className="tool-card flex items-start gap-4">
                <w.icon className="mt-1 h-8 w-8 shrink-0 text-secondary" />
                <div>
                  <h3 className="mb-1 font-display text-base font-semibold">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">How the Program Works</h2>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-secondary">Incubation Program — 3 Months</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {phases.map((p, i) => (
              <div key={i} className="tool-card relative">
                <span className="absolute -top-3 left-4 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">{p.name}</span>
                <p className="mb-1 text-xs text-muted-foreground">{p.duration}</p>
                <h4 className="mt-1 mb-2 font-display text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-3 text-xs text-muted-foreground italic">Gate reviews included</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-card p-6 text-center">
            <h3 className="mb-2 font-display text-lg font-semibold">Portfolio Management — 3 Months</h3>
            <p className="text-sm text-muted-foreground">Fundraising support, investor relationship management, and promotion at events and conferences.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center font-display text-3xl font-bold">Backed by a Powerful Network</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-primary-foreground/70">Culminates in an Investor Demo-day to help reach the wider startup ecosystem.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "50+", l: "Mentors" },
              { v: "150+", l: "Active Investors" },
              { v: "80", l: "Corporate Partners" },
              { v: "25,000+", l: "Community Size" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-primary-foreground/20 p-4 text-center">
                <span className="block font-display text-2xl font-bold text-secondary">{s.v}</span>
                <span className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders We've Backed */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Founders We've <span className="text-secondary">Backed</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              View Full Portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Our Selection Process</h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {selectionSteps.map((s, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <div>
                  <p className="font-display text-sm font-semibold">{s.step}</p>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Cohort + Schedule */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <Calendar className="mx-auto mb-4 h-10 w-10 text-secondary" />
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Upcoming Cohort Details</h2>
          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cohortDates.map((d) => (
              <div key={d.label} className="rounded-xl border border-primary-foreground/20 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">{d.label}</p>
                <p className="mt-2 font-display text-base font-bold text-secondary">{d.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/apply" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
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
    </PageLayout>
  );
};

export default Program;
