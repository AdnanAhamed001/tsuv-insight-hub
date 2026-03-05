import { useEffect, useState } from "react";

/**
 * 3D Floating Founder & Startup Mosaic
 * 
 * TO ADD YOUR OWN IMAGES:
 * 1. Add image files to: public/images/mosaic/
 * 2. Name them: tile-1.png, tile-2.png, ... tile-24.png
 * 3. They will automatically display in the grid
 * 
 * Recommended: 400x400px square images, PNG or JPG
 */

const TILE_COUNT = 24;

const tiles = Array.from({ length: TILE_COUNT }, (_, i) => ({
  id: i + 1,
  // Replace these placeholder paths with your actual images in public/images/mosaic/
  image: `/images/mosaic/tile-${i + 1}.png`,
  // Fallback labels for when images haven't been added yet
  label: `Tile ${i + 1}`,
}));

// Staggered elevation for 3D depth
const elevations = [
  "translate-y-0", "translate-y-2", "-translate-y-1", "translate-y-1",
  "-translate-y-2", "translate-y-0", "translate-y-3", "-translate-y-1",
  "translate-y-1", "-translate-y-3", "translate-y-2", "translate-y-0",
  "-translate-y-1", "translate-y-1", "translate-y-0", "-translate-y-2",
  "translate-y-2", "-translate-y-1", "translate-y-0", "translate-y-3",
  "-translate-y-2", "translate-y-1", "translate-y-0", "-translate-y-1",
];

const FounderMosaic = () => {
  const [rotateY, setRotateY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      // Gentle oscillating rotation
      setRotateY(Math.sin(elapsed * 0.3) * 8);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-primary/40" />

      <div
        className="mx-auto max-w-5xl transition-transform duration-100"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          className="grid grid-cols-4 gap-3 px-4 sm:grid-cols-6 md:gap-4"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(2deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s linear",
          }}
        >
          {tiles.map((tile, index) => (
            <MosaicTile
              key={tile.id}
              tile={tile}
              elevation={elevations[index % elevations.length]}
              delay={index * 60}
              isVisible={isVisible}
              zOffset={(index % 5) * 8 - 16}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MosaicTile = ({
  tile,
  elevation,
  delay,
  isVisible,
  zOffset,
}: {
  tile: { id: number; image: string; label: string };
  elevation: string;
  delay: number;
  isVisible: boolean;
  zOffset: number;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-xl border border-border/30 bg-card shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 hover:border-secondary/50 ${elevation} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: `translateZ(${zOffset}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D shadow underneath */}
      <div className="absolute -bottom-2 left-2 right-2 h-4 rounded-xl bg-foreground/10 blur-md" />
      
      {!imgError ? (
        <img
          src={tile.image}
          alt={tile.label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        /* Placeholder when image is missing */
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <span className="font-display text-2xl font-bold text-muted-foreground/40">
            {tile.id}
          </span>
        </div>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Edge highlight for 3D feel */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary-foreground/10" />
    </div>
  );
};

export default FounderMosaic;
