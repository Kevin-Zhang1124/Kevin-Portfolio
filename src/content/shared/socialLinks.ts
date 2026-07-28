/**
 * Hero social links (language-agnostic hrefs).
 * Labels are English a11y names; icons are mapped separately.
 */
export type SocialId = 'github' | 'linkedin' | 'instagram' | 'email';

export type SocialLink = {
  id: SocialId;
  /** Accessible name for screen readers */
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Kevin-Zhang1124',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kevin-zhang-7445662ab/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/kevinzhang_zzz/',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:k389zhan@uwaterloo.ca',
  },
];