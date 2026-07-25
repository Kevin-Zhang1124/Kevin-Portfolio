import { sections } from '../../content/shared/sections';
import { useLocale } from '../../hooks/useLocale';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Nav.module.css';

/**
 * Sticky top navigation:
 * brand | section links | language toggle
 * (Theme is dark-only for Signal Mesh — no light/dark switch.)
 */
export function Nav() {
  // t = translated strings for the active locale
  const { t, toggleLocale } = useLocale();
  // Which section is currently in view (from scroll spy hook)
  const activeId = useActiveSection();

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        {/* Brand jumps to the first section (About) */}
        <a className={styles.brand} href="#about">
          {t.brandName}
        </a>

        {/* Build links from config so order stays in sync with the page */}
        <ul className={styles.links}>
          {sections.map((section) => {
            // true when this link matches the section currently in view
            const isActive = activeId === section.id;

            return (
              <li key={section.id}>
                <a
                  className={
                    isActive
                      ? `${styles.link} ${styles.linkActive}`
                      : styles.link
                  }
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {t[section.labelKey]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.controls}>
          {/* Language only — dark theme is fixed for Signal Mesh */}
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
  );
}