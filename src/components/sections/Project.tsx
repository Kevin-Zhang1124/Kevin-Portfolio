import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { skills } from '../../content/shared/skills';
import styles from './sections.module.css';

/** Renders projects for the active locale */
export function Project() {
  const { t } = useLocale();
  const { project } = useContent();

  return (
    <Section id="project">
      <h2>{t.navProject}</h2>

      <ul className={styles.list}>
        {project.map((item) => (
          <li key={item.id}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>{item.name}</h3>
              {/* Only render link if provided */}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {t.projectLink}
                </a>
              ) : null}
            </div>
            <p className={styles.itemMeta}>{item.summary}</p>
            <ul className={styles.tech}>
              {item.tech.map((skillId) => (
                <li key={skillId} className={styles.techItem}>
                  {/* SkillId → display label from shared/skills.ts */}
                  {skills[skillId].label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}