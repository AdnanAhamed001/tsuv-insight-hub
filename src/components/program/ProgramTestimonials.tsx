import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Nakul", role: "Founder & CEO — BidWheelz", quote: "The StepUp Ventures have been very instrumental in not just validating the business model but also creating the pathway for the future business." },
  { name: "Swati", role: "Founder & CEO — DoseTap", quote: "TSUV has really helped me in refining my business model. The people and the mentors at TSUV are very closely connected." },
  { name: "Iram", role: "Founder & CEO — E Waste Social", quote: "The TSUV approach has been very hands-on as all the mentors and the cohort team have been very involved from the beginning." },
];

const ProgramTestimonials = () => (
  <section className="section-padding bg-muted/50">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-8 text-center font-display text-3xl font-bold">
        Founders We've <span className="text-secondary">Backed</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="tool-card relative">
            <Quote className="absolute top-4 right-4 h-6 w-6 text-secondary/20" />
            <p className="mb-4 text-sm italic text-muted-foreground leading-relaxed">"{t.quote}"</p>
            <p className="font-display text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors">
          View Full Portfolio <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default ProgramTestimonials;
