import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const playbooks = [
  { title: "First-Time Founder's Fundraising Guide", tag: "Fundraising" },
  { title: "Building Your MVP in 90 Days", tag: "Product" },
  { title: "Go-To-Market Strategy for Tier II Startups", tag: "GTM" },
  { title: "Hiring Your First 10 Employees", tag: "Team" },
  { title: "Unit Economics Playbook", tag: "Finance" },
  { title: "Scaling from ₹0 to ₹1 Cr ARR", tag: "Growth" },
];

const FounderPlaybooksPage = () => (
  <PageLayout>
    <section className="hero-gradient section-padding py-16 md:py-20 bg-[url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
      <div className="mx-auto max-w-7xl">
        <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-primary-foreground">Home</Link>
          <span>/</span>
          <Link to="/resources" className="hover:text-primary-foreground">Resources</Link>
          <span>/</span>
          <Link to="/resources/reports" className="hover:text-primary-foreground">Reports</Link>
          <span>/</span>
          <span className="text-primary-foreground">Founder Playbooks</span>
        </div>
        <h1 className="mb-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Founder Playbooks — <span className="text-secondary">Step-by-Step Guides</span>
        </h1>
        <p className="max-w-2xl text-sm text-primary-foreground/70">
          Actionable frameworks and step-by-step guides written for early-stage founders navigating their startup journey.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playbooks.map((p) => (
            <div key={p.title} className="tool-card group cursor-pointer">
              <span className="mb-3 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{p.tag}</span>
              <BookOpen className="mb-3 h-6 w-6 text-secondary" />
              <h3 className="mb-1 font-display text-sm font-semibold group-hover:text-secondary">{p.title}</h3>
              <p className="text-xs text-muted-foreground">Coming soon — downloadable playbook.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default FounderPlaybooksPage;
