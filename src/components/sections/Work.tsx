import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { companies } from '../../content/shared/companies';
import { SkillIcon } from '../ui/SkillIcon';
import { SectionHeading } from '../ui/SectionHeading';
import sectionStyles from './sections.module.css';
import styles from './Work.module.css';

/** Mobile-first work timeline: logo rail + panel content */
export function Work() {
  const { t } = useLocale();
  const { work } = useContent();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={t.eyebrowWork}
        title={t.navWork}
      />

      <ul className={styles.timeline}>
        {work.map((item) => {
          const companyMeta = companies[item.companyId];

          return (
            <li key={item.id} className={styles.entry}>
              {/* Logo node + connecting line */}
              <div className={styles.rail} aria-hidden="true">
                <div className={styles.logoWrap}>
                  <img
                    className={styles.logo}
                    src={companyMeta.logoSrc}
                    alt=""
                  />
                </div>
              </div>

              {/* Job details in a soft panel */}
              <article className={styles.panel}>
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
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}