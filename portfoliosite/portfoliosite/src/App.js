import About from "./components/about"
import Contact from "./components/contact"
import Home from "./components/home"
import Portfolio from "./components/portfolio"
import Navbar from "./components/navbar"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </>
  )
}
