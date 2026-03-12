import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const sectors = [
  { title: "FinTech in Bharat — Opportunity Map 2026", tag: "FinTech" },
  { title: "AgriTech Supply Chain Deep Dive", tag: "AgriTech" },
  { title: "HealthTech: Rural vs Urban Demand Analysis", tag: "HealthTech" },
  { title: "SaaS for SMBs — India Market Potential", tag: "SaaS" },
  { title: "EV & CleanTech — Startup Investment Trends", tag: "CleanTech" },
  { title: "Logistics & Last-Mile Delivery in Tier II Cities", tag: "Logistics" },
];

const SectorAnalysisPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <Link to="/resources/reports" className="hover:text-primary-foreground">Reports</Link>
          <span>/</span>
          <span className="text-primary-foreground">Sector Analysis</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Sector Analysis — <span className="text-secondary">Industry Deep Dives</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Sector-specific research covering market size, competition, investment flows, and founder opportunities.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.title} className="tool-card group cursor-pointer">
              <span className="mb-3 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{s.tag}</span>
              <BarChart3 className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{s.title}</h3>
              <p className="text-xs text-muted-foreground">Coming soon — detailed sector analysis.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default SectorAnalysisPage;
