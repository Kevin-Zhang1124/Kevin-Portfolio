import type { ReactNode } from 'react';
import type { SectionId } from '../../types';
import { Reveal } from '../ui/Reveal';
import styles from './Section.module.css';

type SectionProps = {
  /** Becomes the DOM id so href="#work" can scroll here */
  id: SectionId;
  children: ReactNode;
  /**
   * When true (default), wrap children in the shared scroll Reveal.
   * Set false when the section has its own per-item motion (e.g. Work).
   */
  reveal?: boolean;
};

/**
 * Shared layout wrapper for About / Education / Work / Project / Contact.
 * Section components only worry about content; this handles structure.
 */
export function Section({ id, children, reveal = true }: SectionProps) {
  return (
    // tabIndex={-1} allows focusing the section after a nav jump (a11y-friendly)
    <section id={id} className={styles.section} tabIndex={-1}>
      {/* Animate section body when it scrolls into view */}
      {reveal ? (
        // Default: whole section fades/slides in once
        <Reveal>{children}</Reveal>
      ) : (
        // Opt-out: children control their own motion
        children
      )}
    </section>
  );
}
