import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, ChartBar as BarChart3 } from "lucide-react";
import IndiaStartupMap from "./IndiaStartupMap";

const slides = [
  {
    headline: "ACCELERATING",
    highlight: "BHARAT'S FOUNDERS.",
    subtitle: "Empowering startups from 190+ cities with a tailored 3-month program to become Investor Ready.",
  },
  {
    headline: "BUILDING THE",
    highlight: "$5 TRILLION ECONOMY.",
    subtitle: "Pan India focus on entrepreneurs from \"Real Bharat\" — emphasis on underrepresented & underprivileged communities.",
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
    <section className="hero-gradient relative min-h-[500px] overflow-hidden flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Premium ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl section-padding py-8 md:py-12 relative z-10 w-full">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <div key={current} className="animate-fade-in group">
              <p className="mb-3 text-sm font-bold tracking-widest uppercase text-secondary/90 transition-colors group-hover:text-secondary">
                {slide.subtitle}
              </p>
              <h1 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-sm leading-[1.1]">
                {slide.headline}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#fff4a3]">
                  {slide.highlight}
                </span>
              </h1>
            </div>

            <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/75 bg-black/20 p-3 rounded-xl border border-white/10 w-max shadow-inner backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <strong className="text-white text-sm">4500+</strong> Apps from{" "}
                <strong className="text-secondary text-sm">190+</strong> Cities
              </span>
              <span className="w-px h-4 bg-white/20 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <strong className="text-white text-sm">65</strong> Startups |{" "}
                <strong className="text-secondary text-sm">₹700Cr+</strong> Value
              </span>
            </div>

            {/* Carousel dots */}
            <div className="mb-7 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                    i === current
                      ? "w-8 bg-secondary shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/40 hover:w-3"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Gateway Blocks */}
            <div className="grid gap-3 sm:grid-cols-2 lg:max-w-[500px]">
              <div className="animate-hero-card-1 group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-secondary/50 hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors group-hover:scale-110 duration-300">
                    <Rocket className="h-5 w-5 text-secondary transition-transform group-hover:rotate-12" />
                  </div>
                  <ArrowRight size={16} className="text-white/40 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mb-1 font-display text-base font-bold text-white tracking-wide group-hover:text-secondary transition-colors">
                  For Founders
                </h3>
                <p className="mb-3 text-[11px] text-white/60 leading-relaxed">
                  Join our tailormade 3-month program to scale your startup.
                </p>
                <Link
                  to="/program"
                  className="inline-flex items-center gap-1.5 w-full justify-center rounded-lg bg-secondary px-3 py-2 text-xs font-bold text-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] shadow-[0_4px_14px_rgba(255,215,0,0.15)] group-hover:scale-[1.02]"
                >
                  Explore Program
                </Link>
              </div>
              <div className="animate-hero-card-2 group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-secondary/50 hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors group-hover:scale-110 duration-300">
                    <BarChart3 className="h-5 w-5 text-white/90 group-hover:text-secondary transition-transform group-hover:-translate-y-1" />
                  </div>
                  <ArrowRight size={16} className="text-white/40 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mb-1 font-display text-base font-bold text-white tracking-wide group-hover:text-secondary transition-colors">
                  For Investors
                </h3>
                <p className="mb-3 text-[11px] text-white/60 leading-relaxed">
                  Partner with us to back category-defining companies for Bharat.
                </p>
                <Link
                  to="/investor-hub"
                  className="inline-flex items-center gap-1.5 w-full justify-center rounded-lg border border-secondary/50 bg-transparent px-3 py-2 text-xs font-bold text-white transition-all hover:bg-secondary hover:text-black hover:border-secondary group-hover:scale-[1.02]"
                >
                  Enter Investor Hub
                </Link>
              </div>
            </div>
          </div>

          {/* Right: India Startup Map */}
          <div className="hidden lg:flex items-center justify-center min-h-[480px] w-full relative">
            <IndiaStartupMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
