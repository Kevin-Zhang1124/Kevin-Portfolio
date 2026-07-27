import { useEffect, useState } from 'react';
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
  // Mobile section menu (closed by default)
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu after a section link is chosen
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close on Escape for accessibility
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        {/* Brand jumps to the first section (About) */}
        <a className={styles.brand} href="#about">
          {t.brandName}
        </a>

        {/* Mobile only (CSS): opens the section list */}
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="nav-section-menu"
          aria-label="Sections"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {/* Simple 2-line icon — styled in CSS */}
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>

        {/* Build links from config so order stays in sync with the page */}
        <ul
          id="nav-section-menu"
          className={
            menuOpen
              ? `${styles.links} ${styles.linksOpen}`
              : styles.links
          }
        >
          {sections.map((section) => {
            // true when this link matches the section currently in view
            const isActive = activeId === section.id;

            return (
              <li key={section.id}>
                <a
                  onClick={closeMenu}
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