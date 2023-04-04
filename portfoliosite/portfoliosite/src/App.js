import React, { useState } from "react"
import AnimatedRoutes from './components/animatedroutes'
import Navbar from "./components/navbar"

export default function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  return (
    <>
      <Navbar key="navbar" isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen}/>
      <AnimatedRoutes key={location.pathname} />
      </>
  )
}