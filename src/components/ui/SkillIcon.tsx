import { skills } from '../../content/shared/skills';
import { skillIcons } from '../../content/shared/skillIcons';
import type { SkillId } from '../../types';
import styles from './SkillIcon.module.css';

type SkillIconProps = {
  /** Which skill to render, e.g. 'python' | 'flutter' */
  id: SkillId;
};

/**
 * Icon-only skill mark with:
 * - accessible name
 * - hover tooltip (skill label)
 * - parent chip handles theme chrome + scale (sections.module.css)
 */
export function SkillIcon({ id }: SkillIconProps) {
  // Human-readable name from the data registry
  const label = skills[id].label;
  // React component from the icon registry
  const Icon = skillIcons[id];

  return (
    <span className={styles.wrap}>
      {/* Visible icon; name comes from tooltip + aria-label */}
      <span className={styles.icon} aria-label={label}>
        <Icon aria-hidden="true" focusable="false" />
      </span>

      {/* Custom tooltip — clearer than browser title alone */}
      <span className={styles.tooltip} role="tooltip">
        {label}
      </span>
    </span>
  );
}