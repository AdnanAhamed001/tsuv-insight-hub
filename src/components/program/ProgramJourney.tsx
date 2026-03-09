import { Search, GraduationCap, Briefcase } from "lucide-react";

const cards = [
  {
    icon: Search,
    title: "Scouting Ongoing",
    items: [
      "Online and physical outreach to attract startups from MVP/Early Revenue stage.",
      "Ideas assessed in early phase based on two-level shortlisting mechanism.",
      "At least Business, Technical and Financial due diligence done.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Incubation Program — 3 Months",
    items: [
      "A structured 3-phase incubation focusing on Product-Market Fit, Business Model Review, and Financial Readiness.",
      "Mentor-led sessions with weekly reviews.",
      "Investor Demo-day to pitch to wider startup ecosystem.",
    ],
  },
  {
    icon: Briefcase,
    title: "Portfolio Management — 3 Months",
    items: [
      "Help startups in fundraising rounds.",
      "Enable investor relationship support.",
      "Access to value-added partners.",
      "Hands-on support post incubation.",
    ],
  },
];

const ProgramJourney = () => (
  <section className="section-padding bg-muted/50">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-10 text-center font-display text-3xl font-bold">
        The StepUp <span className="text-secondary">Journey</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="tool-card">
            <c.icon className="mb-4 h-10 w-10 text-secondary" />
            <h3 className="mb-3 font-display text-lg font-semibold">{c.title}</h3>
            <ul className="space-y-2">
              {c.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramJourney;
