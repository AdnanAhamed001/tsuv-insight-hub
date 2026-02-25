import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Calculator, BarChart3, Wallet, ArrowRight } from "lucide-react";

const financialTools = [
  { name: "Equity Dilution Calculator", desc: "Understand how funding rounds impact founder ownership.", path: "/resources/equity-dilution" },
  { name: "Startup Runway & Burn Rate", desc: "Measure survival timeline and capital efficiency.", path: "/resources/runway-burn-rate" },
  { name: "Break-Even Calculator", desc: "Determine revenue required to cover costs.", path: "/resources/break-even" },
  { name: "Exit Scenario (ROI) Calculator", desc: "Project investor returns and ownership at exit.", path: "/resources/exit-scenario" },
  { name: "IRR Calculator", desc: "Estimate annualized investor return.", path: "/resources/irr-calculator" },
  { name: "Berkus Method Valuation", desc: "Early-stage valuation without revenue.", path: "/resources/berkus-method" },
];

const marketTools = [
  
  { name: "Rule of 40 Calculator", path: "/resources/rule-of-40" },
  { name: "Burn Multiple Calculator", path: "/resources/burn-multiple" },
  { name: "LTV Calculator", path: "/resources/ltv-calculator" },
  { name: "Customer Payback Period", path: "/resources/customer-payback" },
];

const capitalTools = [
  { name: "Capital Deployment Planner", path: "/resources/capital-deployment" },
];

const ToolsPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <span className="text-primary-foreground">Tools</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Tools — <span className="text-secondary">Calculators & Financial Models</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Equity dilution, runway, market sizing, LTV, IRR, and more — built for early-stage startups.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl space-y-12">
        <div>
          <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
            <Calculator className="h-5 w-5 text-secondary" /> Financial Calculators
          </h2>
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
          <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
            <BarChart3 className="h-5 w-5 text-secondary" /> Market & Growth Tools
          </h2>
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
          <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
            <Wallet className="h-5 w-5 text-secondary" /> Capital Planning
          </h2>
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
  </PageLayout>
);

export default ToolsPage;
