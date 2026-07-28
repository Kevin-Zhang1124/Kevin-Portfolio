import { useEffect, useState } from 'react';
import { sections } from '../content/shared/sections';
import type { SectionId } from '../types';

/**
 * Tracks which page section is currently in view.
 * Returns a SectionId like 'about' | 'work' | ... (or null before mount).
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    // All section elements that exist in the DOM (from our shared config)
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

      if (elements.length === 0) {
        return;
      }

      // Remember which sections are currently in the spy zone
      const inView = new Map<string, IntersectionObserverEntry>();

      /**
       * Called when section visibility changes.
       * We pick the intersecting section closest to the top of the viewport.
       */
      const observer = new IntersectionObserver(
        (entries) => {
          // Update only the sections that changed this frame
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).id;
            if (entry.isIntersecting) {
              inView.set(id, entry);
            } else {
              inView.delete(id);
            }
          }

          // Nothing in the active band (e.g. landing hero) -> no nav highlight
          if (inView.size === 0) {
            setActiveId(null);
            return;
          }

          // Prefer the section closest to the top of the viewport
          const topMost = [...inView.values()].sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
          
          if (topMost?.target.id) {
            setActiveId(topMost.target.id as SectionId);
          }
        },
        {
          // Shift the "active zone" down a bit to account for sticky nav
          root: null,
          rootMargin: '-20% 0px -55% 0px',
          threshold: 0,
        },
      );

      // Start watching every section
      elements.forEach((el) => observer.observe(el));

      // Cleanup when the component using this hook unmounts
      return () => observer.disconnect();
  }, []);

  return activeId;
}