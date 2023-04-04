import React, { useEffect, useState } from 'react'
import { Link as NavLink } from 'react-router-dom'
import AnimatedLetters from './letters'
import { HiArrowNarrowRight } from 'react-icons/hi'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import pageVariants from './routetransitions'

const Home = ({ isMobileOpen }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => clearTimeout(timer)
  }, [])

 return (
  <motion.div 
    id='home' 
    name='home' 
    key="home"
    className="w-full h-screen bg-[#fffdf0]"
    variants={pageVariants.RouteTransition}
    initial="initial"
    animate="animate"
    exit="exit">
    {/* Main Container */}
    {!isMobileOpen && 
    <div className='max-w-[1000px] ml-20 mr-10 px-8 flex flex-col justify-center h-full text-right'>
    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
    <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>&apos;m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Jari Salminen'.split('')}
              idx={15}
            />
            <br />
    </h1>
    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] mb-6">
      This is my portfolio page!
    </h2>
    <NavLink 
    to="contact" 
    className="text-[#8892b0] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#db7b48] hover:border-[#db7b48] hover:text-[#53225a]">
      CONTACT ME
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 ' />
    </span>
    </NavLink>
    </div>
    }
  </motion.div>
 )
}
Home.propTypes = {
  isMobileOpen: PropTypes.bool.isRequired
}
export default Home