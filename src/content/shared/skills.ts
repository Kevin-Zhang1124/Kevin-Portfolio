import type { SkillId } from '../../types'

export type SkillMeta = {
  label: string
  /** Optional path or asset key — fill in when you add icons */
  icon?: string
}

export const skills: Record<SkillId, SkillMeta> = {
  python: { label: 'Python' },
  csharp: { label: 'C#' },
  'c++': { label: 'C++' },
  c: { label: 'C' },
  javascript: { label: 'JavaScript' },
  typescript: { label: 'TypeScript' },
  kotlin: { label: 'Kotlin' },
  dart: { label: 'Dart' },
  sql: { label: 'SQL' },
  pytorch: { label: 'PyTorch' },
  tensorflow: { label: 'TensorFlow' },
  'scikit-learn': { label: 'scikit-learn' },
  react: { label: 'React' },
  nodejs: { label: 'Node.js' },
  nextjs: { label: 'Next.js' },
  html: { label: 'HTML' },
  css: { label: 'CSS' },
  '.net': { label: '.NET' },
  flutter: { label: 'Flutter' },
  android: { label: 'Android' },
  ios: { label: 'iOS' },
  linux: { label: 'Linux' },
  macos: { label: 'macOS' },
  windows: { label: 'Windows' },
  bash: { label: 'Bash' },
  powershell: { label: 'PowerShell' },
  git: { label: 'Git' },
  docker: { label: 'Docker' },
  firebase: { label: 'Firebase' },
  sqlite: { label: 'SQLite' },
  supabase: { label: 'Supabase' },
}