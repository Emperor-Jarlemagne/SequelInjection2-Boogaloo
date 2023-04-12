import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div className='max-w-[1000px] mx-auto md:ml-20 mr-10 px-8 flex flex-col justify-center h-full text-right'>
    <h1 className="text-5xl sm:text-8xl font-bold text-[#53225a]">
        <span className={`${letterClass} text-3xl sm:text-5xl`}>H</span>
        <span className={`${letterClass} text-3xl sm:text-5xl _12`}>i,&nbsp;</span>
        <span className={`${letterClass} text-3xl sm:text-5xl _13`}>I</span>
        <span className={`${letterClass} text-3xl sm:text-5xl _14`}>&apos;m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Jari Salminen'.split('')}
              idx={15}
            />
            <br />
    </h1>
    <h3 className="text-3xl sm:text-5xl font-bold text-[#53225a] mb-6">
      This is my portfolio page!
    </h3>
    <Link 
    to="contact" 
    className="text-[#8892b0] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#db7b48] hover:border-[#db7b48] hover:text-[#53225a]">
      CONTACT ME
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 ' />
    </span>
    </Link>
    </div>
    }
  </motion.div>
 )
}
Home.propTypes = {
  isMobileOpen: PropTypes.bool.isRequired
}
export default Home