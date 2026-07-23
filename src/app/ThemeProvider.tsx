import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Theme } from '../types';

// Key used to save/restore the user's theme choice in the browser
const STORAGE_KEY = 'kevin-portfolio-theme';

// Shape of the value shared through React context
type ThemeContextValue = {
  theme: Theme;                      // current theme: 'light' | 'dark'
  toggleTheme: () => void;           // flip between light and dark
  setTheme: (theme: Theme) => void;  // set a specific theme
}

// Context that lets any child component read/update the theme via useTheme()
export const ThemeContext = createContext<ThemeContextValue | null>(null);

// Decide the initial theme:
// 1) use saved preference from localStorage if valid
// 2) otherwise fall back to the OS/browser color-scheme preference
function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

// Apply theme to the page by setting data-theme on <html>
// (your CSS tokens in tokens.css key off this attribute)
function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

type ThemeProviderProps = {
  children: ReactNode; // the rest of the app tree wrapped by this provider
};

// Top-level provider: owns theme state and exposes it to descendants
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Lazy initializer runs once on mount;
  // resolve preferred theme, apply it immediately (avoids flash), then store in state
  const [theme, setThemeState] = useState<Theme>(() => {
    const initial = getPreferredTheme()
    applyTheme(initial)
    return initial
  });
  
  // Whenever theme changes: update the DOM attribute and persist to localStorage
  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme]);
  
  // Stable setter so consumers can set 'light' or 'dark' explicitly
  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
  }, []);
  
  // Stable toggler: switches dark ↔ light
  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, []);
  
  // Publish theme + helpers to any component under this provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
