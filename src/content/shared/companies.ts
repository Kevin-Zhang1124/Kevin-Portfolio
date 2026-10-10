/**
 * Language-agnostic company metadata (logos live in /public/logos).
 * Display names stay in en/zh work content so they can be translated.
 */
export type CompanyId = 'leap' | 'compass' | 'squint' | 'emdoor';

export type CompanyMeta = {
  /** Path under public/, e.g. /logos/compass.svg */
  logoSrc: string;
};

export const companies: Record<CompanyId, CompanyMeta> = {
  leap: { logoSrc: '/logos/leap.png' },
  compass: { logoSrc: '/logos/compass.png' },
  squint: { logoSrc: '/logos/squint.png' },
  emdoor: { logoSrc: '/logos/emdoor.png' },
};