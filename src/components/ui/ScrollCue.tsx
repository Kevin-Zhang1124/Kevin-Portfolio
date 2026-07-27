import styles from './ScrollCue.module.css';

type ScrollCueProps = {
  /** Accessible name, e.g. t.scrollHint (EN/ZH) */
  label: string;
}

/**
 * Mouse-wheel scroll cue (pill + moving dot).
 * Same job as a friend's site indicator — Signal Mesh styling.
 */
export function ScrollCue({ label }: ScrollCueProps) {
  return (
    <div className={styles.root} aria-label={label} role="img">
      {/* Outer mouse outline */}
      <span className={styles.mouse}>
        {/* Wheel dot — animates down + fades */}
        <span className={styles.wheel} aria-hidden="true" />
      </span>
    </div>
  );
}