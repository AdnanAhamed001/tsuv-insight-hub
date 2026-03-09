import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProgramHero = () => (
  <section className="hero-gradient relative overflow-hidden py-14 md:py-20">
    <div className="mx-auto max-w-7xl section-padding">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1.5 text-xs text-primary-foreground/60">
        <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-secondary font-medium">Program</span>
      </nav>
      <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
        PROGRAM
      </h1>
    </div>
  </section>
);

export default ProgramHero;
