import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const cohortDates = [
  { label: "Next Cohort", value: "Cohort 9 — August 2026" },
  { label: "Application Deadline", value: "July 15, 2026" },
  { label: "Interview Window", value: "July 16 – July 30, 2026" },
  { label: "Cohort Kickoff", value: "August 4, 2026" },
  { label: "Demo Day", value: "November 2026" },
  { label: "Cohort Size", value: "10 Startups" },
];

const ProgramCohort = () => (
  <section className="section-padding hero-gradient text-primary-foreground">
    <div className="mx-auto max-w-7xl">
      <Calendar className="mx-auto mb-4 h-10 w-10 text-secondary" />
      <h2 className="mb-8 text-center font-display text-3xl font-bold">Upcoming Cohort Details</h2>
      <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cohortDates.map((d) => (
          <div key={d.label} className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-5 text-center backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-primary-foreground/60">{d.label}</p>
            <p className="mt-2 font-display text-base font-bold text-secondary">{d.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/apply" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors">
          Apply Now <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default ProgramCohort;
