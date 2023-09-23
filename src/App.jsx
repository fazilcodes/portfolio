import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {

  const location = useLocation()

  return (
    <>
    <main>
      <AnimatePresence mode='wait'>
          {/* <Navbar /> */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </AnimatePresence>
    </main>
    </>
  )
}

export default App
