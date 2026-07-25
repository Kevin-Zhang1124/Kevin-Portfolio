import { Nav } from './components/layout/Nav'
import { About } from './components/sections/About'
import { Education } from './components/sections/Education'
import { Work } from './components/sections/Work'
import { Project } from './components/sections/Project'
import { Contact } from './components/sections/Contact'
import styles from './App.module.css'

/**
 * One-page shell: sticky nav + vertical sections.
 * Order here should match src/content/shared/sections.ts
 */
function App() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <About />
        <Education />
        <Work />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default App;