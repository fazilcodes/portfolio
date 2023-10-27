import './App.css'

import { AnimatePresence } from 'framer-motion'

import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Skills from './pages/skills/Skills'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

const App = () => {
  return (
    <>
      <main className='main'>
        <Navbar />
        <Home />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
