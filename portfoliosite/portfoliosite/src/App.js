import Home from "./components/home"
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import { Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import About from './components/about'
import Navbar from "./components/navbar"

export default function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  return (
    <>
        <Navbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen}/>
        <div>
        <Routes>
          <Route path="home" element={<Home isMobileOpen={isMobileOpen}/>} />
          <Route path="/*" element={<Home isMobileOpen={isMobileOpen}/>} />
          <Route path="/about" element={<About isMobileOpen={isMobileOpen}/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </>
  )
}
