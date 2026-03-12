import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ClipboardCheck, ArrowRight } from "lucide-react";

const assessments = [
  { name: "Startup Health Check", desc: "Comprehensive startup maturity assessment across Product, Market, Team, Finance, and Growth.", path: "/resources/startup-health-check" },
  { name: "Fundraising Readiness Score", desc: "Evaluate if your startup is ready to raise capital — investor-grade assessment.", path: "/resources/fundraising-readiness" },
  { name: "Startup Idea Validator Quiz", desc: "Test your idea's strength before building an MVP.", path: "/resources/idea-validator" },
];

const AssessmentsPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4273?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <span className="text-primary-foreground">Assessments</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Assessments — <span className="text-secondary">Readiness & Health Checks</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Structured quizzes to score your startup's health, fundraising readiness, and idea strength.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {assessments.map((t) => (
            <Link key={t.name} to={t.path} className="tool-card group flex flex-col">
              <ClipboardCheck className="mb-3 h-6 w-6 text-secondary" />
              <h4 className="mb-1 font-display text-base font-semibold group-hover:text-secondary">{t.name}</h4>
              <p className="flex-1 text-xs text-muted-foreground">{t.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary">Take Assessment <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AssessmentsPage;
