import { useEffect, useState } from 'react'
import AnimatedLetters from './letters'
import { data } from '../portfolio/examples'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const portfolioArray = 'Portfolio'.split('')
  const project = data

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div name='portfolio' class="background" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portfolioArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I love learning new technologies and languages!
          </p>
          <p>
            I'm looking for a Junior Full Stack position at a company
            that has challenging and diverse projects.
          </p>
        </div>
{/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
{/* Grid Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div " >
{/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        <a href={item.github}>
          <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg" >
            Code
          </button>
        </a>
        <a href={item.live}>
          <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg" >
            Live
          </button>
        </a>
        </div>
    </div>
  </div>
))}
</div>
</div>
</div>
  </>
   )
}
export default Portfolio