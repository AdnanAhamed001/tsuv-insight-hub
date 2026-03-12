import React from "react";

export interface StartupInfo {
  name: string;
  city: string;
  x: number;
  y: number;
  logo?: string;
  image?: string;
  delay?: number;
}

interface StartupCardProps {
  startup: StartupInfo;
  isActive: boolean;
}

export const StartupCard: React.FC<StartupCardProps> = ({ startup, isActive }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${startup.x}%`,
        top: `${startup.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isActive ? 30 : 20
      }}
    >
      {/* Card with spring entry, instant fade-out */}
      <div
        className={`${
          isActive
            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
            : "opacity-0 scale-75 pointer-events-none translate-y-3"
        }`}
        style={{
          transition: isActive
            ? "all 650ms cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "opacity 180ms ease-out"
        }}
      >
        {/* Connecting stem from card to pin */}
        <div
          className={`absolute left-1/2 -bottom-3 w-px h-3 bg-gradient-to-b from-[#FFD700]/60 to-transparent transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className="flex flex-col items-center overflow-hidden rounded-2xl border border-white/20 shadow-[0_0_0_1px_rgba(255,215,0,0.12),0_12px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(255,215,0,0.08)] relative"
          style={{
            animation: "none",
            minWidth: "155px",
            maxWidth: "185px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Gold shimmer top line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700]/70 to-transparent" />

          {startup.image && (
            <div className="w-full h-[80px] relative overflow-hidden">
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            </div>
          )}

          <div
            className={`flex flex-col items-center w-full px-3 pb-3 ${
              startup.image ? "-mt-5" : "pt-3"
            }`}
          >
            {/* Logo circle */}
            <div className="w-11 h-11 mb-1.5 rounded-full bg-white overflow-hidden flex items-center justify-center p-1.5 shadow-[0_0_0_2px_rgba(255,215,0,0.45),0_0_14px_rgba(255,215,0,0.25)] relative z-10">
              {startup.logo ? (
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="font-display font-bold text-lg text-primary">
                  {startup.name.charAt(0)}
                </span>
              )}
            </div>

            <h3 className="font-display font-bold text-[12px] text-white/95 mb-0.5 text-center leading-tight relative z-10">
              {startup.name}
            </h3>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#FFD700]/80" />
              <p className="text-[8px] text-white/55 uppercase tracking-widest font-semibold text-center relative z-10">
                {startup.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
