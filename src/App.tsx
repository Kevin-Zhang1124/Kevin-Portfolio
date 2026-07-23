import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: 'var(--space-6) var(--space-3)',
      }}
    >
      <h1>Kevin Zhang</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Quiet Precision — theme provider test. Current: {theme}
      </p>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          marginTop: 'var(--space-4)',
          padding: '0.6rem 1rem',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          background: 'var(--bg-elevated)',
          color: 'var(--text)',
          cursor: 'pointer',
        }}
      >
        Toggle theme
      </button>
    </main>
  )
}

export default App