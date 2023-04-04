import React, {useState } from 'react'
import Home from "./home"
import About from './about'
import Contact from './contact'
import Portfolio from './portfolio'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import pageVariants from './routetransitions'

const AnimatedRoutes = () => {
    const [isMobileOpen] = useState(false)
    const location = useLocation()
    return (
        <AnimatePresence variants={pageVariants} mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/home" key="home" element={<Home isMobileOpen={isMobileOpen}/>} />
            <Route path="/*" key="main" element={<Home isMobileOpen={isMobileOpen}/>} /> 
            <Route path="/about" key="about" element={<About isMobileOpen={isMobileOpen}/>} />
            <Route path="/portfolio" key="portfolio" element={<Portfolio />} />
            <Route path="/contact" key="contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes