import { useReducedMotion, motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { companies } from '../../content/shared/companies';
import { SkillIcon } from '../ui/SkillIcon';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import sectionStyles from './sections.module.css';
import styles from './Work.module.css';

/** Mobile-first work timeline: logo rail + panel content */
export function Work() {
  const { t } = useLocale();
  const { work } = useContent();
  // Skip motion if the OS asks for reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="work" reveal={false}>
      {/* Heading still gets the shared fade; timeline animates per entry */}
      <Reveal>
        <SectionHeading
          eyebrow={t.eyebrowWork}
          title={t.navWork}
        />
      </Reveal>

      <ul className={styles.timeline}>
        {work.map((item, i) => {
          const companyMeta = companies[item.companyId];
          // Stagger each job slightly so they don't all pop at once
          const delay = i * 0.08;

          return (
            <li key={item.id} className={styles.entry}>
              {/* Logo node — "grows up" (scale in) */}
              <div className={styles.rail} aria-hidden="true">
                <motion.div
                  className={styles.logoWrap}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, scale: 0.45 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeOut',
                    delay,
                  }}
                >
                  <img
                    className={styles.logo}
                    src={companyMeta.logoSrc}
                    alt=""
                  />
                </motion.div>
              </div>

              {/* Job panel — shifts in from the right a little */}
              <motion.article
                className={styles.panel}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: 28, y: 12 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: delay + 0.05,
                }}
              >
                <h3 className={styles.role}>{item.role}</h3>

                <div className={styles.metaRow}>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.dates}>
                    {item.start} - {item.end}
                  </p>
                </div>

                <p className={styles.location}>{item.location}</p>

                <ul className={sectionStyles.bullets}>
                  {item.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <ul className={sectionStyles.tech}>
                  {item.tech.map((skillId) => (
                    <li key={skillId} className={sectionStyles.techItem}>
                      <SkillIcon id={skillId} />
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}