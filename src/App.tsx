import { BackgroundFX } from './components/layout/BackgroundFX';
import { Nav } from './components/layout/Nav';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Work } from './components/sections/Work';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import styles from './App.module.css';

/**
 * One-page shell: animated backdrop + sticky nav + vertical sections.
 * Order here should match src/content/shared/sections.ts
 */
function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main className={styles.main}>
        <About />
        <Education />
        <Work />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;