import { useEffect, useState } from 'react';
import styles from './SignalIntro.module.css';

type SignalIntroProps = {
  /** Called after the intro finishes (including fade-out) */
  onComplete: () => void;
};

/**
 * Full-screen Signal Mesh intro:
 * wave draws -> "Kevin Zhang" draws -> brief hold -> fade out.
 * Plays on every page load (parent controls when to mount it).
 */
export function SignalIntro({ onComplete }: SignalIntroProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Reduced motion: short hold, then fade. Full motion: ~1.9s total.
    const leaveAt = reduced ? 400 : 3750;
    const doneAt = reduced ? 450 : 4200;

    const leaveTimer = window.setTimeout(() => setLeaving(true), leaveAt);
    const doneTimer = window.setTimeout(() => onComplete(), doneAt);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={leaving ? `${styles.root} ${styles.leaving}` : styles.root}
      role="presentation"
      aria-hidden="true"
    >
      <div className={styles.content}>
        {/* Oscilloscope-style signal line */}
        <svg
          className={styles.wave}
          viewBox="0 0 800 80"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            className={styles.wavePath}
            d="M0 40 H180 L200 40 L220 18 L240 62 L260 28 L280 52 L300 40 H800"
          />
        </svg>

        {/* Always English brand mark */}
        <svg
          className={styles.name}
          viewBox="0 0 800 160"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Kevin Zhang"
        >
          <text
            className={styles.nameText}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Kevin Zhang
          </text>
        </svg>
      </div>
    </div>
  );
}