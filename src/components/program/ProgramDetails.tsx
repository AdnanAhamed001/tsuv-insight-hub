import { Target, TrendingUp, BarChart3 } from "lucide-react";

const details = [
  { icon: Target, title: "Business Model Review", desc: "Deep dive into your business model, value proposition, and market positioning." },
  { icon: TrendingUp, title: "Sales Strategy & Growth Hacking", desc: "Develop go-to-market strategy, customer acquisition channels, and growth playbooks." },
  { icon: BarChart3, title: "Financials & Investor Readiness", desc: "Financial modeling, pitch deck refinement, and preparation for investor demo day." },
];

const ProgramDetails = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-3 text-center font-display text-3xl font-bold">
        Structured 3-Phase <span className="text-secondary">Incubation</span>
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
        Each phase builds on the previous to move your startup from validation to investor readiness.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {details.map((d, i) => (
          <div key={d.title} className="tool-card text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <d.icon className="h-7 w-7 text-secondary" />
            </div>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-secondary">Phase {i + 1}</span>
            <h3 className="mb-2 font-display text-lg font-semibold">{d.title}</h3>
            <p className="text-sm text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramDetails;
