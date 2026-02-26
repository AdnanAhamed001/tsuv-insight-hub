import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const caseStudies = [
  { title: "How a Tier III EdTech Startup Raised ₹2 Cr Pre-Seed", tag: "EdTech" },
  { title: "From Side Project to ₹50L MRR — A D2C Story", tag: "D2C" },
  { title: "Pivoting in AgriTech: Lessons from the Field", tag: "AgriTech" },
  { title: "Building a SaaS Product with Zero Engineering Budget", tag: "SaaS" },
  { title: "Community-Led Growth in a HealthTech Startup", tag: "HealthTech" },
  { title: "How StepUp Alumni Scaled Across 3 States", tag: "Alumni" },
];

const CaseStudiesPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <Link to="/resources/reports" className="hover:text-primary-foreground">Reports</Link>
          <span>/</span>
          <span className="text-primary-foreground">Case Studies</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Case Studies — <span className="text-secondary">Real Founder Stories</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Real stories from founders who built, pivoted, raised, and scaled — lessons you can actually use.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <div key={c.title} className="tool-card group cursor-pointer">
              <span className="mb-3 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{c.tag}</span>
              <FileText className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{c.title}</h3>
              <p className="text-xs text-muted-foreground">Coming soon — detailed case study.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CaseStudiesPage;
