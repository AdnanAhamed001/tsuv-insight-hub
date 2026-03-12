import PageLayout from "@/components/layout/PageLayout";
import HeroCarousel from "@/components/home/HeroCarousel";
import AnimatedMilestones from "@/components/home/AnimatedMilestones";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const ecosystemPartnersCount = 54;
const ecosystemPartners = Array.from({ length: ecosystemPartnersCount }, (_, i) => `/images/Ecosystem%20Partners/new-logo-${i + 1}.png`);

const servicePartnersFiles = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 42, 43, 45];
const servicePartners = servicePartnersFiles.map((num) => `/images/Service%20Partners/logo-${num}.webp`);

const featuredPortfolio = [
  { name: "Fitkin", desc: "Women-led activewear brand offering stylish, high-performance, size-inclusive apparel.", logo: "/images/startups/fitkin-logo.png" },
  { name: "Crink", desc: "AI-powered mental wellness app for stress management & parenting guidance.", logo: "/images/startups/crink-logo.png" },
  { name: "Nugenomics", desc: "DNA analysis platform combining genetics + lifestyle data for health optimization.", logo: "/images/startups/nugenomics-logo.png" },
  { name: "FreshLeaf", desc: "Premium affordable vitamin-infused teas sold online & in 40+ cities.", logo: "/images/startups/freshleaf-logo.png" },
];

const newsFeed = [
  {
    title: "'Employee Engagement, Netflix-Style': ExtraMile Play Raises USD 500,000",
    desc: "Another startup from The StepUp Ventures' Acceleration Program secures funding, scaling its gamified employee engagement platform.",
    source: "The Wire",
    sourceColor: "#c0392b",
    href: "https://thewire.in/ptiprnews/employee-engagement-netflix-style-extramile-play-raises-usd-500000-another-startup-from-the-stepup-ventures-acceleration-program-secures-funding",
  },
  {
    title: "Cohort 2.0 Incubation Program: Seed Funding Opportunity of Up to INR 20 Lacs",
    desc: "Up to 2 crores worth of perks & benefits available for qualifying startups through this structured incubation initiative.",
    source: "Funds for NGOs",
    sourceColor: "#27ae60",
    href: "https://www2.fundsforngos.org/business-industry/cohort-2-0-incubation-program-seed-funding-opportunity-of-up-to-inr-20-lacs-up-to-2-crores-worth-of-perks-benefits/",
  },
  {
    title: "Ofis Square Hosts High-Impact FoodTech Meetup in Noida",
    desc: "Strengthening India's food innovation ecosystem with 50+ founders and leading investors driving India's food startup growth.",
    source: "Passionate In Marketing",
    sourceColor: "#8e44ad",
    href: "https://www.passionateinmarketing.com/ofis-square-hosts-high-impact-foodtech-meetup-in-noida-strengthening-indias-food-innovation-ecosity/",
  },
  {
    title: "ExtraMile Play Raises USD 500K Seed Round to Scale Its Gamified Employee Engagement Platform",
    desc: "ExtraMile Play secures seed funding to expand its innovative platform that transforms workplace engagement through gamification.",
    source: "The Wire",
    sourceColor: "#c0392b",
    href: "https://thewire.in/ptiprnews/extramile-play-raises-usd-500k-seed-round-to-scale-its-gamified-employee-engagement-platform",
  },
  {
    title: "Crink Secures Rs 1.8 Crore Pre-Seed Funding to Scale Its AI-Driven Human Wellbeing Platform",
    desc: "Crink's AI-powered mental wellness app for stress management and parenting guidance closes its pre-seed round.",
    source: "The Wire",
    sourceColor: "#c0392b",
    href: "https://m.thewire.in/article/ptiprnews/crink-secures-rs-1-8-crore-pre-seed-funding-to-scale-its-ai-driven-human-wellbeing-platform/amp?utm=relatedarticles",
  },
  {
    title: "Delhi Startup Nugenomics Is Using AI/ML for Lifestyle Genetic Testing",
    desc: "Nugenomics uses DNA analysis combined with AI and lifestyle data to unlock personalised health insights for every individual.",
    source: "YourStory",
    sourceColor: "#e67e22",
    href: "https://yourstory.com/2022/04/delhi-startup-nugenomics-ai-ml-lifestyle-genetic-testing",
  },
  {
    title: "Organic Food Brand Naario Raises Pre-Seed Funding from Women Angel Investors",
    desc: "Women-led and run organic food brand Naario raises an undisclosed sum from a group of angel investors led by women entrepreneurs.",
    source: "Times of India",
    sourceColor: "#2980b9",
    href: "https://timesofindia.indiatimes.com/business/india-business/organic-food-brand-naario-raises-pre-seed-funding-from-women-angel-investors-and-entrepreneurs/articleshow/88164734.cms",
  },
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
              <Link key={s.name} to="/portfolio" className="tool-card group flex flex-col items-center text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-white border border-border/60 p-3 shadow-sm relative overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-secondary/50">
                  <img src={s.logo} alt={`${s.name} logo`} className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold group-hover:text-secondary">{s.name}</h3>
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
              <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-muted">
                <img 
                  src="/images/custom/about-us-group.jpeg" 
                  alt="The StepUp Ventures Team" 
                  className="h-full w-full object-cover" 
                />
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
          <div className="flex flex-wrap items-center justify-center gap-6">
            {ecosystemPartners.map((p, i) => (
              <div key={i} className="flex h-20 w-32 items-center justify-center rounded-xl bg-white border border-border/50 p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary/30">
                <img 
                  src={p} 
                  alt={`Ecosystem Partner ${i + 1}`} 
                  loading="eager"
                  className="max-h-full max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Partners */}
      <section className="section-padding bg-black text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-2xl font-bold">
            Service <span className="text-secondary">Partners</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {servicePartners.map((p, i) => (
              <div key={i} className="flex h-20 w-32 items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary/50 hover:bg-white/10">
                <img 
                  src={p} 
                  alt={`Service Partner ${i + 1}`} 
                  loading="eager"
                  className="max-h-full max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105" 
                />
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {newsFeed.map((n, i) => (
              <a
                key={i}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-border/60 bg-card shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/40 hover:-translate-y-1"
              >
                {/* Source badge */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-muted/30">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: n.sourceColor }}
                  />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide truncate">{n.source}</span>
                  <ExternalLink size={11} className="ml-auto flex-shrink-0 text-muted-foreground/50 group-hover:text-secondary transition-colors" />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="font-display text-sm font-semibold leading-snug line-clamp-3 mb-2 group-hover:text-secondary transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 mt-auto">{n.desc}</p>
                </div>
                {/* Footer */}
                <div className="px-4 pb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={11} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
