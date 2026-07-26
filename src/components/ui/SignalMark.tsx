import styles from './SignalMark.module.css';

type SignalMarkProps = {
  /** Display index, e.g. "01" or "02" */
  index: string;
};

/**
 * Cyan mono index marker for About blocks.
 * Soft pulse animation = "signal" feel (Signal Mesh), not a static dot.
 */
export function SignalMark({ index }: SignalMarkProps) {
  return (
    <span className={styles.mark} aria-hidden="true">
      {/* Number is the main signal */}
      <span className={styles.index}>{index}</span>

      {/* Small chevron blip — reinforces "active signal" */}
      <span className={styles.blip}>▸</span>
    </span>
  );
}