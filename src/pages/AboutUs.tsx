import PageLayout from "@/components/layout/PageLayout";
import { Target, Rocket, Wallet, Users, GraduationCap, TrendingUp, Globe } from "lucide-react";

const whatWeDo = [
  { icon: Target, title: "Tier II & III Focus", desc: "Giving non-metro entrepreneurs the same access to networks, customers, and capital as metro founders." },
  { icon: Rocket, title: "Acceleration Journey", desc: "Preparing founders not just for today's challenges, but for the next rounds of growth. Working with MVP/Early Revenue stage startups." },
  { icon: Wallet, title: "Capital Deployment", desc: "Partnering with our sister fund, Mount Judi India Micro Fund, to invest up to ₹1 Crore in the most promising ventures." },
];

const testimonials = [
  { name: "Nakul", role: "Founder & CEO - BidWheelz", quote: "The StepUp Ventures have been very instrumental in not just validating the business model but also creating the pathway for the future business." },
  { name: "Swati", role: "Founder & CEO - DoseTap", quote: "TSUV has really helped me in refining my business model. The people and the mentors at TSUV are very closely connected. What I really appreciate is the one-on-one hand holding." },
  { name: "Iram", role: "Founder & CEO - E Waste Social", quote: "The TSUV approach has been very hands-on as all the mentors and the cohort team have been very involved from the beginning." },
];

const stats = [
  { icon: GraduationCap, value: "50+", label: "Mentors" },
  { icon: Users, value: "10+", label: "Coaches" },
  { icon: TrendingUp, value: "150+", label: "Active Investors" },
  { icon: Globe, value: "25,000+", label: "Professionals in Network" },
];

const AboutUs = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">ABOUT US</h1>
          <h2 className="mb-6 font-display text-2xl text-secondary md:text-3xl">Accelerating Bharat's Founders</h2>
          <p className="mb-4 max-w-3xl text-lg text-primary-foreground/90">
            The StepUp Ventures is building Bharat's future by enabling ambitious founders to scale with speed and clarity. We go beyond incubation — working hand-in-hand with startups to refine their narrative, strategy, and execution while opening doors for market access and capital.
          </p>
          <p className="max-w-3xl text-primary-foreground/70">
            The StepUp Ventures plans to connect Bharat with the rest of the world. It endeavours to ignite the entrepreneurial spirit in the youth of Bharat, thus contributing in the creation of the 5 Trillion Dollar economy.
          </p>
        </div>
      </section>

      {/* Stats */}
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
          <h2 className="mb-2 text-center font-display text-3xl font-bold">What We Do</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">Empowering the Youth of Bharat — we intend to be the platform that enables underprivileged and unserved communities on their path to entrepreneurship.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {whatWeDo.map((w) => (
              <div key={w.title} className="tool-card text-center">
                <w.icon className="mx-auto mb-4 h-10 w-10 text-secondary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our Startups Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
