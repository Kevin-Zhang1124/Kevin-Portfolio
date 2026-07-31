import { useCallback, useEffect, useState } from 'react';
import { BackgroundFX } from './components/layout/BackgroundFX';
import { Nav } from './components/layout/Nav';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Work } from './components/sections/Work';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { SignalIntro } from './components/ui/SignalIntro';
import styles from './App.module.css';

/**
 * One-page shell: animated backdrop + sticky nav + vertical sections.
 * Order here should match src/content/shared/sections.ts
 */
function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  // Lock scroll while the black intro covers the page
  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev
    };
  }, [showIntro]);

  return (
    <>
      {showIntro ? <SignalIntro onComplete={handleIntroComplete} /> : null}

      <div
        className={
          showIntro ? `${styles.shell} ${styles.shellHidden}` : styles.shell
        }
      >
        <BackgroundFX />
        <Nav />
        <main className={styles.main}>
          <About introComplete={!showIntro} />
          <Education />
          <Work />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;