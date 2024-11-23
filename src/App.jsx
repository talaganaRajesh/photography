import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import ContactPage from './components/ContactPage'
import './App.css'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
