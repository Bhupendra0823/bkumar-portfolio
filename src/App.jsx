
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import LearnerLog from './pages/LearnerLog.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/LearningLog" element={<LearnerLog/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
