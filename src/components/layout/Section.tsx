import type { ReactNode } from 'react'
import type { SectionId } from '../../types'
import styles from './Section.module.css'

type SectionProps = {
  /** Becomes the DOM id so href="#work" can scroll here */
  id: SectionId;
  children: ReactNode;
}

/**
 * Shared layout wrapper for About / Education / Work / Project / Contact.
 * Section components only worry about content; this handles structure.
 */
export function Section({ id, children }: SectionProps) {
  return (
    // tabIndex={-1} allows focusing the section after a nav jump (a11y-friendly)
    <section id={id} className={styles.section} tabIndex={-1}>
      {children}
    </section>
  );
}
