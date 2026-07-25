import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import styles from './About.module.css';

/**
 * First section: brand + tagline (from dictionary) + about body (from content).
 */
export function About() {
  const { t } = useLocale();
  const content = useContent();

  return (
    <Section id="about">
      {/* Hero: name is the main brand signal */}
      <div className={styles.hero}>
        <h1 className={styles.name}>{t.brandName}</h1>
        <p className={styles.tagline}>{t.tagline}</p>
      </div>

      {/* About copy */}
      <h2 className={styles.aboutHeading}>{t.navAbout}</h2>
      <p className={styles.body}>{content.about.body}</p>
    </Section>
  );
}
