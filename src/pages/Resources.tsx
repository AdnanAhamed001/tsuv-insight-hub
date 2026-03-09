import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Calculator, BarChart3, ClipboardCheck, FileText,
  Play, Headphones, ArrowRight, TrendingUp, ExternalLink, Newspaper
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── Section 1: Big Hub Cards ── */
const hubCards = [
  { title: "Tools", subtitle: "Calculators & Financial Models", desc: "Equity dilution, runway, market sizing, LTV, IRR, and more — built for early-stage startups.", icon: Calculator, gradient: "from-[hsl(198,100%,12%)] to-[hsl(198,80%,22%)]", path: "/resources/tools" },
  { title: "Assessments", subtitle: "Readiness & Health Checks", desc: "Structured quizzes to score your startup's health, fundraising readiness, and idea strength.", icon: ClipboardCheck, gradient: "from-[hsl(198,80%,18%)] to-[hsl(198,60%,30%)]", path: "/resources/assessments" },
  { title: "Reports", subtitle: "Market Insights & Case Studies", desc: "Deep-dive sector analysis, strategic playbooks, and founder case studies.", icon: FileText, gradient: "from-[hsl(37,60%,35%)] to-[hsl(37,96%,52%)]", path: "/resources/reports" },
  { title: "PR Activity", subtitle: "Press Mentions & Awards", desc: "Press coverage, announcements, media features, and ecosystem recognition.", icon: TrendingUp, gradient: "from-[hsl(198,100%,16%)] to-[hsl(198,60%,28%)]", path: "/resources/pr-activity" },
  { title: "Videos", subtitle: "Demo Days & Masterclasses", desc: "Pitch recordings, investor showcase events, and founder masterclasses.", icon: Play, gradient: "from-[hsl(198,80%,14%)] to-[hsl(198,100%,22%)]", path: "/resources/videos" },
  { title: "Podcasts", subtitle: "Interviews & Ecosystem Audio", desc: "Conversations with the executive team, coaches, and successful founders.", icon: Headphones, gradient: "from-[hsl(37,80%,30%)] to-[hsl(37,96%,50%)]", path: "/resources/podcasts" },
];

/* ── Featured Tools & Assessments ── */
const featuredCards = [
  { name: "VC Scout Readiness Assessment", cta: "Take the Assessment →", path: "/resources/fundraising-readiness", icon: ClipboardCheck },
  { name: "Founder-Market Fit Scorecard", cta: "Take the Assessment →", path: "/resources/startup-health-check", icon: BarChart3 },
  { name: "Angel Investor Readiness Quiz", cta: "Take the Quiz →", path: "/resources/idea-validator", icon: TrendingUp },
  { name: "Berkus Method Valuation Calculator", cta: "Calculate →", path: "/resources/berkus-method", icon: Calculator },
];

/* ── Featured PR Activity ── */
const prCards = [
  { headline: "StepUp Ventures Featured for Backing Tier II/III Founders", excerpt: "National media highlights StepUp's commitment to backing entrepreneurs from emerging startup hubs across Bharat.", source: "Economic Times" },
  { headline: "Startup Funding Announcements", excerpt: "Portfolio companies secure follow-on investments from leading VCs and angel networks.", source: "YourStory" },
  { headline: "Award Recognitions & Ecosystem Milestones", excerpt: "StepUp Ventures recognized for its contribution to building the Bharat startup ecosystem.", source: "Inc42" },
];

/* ── Featured Videos ── */
const videoCards = [
  { title: "Demo Day Highlights — Cohort Showcase", desc: "Watch founders pitch their startups to investors and ecosystem partners." },
  { title: "Founder Masterclass Series", desc: "Expert sessions on fundraising, product-market fit, and scaling strategies." },
  { title: "Investor AMA Sessions", desc: "Candid conversations with VCs and angel investors on what they look for." },
];

/* ── Featured Podcasts ── */
const podcastCards = [
  { title: "Founder Journey Episodes", desc: "Stories from founders who built their startups from Tier II/III cities." },
  { title: "Investor Perspectives", desc: "Insights from VCs and angels on the Bharat startup opportunity." },
  { title: "Ecosystem Conversations", desc: "Discussions with mentors, accelerators, and ecosystem builders." },
];

/* ── FAQs ── */
const faqs = [
  { q: "How do I use the valuation calculators?", a: "Enter your startup's financial data into the input fields. The calculator will instantly compute results and display visual outputs. No account needed." },
  { q: "Are these tools free to use?", a: "Yes, all tools and assessments on StepUp are completely free for founders." },
  { q: "What is the Startup Health Check?", a: "A structured 20-question assessment that scores your startup across Product, Market, Team, Financial Health, and Growth dimensions." },
  { q: "Can I download my results?", a: "Currently results are displayed on-screen. PDF export functionality is coming soon." },
  { q: "Who are these tools designed for?", a: "Early-stage founders, pre-MVP entrepreneurs, and startups preparing for fundraising — especially from Tier II & III cities." },
];

const Resources = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary-foreground">Resources</span>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Resources</p>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            RESOURCES & <span className="text-secondary">LIBRARY</span>
          </h1>
          <p className="max-w-3xl text-lg text-primary-foreground/80">
            Everything you need to build, fund, and scale. Explore our startup tools, market reports, PR updates, and media.
          </p>
        </div>
      </section>

      {/* ═══ Resource Categories ═══ */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Resource <span className="text-secondary">Categories</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubCards.map((card) => (
              <Link
                key={card.title}
                to={card.path}
                className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl min-h-[220px] flex flex-col justify-end bg-gradient-to-br ${card.gradient}`}
              >
                <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/30" />
                <div className="relative z-10">
                  <card.icon className="mb-2 h-8 w-8 text-white/80" />
                  <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-white/80">{card.subtitle}</p>
                  <p className="mt-2 text-xs text-white/60 line-clamp-2">{card.desc}</p>
                </div>
                <ArrowRight className="absolute right-6 top-6 h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Deep-Dive Insights ═══ */}
      <section className="section-padding bg-tsuv-surface">
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

      {/* ═══ Featured Tools & Assessments ═══ */}
      <section className="section-padding">
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

      {/* ═══ Featured PR Activity ═══ */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured <span className="text-secondary">PR Activity</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {prCards.map((pr) => (
              <div key={pr.headline} className="tool-card group">
                <div className="mb-3 flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-secondary" />
                  <span className="text-xs font-semibold text-muted-foreground">{pr.source}</span>
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold group-hover:text-secondary">{pr.headline}</h3>
                <p className="text-xs text-muted-foreground">{pr.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/resources/pr-activity" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              Read Full Coverage <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Featured Videos ═══ */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured <span className="text-secondary">Videos</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {videoCards.map((video) => (
              <div key={video.title} className="tool-card group cursor-pointer">
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-muted">
                  <Play className="h-12 w-12 text-secondary/60 group-hover:text-secondary" />
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold group-hover:text-secondary">{video.title}</h3>
                <p className="text-xs text-muted-foreground">{video.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/resources/videos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              Watch All Videos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Featured Podcasts ═══ */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured <span className="text-secondary">Podcasts</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {podcastCards.map((podcast) => (
              <div key={podcast.title} className="tool-card group cursor-pointer">
                <div className="mb-4 flex h-16 items-center justify-center rounded-lg bg-muted">
                  <Headphones className="h-8 w-8 text-secondary/60 group-hover:text-secondary" />
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold group-hover:text-secondary">{podcast.title}</h3>
                <p className="text-xs text-muted-foreground">{podcast.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/resources/podcasts" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              Listen to All Episodes <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQs ═══ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-2">
                <AccordionTrigger className="font-display text-sm font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
