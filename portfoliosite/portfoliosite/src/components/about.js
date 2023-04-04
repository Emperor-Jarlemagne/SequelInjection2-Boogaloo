import React, {useState, useEffect} from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
  faWordpress,
  faMdb,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import pageVariants from './routetransitions'
import AnimatedLetters from './letters'

const About = ({ isMobileOpen }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
      <motion.div 
        id='about' 
        name='about' 
        key="about"
        className="w-full h-screen bg-[#fffdf0] text-[#53225a] pt-16"
        variants={pageVariants.RouteTransition}
        initial="initial"
        animate="animate"
        exit="exit">
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 leading-3'>
            <h1 className='text-3xl sm:text-5xl font-bold inline border-b-4 border-[#8892b0]'>
              <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'About Me'.split('')}
                  idx={15}
                />
          </h1>
          <p>
            I&apos;m a Jr. Full Stack Developer!
          </p>
          <p>
            I&apos;ve worked with many different technologies, including:
          <br />
            Html/CSS/Vanilla JS/ReactJS/NodeJS/ExpressJS
          <br />
            Python/Django/Flask
          <br />
            Javascript/TypeScript/GraphQl
          <br />
            Git/Github
          <br />
          MongoDb, Postgresql, SQLite
          </p>
          <p>
            WordPress, Elementor, and Divi
          </p>
          <p>
            I&apos;m in love with learning, new languages, and new technologies.
          </p>
        </div>

    {!isMobileOpen && 
        <div className="stage-icon-cont">
          <div className="iconspinner">
            <div className="icon1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" size="6x"/>
            </div>
            <div className="icon2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" size="6x"/>
            </div>
            <div className="icon3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="6x"/>
            </div>
            <div className="icon4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="6x"/>
            </div>
            <div className="icon5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="6x"/>
            </div>
            <div className="icon6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size="6x"/>
            </div>
            <div className="icon7">
              <FontAwesomeIcon icon={faMdb} color="#339933" size="6x"/>
            </div>
            <div className="icon8">
              <FontAwesomeIcon icon={faNodeJs} color="#339933" size="6x"/>
            </div>
            <div className="icon9">
              <FontAwesomeIcon icon={faWordpress} color="#21759B" size="6x"/>
            </div>
          </div>
          </div>
          }
          </div>
        </div>
      </motion.div>
  )
}
About.propTypes = {
  isMobileOpen: PropTypes.bool.isRequired
}
export default About