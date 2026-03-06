import React, { useMemo } from 'react';

export type FallingStarsVariant = 'single' | 'five';

const STAR_COUNT_SINGLE = 24;
const STAR_COUNT_FIVE = 56;

interface FallingStarsProps {
  variant: FallingStarsVariant;
  className?: string;
}

export const FallingStars: React.FC<FallingStarsProps> = ({ variant, className = '' }) => {
  const count = variant === 'five' ? STAR_COUNT_FIVE : STAR_COUNT_SINGLE;

  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      delay: (i * 0.12 + Math.random() * 0.8) % 4,
      duration: 2.5 + (i % 3) * 0.8 + Math.random() * 1.2,
      size: variant === 'five' ? 10 + (i % 5) * 2 : 8 + (i % 4) * 2,
      opacity: 0.5 + (i % 5) * 0.1,
    }));
  }, [count, variant]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-amber-400/90 animate-fall-star"
          style={{
            left: star.left,
            top: '-2rem',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            fontSize: `${star.size}px`,
            opacity: star.opacity,
          }}
        >
          <i className="fas fa-star" />
        </div>
      ))}
    </div>
  );
};
