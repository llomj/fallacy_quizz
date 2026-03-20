import React, { useMemo } from 'react';

export type FallingStarsVariant = 'single' | 'five' | 'randomFive' | 'allLevels';

const STAR_COUNT_SINGLE = 42;
/** Level mode 5★: many stars for the longer fanfare */
const STAR_COUNT_FIVE = 160;
/** Random 5★ (>90%): even denser; matches the extended melody + extra difficulty */
const STAR_COUNT_RANDOM_FIVE = 420;
const STAR_COUNT_ALL_LEVELS = 150;

interface FallingStarsProps {
  variant: FallingStarsVariant;
  className?: string;
}

export const FallingStars: React.FC<FallingStarsProps> = ({ variant, className = '' }) => {
  const count = variant === 'allLevels' ? STAR_COUNT_ALL_LEVELS
    : variant === 'randomFive' ? STAR_COUNT_RANDOM_FIVE
    : variant === 'five' ? STAR_COUNT_FIVE
    : STAR_COUNT_SINGLE;

  const stars = useMemo(() => {
    const baseSize = variant === 'allLevels' ? 12 : variant === 'randomFive' ? 9 : variant === 'five' ? 10 : 8;
    const sizeStep = variant === 'allLevels' ? 4 : variant === 'randomFive' ? 2 : variant === 'five' ? 3 : 2;
    // Longer stagger on 5★ / random 5★ so stars keep appearing during the whole jingle
    const delayMod =
      variant === 'randomFive' ? 11 : variant === 'five' ? 6 : variant === 'allLevels' ? 5 : 4;
    const delayScale = variant === 'randomFive' ? 0.045 : variant === 'five' ? 0.055 : 0.08;
    const durBase = variant === 'randomFive' ? 3.2 : variant === 'five' ? 2.8 : 2.2;
    const durSpread = variant === 'randomFive' ? 2.2 : variant === 'five' ? 1.8 : 1.4;

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 7 + (i * i) % 17) % 100}%`,
      delay: (i * delayScale + Math.random() * 0.85) % delayMod,
      duration: durBase + (i % 5) * 0.45 + Math.random() * durSpread,
      size: baseSize + (i % 6) * sizeStep,
      opacity: 0.5 + (i % 7) * 0.07,
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
