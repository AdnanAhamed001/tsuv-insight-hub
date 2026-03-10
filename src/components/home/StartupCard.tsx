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
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isActive ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-col items-center overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/20 border border-[#FFD700]/40 shadow-[0_4px_20px_0_rgba(255,215,0,0.2)] hover:shadow-[0_4px_30px_0_rgba(255,215,0,0.4)] transition-all duration-300"
          style={{
            animation: isActive ? `card-float 4s ease-in-out infinite alternate` : 'none',
            minWidth: "150px",
            maxWidth: "180px"
          }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/15 to-transparent pointer-events-none" />
          
          {startup.image && (
            <div className="w-full h-[90px] bg-black/40 relative">
              <img src={startup.image} alt={startup.name} className="w-full h-full object-cover opacity-90 object-top" />
            </div>
          )}

          <div className={`flex flex-col items-center w-full px-3 pb-3 ${startup.image ? '-mt-6' : 'pt-3'}`}>
            {/* Logo Area */}
            <div className="w-12 h-12 mb-2 rounded-full bg-white/95 overflow-hidden flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(255,215,0,0.5)] border border-[#FFD700]/50 relative z-10 transition-transform duration-300 hover:scale-110">
              {startup.logo ? (
                <img src={startup.logo} alt={`${startup.name} logo`} className="w-full h-full object-contain" />
              ) : (
                <span className="font-display font-bold text-xl text-primary">{startup.name.charAt(0)}</span>
              )}
            </div>

            {/* Text Content */}
            <h3 className="font-display font-bold text-[13px] text-white drop-shadow-md mb-0.5 text-center leading-tight relative z-10">
              {startup.name}
            </h3>
            <p className="text-[9px] text-white/80 uppercase tracking-widest drop-shadow-md font-bold text-center relative z-10">
              {startup.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


