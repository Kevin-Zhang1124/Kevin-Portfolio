import { SiGithub, SiInstagram } from 'react-icons/si';
import type { IconType } from 'react-icons';
import { FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { socialLinks, type SocialId } from '../../content/shared/socialLinks';
import styles from './SocialLinks.module.css';

/** Map each social id to a Simple Icon (react-icons/si) */
const socialIcons: Record<SocialId, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  instagram: SiInstagram,
  email: FaRegEnvelope,
};

/**
 * Centered row of social icons for the hero.
 * Cyan accent, quiet hover — matches Signal Mesh.
 */
export function SocialLinks() {
  return (
    <ul className={styles.list} aria-label="Social links">
      {socialLinks.map((item) => {
        const Icon = socialIcons[item.id];
        const isExternal = item.href.startsWith('http');

        return (
          <li key={item.id}>
            <a
              className={styles.link}
              href={item.href}
              aria-label={item.label}
              {...(isExternal
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}