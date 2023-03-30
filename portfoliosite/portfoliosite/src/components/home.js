import { useEffect, useState, useRef} from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import AnimatedLetters from './letters'
import { HiArrowNarrowRight } from 'react-icons/hi'
import * as Scroll from 'react-scroll'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const Element = Scroll.Element
  const elementRef = useRef(null)

  useEffect(() => {
    let currentElementRef = elementRef.current
    currentElementRef = Element('home')
    return () => {
      currentElementRef.destroy()
    };
  }, [Element])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentElementRef = elementRef.current
    return () => {
      currentElementRef.destroy()
    }
  }, [])

 return (
  <Element ref={elementRef} id='home' name='home' className="w-full h-screen bg-[#fffdf0]">
    {/* Main Container */}
    <div className='max-w-[1000px] ml-20 mr-10 px-8 flex flex-col justify-center h-full text-right'>
    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
    <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Jari Salminen'.split('')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Junior Full Stack Developer'.split('')}
              idx={22}
            />
    </h1>
    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] mb-6">
      This is my portfolio page!
    </h2>
    <LinkRouter to="contact" className="text-[#8892b0] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#db7b48] hover:border-[#db7b48]">
      CONTACT ME
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 ' />
    </span>
    </LinkRouter>
    </div>
  </Element>
 )
}
export default Home