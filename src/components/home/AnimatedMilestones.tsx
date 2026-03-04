import { useState, useEffect, useRef } from "react";

const milestones = [
  { label: "Allies", value: 85, suffix: "+", prefix: "" },
  { label: "Startups Incubated", value: 65, suffix: "", prefix: "" },
  { label: "Combined Valuation", value: 700, suffix: "+ Cr", prefix: "INR " },
  { label: "Applications", value: 4500, suffix: "+", prefix: "" },
  { label: "Cities Reached", value: 190, suffix: "+", prefix: "" },
  { label: "Professionals in TSV Network", value: 2500, suffix: "+", prefix: "" },
];

const useCountUp = (target: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
};

const MilestoneCard = ({
  m,
  inView,
}: {
  m: (typeof milestones)[0];
  inView: boolean;
}) => {
  const count = useCountUp(m.value, 2000, inView);
  const display = m.value >= 1000 ? count.toLocaleString() : count;

  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      <span className="block font-display text-2xl font-bold text-primary md:text-3xl">
        {m.prefix}
        {display}
        {m.suffix}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {m.label}
      </span>
    </div>
  );
};

const AnimatedMilestones = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
          OUR <span className="text-secondary">MILESTONES</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {milestones.map((m) => (
            <MilestoneCard key={m.label} m={m} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMilestones;
