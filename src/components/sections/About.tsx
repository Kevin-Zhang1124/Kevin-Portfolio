import { useEffect, useRef, useState } from 'react';
import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import { TypeLine } from '../ui/TypeLine';
import { SignalMark } from '../ui/SignalMark';
import { Reveal } from '../ui/Reveal';
import { ScrollCue } from '../ui/ScrollCue';
import { SocialLinks } from '../ui/SocialLinks';
import styles from './About.module.css';

/** Profile image in /public/profile.png */
const PROFILE_SRC = '/profile.png';

type AboutProps = {
  /** False while SignalIntro is playing */
  introComplete?: boolean;
};

/**
 * First section: brand + typed taglines + profile photo + about body.
 * Mobile: name -> tagline -> centered photo
 * Desktop: text left, photo right
 */
export function About({ introComplete }: AboutProps) {
  const { t } = useLocale();
  const content = useContent();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    const about = aboutRef.current;
    if (!hero || !about) {
      return;
    }
  
    let heroInView = false;
    let aboutInView = false;
  
    const syncCue = () => {
      // Landing only: hero visible and PROFILE / About not yet on screen
      setShowCue(heroInView && !aboutInView);
    };
  
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroInView = entry.isIntersecting;
        syncCue();
      },
      { threshold: 0.1 },
    );
  
    // Hide as soon as the About heading enters the viewport
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        aboutInView = entry.isIntersecting;
        syncCue();
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );
  
    heroObserver.observe(hero);
    aboutObserver.observe(about);
  
    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero: name is the main brand signal */}
      <div id="top" className={styles.hero} ref={heroRef}>
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
            active={introComplete}
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

        {/* Social icons — centered row under the photo */}
        <div className={styles.socialRow}>
          <SocialLinks />
        </div>

        {/* Mouse scroll cue — more content (About) is below */}
        <div 
          className={
            showCue
              ? styles.scrollHint
              : `${styles.scrollHint} ${styles.scrollHintHidden}`
          }
        >
          <ScrollCue label={t.scrollHint} />
        </div>
      </div>

      {/* About heading */}
      <Section id="about">
        <div ref={aboutRef}>
          <SectionHeading
            eyebrow={t.eyebrowAbout}
            title={t.navAbout}
          />
        </div>

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
    </>
  );
}
