import { skills } from '../../content/shared/skills';
import { skillIcons } from '../../content/shared/skillIcons';
import type { SkillId } from '../../types';
import styles from './SkillIcon.module.css';

type SkillIconProps = {
  /** Which skill to render, e.g. 'python' | 'flutter' */
  id: SkillId;
};

/**
 * Renders a tech skill as an icon only.
 * Label is exposed to assistive tech / hover via aria-label + title.
 */
export function SkillIcon({ id }: SkillIconProps) {
  // Human-readable name from the data registry
  const label = skills[id].label;
  // React component from the icon registry
  const Icon = skillIcons[id];

  return (
    <span className={styles.icon} title={label} aria-label={label}>
      {/* Decorative for screen readers because parent span has aria-label */}
      <Icon aria-hidden="true" focusable="false" />
    </span>
  );
}