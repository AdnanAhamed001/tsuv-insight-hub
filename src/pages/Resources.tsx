import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Calculator, BarChart3, ClipboardCheck, Wallet, FileText,
  Play, Headphones, ArrowRight, TrendingUp, Lightbulb
} from "lucide-react";

/* ── Resource category cards ── */
const categories = [
  {
    id: "tools",
    title: "STARTUP",
    titleItalic: "TOOLS",
    desc: "Financial calculators, market sizing, SaaS metrics, and founder assessments — built for early-stage startups.",
    icon: Calculator,
  },
  {
    id: "assessments",
    title: "FOUNDER",
    titleItalic: "ASSESSMENTS",
    desc: "Score your startup's health, fundraising readiness, and idea strength with structured quizzes.",
    icon: ClipboardCheck,
  },
  {
    id: "reports",
    title: "MARKET",
    titleItalic: "REPORTS",
    desc: "Deep-dive insights, sector analysis, and strategic playbooks for Indian startups.",
    icon: FileText,
  },
  {
    id: "pr",
    title: "PR",
    titleItalic: "ACTIVITY",
    desc: "Press coverage, announcements, and media features about our portfolio and ecosystem.",
    icon: TrendingUp,
  },
  {
    id: "videos",
    title: "VIDEO",
    titleItalic: "CONTENT",
    desc: "Demo days, pitch recordings, masterclasses, and founder interviews.",
    icon: Play,
  },
  {
    id: "podcasts",
    title: "AUDIO &",
    titleItalic: "PODCASTS",
    desc: "Conversations with the executive team, coaches, and successful founders.",
    icon: Headphones,
  },
];

/* ── Tool / Assessment lists ── */
const financialTools = [
  { name: "Equity Dilution Calculator", desc: "Understand how funding rounds impact founder ownership.", path: "/resources/equity-dilution" },
  { name: "Startup Runway & Burn Rate", desc: "Measure survival timeline and capital efficiency.", path: "/resources/runway-burn-rate" },
  { name: "Break-Even Calculator", desc: "Determine revenue required to cover costs.", path: "/resources/break-even" },
  { name: "Exit Scenario (ROI) Calculator", desc: "Project investor returns and ownership at exit.", path: "/resources/exit-scenario" },
  { name: "IRR Calculator", desc: "Estimate annualized investor return.", path: "/resources/irr-calculator" },
  { name: "Berkus Method Valuation", desc: "Early-stage valuation without revenue.", path: "/resources/berkus-method" },
];

const marketTools = [
  { name: "Market Sizing (TAM/SAM/SOM)", desc: "Quantify your total market opportunity.", path: "/resources/market-sizing" },
  { name: "Rule of 40 Calculator", desc: "Evaluate SaaS growth and profitability balance.", path: "/resources/rule-of-40" },
  { name: "Burn Multiple Calculator", desc: "Measure capital efficiency against growth.", path: "/resources/burn-multiple" },
  { name: "LTV Calculator", desc: "Calculate long-term customer profitability.", path: "/resources/ltv-calculator" },
  { name: "Customer Payback Period", desc: "How quickly acquisition costs are recovered.", path: "/resources/customer-payback" },
];

const assessmentsList = [
  { name: "Startup Health Check", desc: "Comprehensive startup maturity assessment.", path: "/resources/startup-health-check" },
  { name: "Fundraising Readiness Score", desc: "Evaluate investor preparedness.", path: "/resources/fundraising-readiness" },
  { name: "Startup Idea Validator Quiz", desc: "Test idea strength before building.", path: "/resources/idea-validator" },
];

const capitalTools = [
  { name: "Capital Deployment Planner", desc: "Plan raise amount, allocation, and runway impact.", path: "/resources/capital-deployment" },
];

const articles = [
  { title: "E Waste Social: A B2B Recycling Revolution", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New Age Smart Pill Box Innovation", desc: "As per WHO, the majority of the 50% of patients who do not take..." },
  { title: "BeFriends: Best Caretaking Platform", desc: "Stress and tension have become pervasive in modern life..." },
  { title: "Ezee Notes: Your Study Partner", desc: "Be it school or college, students never show interest in studying..." },
];

const featuredTools = [
  { name: "Equity Dilution Calculator", desc: "See how each funding round impacts your ownership.", path: "/resources/equity-dilution", icon: Calculator },
  { name: "Startup Health Check", desc: "Score your startup across 5 key dimensions.", path: "/resources/startup-health-check", icon: ClipboardCheck },
  { name: "Capital Deployment Planner", desc: "Plan your raise, allocation, and runway.", path: "/resources/capital-deployment", icon: Wallet },
];

const ToolCard = ({ name, desc, path }: { name: string; desc: string; path: string }) => (
  <Link to={path} className="tool-card group flex flex-col">
    <Calculator className="mb-3 h-6 w-6 text-secondary" />
    <h4 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{name}</h4>
    <p className="flex-1 text-xs text-muted-foreground">{desc}</p>
    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-secondary">
      Open Tool <ArrowRight size={12} />
    </span>
  </Link>
);

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

      {/* Category Cards — Antler-inspired big cards */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSection(activeSection === cat.id ? null : cat.id)}
                className={`group relative overflow-hidden rounded-xl border-2 p-8 text-left transition-all duration-300 hover:shadow-xl ${
                  activeSection === cat.id
                    ? "border-secondary bg-primary text-primary-foreground shadow-xl"
                    : "border-border bg-card hover:border-secondary"
                }`}
              >
                <cat.icon className={`mb-5 h-10 w-10 ${activeSection === cat.id ? "text-secondary" : "text-secondary"}`} />
                <h3 className="font-display text-xl font-bold">
                  {cat.title} <em className="not-italic text-secondary">{cat.titleItalic}</em>
                </h3>
                <p className={`mt-2 text-sm ${activeSection === cat.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {cat.desc}
                </p>
                <ArrowRight className={`absolute right-6 top-8 h-5 w-5 transition-transform group-hover:translate-x-1 ${activeSection === cat.id ? "text-secondary" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Section Content */}
      {activeSection === "tools" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl space-y-12">
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Calculator className="h-5 w-5 text-secondary" /> Financial Calculators</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{financialTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><BarChart3 className="h-5 w-5 text-secondary" /> Market & Growth Tools</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{marketTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Wallet className="h-5 w-5 text-secondary" /> Capital Planning</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{capitalTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "assessments" && (
        <section className="section-padding bg-tsuv-surface">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><ClipboardCheck className="h-5 w-5 text-secondary" /> Founder Assessments</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{assessmentsList.map((t) => <ToolCard key={t.name} {...t} />)}</div>
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

      {/* Featured Tools */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured <span className="text-secondary">Tools</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredTools.map((ft) => (
              <Link key={ft.name} to={ft.path} className="tool-card group flex flex-col items-start">
                <ft.icon className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-1 font-display text-lg font-semibold group-hover:text-secondary">{ft.name}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{ft.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary">
                  Try Now <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule / Cohort Dates */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">Upcoming <span className="text-secondary">Schedule</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Next Cohort Starts", value: "August 2026", sub: "Cohort 9" },
              { label: "Application Deadline", value: "July 15, 2026", sub: "Apply early for priority review" },
              { label: "Demo Day", value: "November 2026", sub: "Investor showcase event" },
            ].map((d) => (
              <div key={d.label} className="rounded-xl border border-primary-foreground/20 p-6">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60">{d.label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-secondary">{d.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{d.sub}</p>
              </div>
            ))}
          </div>
          <Link to="/apply" className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
