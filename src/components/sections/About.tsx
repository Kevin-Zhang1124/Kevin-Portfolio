import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import { TypeLine } from '../ui/TypeLine';
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
        <TypeLine
          lines={t.taglines}
          className={styles.tagline}
          typingMs={150}
          deletingMs={40}
          pauseMs={2000}
        />
      </div>

      {/* About copy */}
      <SectionHeading
        eyebrow={t.eyebrowAbout}
        title={t.navAbout}
      />
      <p className={styles.body}>{content.about.body}</p>
    </Section>
  );
}
