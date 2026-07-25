import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'

/** Selected projects placeholder */
export function Project() {
  const { t } = useLocale()

  return (
    <Section id="project">
      <h2>{t.navProject}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Placeholder project section.
      </p>
    </Section>
  )
}
