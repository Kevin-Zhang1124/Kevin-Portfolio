import styles from './BackgroundFX.module.css';

/**
 * Signal Mesh backdrop: slow drifting light orbs + quiet grid.
 * Stronger presence than a faint grid alone, but calm behind text.
 */
export function BackgroundFX() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={`${styles.orb} ${styles.orbA}`} />
      <div className={`${styles.orb} ${styles.orbB}`} />
      <div className={`${styles.orb} ${styles.orbC}`} />
      <div className={styles.grid} />
    </div>
  );
}