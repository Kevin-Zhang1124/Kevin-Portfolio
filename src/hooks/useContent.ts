import { sectionsContent } from '../content/sectionsContent'
import { useLocale } from './useLocale'

/**
 * Returns section content for the active language.
 * Components call this instead of importing en/zh files directly.
 */
export function useContent() {
  const { locale } = useLocale();
  return sectionsContent[locale];
}