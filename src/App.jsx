import './App.css'

import { AnimatePresence } from 'framer-motion'

import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Skills from './pages/skills/Skills'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'

const App = () => {

  const [showPreloader, setShowPreloader] = useState(true)

  useEffect (() => {
    setTimeout(() => {
      setShowPreloader(!showPreloader)
    }, 3000)
  }, [])

  return (
    <>
      <main className='main'>
        { showPreloader && <Preloader /> }
        { !showPreloader && <>
          <Navbar />
          <Home />
          <Skills />
          <Portfolio />
          <Resume />
          <Contact />
          <Footer />
        </>  }
      </main>
    </>
  )
}

export default App
