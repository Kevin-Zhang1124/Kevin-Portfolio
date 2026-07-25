import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SkillIcon } from '../ui/SkillIcon';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './sections.module.css';

/** Renders projects for the active locale */
export function Project() {
  const { t } = useLocale();
  const { project } = useContent();

  return (
    <Section id="project">
      <SectionHeading
        eyebrow={t.eyebrowProject}
        title={t.navProject}
      />

      <ul className={styles.list}>
        {project.map((item) => (
          <li key={item.id}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>{item.name}</h3>
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