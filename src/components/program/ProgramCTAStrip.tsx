import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProgramCTAStrip = () => (
  <section className="bg-secondary py-10">
    <div className="mx-auto max-w-7xl flex flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
      <p className="font-display text-lg font-bold text-secondary-foreground md:text-xl">
        If you are a startup looking to scale, we will be Happy to help.
      </p>
      <Link
        to="/apply"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Apply Now <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default ProgramCTAStrip;
