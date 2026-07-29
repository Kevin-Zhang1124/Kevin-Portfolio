import { useState, type FormEvent } from 'react';
import { Section } from '../layout/Section';
import { useLocale } from '../../hooks/useLocale';
import { useContent } from '../../hooks/useContent';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Contact.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

/**
 * Contact: short invite + form.
 */
export function Contact() {
  const { t } = useLocale();
  const { contact } = useContent();
  const [status, setStatus] = useState<Status>('idle');

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!endpoint) {
      setStatus('error');
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.eyebrowContact}
        title={t.navContact}
      />
      
      <p className={styles.intro}>{contact.intro}</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
            disabled={status === 'sending'}
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
            disabled={status === 'sending'}
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
            disabled={status === 'sending'}
          />
        </div>

        {/* Submit */}
        <button 
          className={styles.submit} 
          type="submit"
          disabled={status === 'sending'}
        >
          <span className={styles.submitMark} aria-hidden="true">
            ▸
          </span>
          {status === 'sending' ? t.formSending : t.formSubmit}
        </button>

        {/* Sent successfully */}
        {status === 'success' && (
          <p className={styles.statusSuccess} role="status">
            {t.formSuccess}
          </p>
        )}
        {/* Error occurred */}
        {status === 'error' && (
          <p className={styles.statusError} role="alert">
            {t.formError}
          </p>
        )}
      </form>
    </Section>
  );
}