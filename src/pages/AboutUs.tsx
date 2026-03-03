import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Target, Rocket, Wallet, Users, GraduationCap, TrendingUp, Globe, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "50+", label: "Mentors" },
  { icon: Users, value: "10+", label: "Coaches" },
  { icon: TrendingUp, value: "150+", label: "Active Investors" },
  { icon: Globe, value: "25,000+", label: "Professionals in the Network" },
];

const whatWeDo = [
  "Business model refinement",
  "Go-to-market strategy",
  "Investor readiness preparation",
  "Product-market fit validation",
  "Strategic partnerships",
  "Fundraising support",
];

const whyUs = [
  { title: "WELL ROUNDED TEAM OF COACHES", desc: "Our mentors bring deep industry expertise, startup experience and hands-on guidance to accelerate growth." },
  { title: "EXPERIENCED EXECUTIVE TEAM", desc: "Leadership with proven track record in scaling startups and building sustainable businesses." },
  { title: "HIGHLY ACCOMPLISHED MENTORS", desc: "Access to seasoned founders, CXOs and investors who provide strategic direction and global perspective." },
];

const testimonials = [
  { name: "Nakul", role: "Founder & CEO", quote: "StepUp Ventures played a crucial role in refining our strategy and connecting us with the right investors." },
  { name: "Swati", role: "Founder", quote: "The mentorship and ecosystem support accelerated our growth significantly." },
  { name: "Iram", role: "Founder", quote: "The structured incubation journey helped us scale faster than expected." },
];

const faqs = [
  { q: "Who can apply to StepUp Ventures?", a: "Early-stage founders from across India, especially from Tier 2 & Tier 3 cities, who are building scalable and impact-driven startups." },
  { q: "What stage should my startup be in?", a: "We typically work with idea to early revenue stage startups that demonstrate strong founder-market fit and growth potential." },
  { q: "Do you provide funding?", a: "Yes. We help startups become investor-ready and facilitate access to our network of active investors and ecosystem partners." },
  { q: "How long is the incubation program?", a: "Our structured program typically runs for 3 months, with continued ecosystem support beyond the formal cohort." },
  { q: "Is there any equity requirement?", a: "Equity participation depends on the level of support, capital access, and program structure. Details are discussed during selection." },
  { q: "Do you support startups outside metro cities?", a: "Absolutely. Our focus is on Bharat founders across Tier 2, Tier 3 and emerging startup ecosystems." },
];

const AboutUs = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground">About Us</span>
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">ABOUT US</h1>
          <h2 className="mb-6 font-display text-2xl text-secondary md:text-3xl">Accelerating Bharat's Founders</h2>
          <p className="mb-4 max-w-3xl text-lg text-primary-foreground/90">
            The mission of StepUp Ventures is to identify, nurture and scale high-potential startups across India. We focus on real Bharat entrepreneurs — from tier 2, tier 3 cities and underrepresented communities.
          </p>
          <p className="max-w-3xl text-primary-foreground/70">
            Through our structured incubation journey, founders receive strategic mentorship, access to capital, investor connections, market expansion support, and product and business validation. We don't just fund startups — we build long-term, scalable ventures.
          </p>
        </div>
      </section>

      {/* Network Metrics */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <s.icon className="mb-3 h-8 w-8 text-primary" />
                <span className="font-display text-3xl font-bold text-primary">{s.value}</span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold">WHAT WE DO</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                We act as a long-term growth partner for founders. Beyond advice, we work shoulder-to-shoulder to help startups refine strategy, unlock markets and raise funding.
              </p>
              <div className="space-y-3">
                {whatWeDo.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-primary">We ensure startups are not just investment-ready, but scale-ready.</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80">
                <span className="font-display text-3xl font-bold text-primary-foreground/20">Scale Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Why Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="tool-card text-center">
                <h3 className="mb-3 font-display text-base font-bold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our Startups Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-2xl font-bold">Subscribe to get latest information on TSV</h2>
          <div className="flex gap-2">
            <input type="text" placeholder="Full Name" className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:outline-none" />
            <input type="email" placeholder="Email Address" className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:outline-none" />
            <button className="rounded-md bg-secondary px-6 py-2.5 font-semibold text-secondary-foreground hover:bg-secondary/90">Submit</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-lg border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-display text-sm font-semibold">
                  {f.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
