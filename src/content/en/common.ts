// English UI strings shared across the site (nav, toggles, brand, etc.)
export const enCommon = {
  // Site identity
  brandName: 'Kevin Zhang',
  tagline: 'Software engineer building clear, thoughtful products.',

  // Controls in the nav
  toggleLanguage: '中文',
  toggleThemeToDark: 'Dark',   // label when currently in light mode
  toggleThemeToLight: 'Light', // label when currently in dark mode

  // Nav section labels (must match SectionId keys we use in config)
  navAbout: 'About',
  navEducation: 'Education',
  navWork: 'Work',
  navProject: 'Project',
  navContact: 'Contact',
} as const;