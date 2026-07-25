import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'

/**
 * First viewport content lives here (no separate Intro section).
 * Brand + tagline, then a short About block.
 */
export function About() {
  const { t } = useLocale();

  return (
    <Section id="about">
      {/* Hero-style identity */}
      <h1>{t.brandName}</h1>
      <p style={{ color: 'var(--text-muted)' }}>{t.tagline}</p>

      {/* About subsection */}
      <h2 style={{ marginTop: 'var(--space-5)' }}>{t.navAbout}</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Placeholder — replace with your real about copy later.
      </p>
    </Section>
  )
}
