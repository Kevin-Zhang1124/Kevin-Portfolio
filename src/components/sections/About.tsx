import { Section } from '../layout/Section'
import { useLocale } from '../../hooks/useLocale'
import { useContent } from '../../hooks/useContent'

/**
 * First section: brand + tagline (from dictionary) + about body (from content).
 */
export function About() {
  const { t } = useLocale();
  const content = useContent();

  return (
    <Section id="about">
      {/* Hero-style identity */}
      <h1>{t.brandName}</h1>
      <p style={{ color: 'var(--text-muted)' }}>{t.tagline}</p>

      {/* About subsection */}
      <h2 style={{ marginTop: 'var(--space-5)' }}>{t.navAbout}</h2>
      {/* Body comes from en/about.ts or zh/about.ts via useContent() */}
      <p style={{ color: 'var(--text-muted)' }}>{content.about.body}</p>
    </Section>
  )
}
