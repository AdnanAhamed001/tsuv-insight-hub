import PageLayout from "@/components/layout/PageLayout";
import HeroCarousel from "@/components/home/HeroCarousel";
import AnimatedMilestones from "@/components/home/AnimatedMilestones";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ecosystemPartners = [
  "Artha Venture Fund", "Ennovent", "Anchor Capital", "Pentathlon Ventures", "Callapina Capital",
  "LetsVenture", "India Accelerator", "Tremis Capital", "JAFCO Asia", "Digital Futurists Angel Network",
  "Rehbar", "100X.VC", "Venture Catalysts", "Mount Judi Ventures", "Chandigarh Angels",
  "Tomorrow Capital", "Pod", "Indian Angel Network", "Aditya Birla Ventures", "Lead Angels",
  "RealTime Angels", "Fluid Ventures", "CI Ventures", "Piper Serica", "StartupXseed",
  "Cogniphy", "SucSEED Indovation", "Bharat Founders Fund", "Recur Club", "Advantage Club",
  "Klub", "Motilal Oswal", "Royal Ventures", "Peak XV Partners", "Sorin Investments",
  "Dexter Angels", "Anthill Ventures", "Anova", "3one4 Capital", "3i Partners",
  "The Investment Trust of India", "Mistry Ventures", "Sprout Venture Partners", "FirstCheque",
  "GINSEV", "OCE Capital", "Goa Angel Network", "ReBright Partners", "She Capital",
  "Anicut Capital", "Rukam Capital",
];

const servicePartners = [
  "AWS", "DigitalOcean", "Freshworks", "IBM Cloud", "Monday.com",
  "Notion", "Twilio", "Google Cloud", "Builder.ai", "Paytm", "F6S", "Miro",
];

const featuredPortfolio = [
  { name: "Fitkin", desc: "Women-led activewear brand offering stylish, high-performance, size-inclusive apparel." },
  { name: "Crink", desc: "AI-powered mental wellness app for stress management & parenting guidance." },
  { name: "Nugenomics", desc: "DNA analysis platform combining genetics + lifestyle data for health optimization." },
  { name: "FreshLeaf", desc: "Premium affordable vitamin-infused teas sold online & in 40+ cities." },
];

const newsFeed = [
  { title: "E Waste Social: A B2B...", desc: "Often, recycling and repurposing are viewed by companies as tedious..." },
  { title: "New age smart pill box...", desc: "As per WHO the majority of the 50% of patients who do not take..." },
  { title: "BeFriends, Best Caretake...", desc: "Stress and tension have become a part of everyday life..." },
  { title: "Ezee Notes: Your Partner...", desc: "Be it school or college, students never show interest in studying..." },
];

const Index = () => {
  return (
    <PageLayout>
      <HeroCarousel />

      {/* Featured Portfolio */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Featured <span className="text-secondary">Portfolio</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPortfolio.map((s) => (
              <Link key={s.name} to="/portfolio" className="tool-card group">
                <div className="mb-3 flex h-14 items-center justify-center rounded-md bg-muted">
                  <span className="font-display text-lg font-bold text-primary">{s.name.charAt(0)}</span>
                </div>
                <h3 className="mb-1 font-display text-base font-semibold group-hover:text-secondary">{s.name}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AnimatedMilestones />

      {/* About Preview */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative flex items-center justify-center">
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80">
                <span className="font-display text-4xl font-bold text-primary-foreground/20">$5 Trillion Economy</span>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">About Us</p>
              <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">THE STEPUP VENTURES</h2>
              <h3 className="mb-4 font-display text-lg text-secondary">CONNECT BHARAT WITH THE REST OF THE WORLD</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                The StepUp Ventures plans to connect Bharat with the rest of the world. It endeavours to ignite the entrepreneurial spirit in the youth of Bharat, thus contributing in creation of the 5 Trillion Dollar economy.
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                The StepUp Ventures aims to empower the youth of Bharat to realise its aspirations and help make their dreams a reality through startups that positively impact society. It intends to be the platform that enables under privileged and unserved communities on their path to entrepreneurship.
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                The StepUp Ventures will work with startups that are at the MVP/Early Revenue stage and help them scale through a structured three-month program.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MeetTheTeam />

      {/* Ecosystem Partners */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">
            Ecosystem <span className="text-secondary">Partners</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ecosystemPartners.map((p) => (
              <div key={p} className="rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold">
            Service <span className="text-secondary">Partners</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {servicePartners.map((p) => (
              <div key={p} className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-primary text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
            If you are a startup looking to scale, we will be happy to help.
          </h2>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
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
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
