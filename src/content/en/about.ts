/**
 * About section copy (English).
 * Each block = one titled short paragraph group in the UI.
 * Edit text here - About.tsx only maps this data.
 */
export const enAbout = {
  // Optional line under the last block
  closing: 'Always learning. Always building.',

  blocks: [
    {
      // Shown next to the cyan index (01, 02, ...)
      title: 'Who I am',
      // One or more short paragraphs under this title
      paragraphs: [
        "👋 I'm a Computer Science student at the University of Waterloo, interested in software engineering, machine learning, and AI.",
      ],
    },
    {
      title: 'What I build',
      paragraphs: [
        "💻 Through my internships and projects, I've worked on mobile apps, machine learning tools, and desktop software using React, TypeScript, Flutter, Python, C#, and C++.",
        'I enjoy learning new technologies, solving challenging problems, and turning ideas into practical products.',
      ],
    },
    {
      title: 'Beyond code',
      paragraphs: [
        "🎸 Outside of development, you'll usually find me playing basketball or guitar, taking photos, traveling, or playing video games.",
        "I'm always looking for opportunities to learn, build, and create something meaningful.",
      ],
    },
  ],
} as const;