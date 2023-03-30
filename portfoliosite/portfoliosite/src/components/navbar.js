import { useState } from 'react';
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
import * as Scroll from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const scroller = Scroll.scroller
    const navigate = useNavigate()

  const scrollToElement = async (elementId) => {
    try {
      await navigate("/" + elementId)
      console.log('Scrolling to ' + elementId)
      await scroller.scrollTo(`#${elementId}`, {
        duration: 500,
        spy: true,
        smooth: true,
        offset: -75,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div id="navbar" className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#db7b48] text-gray-300">
        <NavLink to="/">
          <img src={'./assets/content/8BitJari.png'} style={{ width: '40px'}} alt="It's Me!" />
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
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={ !nav ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fffdf0] flex flex-col justify-center items-center' }>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='home'>
          <FontAwesomeIcon icon={faHome} color="#53225a" />
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='about'>
          <FontAwesomeIcon icon={faUser} color="#53225a" />
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='portfolio'>
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#53225a" />
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='contact'>
          <FontAwesomeIcon icon={faEnvelope} color="#53225a" />
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
            >
              <FaLinkedin size={50} color="#8892b0" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f7be17]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Emperor-Jarlemagne"
            >
              <FaGithub size={50} color="#8892b0" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f6e397]">
            <a
              className="flex justify-between items-center w-full text-[#8892b0]"
              href="https://rerouting.tech"
            >
              <img src={'./assets/favicon/favicon-32x32.png'} width="24" alt="rerouting" />
            </a>
          </li>
        </ul>
        </div>
      </div>
  )
}
export default Navbar