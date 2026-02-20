import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Calculator, BarChart3, ClipboardCheck, Wallet, FileText, Play, Headphones, ArrowRight } from "lucide-react";

const tabs = ["Tools", "Reports", "PR Activity", "Videos", "Podcasts"];

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

const assessments = [
  { name: "Startup Health Check", desc: "Comprehensive startup maturity assessment.", path: "/resources/startup-health-check" },
  { name: "Fundraising Readiness Score", desc: "Evaluate investor preparedness.", path: "/resources/fundraising-readiness" },
  { name: "Startup Idea Validator Quiz", desc: "Test idea strength before building.", path: "/resources/idea-validator" },
];

const capitalTools = [
  { name: "Capital Deployment Planner", desc: "Plan raise amount, allocation, and runway impact.", path: "/resources/capital-deployment" },
];

const articles = [
  { title: "E Waste Social: A B2B...", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New age smart pill box...", desc: "As per WHO the majority of the 50% of patients who do not take..." },
  { title: "BeFriends, Best Caretake...", desc: "Stress and tension have become..." },
  { title: "Ezee Notes: Your Partner...", desc: "Be it school or college, students never show interest in studying..." },
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
  const [activeTab, setActiveTab] = useState("Tools");

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground">RESOURCES & LIBRARY</h1>
          <p className="text-primary-foreground/80">Everything you need to build, fund, and scale. Explore our startup tools, market reports, PR updates, and media.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 px-4 backdrop-blur lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto py-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeTab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Tools" && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl space-y-12">
            {/* Financial */}
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Calculator className="h-5 w-5 text-secondary" /> Financial Calculators</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{financialTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
            {/* Market */}
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><BarChart3 className="h-5 w-5 text-secondary" /> Market & Growth Tools</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{marketTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
            {/* Assessments */}
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><ClipboardCheck className="h-5 w-5 text-secondary" /> Founder Assessments</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{assessments.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
            {/* Capital */}
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold"><Wallet className="h-5 w-5 text-secondary" /> Capital Planning</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{capitalTools.map((t) => <ToolCard key={t.name} {...t} />)}</div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "Reports" && (
        <section className="section-padding">
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

      {activeTab === "PR Activity" && (
        <section className="section-padding">
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

      {activeTab === "Videos" && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl text-center">
            <Play className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h2 className="mb-2 font-display text-xl font-bold">Video Content</h2>
            <p className="text-sm text-muted-foreground">Demo Days, Startup Pitch Videos, Masterclasses, and Founder Interviews — coming soon.</p>
          </div>
        </section>
      )}

      {activeTab === "Podcasts" && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl text-center">
            <Headphones className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h2 className="mb-2 font-display text-xl font-bold">Audio Content</h2>
            <p className="text-sm text-muted-foreground">Conversations with the executive team, coaches, and successful founders — coming soon.</p>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default Resources;
