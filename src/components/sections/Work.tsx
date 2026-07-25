import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SkillIcon } from '../ui/SkillIcon';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './sections.module.css';

/** Renders work experience for the active locale */
export function Work() {
  const { t } = useLocale();
  const { work } = useContent();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={t.eyebrowWork}
        title={t.navWork}
      />

      <ul className={styles.list}>
        {work.map((item) => (
          <li key={item.id}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>
                {item.role} · {item.company}
              </h3>
              <p className={styles.itemMeta}>
                {item.start} - {item.end}
              </p>
            </div>
            <p className={styles.itemMeta}>{item.location}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className={styles.tech}>
              {item.tech.map((skillId) => (
                <li key={skillId} className={styles.techItem}>
                  {/* Icon-only tech tag; hover shows the label via title */}
                  <SkillIcon id={skillId} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}