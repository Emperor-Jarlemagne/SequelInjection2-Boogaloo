import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import JariImage from '../static/content/8BitJari.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <Link to="/">
          <img src={JariImage} style={{ width: '40px'}} alt="It's Me!" />
        </Link>

    {/* Main Menu */}
        <ul className="hidden md:flex">
        <li>
          <NavLink to="/" smooth="true" duration={500}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" smooth="true" duration={500}>
           About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" smooth="true" duration={500}>
           Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" smooth="true" duration={500}>
            Contact
          </NavLink>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={ !nav ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth="true" duration={500}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth="true" duration={500}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='portfolio' smooth="true" duration={500}>
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth="true" duration={500}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </Link>
        </li>
    </ul>

    {/* Social Icons */}
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jari-sv-salminen/"
            >
              <FaLinkedin size={50} color="#b9b9b9" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Emperor-Jarlemagne"
            >
              <FaGithub size={50} color="#b9b9b9" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://rerouting.tech"
            >
              <img src={'.../static/favicon/favicon-32x32.png'} width="24" alt="rerouting podcast" />
            </a>
          </li>
        </ul>
        </div>
      </div>
  )
}

export default Navbar