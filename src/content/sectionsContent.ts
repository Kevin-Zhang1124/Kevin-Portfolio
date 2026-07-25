import type { Locale } from '../types'
import { enAbout } from './en/about'
import { enEducation } from './en/education'
import { enWork } from './en/work'
import { enProject } from './en/project'
import { enContact } from './en/contact'
import { zhAbout } from './zh/about'
import { zhEducation } from './zh/education'
import { zhWork } from './zh/work'
import { zhProject } from './zh/project'
import { zhContact } from './zh/contact'

/**
 * All section bodies keyed by locale.
 * UI chrome (nav labels) stays in dictionaries.ts;
 * longer page content lives here.
 */
export const sectionsContent = {
  en: {
    about: enAbout,
    education: enEducation,
    work: enWork,
    project: enProject,
    contact: enContact,
  },
  zh: {
    about: zhAbout,
    education: zhEducation,
    work: zhWork,
    project: zhProject,
    contact: zhContact,
  },
} as const;

export type SectionsContent = (typeof sectionsContent)[Locale];