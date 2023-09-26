import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Skills from './pages/skills/Skills'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {

  const location = useLocation()

  return (
    <>
    <main className='main'>
      {/* <AnimatePresence mode='wait'>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
      </AnimatePresence> */}

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
