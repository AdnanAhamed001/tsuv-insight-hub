import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Target, Users, TrendingUp, Handshake, Calendar } from "lucide-react";

const phases = [
  { name: "Phase 1", title: "Business Model Review", desc: "Deep dive into your business model, value proposition, and market positioning." },
  { name: "Phase 2", title: "Sales Strategy & Growth Hacking", desc: "Develop go-to-market strategy, customer acquisition channels, and growth playbooks." },
  { name: "Phase 3", title: "Financials & Investor Readiness", desc: "Financial modeling, pitch deck refinement, and preparation for investor demo day." },
];

const selectionSteps = [
  "Online and physical outreach (Scouting Ongoing)",
  "Initial Legal, Business, Technical and Financial Due-Diligence",
  "Two-level shortlisting mechanism",
  "Cohort of 10 startups selected",
];

const faqs = [
  { q: "What stage should my startup be at?", a: "We focus on startups that have an MVP or early revenue. Idea-stage ventures can use our tools to prepare." },
  { q: "How long is the program?", a: "The incubation program is 3 months, followed by 3 months of portfolio management support." },
  { q: "Is there a fee to join?", a: "Details about program fees and equity arrangements are discussed during the selection process." },
  { q: "What happens after the program?", a: "We continue supporting startups through fundraising rounds, investor relationship support, and promoting them at events." },
];

const Program = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">PROGRAM</h1>
          <p className="mb-4 max-w-3xl text-lg text-primary-foreground/90">
            TSUV works with startups over a 3-month period to help them refine their product and pitch to culminate in a demo day to potential investors.
          </p>
          <p className="max-w-3xl text-primary-foreground/70">
            StepUp Ventures will co-invest with other seed investors to help the startup along the journey to scale. During this 3-month program we help entrepreneurs build and validate their startup to scale and to garner more support from like-minded partners in the Indian Startup ecosystem.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
          <div>
            <Target className="mb-4 h-10 w-10 text-secondary" />
            <h2 className="mb-4 font-display text-2xl font-bold">Is StepUp Right for You?</h2>
            <p className="text-muted-foreground">Focused on startups that have MVP / Early revenue. If you have a validated idea and early traction, we can help you scale.</p>
          </div>
          <div>
            <Handshake className="mb-4 h-10 w-10 text-secondary" />
            <h2 className="mb-4 font-display text-2xl font-bold">What We Offer Beyond Capital</h2>
            <p className="mb-3 text-muted-foreground">A two-tier team of coaches and mentors helps startups navigate our program.</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Training</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Coaching</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Mentorship</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Access to market with curated corporates</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Access to value-added partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">How the Program Works</h2>
          <div className="mb-8">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-secondary">Incubation Program — 3 Months</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {phases.map((p, i) => (
                <div key={i} className="tool-card relative">
                  <span className="absolute -top-3 left-4 rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">{p.name}</span>
                  <h4 className="mt-2 mb-2 font-display text-lg font-semibold">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <p className="mt-3 text-xs text-muted-foreground italic">Gate reviews included</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <h3 className="mb-2 font-display text-lg font-semibold">Portfolio Management — 3 Months</h3>
            <p className="text-sm text-muted-foreground">Fundraising support, investor relationship management, and promotion at events and conferences.</p>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 font-display text-3xl font-bold text-center">Our Selection Process</h2>
          <div className="mx-auto max-w-lg space-y-4">
            {selectionSteps.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <p className="pt-1 text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Cohort */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <Calendar className="mx-auto mb-4 h-10 w-10 text-secondary" />
          <h2 className="mb-4 font-display text-3xl font-bold">Upcoming Cohort Details</h2>
          <p className="mb-6 text-primary-foreground/70">Applications are open. Join the next batch of Bharat's most ambitious founders.</p>
          <Link to="/apply" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Network Stats */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Capital & Investor Access</h2>
          <p className="mb-8 text-center text-muted-foreground">Culminates in an Investor Demo-day to help reach the wider startup ecosystem.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "50+", l: "Mentors" },
              { v: "150+", l: "Active Investors" },
              { v: "80", l: "Alliances" },
              { v: "25,000+", l: "Professionals" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-border bg-card p-4 text-center">
                <span className="block font-display text-2xl font-bold text-primary">{s.v}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Founders We've Backed</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Nakul", role: "Founder & CEO - BidWheelz", quote: "The StepUp Ventures have been very instrumental in not just validating the business model but also creating the pathway for the future business." },
              { name: "Swati", role: "Founder & CEO - DoseTap", quote: "TSUV has really helped me in refining my business model. The people and the mentors at TSUV are very closely connected." },
              { name: "Iram", role: "Founder & CEO - E Waste Social", quote: "The TSUV approach has been very hands-on as all the mentors and the cohort team have been very involved from the beginning." },
            ].map((t) => (
              <div key={t.name} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
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
                <summary className="cursor-pointer px-6 py-4 font-display text-sm font-semibold">{f.q}</summary>
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
