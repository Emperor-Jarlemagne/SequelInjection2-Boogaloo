import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as NavLink, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { scroller } from 'react-scroll'
import PropTypes from "prop-types"

const Navbar = ({isMobileOpen, setIsMobileOpen }) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
      setNav(!nav)
      setIsMobileOpen(!isMobileOpen)
    }
    const navigate = useNavigate()
    const elementIdRef = useRef("")

  const scrollToElement = (elementId) => {
    navigate("/" + elementId)
    elementIdRef.current = elementId
  }

  useEffect(() => {
    const elementId = elementIdRef.current
    if (elementId) {
      scroller.scrollTo(`#${elementId}`, {
        duration: 1500,
        spy: true,
        smooth: true,
        offset: -75,
      })
    }
  }, []) 


  useEffect(() => {
    const cleanup = () => {
      if (typeof scroller.destroy === 'function') {
        scroller.destroy()
      }
    }
    return cleanup
  })

  return (
      <div id="navbar" className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#db7b48] text-gray-300">
        <NavLink to="/">
          <img src={'/assets/8BitJari.jpg'} style={{ width: '40px'}} alt="It's Me!" />
        </NavLink>

    {/* Main Menu */}
        <ul className="hidden md:flex">
        <li>
          <ScrollLink to='/' onClick={() => scrollToElement('home')}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' onClick={() => scrollToElement('about')}>
           About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='portfolio' onClick={() => scrollToElement('portfolio')}>
           Portfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='contact' onClick={() => scrollToElement('contact')}>
            Contact
          </ScrollLink>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20 cursor-pointer text-3xl'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={ !nav ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fffdf0] flex flex-col justify-center items-center cursor-pointer z-10' }>
        <li className='py-6 text-4xl text-[#53225a]'>
          <NavLink onClick={handleClick} to='home'>
          <FontAwesomeIcon icon={faHome} color="#53225a" className="mr-4" />
          Home
          </NavLink>
        </li>
        <li className='py-6 text-4xl text-[#53225a]'>
          <NavLink onClick={handleClick} to='about'>
          <FontAwesomeIcon icon={faUser} color="#53225a" className="mr-4"/>
          About
          </NavLink>
        </li>
        <li className='py-6 text-4xl text-[#53225a]'>
          <NavLink onClick={handleClick} to='portfolio'>
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#53225a" className="mr-4"/>
          Portfolio
          </NavLink>
        </li>
        <li className='py-6 text-4xl text-[#53225a]'>
          <NavLink onClick={handleClick} to='contact'>
          <FontAwesomeIcon icon={faEnvelope} color="#53225a" className="mr-4"/>
          Contact
          </NavLink>
        </li>
    </ul>

    {/* Social Icons */}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db7b48]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jari-sv-salminen/"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin size={50} color="#8892b0" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f7be17]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Emperor-Jarlemagne"
              target="_blank" rel="noopener noreferrer"
            >
              <FaGithub size={50} color="#8892b0" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f6e397]">
            <a
              className="flex justify-between items-center w-full text-[#8892b0]"
              href="https://rerouting.tech"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={'./assets/favicon-32x32.png'} width="24" alt="rerouting" />
            </a>
          </li>
        </ul>
        </div>
      </div>
  )
}
Navbar.propTypes = {
  isMobileOpen: PropTypes.bool.isRequired,
  setIsMobileOpen: PropTypes.func.isRequired,
}
export default Navbar