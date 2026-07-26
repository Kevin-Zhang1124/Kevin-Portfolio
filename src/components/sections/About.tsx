import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import { TypeLine } from '../ui/TypeLine';
import { SignalMark } from '../ui/SignalMark';
import { Reveal } from '../ui/Reveal';
import styles from './About.module.css';

/** Profile image in /public/profile.png */
const PROFILE_SRC = '/profile.png';

/**
 * First section: brand + typed taglines + profile photo + about body.
 * Mobile: name -> tagline -> centered photo
 * Desktop: text left, photo right
 */
export function About() {
  const { t } = useLocale();
  const content = useContent();

  return (
    <Section id="about">
      {/* Hero: name is the main brand signal */}
      <div className={styles.hero}>
        {/* Text block: name + typing line */}
        <div className={styles.copy}>
          {/* Quiet intro — not a heading; name stays the brand */}
          <p className={styles.greeting}>{t.heroGreeting}</p>

          {/* Brand name — largest type on the site */}
          <h1 className={styles.name}>{t.brandName}</h1>

          <TypeLine
            lines={t.taglines}
            className={styles.tagline}
            typingMs={150}
            deletingMs={40}
            pauseMs={2000}
          />
        </div>

        {/* Portrait — centered on mobile, right side on desktop */}
        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src={PROFILE_SRC}
            alt={t.brandName}
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* About heading */}
      <SectionHeading
        eyebrow={t.eyebrowAbout}
        title={t.navAbout}
      />

      {/* Short titled blocks with pulsing cyan indexes */}
      <div className={styles.blocks}>
        {content.about.blocks.map((block, i) => {
          // "01", "02", "03" — pad to 2 digits
          const index = String(i + 1).padStart(2, '0');

          return (
            <Reveal key={block.title} delay={i * 0.08}>
              <article className={styles.block}>
                {/* Marker + title on one row */}
                <header className={styles.blockHeader}>
                  <SignalMark index={index} />
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                </header>
                {/* One or more short paragraphs */}
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.blockBody}>
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Closing line under all blocks */}
      <p className={styles.closing}>{content.about.closing}</p>
    </Section>
  );
}
