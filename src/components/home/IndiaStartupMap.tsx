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
    
    // Configurable timings
    const visibleDuration = 1500; // Time card stays visible
    const transitionDuration = 500; // Time for fade in/out
    const delayBetweenCards = 500; // Pause before next card appears
    
    // Total time per card cycle: fade in + visible + fade out + delay
    const singleCardCycleTime = transitionDuration + visibleDuration + transitionDuration + delayBetweenCards;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % startups.length);
    }, singleCardCycleTime);
    
    return () => clearInterval(interval);
  }, [mapLoaded]);

  // We need to keep a "fading out" state so the card doesn't instantly vanish from the DOM 
  // before its opacity transition finishes. We achieve this by letting StartupCard 
  // manage its own presence based on the activeIndex.

  return (
    <div className="relative w-full py-16 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[800px]">
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full bg-[#FFD700]/15 blur-3xl transition-opacity duration-1000" style={{ opacity: mapLoaded ? 1 : 0 }} />

        <div className="relative w-full inline-block">
          {/* India map - sleek dark aesthetic map */}
          <img
            src="/images/india-map.svg"
            alt="India map showing startup locations"
            className="w-full h-auto block transition-all duration-1000 ease-out"
            style={{
              filter: "brightness(1) sepia(1) hue-rotate(-10deg) saturate(3) opacity(0.8) drop-shadow(0 0 25px rgba(255,215,0,0.6))",
              opacity: mapLoaded ? 0.9 : 0,
              transform: mapLoaded ? 'scale(1)' : 'scale(0.95)',
            }}
          />

          {/* Premium Cards appearing over the map */}
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
