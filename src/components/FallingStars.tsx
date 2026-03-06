import React, { useMemo } from 'react';

export type FallingStarsVariant = 'single' | 'five' | 'allLevels';

const STAR_COUNT_SINGLE = 36;
const STAR_COUNT_FIVE = 90;
const STAR_COUNT_ALL_LEVELS = 150;

interface FallingStarsProps {
  variant: FallingStarsVariant;
  className?: string;
}

export const FallingStars: React.FC<FallingStarsProps> = ({ variant, className = '' }) => {
  const count = variant === 'allLevels' ? STAR_COUNT_ALL_LEVELS
    : variant === 'five' ? STAR_COUNT_FIVE
    : STAR_COUNT_SINGLE;

  const stars = useMemo(() => {
    const baseSize = variant === 'allLevels' ? 12 : variant === 'five' ? 10 : 8;
    const sizeStep = variant === 'allLevels' ? 4 : variant === 'five' ? 3 : 2;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 13 + 3) % 100}%`,
      delay: (i * 0.08 + Math.random() * 0.6) % (variant === 'allLevels' ? 5 : 4),
      duration: 2.2 + (i % 4) * 0.6 + Math.random() * 1.4,
      size: baseSize + (i % 6) * sizeStep,
      opacity: 0.55 + (i % 6) * 0.08,
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
