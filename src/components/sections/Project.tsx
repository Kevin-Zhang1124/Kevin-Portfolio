import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'
import { useContent } from '../../hooks/useContent'
import styles from './sections.module.css'

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
                  Link
                </a>
              ) : null}
            </div>
            <p className={styles.itemMeta}>{item.summary}</p>
            <ul className={styles.tech}>
              {item.tech.map((name) => (
                <li key={name} className={styles.techItem}>
                  {name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}