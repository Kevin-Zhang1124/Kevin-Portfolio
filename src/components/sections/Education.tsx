import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'
import { useContent } from '../../hooks/useContent'
import styles from './sections.module.css'

/** Renders the education list for the active locale */
export function Education() {
  const { t } = useLocale();
  const { education } = useContent();

  return (
    <Section id="education">
      <h2>{t.navEducation}</h2>
      
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.id}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>{item.school}</h3>
              <p className={styles.itemMeta}>
                {item.start} - {item.end}
              </p>
            </div>
            <p className={styles.itemMeta}>
              {item.degree} · {item.location}
            </p>
            <ul className={styles.bullets}>
              {item.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}