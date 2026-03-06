import { useState, useEffect, useCallback } from "react";

const startups = [
  { name: "Freshleaf", city: "Ludhiana", x: 30, y: 18 },
  { name: "My Pahadi Dukan", city: "Roorkee", x: 34, y: 20 },
  { name: "Daan Veda", city: "Noida", x: 36, y: 25 },
  { name: "Nario", city: "Delhi", x: 33, y: 23 },
  { name: "Boingg", city: "Gurgaon", x: 32, y: 26 },
  { name: "Kamikala", city: "Kalimpong", x: 52, y: 28 },
  { name: "ExtraMile Play", city: "Mumbai", x: 24, y: 48 },
  { name: "Bioreform", city: "Hyderabad", x: 35, y: 56 },
  { name: "Alchemyst AI", city: "Bengaluru", x: 32, y: 68 },
  { name: "NuGenomics", city: "Bengaluru", x: 34, y: 70 },
  { name: "Crink", city: "Kochi", x: 30, y: 78 },
  { name: "ChocoChi", city: "Kozhikode", x: 28, y: 74 },
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
      <div className="relative w-full max-w-[320px] md:max-w-[360px]">
        {/* Ambient glow */}
        <div className="absolute -inset-10 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -inset-6 rounded-full bg-secondary/10 blur-2xl" />

        {/* India map - golden tint */}
        <img
          src="/images/india-map.svg"
          alt="India map showing startup locations"
          className="relative w-full h-auto"
          style={{
            filter: "brightness(1.6) saturate(1.2) sepia(0.4) hue-rotate(-10deg)",
            opacity: 0.85,
          }}
        />

        {/* Nodes and premium cards */}
        {startups.map((startup, i) => {
          const isVisible = visibleNodes.includes(i);
          const isActive = activeIndex === i;

          // Determine card position to avoid overflow
          const cardOnLeft = startup.x > 50;

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
              {/* Pulse ring - hidden */}
              {false && isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-7 w-7 rounded-full bg-secondary/40 animate-ping" />
                </div>
              )}

              {/* Outer glow for visible nodes - hidden */}
              {false && isVisible && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-secondary/20 blur-sm" />
                </div>
              )}

              {/* Glowing node - hidden */}
              {false && (
                <div
                  className={`relative z-10 rounded-full transition-all duration-700 ${
                    isVisible
                      ? "h-3 w-3 bg-secondary shadow-[0_0_12px_hsl(37_96%_62%/0.8)]"
                      : "h-1.5 w-1.5 bg-secondary/30"
                  }`}
                />
              )}

            </div>
          );
        })}

        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
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
                  stroke="hsl(37 96% 62% / 0.15)"
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
