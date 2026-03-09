import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What stage should my startup be in?", a: "MVP to Early Revenue stage startups." },
  { q: "How long is the program?", a: "Structured 3-month incubation followed by 3 months of portfolio management and fundraising support." },
  { q: "Is funding guaranteed?", a: "We enable investor access but funding depends on evaluation." },
  { q: "Is it equity-based?", a: "Depends on engagement and support structure. Our model is founder-friendly." },
  { q: "Do you support Tier 2 & Tier 3 founders?", a: "Yes, that is our core focus. We scout from 190+ cities across Bharat." },
];

const ProgramFAQ = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 text-center font-display text-3xl font-bold">
        Frequently Asked <span className="text-secondary">Questions</span>
      </h2>
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
);

export default ProgramFAQ;
