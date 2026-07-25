import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'

/** Work experience placeholder */
export function Work() {
  const { t } = useLocale();

  return (
    <Section id="work">
      <h2>{t.navWork}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Placeholder work section.
      </p>
    </Section>
  )
}
