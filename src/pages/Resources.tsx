import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Calculator, BarChart3, ClipboardCheck, Wallet, FileText,
  Play, Headphones, ArrowRight, TrendingUp, ChevronDown
} from "lucide-react";

/* ── Section 1: Big Hub Cards ── */
const hubCards = [
  {
    id: "tools",
    title: "Tools",
    subtitle: "Calculators & Financial Models",
    desc: "Equity dilution, runway, market sizing, LTV, IRR, and more — built for early-stage startups.",
    icon: Calculator,
    gradient: "from-[hsl(198,100%,12%)] to-[hsl(198,80%,22%)]",
  },
  {
    id: "assessments",
    title: "Assessments",
    subtitle: "Readiness & Health Checks",
    desc: "Structured quizzes to score your startup's health, fundraising readiness, and idea strength.",
    icon: ClipboardCheck,
    gradient: "from-[hsl(198,80%,18%)] to-[hsl(198,60%,30%)]",
  },
  {
    id: "reports",
    title: "Reports",
    subtitle: "Market Insights & Case Studies",
    desc: "Deep-dive sector analysis, strategic playbooks, and founder case studies.",
    icon: FileText,
    gradient: "from-[hsl(37,60%,35%)] to-[hsl(37,96%,52%)]",
  },
  {
    id: "pr",
    title: "PR Activity",
    subtitle: "Press Mentions & Awards",
    desc: "Press coverage, announcements, media features, and ecosystem recognition.",
    icon: TrendingUp,
    gradient: "from-[hsl(198,100%,16%)] to-[hsl(198,60%,28%)]",
  },
  {
    id: "videos",
    title: "Videos",
    subtitle: "Demo Days & Masterclasses",
    desc: "Pitch recordings, investor showcase events, and founder masterclasses.",
    icon: Play,
    gradient: "from-[hsl(198,80%,14%)] to-[hsl(198,100%,22%)]",
  },
  {
    id: "podcasts",
    title: "Podcasts",
    subtitle: "Interviews & Ecosystem Audio",
    desc: "Conversations with the executive team, coaches, and successful founders.",
    icon: Headphones,
    gradient: "from-[hsl(37,80%,30%)] to-[hsl(37,96%,50%)]",
  },
];

/* ── Tool / Assessment lists (for expanded sections) ── */
const financialTools = [
  { name: "Equity Dilution Calculator", desc: "Understand how funding rounds impact founder ownership.", path: "/resources/equity-dilution" },
  { name: "Startup Runway & Burn Rate", desc: "Measure survival timeline and capital efficiency.", path: "/resources/runway-burn-rate" },
  { name: "Break-Even Calculator", desc: "Determine revenue required to cover costs.", path: "/resources/break-even" },
  { name: "Exit Scenario (ROI) Calculator", desc: "Project investor returns and ownership at exit.", path: "/resources/exit-scenario" },
  { name: "IRR Calculator", desc: "Estimate annualized investor return.", path: "/resources/irr-calculator" },
  { name: "Berkus Method Valuation", desc: "Early-stage valuation without revenue.", path: "/resources/berkus-method" },
];

const marketTools = [
  { name: "Market Sizing (TAM/SAM/SOM)", path: "/resources/market-sizing" },
  { name: "Rule of 40 Calculator", path: "/resources/rule-of-40" },
  { name: "Burn Multiple Calculator", path: "/resources/burn-multiple" },
  { name: "LTV Calculator", path: "/resources/ltv-calculator" },
  { name: "Customer Payback Period", path: "/resources/customer-payback" },
];

const capitalTools = [
  { name: "Capital Deployment Planner", path: "/resources/capital-deployment" },
];

const assessmentsList = [
  { name: "Startup Health Check", desc: "Comprehensive startup maturity assessment.", path: "/resources/startup-health-check" },
  { name: "Fundraising Readiness Score", desc: "Evaluate investor preparedness.", path: "/resources/fundraising-readiness" },
  { name: "Startup Idea Validator Quiz", desc: "Test idea strength before building.", path: "/resources/idea-validator" },
];

const articles = [
  { title: "E Waste Social: A B2B Recycling Revolution", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New Age Smart Pill Box Innovation", desc: "As per WHO, the majority of the 50% of patients who do not take..." },
  { title: "BeFriends: Best Caretaking Platform", desc: "Stress and tension have become pervasive in modern life..." },
  { title: "Ezee Notes: Your Study Partner", desc: "Be it school or college, students never show interest in studying..." },
];

/* ── Section 3: Featured Tools & Assessments ── */
const featuredCards = [
  { name: "VC Scout Readiness Assessment", cta: "Take the Assessment →", path: "/resources/fundraising-readiness", icon: ClipboardCheck },
  { name: "Founder-Market Fit Scorecard", cta: "Take the Assessment →", path: "/resources/startup-health-check", icon: BarChart3 },
  { name: "Angel Investor Readiness Quiz", cta: "Take the Quiz →", path: "/resources/idea-validator", icon: TrendingUp },
  { name: "Berkus Method Valuation Calculator", cta: "Calculate →", path: "/resources/berkus-method", icon: Calculator },
];

/* ── Section 4: FAQs ── */
const faqs = [
  { q: "How do I use the valuation calculators?", a: "Enter your startup's financial data into the input fields. The calculator will instantly compute results and display visual outputs. No account needed." },
  { q: "Are these tools free to use?", a: "Yes, all tools and assessments on StepUp are completely free for founders." },
  { q: "What is the Startup Health Check?", a: "A structured 20-question assessment that scores your startup across Product, Market, Team, Financial Health, and Growth dimensions." },
  { q: "Can I download my results?", a: "Currently results are displayed on-screen. PDF export functionality is coming soon." },
  { q: "Who are these tools designed for?", a: "Early-stage founders, pre-MVP entrepreneurs, and startups preparing for fundraising — especially from Tier II & III cities." },
];

const Resources = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            RESOURCES & <span className="text-secondary">LIBRARY</span>
          </h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            Everything you need to build, fund, and scale. Explore our startup tools, market reports, PR updates, and media.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 1: The Resource Hubs — Big Clickable Cards ═══ */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubCards.map((card) => (
              <button
                key={card.id}
                onClick={() => setActiveSection(activeSection === card.id ? null : card.id)}
                className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-h-[220px] flex flex-col justify-end bg-gradient-to-br ${card.gradient}`}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/30" />
                <div className="relative z-10">
                  <card.icon className="mb-2 h-8 w-8 text-white/80" />
                  <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-white/80">{card.subtitle}</p>
                  <p className="mt-2 text-xs text-white/60 line-clamp-2">{card.desc}</p>
                </div>
                <ArrowRight className={`absolute right-6 top-6 h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white ${activeSection === card.id ? "rotate-90" : ""}`} />
                {activeSection === card.id && (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-secondary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Section Content */}
      {activeSection === "tools" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl space-y-10">
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Calculator className="h-5 w-5 text-secondary" /> Financial Calculators</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {financialTools.map((t) => (
                  <Link key={t.name} to={t.path} className="tool-card group flex flex-col">
                    <Calculator className="mb-3 h-6 w-6 text-secondary" />
                    <h4 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{t.name}</h4>
                    <p className="flex-1 text-xs text-muted-foreground">{t.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">Open Tool <ArrowRight size={12} /></span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><BarChart3 className="h-5 w-5 text-secondary" /> Market & Growth Tools</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {marketTools.map((t) => (
                  <Link key={t.name} to={t.path} className="tool-card group flex flex-col">
                    <BarChart3 className="mb-3 h-6 w-6 text-secondary" />
                    <h4 className="font-display text-sm font-semibold group-hover:text-secondary">{t.name}</h4>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">Open Tool <ArrowRight size={12} /></span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Wallet className="h-5 w-5 text-secondary" /> Capital Planning</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {capitalTools.map((t) => (
                  <Link key={t.name} to={t.path} className="tool-card group flex flex-col">
                    <Wallet className="mb-3 h-6 w-6 text-secondary" />
                    <h4 className="font-display text-sm font-semibold group-hover:text-secondary">{t.name}</h4>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">Open Tool <ArrowRight size={12} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "assessments" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><ClipboardCheck className="h-5 w-5 text-secondary" /> Founder Assessments</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assessmentsList.map((t) => (
                <Link key={t.name} to={t.path} className="tool-card group flex flex-col">
                  <ClipboardCheck className="mb-3 h-6 w-6 text-secondary" />
                  <h4 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{t.name}</h4>
                  <p className="flex-1 text-xs text-muted-foreground">{t.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">Take Assessment <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "reports" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 font-display text-xl font-bold">Deep-Dive Insights & Strategic Playbooks</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {["Market Reports", "Founder Playbooks", "Case Studies", "Sector Analysis"].map((r) => (
                <div key={r} className="tool-card">
                  <FileText className="mb-3 h-6 w-6 text-secondary" />
                  <h3 className="font-display text-base font-semibold">{r}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Coming soon — downloadable insights and analysis.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "pr" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 font-display text-xl font-bold">Press, PR & Announcements</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {articles.map((a, i) => (
                <div key={i} className="tool-card">
                  <h3 className="mb-2 font-display text-sm font-semibold">{a.title}</h3>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "videos" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl text-center">
            <Play className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h2 className="mb-2 font-display text-xl font-bold">Video Content</h2>
            <p className="text-sm text-muted-foreground">Demo Days, Startup Pitch Videos, Masterclasses, and Founder Interviews — coming soon.</p>
          </div>
        </section>
      )}

      {activeSection === "podcasts" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl text-center">
            <Headphones className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h2 className="mb-2 font-display text-xl font-bold">Audio Content</h2>
            <p className="text-sm text-muted-foreground">Conversations with the executive team, coaches, and successful founders — coming soon.</p>
          </div>
        </section>
      )}

      {/* ═══ SECTION 2: Featured Report Banner ═══ */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Deep-Dive <span className="text-secondary">Insights</span>
          </h2>
          {/* Featured Report */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(198,100%,12%)] to-[hsl(198,80%,22%)] p-10 md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="mb-3 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">Featured Report</span>
                <h3 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
                  India Tier II/III Startup Ecosystem Report 2026
                </h3>
                <p className="text-sm text-white/70">
                  A comprehensive analysis of emerging startup hubs beyond metros — market opportunity, founder demographics, sector trends, and investment flows across Bharat.
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground cursor-pointer hover:bg-secondary/90">
                  <FileText size={18} /> Read Report
                </span>
              </div>
            </div>
          </div>

          {/* Market Reports Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "SaaS Growth Benchmarks — India 2026", tag: "SaaS" },
              { title: "AgriTech Investment Landscape", tag: "AgriTech" },
              { title: "HealthTech Founder Playbook", tag: "HealthTech" },
            ].map((r) => (
              <div key={r.title} className="tool-card group cursor-pointer">
                <span className="mb-3 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{r.tag}</span>
                <h4 className="mb-2 font-display text-sm font-semibold group-hover:text-secondary">{r.title}</h4>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: Featured Tools & Assessments ═══ */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured Tools & <span className="text-secondary">Assessments</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCards.map((card) => (
              <Link
                key={card.name}
                to={card.path}
                className="group relative flex flex-col rounded-xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-secondary hover:shadow-xl"
              >
                <card.icon className="mb-4 h-10 w-10 text-secondary" />
                <h3 className="mb-2 font-display text-base font-bold group-hover:text-secondary">{card.name}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary group-hover:text-secondary">
                  {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: FAQs ═══ */}
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

export default Resources;
