// English UI strings shared across the site (nav, toggles, brand, etc.)
export const enCommon = {
  // Site identity
  brandName: 'Kevin Zhang',

  // Small intro above the big name (hero only)
  heroGreeting: 'Hi, my name is',

  // Hint under the hero — invites scroll to PROFILE / About
  scrollHint: 'Scroll',

  // Hero lines for the typing loop
  taglines: [
    'CS student at UWaterloo',
    'Software & Machine Learning.',
    'Tuning ideas into real products',
  ],

  // Controls in the nav
  toggleLanguage: 'CN',

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

  // Contact form
  formNameLabel: 'Name',
  formNamePlaceholder: 'Your name',
  formEmailLabel: 'Email',
  formEmailPlaceholder: 'you@example.com',
  formMessageLabel: 'Message',
  formMessagePlaceholder: 'What would you like to talk about?',
  formSubmit: 'Send signal',
  formSending: 'Sending…',
  formSuccess: 'Message sent successfully! Thanks for reaching out!',
  formError: 'Something went wrong. Please try again.',

  // Footer
  footerBrandName: 'Kevin Zhang',
  footerNote: 'Built with ❤️ in UWaterloo, ON.',
  footerCopyright: '© 2026 Kevin Zhang. All rights reserved.'
} as const;