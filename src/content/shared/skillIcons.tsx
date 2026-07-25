import type { IconType } from 'react-icons';
import type { SkillId } from '../../types';
import {
  SiAndroid,
  SiApple,
  SiC,
  SiCplusplus,
  SiCss,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMacos,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiSharp
} from 'react-icons/si';

/**
 * Maps every SkillId to a react-icons component.
 * TypeScript requires all SkillId keys - if you add a skill later, this file will error until you add its icon.
 */
export const skillIcons: Record<SkillId, IconType> = {
  python: SiPython,
  csharp: SiSharp,
  'c++': SiCplusplus,
  c: SiC,
  javascript: SiJavascript,
  typescript: SiTypescript,
  kotlin: SiKotlin,
  dart: SiDart,
  // Generic "SQL" — MySQL logo is a reasonable stand-in
  sql: SiMysql,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  'scikit-learn': SiScikitlearn,
  react: SiReact,
  nodejs: SiNodedotjs,
  nextjs: SiNextdotjs,
  html: SiHtml5,
  css: SiCss,
  '.net': SiDotnet,
  flutter: SiFlutter,
  android: SiAndroid,
  // iOS often uses the Apple mark in icon sets
  ios: SiApple,
  linux: SiLinux,
  macos: SiMacos,
  bash: SiGnubash,
  git: SiGit,
  docker: SiDocker,
  firebase: SiFirebase,
  sqlite: SiSqlite,
  supabase: SiSupabase,
};