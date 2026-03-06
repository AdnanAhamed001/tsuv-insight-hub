import { useState, useEffect, useCallback } from "react";

const startups = [
  { name: "Freshleaf", city: "Ludhiana", x: 33, y: 22 },
  { name: "My Pahadi Dukan", city: "Roorkee", x: 37, y: 20 },
  { name: "Daan Veda", city: "Noida", x: 39, y: 27 },
  { name: "Nario", city: "Delhi", x: 37, y: 24 },
  { name: "Boingg", city: "Gurgaon", x: 36, y: 26 },
  { name: "Kamikala", city: "Kalimpong", x: 55, y: 32 },
  { name: "ExtraMile Play", city: "Mumbai", x: 28, y: 50 },
  { name: "Bioreform", city: "Hyderabad", x: 38, y: 58 },
  { name: "Alchemyst AI", city: "Bengaluru", x: 35, y: 70 },
  { name: "NuGenomics", city: "Bengaluru", x: 37, y: 72 },
  { name: "Crink", city: "Kochi", x: 33, y: 80 },
  { name: "ChocoChi", city: "Kozhikode", x: 31, y: 76 },
];

const IndiaStartupMap = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);

  const activateNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % startups.length;
      setVisibleNodes((vis) => {
        if (vis.length >= startups.length) return [next];
        return [...vis, next];
      });
      return next;
    });
  }, []);

  useEffect(() => {
    // Initial delay then cycle
    const initialTimer = setTimeout(() => {
      activateNext();
    }, 600);
    const interval = setInterval(activateNext, 2200);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [activateNext]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Map container */}
      <div className="relative w-full max-w-[320px] md:max-w-[360px]">
        {/* Subtle glow behind map */}
        <div className="absolute -inset-6 rounded-full bg-secondary/10 blur-3xl" />
        
        {/* India map SVG */}
        <img
          src="/images/india-map.svg"
          alt="India map showing startup locations"
           className="relative w-full h-auto opacity-60"
           style={{ filter: "brightness(1.2) saturate(0.7)" }}
        />

        {/* Nodes and cards */}
        {startups.map((startup, i) => {
          const isVisible = visibleNodes.includes(i);
          const isActive = activeIndex === i;

          return (
            <div
              key={startup.name}
              className="absolute"
              style={{
                left: `${startup.x}%`,
                top: `${startup.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Pulse ring */}
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-secondary/30 animate-ping" />
                </div>
              )}

              {/* Glowing node */}
              <div
                className={`relative z-10 rounded-full transition-all duration-700 ${
                  isVisible
                    ? "h-2.5 w-2.5 bg-secondary shadow-[0_0_8px_hsl(37_96%_62%/0.6)]"
                    : "h-1 w-1 bg-primary-foreground/20"
                }`}
              />

              {/* Startup card */}
              {isActive && (
                <div
                  className="absolute z-20 left-4 -top-3 whitespace-nowrap animate-fade-in"
                >
                  <div className="rounded-lg border border-secondary/20 bg-primary/90 backdrop-blur-sm px-3 py-1.5 shadow-lg shadow-secondary/10">
                    <p className="text-xs font-semibold text-secondary">
                      {startup.name}
                    </p>
                    <p className="text-[10px] text-primary-foreground/60">
                      {startup.city}, India
                    </p>
                  </div>
                  {/* Connector line */}
                  <div className="absolute left-0 top-1/2 -translate-x-full w-3 h-px bg-secondary/40" />
                </div>
              )}
            </div>
          );
        })}

        {/* Subtle connection lines between a few nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {visibleNodes.length > 1 &&
            visibleNodes.slice(0, -1).map((nodeIdx, i) => {
              const next = visibleNodes[i + 1];
              if (next === undefined) return null;
              const from = startups[nodeIdx];
              const to = startups[next];
              return (
                <line
                  key={`${nodeIdx}-${next}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="hsl(37 96% 62% / 0.12)"
                  strokeWidth="0.3"
                  className="animate-fade-in"
                />
              );
            })}
        </svg>
      </div>
    </div>
  );
};

export default IndiaStartupMap;
