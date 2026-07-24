import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
// Translation maps (en/zh) and the Dictionary type shaped from those maps
import { dictionaries, type Dictionary } from '../content/dictionaries';
// Locale is the union type 'en' | 'zh'
import type { Locale } from '../types';

// localStorage key used to remember the user's language choice
const STORAGE_KEY = 'kevin-portfolio-locale';

// Shape of the value shared through React context
type LocaleContextValue = {
  locale: Locale;                      // current language: 'en' | 'zh'
  t: Dictionary;                       // translation strings for the current locale
  setLocale: (locale: Locale) => void; // set a specific language
  toggleLocale: () => void;            // flip between en and zh
};

// Context that lets any child read/update locale via a useLocale() hook
export const LocaleContext = createContext<LocaleContextValue | null>(null);

// Decide the initial locale:
// 1) use saved preference from localStorage if it's 'en' or 'zh'
// 2) otherwise default to English
function getPreferredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'zh') {
    return stored;
  }
  return 'en';
}

type LocaleProviderProps = {
  children: ReactNode; // the rest of the app tree wrapped by this provider
};

// Top-level provider: owns locale state and exposes translations + setters
export function LocaleProvider({ children }: LocaleProviderProps) {
  // Lazy initializer runs once on mount: restore saved locale (or 'en')
  const [locale, setLocaleState] = useState<Locale>(() => getPreferredLocale());
  
  // Whenever locale changes: persist it and update <html lang="..."> for a11y/SEO
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.setAttribute('lang', locale === 'zh' ? 'zh-CN' : 'en');
  }, [locale]);
  
  // Stable setter so consumers can set 'en' or 'zh' explicitly
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);
  
  // Stable toggler: switches en ↔ zh
  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'en' ? 'zh' : 'en'));
  }, []);
  
  // Memorize the context value so consumers onl re-render when locale (or setters) change
  // t is the dictionary for the active locale, e.g. dictionaries['en']
  const value = useMemo(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  )
  
  // Publish locale + translations to any component under this provider
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}
