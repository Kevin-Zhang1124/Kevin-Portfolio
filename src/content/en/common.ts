// English UI strings shared across the site (nav, toggles, brand, etc.)
export const enCommon = {
  // Site identity
  brandName: 'Kevin Zhang',

  // Small intro above the big name (hero only)
  heroGreeting: 'Hi, my name is',

  // Hero lines for the typing loop
  taglines: [
    'CS student at UWaterloo',
    'Software & Machine Learning.',
    'Tuning ideas into real products',
  ],

  // Controls in the nav
  toggleLanguage: '中文',

  // Nav section labels (must match SectionId keys we use in config)
  navAbout: 'About',
  navEducation: 'Education',
  navWork: 'Work',
  navProject: 'Project',
  navContact: 'Contact',

  // Project section
  projectLink: 'Link',

  // Section eyebrows (small label above the main title)
  eyebrowAbout: 'PROFILE',
  eyebrowEducation: 'LEARNING PATH',
  eyebrowWork: 'CAREER SIGNAL',
  eyebrowProject: 'BUILD LOG',
  eyebrowContact: 'CONNECT',
} as const;