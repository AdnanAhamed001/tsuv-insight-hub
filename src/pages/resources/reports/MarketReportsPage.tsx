import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const reports = [
  { title: "SaaS Growth Benchmarks — India 2026", tag: "SaaS" },
  { title: "AgriTech Investment Landscape", tag: "AgriTech" },
  { title: "HealthTech Founder Playbook", tag: "HealthTech" },
  { title: "FinTech Disruption in Tier II Cities", tag: "FinTech" },
  { title: "EdTech Market Sizing & Trends", tag: "EdTech" },
  { title: "D2C Brand Building in Bharat", tag: "D2C" },
];

const MarketReportsPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <Link to="/resources/reports" className="hover:text-primary-foreground">Reports</Link>
          <span>/</span>
          <span className="text-primary-foreground">Market Reports</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Market Reports — <span className="text-secondary">Industry Data & Trends</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          In-depth market analysis, sector benchmarks, and investment trends across India's startup ecosystem.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <div key={r.title} className="tool-card group cursor-pointer">
              <span className="mb-3 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{r.tag}</span>
              <FileText className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{r.title}</h3>
              <p className="text-xs text-muted-foreground">Coming soon — downloadable insights and analysis.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default MarketReportsPage;
