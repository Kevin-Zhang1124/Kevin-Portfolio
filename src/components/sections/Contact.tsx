import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './sections.module.css';

/** Renders contact methods for the active locale */
export function Contact() {
  const { t } = useLocale();
  const { contact } = useContent();

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.eyebrowContact}
        title={t.navContact}
      />
      
      <ul className={styles.contactList}>
        {contact.map((item) => (
          <li key={item.id} className={styles.contactRow}>
            {/* Label stays muted; link uses accent via .contactLink */}
            <span className={styles.contactLabel}>{item.label}</span>
            <a className={styles.contactLink} href={item.href}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}