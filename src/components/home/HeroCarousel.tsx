import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, BarChart3 } from "lucide-react";
import FounderMosaic from "./FounderMosaic";

const slides = [
  {
    headline: "ACCELERATING",
    highlight: "BHARAT'S FOUNDERS.",
    subtitle: "Pan India focus on entrepreneurs from real Bharat — emphasis on underrepresented & underprivileged communities.",
  },
  {
    headline: "BUILDING THE",
    highlight: "$5 TRILLION ECONOMY.",
    subtitle: "Empowering startups from 190+ cities with a tailored 3-month program to become Investor Ready.",
  },
  {
    headline: "FROM IDEA TO",
    highlight: "IMPACT AT SCALE.",
    subtitle: "65 startups incubated with INR 700+ Cr combined valuation — and growing.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="mx-auto max-w-7xl section-padding py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Text content */}
          <div>
            {/* Slide content with fade transition */}
            <div key={current} className="animate-fade-in">
          <p className="mb-4 text-sm font-medium text-primary-foreground/70">
            {slide.subtitle}
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            {slide.headline}
            <br />
            <span className="text-secondary">{slide.highlight}</span>
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap gap-6 text-sm text-primary-foreground/80">
          <span>
            <strong className="text-secondary">4500+</strong> Applications from{" "}
            <strong className="text-secondary">190+</strong> Cities
          </span>
          <span>
            <strong className="text-secondary">65</strong> Startups |{" "}
            <strong className="text-secondary">INR 700+ Cr</strong> Valuation
          </span>
        </div>
        <p className="mb-12 max-w-2xl text-primary-foreground/70">
          Tailored 3-month program to help startups become Investor Ready.
        </p>

        {/* Carousel dots */}
        <div className="mb-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-secondary"
                  : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Gateway Blocks */}
        <div className="grid gap-6 md:grid-cols-2 lg:max-w-3xl">
          <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Rocket className="mb-3 h-8 w-8 text-secondary" />
            <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">
              For Founders
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/70">
              If you are a startup looking to scale, we will be happy to help.
            </p>
            <Link
              to="/program"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
            >
              Explore the Program <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <BarChart3 className="mb-3 h-8 w-8 text-secondary" />
            <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">
              For Investors
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/70">
              Partner with us to back category-defining companies for Bharat and beyond.
            </p>
            <Link
              to="/investor-hub"
              className="inline-flex items-center gap-2 rounded-md border border-secondary bg-transparent px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              Enter Investor Hub <ArrowRight size={16} />
            </Link>
          </div>
        </div>
          </div>

          {/* Right: 3D Floating Mosaic */}
          <div className="hidden lg:block">
            <FounderMosaic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
