import { useEffect, useState } from 'react';
import styles from './TypeLine.module.css';

type TypeLineProps = {
  /** Lines to cycle through (from en/zh taglines) */
  lines: readonly string[];
  /** Optional class for typography (e.g. About tagline styles) */
  className?: string;
  /** Delay per character while typing (ms) */
  typingMs?: number;
  /** Delay per character while deleting (ms) */
  deletingMs?: number;
  /** Pause after a full line is typed, before deleting (ms) */
  pauseMs?: number;
  /** When false, pause and show nothing (e.g. during SignalIntro) */
  active?: boolean;
};

type Phase = 'typing' | 'deleting';

/**
 * Loops: type line → wait pauseMs → delete → next line → …
 * Respects prefers-reduced-motion (shows first line, no animation).
 */
export function TypeLine({
  lines,
  className,
  typingMs = 40,    // default 40ms
  deletingMs = 24,  // default 24ms
  pauseMs = 3000,   // default 3000ms
  active = true,
}: TypeLineProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [reduceMotion, setReduceMotion] = useState(false);

  const currentLine = lines[lineIndex] ?? '';

  // Detect reduced-motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  // Reset when the line list changes (e.g. language switch)
  useEffect(() => {
    setLineIndex(0);
    setText(reduceMotion ? (lines[0] ?? '') : '');
    setPhase('typing');
  }, [lines, reduceMotion]);

  // When intro ends (active becomes true), start typing from line 1
  useEffect(() => {
    if (!active || reduceMotion) {
      return;
    }
    setLineIndex(0);
    setText('');
    setPhase('typing');
  }, [active, reduceMotion]);

  // Typing / pause / deleting state machine
  useEffect(() => {
    if (reduceMotion || lines.length === 0) {
      return;
    }

    if (!active) {
      return;
    }

    let timeoutId: number;

    if (phase === 'typing') {
      if (text.length < currentLine.length) {
        timeoutId = window.setTimeout(() => {
          setText(currentLine.slice(0, text.length + 1));
        }, typingMs);
      } else {
        // Full line typed → wait 3s (pauseMs)
        timeoutId = window.setTimeout(() => {
          setPhase('deleting');
        }, pauseMs);
      }
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        timeoutId = window.setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingMs);
      } else {
        // Move to next line and type again
        const nextIndex = (lineIndex + 1) % lines.length;
        setLineIndex(nextIndex);
        setPhase('typing');
      }
    }

    return () => window.clearTimeout(timeoutId);
  }, [
    phase,
    text,
    currentLine,
    lineIndex,
    lines,
    typingMs,
    deletingMs,
    pauseMs,
    reduceMotion,
    active,
  ]);

  if (lines.length === 0) {
    return null;
  }

  return (
    <p className={[styles.line, className].filter(Boolean).join(' ')}>
      {reduceMotion ? (lines[0] ?? '') : active ? text : ''}
      {!reduceMotion && active ? (
        <span className={styles.cursor} aria-hidden="true" />
      ) : null}
    </p>
  );
}