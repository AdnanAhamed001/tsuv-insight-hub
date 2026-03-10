import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Shield, TrendingUp, Eye, Users, Building2, ArrowRight, Target,
  BarChart3, Handshake, Globe, CheckCircle, MapPin, Briefcase, Layers, Network
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const InvestorHub = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", interest: "", message: "" });

  const fundStrategy = [
    { icon: Target, title: "Early Stage Focus", desc: "MVP to Early Revenue stage startups with proven traction" },
    { icon: Globe, title: "Sector-Agnostic", desc: "Bharat-first lens across AgriTech, HealthTech, EdTech, SaaS, CleanTech" },
    { icon: Layers, title: "Structured Program", desc: "3-month incubation + investor readiness framework" },
    { icon: Network, title: "Co-Investor Network", desc: "Access to curated network of angels, VCs and institutional partners" },
  ];

  const whyInvest = [
    { icon: MapPin, value: "190+", label: "Cities", desc: "Strong pipeline from Tier 2 & 3 cities" },
    { icon: Eye, value: "4500+", label: "Applications", desc: "Evaluated through structured screening" },
    { icon: Briefcase, value: "65+", label: "Startups", desc: "Supported with hands-on mentorship" },
    { icon: Shield, value: "100%", label: "Due Diligence", desc: "Structured legal, technical & financial review" },
  ];

  const portfolioMetrics = [
    { value: "₹700Cr+", label: "Cumulative Valuation" },
    { value: "8", label: "Completed Cohorts" },
    { value: "1000+", label: "Jobs Created" },
    { value: "15+", label: "Follow-on Investments" },
  ];

  const partners = [
    "100X.VC", "Fluid Ventures", "Cognitive Capital", "Klub", "Anicut Capital",
    "Inflection Point Ventures", "Mumbai Angels", "Venture Catalysts"
  ];

  const testimonials = [
    { quote: "The quality of the deal flow and the rigorous screening process sets TSUV apart from other accelerators in the ecosystem.", author: "Ecosystem Partner" },
    { quote: "The transparency, governance, and real impact on the Tier II/III ecosystem is unmatched. A true partner in building Bharat.", author: "LP Partner" },
    { quote: "StepUp's structured approach to founder development and their commitment to governance gives us confidence as co-investors.", author: "Angel Investor" },
  ];

  const faqs = [
    { q: "What stage startups do you invest in?", a: "We focus on MVP to Early Revenue stage startups with strong founder-market fit and scalable business models." },
    { q: "How are startups evaluated?", a: "Through a structured due diligence process covering legal, business, technical, and financial parameters. Only 10 startups are selected per cohort." },
    { q: "Can investors co-invest?", a: "Yes, we actively facilitate co-investment opportunities. Partners can co-invest in specific startups during or after the incubation program." },
    { q: "How is reporting handled?", a: "Regular structured portfolio updates, quarterly performance reviews, and annual impact reports are shared with all partners." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Handle form submission
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary-foreground">Investor Hub</span>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Investor Hub</p>
          <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Back Bharat's Category-Defining <span className="text-secondary">Founders.</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-primary-foreground/80">
            Partner with StepUp Ventures to discover, support and scale high-potential startups from real Bharat.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#partner-form" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
              Partner With Us <ArrowRight size={16} />
            </a>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-transparent px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              View Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="aspect-[4/3] rounded-xl bg-muted overflow-hidden">
              <img 
                src="/images/investor-hub.jpg" 
                alt="Investment Philosophy" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold">Our Investment <span className="text-secondary">Philosophy</span></h2>
              <p className="mb-4 text-muted-foreground">
                We believe in backing ambitious founders from Tier 2 & Tier 3 cities who are solving real Bharat problems.
              </p>
              <p className="text-muted-foreground">
                Our focus is on early-stage startups with strong founder-market fit and scalable business models. We partner with entrepreneurs who understand their local markets deeply and have the vision to build category-defining companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Strategy */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Fund Strategy</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fundStrategy.map((s) => (
              <div key={s.title} className="tool-card text-center">
                <s.icon className="mx-auto mb-4 h-10 w-10 text-secondary" />
                <h3 className="mb-2 font-display text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Why Invest With <span className="text-secondary">StepUp?</span></h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyInvest.map((w) => (
              <div key={w.label} className="tool-card text-center">
                <w.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <span className="block font-display text-3xl font-bold text-primary">{w.value}</span>
                <h3 className="font-display text-sm font-semibold">{w.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-8 font-display text-3xl font-bold">Portfolio Performance</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioMetrics.map((m) => (
              <div key={m.label}>
                <span className="block font-display text-4xl font-bold text-secondary">{m.value}</span>
                <span className="text-sm text-primary-foreground/70">{m.label}</span>
              </div>
            ))}
          </div>
          <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 font-semibold text-secondary-foreground hover:bg-secondary/90">
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Co-Investment & Network */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center font-display text-3xl font-bold">Co-Investment & Network</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Ecosystem partners, angel networks, VCs and institutional investors collaborating with StepUp Ventures.
          </p>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center justify-center rounded-lg border border-border bg-card p-6 h-20">
                <span className="font-display text-sm font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Transparency */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center font-display text-3xl font-bold">Governance & Transparency</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
            Structured reporting, financial transparency, compliance processes and portfolio updates shared with partners.
          </p>
          <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2">
            {[
              "Multi-stage legal and financial due diligence",
              "Audited financial records and clean cap tables",
              "Monthly portfolio updates to all partners",
              "Quarterly performance reviews",
              "SEBI-compliant fund structure",
              "Independent advisory board oversight",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our Network Says</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="tool-card">
                <p className="mb-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="font-display text-sm font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-2">
                <AccordionTrigger className="font-display text-sm font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="section-padding bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center font-display text-3xl font-bold">Partner With Us</h2>
          <p className="mb-8 text-center text-sm text-primary-foreground/70">
            Whether you are an angel investor, a family office, or a corporate venturing arm, let's explore how we can build Bharat together.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-primary-foreground">Name *</Label>
              <Input
                id="name"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-primary-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="org" className="text-primary-foreground">Organization *</Label>
              <Input
                id="org"
                required
                placeholder="Organization / Fund Name"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                className="mt-1 bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="interest" className="text-primary-foreground">Investment Interest *</Label>
              <Input
                id="interest"
                required
                placeholder="e.g., Angel Investment, Co-Investment, LP Partnership"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="mt-1 bg-background text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-primary-foreground">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell us about your investment focus and interests"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 bg-background text-foreground"
              />
            </div>
            <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default InvestorHub;
