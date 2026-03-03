import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  { q: "How does a startup apply today?", a: "You can apply for our Incubator Program all year long. Applications are open on a rolling basis.", cta: true },
  { q: "How many intakes do you have in a year?", a: "We have 2 cohorts per year. Applications remain open throughout the year.", cta: true },
  { q: "Does it cost money to participate?", a: "No. We do not charge a participation fee. We take equity for services provided." },
  { q: "Do you invest in all startups?", a: "No. Selected startups may receive investment post incubation assessment. Investment is structured as equity." },
  { q: "Is relocation required?", a: "No. The incubation program is fully virtual." },
  { q: "What will a startup get out of the program?", a: "Training: 3-month structured program focused on investor readiness.\nMentorship: Access to experienced founders, investors, and domain experts.\nFundraising: Guidance on pitching and investor conversations.\nNetwork Access: Access to accelerators, funds, corporates and ecosystem partners.\nCulture: #ScaleupBharat – Focus on solving real Bharat challenges." },
  { q: "What is the time commitment?", a: "3-month structured commitment including training, mentorship and checkpoints." },
  { q: "Do all startups complete the program?", a: "Checkpoints exist. Exits may happen depending on progress." },
  { q: "Do startups need to be in India?", a: "We are India-focused but welcome startups solving Bharat problems globally.", cta: true },
  { q: "Do you have a sector focus?", a: "We are sector agnostic across SaaS, marketplaces, media, AI and tech-enabled services." },
  { q: "What type of startups can apply?", a: "Startups with early revenue or MVP with traction.", cta: true },
  { q: "I applied and haven't heard back.", a: "We review all applications individually. It may take a few weeks." },
  { q: "Should I reapply if rejected?", a: "Yes. Many successful founders were accepted after reapplying with progress updates.", cta: true },
];

const FAQ = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", question: "" });
  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 flex items-center gap-2 text-xs text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span>/</span>
            <span className="text-primary-foreground">FAQ</span>
          </div>
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground md:text-5xl">FAQ</h1>
          <p className="max-w-2xl text-lg text-primary-foreground/70">Frequently Asked Questions about The StepUp Ventures.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-lg border border-border bg-card">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-display text-sm font-semibold">
                    {i + 1}. {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="whitespace-pre-line text-sm text-muted-foreground">{f.a}</p>
                    {f.cta && (
                      <a href="https://www.f6s.com/the-stepup-ventures/connect" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90">
                        Apply Now <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </details>
              ))}
            </div>

            {/* Work With Us Form */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold">Have a Question?</h3>
              <div className="space-y-3">
                <input className={inputClass} placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" className={inputClass} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input className={inputClass} placeholder="Mobile *" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                <textarea rows={4} className={inputClass} placeholder="Your Question *" value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} />
                <button className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
