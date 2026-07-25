import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'

/** Contact / links placeholder */
export function Contact() {
  const { t } = useLocale()

  return (
    <Section id="contact">
      <h2>{t.navContact}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Placeholder contact section.
      </p>
    </Section>
  )
}
