import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";

const ReportsPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <span className="text-primary-foreground">Reports</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Reports — <span className="text-secondary">Market Insights & Case Studies</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Deep-dive sector analysis, strategic playbooks, and founder case studies.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Featured Report */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(198,100%,12%)] to-[hsl(198,80%,22%)] p-10 md:p-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="mb-3 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">Featured Report</span>
              <h3 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">India Tier II/III Startup Ecosystem Report 2026</h3>
              <p className="text-sm text-white/70">A comprehensive analysis of emerging startup hubs beyond metros — market opportunity, founder demographics, sector trends, and investment flows across Bharat.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground cursor-pointer hover:bg-secondary/90">
              <FileText size={18} /> Read Report
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { name: "Market Reports", path: "/resources/reports/market-reports", desc: "Industry data, benchmarks, and investment trends." },
            { name: "Founder Playbooks", path: "/resources/reports/founder-playbooks", desc: "Step-by-step guides for early-stage founders." },
            { name: "Case Studies", path: "/resources/reports/case-studies", desc: "Real founder stories — lessons you can use." },
            { name: "Sector Analysis", path: "/resources/reports/sector-analysis", desc: "Deep dives into specific industry verticals." },
          ].map((r) => (
            <Link key={r.name} to={r.path} className="tool-card group">
              <FileText className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="font-display text-base font-semibold group-hover:text-secondary">{r.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ReportsPage;
