import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Users, GraduationCap, TrendingUp, Globe,
  CheckCircle, Quote, Linkedin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── Stats ── */
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

const blogPosts = [
  { title: "How Tier 2 Founders Are Reshaping India's Startup Story", date: "Mar 2, 2026", excerpt: "A look at the rising wave of founders building from beyond the metros.", image: "/placeholder.svg" },
  { title: "5 Lessons from Our Latest Cohort Demo Day", date: "Feb 18, 2026", excerpt: "Key takeaways from the startups that pitched to our investor panel.", image: "/placeholder.svg" },
  { title: "Why Bharat Needs More Women-Led Startups", date: "Feb 5, 2026", excerpt: "Exploring the untapped potential of women entrepreneurs in emerging ecosystems.", image: "/placeholder.svg" },
];

/* ── Team & Mentors ── */
interface Person {
  name: string;
  role: string;
  linkedin?: string;
  image?: string;
}

const teamMembers: Person[] = [
  { name: "Dr. Ebaad Momin", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/ebaad-momin-a8435324/", image: "dr-ebaad-momin.webp" },
  { name: "Mohammed Mohin Shaikh", role: "Partner", linkedin: "https://www.linkedin.com/in/mahammed-mohin-98306311/", image: "mohammed-mohin-shaikh.webp" },
  { name: "Salman Mohammed", role: "Partner", linkedin: "https://www.linkedin.com/in/salman-mohammed-b05a497/", image: "salman-mohammed.webp" },
  { name: "Mohamed Yunus, CA", role: "Financial Advisor", linkedin: "https://www.linkedin.com/in/mohamed-yunus-55571195", image: "mohamed-yunus.webp" },
  { name: "Tariq Syed", role: "Coach", linkedin: "https://www.linkedin.com/in/tariqahmedsyed/", image: "tariq-syed.webp" },
  { name: "Sameer Ahmed", role: "Coach", image: "sameer-ahmed.webp" },
  { name: "Tabish Sangrar", role: "Mentor", linkedin: "https://www.linkedin.com/in/tabish-sangrar/", image: "tabish-sangrar.webp" },
  { name: "Raja Singh", role: "Mentor", linkedin: "https://www.linkedin.com/in/rsbhurji/", image: "raja-singh.webp" },
];

const mentors: Person[] = [
  { name: "Anand Vijay Jha", role: "Mentor", linkedin: "https://www.linkedin.com/in/anandvijayjha/", image: "anand-vijay-jha.webp" },
  { name: "Anshu Aanand", role: "Mentor", linkedin: "https://www.linkedin.com/in/anshuaanandofficial/", image: "anshu-aanand.webp" },
  { name: "Arijit Bhattacharyya", role: "Mentor", linkedin: "https://www.linkedin.com/in/arijitbhattacharyya/", image: "arijit-bhattacharyya.webp" },
  { name: "Dr. Harvinder Popli", role: "Mentor", linkedin: "https://www.linkedin.com/in/harvinder-popli-6ab9b115/", image: "dr-harvinder-popli.webp" },
  { name: "Ebhin Ephram", role: "Mentor", image: "ebhin-ephram.webp" },
  { name: "Florian Oberhofer", role: "Mentor", linkedin: "https://www.linkedin.com/in/flooberhofer/", image: "florian-oberhofer.webp" },
  { name: "Rahul Anand", role: "Mentor", linkedin: "https://www.linkedin.com/in/rahul-anand-66835b1/", image: "rahul-anand.webp" },
  { name: "Qais Mujeeb", role: "Mentor", linkedin: "https://www.linkedin.com/in/moqaism/", image: "qais-mujeeb.webp" },
  { name: "Shivam Ahuja", role: "Mentor", linkedin: "https://www.linkedin.com/in/ahujashivam/", image: "shivam-ahuja.webp" },
  { name: "Vidhya Ramasubban", role: "Mentor", image: "vidhya-ramasubban.webp" },
  { name: "Hemant Mishra", role: "Mentor", linkedin: "https://www.linkedin.com/in/hemant-mishra-vc/", image: "hemant-mishra.webp" },
  { name: "Malini Parmar", role: "Mentor", linkedin: "https://www.linkedin.com/in/maliniparmar/", image: "malini-parmar.webp" },
  { name: "Neetii Makkar", role: "Mentor", image: "neetii-makkar.webp" },
];

const PersonCard = ({ person, imageDir }: { person: Person; imageDir: string }) => {
  const initials = person.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const imageSrc = person.image ? `/images/${imageDir}/${person.image}` : null;

  return (
    <div className="tool-card group relative flex flex-col items-center text-center">
      <div className="mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-muted shadow-md transition-all duration-300 group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-secondary/20">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/80 ${imageSrc ? "hidden" : ""}`}>
          <span className="font-display text-2xl font-bold text-primary-foreground">{initials}</span>
        </div>
      </div>
      <h3 className="font-display text-base font-semibold">{person.name}</h3>
      <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">{person.role}</span>
      {person.linkedin && (
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="absolute right-4 top-4 rounded-full bg-primary/10 p-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-primary/20">
          <Linkedin className="h-4 w-4 text-primary" />
        </a>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<"team" | "mentors">("team");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="hero-gradient section-padding py-20 md:py-28 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary-foreground">About Us</span>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">About Us</p>
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

      {/* Accelerating Bharat's Founders */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex items-center justify-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                <img src="/images/hero-about-us.webp" alt="Accelerating Bharat's Founders" className="h-full w-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold">ACCELERATING BHARAT'S <span className="text-secondary">FOUNDERS</span></h2>
              <p className="mb-6 text-sm text-muted-foreground">
                The mission of StepUp Ventures is to identify, nurture and scale high-potential startups across India. We focus on real Bharat entrepreneurs — from tier 2, tier 3 cities and underrepresented communities.
              </p>
              <p className="mb-4 text-sm text-muted-foreground">Through our structured incubation journey, founders receive:</p>
              <div className="mb-4 space-y-2">
                {["Strategic mentorship", "Access to capital", "Investor connections", "Market expansion support", "Product and business validation"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-primary">We don't just fund startups — we build long-term, scalable ventures.</p>
            </div>
          </div>
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
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                <img src="/images/About-us-image-1.jpeg" alt="What We Do" className="h-full w-full object-cover" />
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

      {/* Meet The Team / Mentors */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Meet The <span className="text-secondary">People</span></h2>
          <div className="relative">
            <div className="pointer-events-none absolute -left-4 top-0 hidden select-none lg:block">
              <span className="font-display text-8xl font-bold uppercase tracking-widest text-muted-foreground/5 [writing-mode:vertical-lr]">
                {activeTab === "team" ? "FOUNDER" : "MENTOR"}
              </span>
            </div>

            <div className="mb-8 flex justify-center gap-2">
              <button onClick={() => setActiveTab("team")} className={`rounded-md px-6 py-2.5 text-sm font-semibold transition-colors ${activeTab === "team" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                Team
              </button>
              <button onClick={() => setActiveTab("mentors")} className={`rounded-md px-6 py-2.5 text-sm font-semibold transition-colors ${activeTab === "mentors" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                Mentors
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(activeTab === "team" ? teamMembers : mentors).map((p) => (
                <PersonCard key={p.name} person={p} imageDir={activeTab === "team" ? "team" : "mentors"} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">What Our <span className="text-secondary">Startups Say</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="tool-card relative">
                <Quote className="mb-3 h-6 w-6 text-secondary/40" />
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
          <div className="flex flex-col gap-2 sm:flex-row">
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
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-2">
                <AccordionTrigger className="font-display text-sm font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* News / Blog Preview */}
      <section className="section-padding bg-tsuv-surface">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">Latest <span className="text-secondary">Articles</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.title} className="tool-card overflow-hidden p-0">
                <div className="aspect-video w-full bg-muted">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{post.date}</p>
                  <h3 className="mb-2 font-display text-base font-semibold leading-snug">{post.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Link to="/blog" className="text-sm font-semibold text-secondary hover:underline">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
