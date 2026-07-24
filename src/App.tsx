import { useTheme } from './hooks/useTheme'
import { useLocale } from './hooks/useLocale'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { locale, t, toggleLocale } = useLocale()

  const buttonStyle = {
    marginTop: 'var(--space-3)',
    marginRight: 'var(--space-2)',
    padding: '0.6rem 1rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    background: 'var(--bg-elevated)',
    color: 'var(--text)',
    cursor: 'pointer',
  } as const

  return (
    <main
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: 'var(--space-6) var(--space-3)',
      }}
    >
      <h1>{t.brandName}</h1>
      <p style={{ color: 'var(--text-muted)' }}>{t.tagline}</p>
      <p style={{ color: 'var(--text-muted)' }}>
        {t.currentLocaleLabel}: {locale} · theme: {theme}
      </p>
      <div>
        <button type="button" onClick={toggleTheme} style={buttonStyle}>
          Toggle theme
        </button>
        <button type="button" onClick={toggleLocale} style={buttonStyle}>
          {t.toggleLanguage}
        </button>
      </div>
    </main>
  )
}

export default App