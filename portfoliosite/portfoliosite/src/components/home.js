import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from './letters'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Jari Salminen'.split('')
  const jobArray = 'Junior Full Stack Developer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => clearTimeout(timer)
  }, [])

 return (
  <div name="home" class="background" className="w-full h-screen bg-[#0a192f]">
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
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
    </h1>
    <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] mb-6">
      This is my portfolio page!
    </h2>
    <Link to="/contact" className="text-gray-300 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
      CONTACT ME
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3 ' />
    </span>
    </Link>
    </div>
  </div>
 )
}

export default Home