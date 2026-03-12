import { useState, useEffect } from "react";
import { StartupCard, StartupInfo } from "./StartupCard";

const startupsData: StartupInfo[] = [
  { name: "Freshleaf", city: "Ludhiana", x: 30, y: 18, logo: "/images/startups/freshleaf-logo.png", image: "/images/startups/freshleaf-founder.png", delay: 0 },
  { name: "My Pahadi Dukan", city: "Roorkee", x: 34, y: 20, logo: "/images/startups/mypahadi-logo.png", image: "/images/startups/mypahadi-founder.png", delay: 1.5 },
  { name: "Daan Veda", city: "Noida", x: 36, y: 25, logo: "/images/startups/daanveda-logo.png", image: "/images/startups/daanveda-founder.png", delay: 3 },
  { name: "Naario", city: "Delhi", x: 33, y: 23, logo: "/images/startups/naario-logo.png", image: "/images/startups/naario-founder.png", delay: 4.5 },
  { name: "Boingg", city: "Gurgaon", x: 32, y: 26, logo: "/images/startups/boingg-logo.png", image: "/images/startups/boingg founder.png", delay: 6 },
  { name: "Fitkin", city: "Delhi", x: 34, y: 24, logo: "/images/startups/fitkin-logo.png", image: "/images/startups/fitkin founder.jpg", delay: 7.5 },
  { name: "Kamikala", city: "Kalimpong", x: 52, y: 28, logo: "/images/startups/kamikala-logo.png", image: "/images/startups/kamikala-founder.png", delay: 9 },
  { name: "ExtraMile Play", city: "Mumbai", x: 24, y: 48, logo: "/images/startups/extramile-logo.png", image: "/images/startups/extramile-founder.png", delay: 10.5 },
  { name: "Bioreform", city: "Hyderabad", x: 35, y: 56, logo: "/images/startups/bioreform-logo.png", image: "/images/startups/bioreform-founder.png", delay: 12 },
  { name: "Alchemyst AI", city: "Bengaluru", x: 32, y: 68, logo: "/images/startups/alchemyst-ai-logo.png", image: "/images/startups/alchemyst-ai-founder.png", delay: 13.5 },
  { name: "NuGenomics", city: "Bengaluru", x: 34, y: 70, logo: "/images/startups/nugenomics-logo.png", image: "/images/startups/nugenomics-founder.png", delay: 15 },
  { name: "Crink", city: "Kochi", x: 30, y: 78, logo: "/images/startups/crink-logo.png", image: "/images/startups/crink-founder.png", delay: 16.5 },
  { name: "ChocoChi", city: "Kozhikode", x: 28, y: 74, logo: "/images/startups/chocochi-logo.png", image: "/images/startups/chocochi-founder.jpg", delay: 18 },
];

const startups = startupsData.sort((a, b) => a.y - b.y);

const IndiaStartupMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Slight delay to fade in map first, then cards start popping up
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;
    
    // Longer visible time so cards are enjoyable to read
    const visibleDuration = 2200;
    const transitionDuration = 650;
    const delayBetweenCards = 300;
    
    const singleCardCycleTime = transitionDuration + visibleDuration + 180 + delayBetweenCards;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % startups.length);
    }, singleCardCycleTime);
    
    return () => clearInterval(interval);
  }, [mapLoaded]);

  return (
    <div className="relative w-full py-10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[620px]">
        {/* Outer ambient glow ring */}
        <div
          className="absolute inset-[-6%] rounded-full transition-opacity duration-1000"
          style={{
            opacity: mapLoaded ? 1 : 0,
            background: "radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Soft inner glow centered on map */}
        <div
          className="absolute inset-[10%] rounded-full blur-3xl transition-opacity duration-1000"
          style={{ opacity: mapLoaded ? 0.6 : 0, background: "rgba(255,215,0,0.07)" }}
        />

        <div className="relative w-full inline-block">
          {/* India map */}
          <img
            src="/images/india-map.svg"
            alt="India map showing startup locations"
            className="w-full h-auto block transition-all duration-1000 ease-out"
            style={{
              filter:
                "brightness(1.05) sepia(1) hue-rotate(-10deg) saturate(3.5) opacity(0.85) drop-shadow(0 0 30px rgba(255,215,0,0.55))",
              opacity: mapLoaded ? 0.9 : 0,
              transform: mapLoaded ? "scale(1)" : "scale(0.95)",
            }}
          />

          {/* Startup cards */}
          {startups.map((startup, index) => (
            <StartupCard
              key={startup.name}
              startup={startup}
              isActive={mapLoaded && index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaStartupMap;
