import { useEffect, useState, useRef } from 'react'
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
import AnimatedLetters from './letters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Scroll from 'react-scroll'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const Element = Scroll.Element
  const elementRef = useRef(null)
  const currentElementRef = useRef(null)

  useEffect(() => {
    const scrollElement = new Element()
    scrollElement.id = 'about'
    const currentRef = currentElementRef.current
    if (currentRef) {
      currentRef.scrollEvent = () => {}
      currentRef.register(scrollElement)
      return () => {
        currentRef.scrollEvent = undefined
        currentRef.unregister(scrollElement)
      }
    }
    }, [Element, currentElementRef])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Element ref={elementRef} id='about' name='about' className="w-full h-screen bg-[#fffdf0] text-[#53225a]">
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>
              About Me
            </p>
          <h1 className="my-4">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'THE RUNDOWN'.split('')}
              idx={15}
              style={{ color: "#ccc", fontWeight: "bold" }}
            />
          </h1>
          <p>
            I'm a Jr. Full Stack Developer!
          </p>
          <p>
            I've worked with many different technologies, including:
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
            I'm in love with learning, new languages, and new technologies.
          </p>
        </div>

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
          </div>
        </div>
      </Element>
    </>
  )
}

export default About