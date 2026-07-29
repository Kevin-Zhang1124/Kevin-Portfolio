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

      <form className={styles.form} noValidate>
        {/* Name */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">
            {t.formNameLabel}
          </label>
          <input
            className={styles.input}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.formNamePlaceholder}
            required
          />
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">
            {t.formEmailLabel}
          </label>
          <input
            className={styles.input}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.formEmailPlaceholder}
            required
          />
        </div>

        {/* Message */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-message">
            {t.formMessageLabel}
          </label>
          <textarea
            className={styles.textarea}
            id="contact-message"
            name="message"
            rows={5}
            placeholder={t.formMessagePlaceholder}
            required
          />
        </div>

        {/* Submit */}
        <button className={styles.submit} type="submit">
          <span className={styles.submitMark} aria-hidden="true">
            ▸
          </span>
          {t.formSubmit}
        </button>
      </form>
    </Section>
  );
}