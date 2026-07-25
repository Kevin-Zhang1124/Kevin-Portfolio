import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'

/** Education timeline placeholder */
export function Education() {
  const { t } = useLocale();

  return (
    <Section id="education">
      <h2>{t.navEducation}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Placeholder education section.
      </p>
    </Section>
  )
}