import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  /** Small label above the title, e.g. "LEARNING PATH" */
  eyebrow: string;
  /** Main section title, e.g. "Education" */
  title: string;
};

/**
 * Shared section header for Signal Mesh:
 * mono eyebrow + strong display title.
 */
export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}