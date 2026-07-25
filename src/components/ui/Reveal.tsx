import { useReducedMotion, motion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  /** Content that should animate in when scrolled into view */
  children: ReactNode;
  /** Optional extra delay (seconds), useful later for staggered items */
  delay?: number;
};

/**
 * Lightweight scroll-reveal wrapper.
 * - Hidden slightly below + transparent at first
 * - Animates to normal position when it enters the viewport
 * - Respects prefers-reduced-motion
 */
export function Reveal({ children, delay = 0 }: RevealProps) {
  // true when the OS/browser asks for less animation
  const prefersReducedMotion = useReducedMotion();

  // If reduced motion is on, skip animation and just render children
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      // Starting state (before the user scrolls to it)
      initial={{ opacity: 0, y: 24 }}
      // Animate to this state when visible
      whileInView={{ opacity: 1, y: 0 }}
      // Only trigger once (won't re-animate every scroll past)
      viewport={{ once: true, amount: 0.2 }}
      // Timing / easing - quiet and professional, not bouncy
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}