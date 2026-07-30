import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SkillIcon } from '../ui/SkillIcon';
import { SectionHeading } from '../ui/SectionHeading';
import { SiGithub, SiYoutube } from 'react-icons/si';
import type { ProjectLinkKind } from '../../types';
import styles from './sections.module.css';

const projectLinkIcons: Record<ProjectLinkKind, typeof SiGithub> = {
  youtube: SiYoutube,
  github: SiGithub,
};

const projectLinkLabels: Record<ProjectLinkKind, string> = {
  youtube: 'Watch demo on YouTube',
  github: 'View on GitHub',
};

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
              {item.link && item.linkKind ? (
                <a
                  className={styles.projectLink}
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={projectLinkLabels[item.linkKind]}
                >
                  {(() => {
                    const Icon = projectLinkIcons[item.linkKind];
                    return <Icon aria-hidden="true" focusable="false" />
                  })()}
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