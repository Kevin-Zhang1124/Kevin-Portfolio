import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Contact.module.css';

/**
 * Contact: short invite + form.
 */
export function Contact() {
  const { t } = useLocale();
  const { contact } = useContent();

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.eyebrowContact}
        title={t.navContact}
      />
      
      <p className={styles.intro}>{contact.intro}</p>
    </Section>
  );
}