import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap, TrendingUp, Globe, Handshake, Building2, Rocket, BarChart3 } from "lucide-react";

const stats = [
  { label: "MENTORS", value: "50+", icon: GraduationCap },
  { label: "COACHES", value: "10+", icon: Users },
  { label: "ACTIVE INVESTORS", value: "150+", icon: TrendingUp },
  { label: "PROFESSIONALS IN NETWORK", value: "25,000+", icon: Globe },
];

const milestones = [
  { label: "Alliances", value: "80" },
  { label: "Startups Incubated", value: "65" },
  { label: "Combined Valuation", value: "₹700Cr" },
  { label: "Applications So Far", value: "4,500" },
  { label: "Cities Reached", value: "190" },
];

const ecosystemPartners = ["100X.VC", "Fluid Ventures", "Cognitive", "Klub", "Anicut", "Peak XV"];
const servicePartners = ["AWS", "Paytm", "Freshworks", "Twilio", "Miro"];

const newsFeed = [
  { title: "E Waste Social: A B2B...", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New age smart pill box...", desc: "As per WHO the majority of the 50% of patients who do not take..." },
  { title: "BeFriends, Best Caretake...", desc: "Stress and tension have become a part of everyday life..." },
  { title: "Ezee Notes: Your Partner...", desc: "Be it school or college, students never show interest in studying..." },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            ACCELERATING<br />
            <span className="text-secondary">BHARAT'S FOUNDERS.</span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg text-primary-foreground/80">
            The StepUp Ventures is building Bharat's future by enabling ambitious founders to scale with speed and clarity. We go beyond incubation — working hand-in-hand with startups to refine their narrative, strategy, and execution while opening doors for market access and capital.
          </p>

          {/* Gateway Blocks */}
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
            <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur">
              <Rocket className="mb-3 h-8 w-8 text-secondary" />
              <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">For Founders</h3>
              <p className="mb-4 text-sm text-primary-foreground/70">If you are a startup looking to scale, we will be Happy to help.</p>
              <Link to="/program" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90">
                Explore the Program <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur">
              <BarChart3 className="mb-3 h-8 w-8 text-secondary" />
              <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">For Investors</h3>
              <p className="mb-4 text-sm text-primary-foreground/70">Partner with us to back category-defining companies for Bharat and beyond.</p>
              <Link to="/investor-hub" className="inline-flex items-center gap-2 rounded-md border border-secondary bg-transparent px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground">
                Enter Investor Hub <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Impact */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-card animate-fade-in">
                <s.icon className="mb-3 h-8 w-8 text-primary" />
                <span className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            OUR <span className="text-secondary">MILESTONES</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {milestones.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                <span className="block font-display text-2xl font-bold text-primary md:text-3xl">{m.value}</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Our Partners</h2>
          <div className="mb-8">
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Ecosystem Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {ecosystemPartners.map((p) => (
                <div key={p} className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm">{p}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Service Partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {servicePartners.map((p) => (
                <div key={p} className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">
            NEWS <span className="text-secondary">FEED</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {newsFeed.map((n, i) => (
              <div key={i} className="tool-card">
                <h3 className="mb-2 font-display text-base font-semibold">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              View All Resources <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
