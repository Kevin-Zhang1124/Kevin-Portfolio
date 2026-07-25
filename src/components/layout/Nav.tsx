import { sections } from '../../content/shared/sections'
import { useLocale } from '../../hooks/useLocale'
import { useTheme } from '../../hooks/useTheme'
import styles from './Nav.module.css'

/**
 * Sticky top navigation:
 * brand | section links | theme + language toggles
 */
export function Nav() {
  // t = translated strings for the active locale
  const { t, toggleLocale } = useLocale();
  // theme is 'light' | 'dark'; toggleTheme flips it (and persists via ThemeProvider)
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        {/* Brand jumps to the first section (About) */}
        <a className={styles.brand} href="#about">
          {t.brandName}
        </a>

        {/* Build links from config so order stays in sync with the page */}
        <ul className={styles.links}>
          {sections.map((section) => (
            <li key={section.id}>
              <a className={styles.link} href={`#${section.id}`}>
                {/* e.g. section.labelKey === 'navWork' → t.navWork */}
                {t[section.labelKey]}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
          >
            {/* Show the mode you will switch TO */}
            {theme === 'light' ? t.toggleThemeToDark : t.toggleThemeToLight}
          </button>

          <button
            type="button"
            className={styles.controlButton}
            onClick={toggleLocale}
            aria-label="Switch language"
          >
            {t.toggleLanguage}
          </button>
        </div>
      </nav>
    </header>
  )
}