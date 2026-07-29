import { useLocale } from '../../hooks/useLocale';
import { SocialLinks } from '../ui/SocialLinks';
import styles from './Footer.module.css';

/**
 * Site footer: brand, note, social icons, copyright.
 * Reuses SocialLinks so hero and footer stay in sync.
 */
export function Footer() {
  const { t } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand jumps back to the landing hero */}
        <a className={styles.brand} href="#top">
          {t.footerBrandName}
        </a>

        <p className={styles.note}>{t.footerNote}</p>

        <div className={styles.social}>
          <SocialLinks />
        </div>

        <p className={styles.copyright}>{t.footerCopyright}</p>
      </div>
    </footer>
  );
}