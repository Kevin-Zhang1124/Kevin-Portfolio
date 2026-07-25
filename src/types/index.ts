export type Locale = 'en' | 'zh';

// The five scroll sections on the one-page site
export type SectionId =
  | 'about'
  | 'education'
  | 'work'
  | 'project'
  | 'contact';

export type Theme = 'light' | 'dark';

/** One school / degree entry */
export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  details: string[];
}

/** One job / internship entry */
export type WorkItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: SkillId[]
}

/** One project entry */
export type ProjectItem = {
  id: string;
  name: string;
  summary: string;
  tech: string[];
  link?: string;  // optional URL
}

/** One contact method */
export type ContactItem = {
  id: string
  label: string
  value: string
  href: string // mailto: or https://
}

/** Stable ids used in content + for icons later */
export type SkillId =
  | 'python'
  | 'csharp'
  | 'c++'
  | 'c'
  | 'javascript'
  | 'typescript'
  | 'kotlin'
  | 'dart'
  | 'sql'
  | 'pytorch'
  | 'tensorflow'
  | 'scikit-learn'
  | 'react'
  | 'nodejs'
  | 'nextjs'
  | 'html'
  | 'css'
  | '.net'
  | 'flutter'
  | 'android'
  | 'ios'
  | 'linux'
  | 'macos'
  | 'windows'
  | 'bash'
  | 'powershell'
  | 'git'
  | 'docker'
  | 'firebase'
  | 'sqlite'
  | 'supabase'
  // add more as needed