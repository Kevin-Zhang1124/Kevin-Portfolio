import type { SectionId } from '../../types'

/**
 * Describes one scroll section on the page.
 * - id: DOM id + SectionId (e.g. "work" -> <section id="work">)
 * labelKey: which dictionary field to show in the nav
 */
export type SectionConfig = {
  id: SectionId;
  labelKey:
    | 'navAbout'
    | 'navEducation'
    | 'navWork'
    | 'navProject'
    | 'navContact';
};

/**
 * Source of truth for nav order and page order.
 * To add a section later: append here + dictionary keys + a component.
 */
export const sections: SectionConfig[] = [
  { id: 'about', labelKey: 'navAbout' },
  { id: 'education', labelKey: 'navEducation' },
  { id: 'work', labelKey: 'navWork' },
  { id: 'project', labelKey: 'navProject' },
  { id: 'contact', labelKey: 'navContact' },
]