import React from 'react'
import { data } from '../portfolio/examples'
import LazyLoad from 'react-lazy-load'
import { motion } from 'framer-motion'
import pageVariants from './routetransitions'

const Portfolio = () => {
  const project = data

  return (
      <motion.div 
      id='portfolio' 
      name='portfolio' 
      key="portfolio"
      className='w-full min-h-full bg-[#fffdf0] text-[#53225a] pt-16'
      variants={pageVariants.RouteTransition}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#db7b48]'>
          </p>
          <h1 className='text-4xl font-bold py-6 border-b-4 border-[#8892b0]'>Portfolio</h1>
        </div>
{/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 pb-20">
{/* Grid Item */}
          {project.map((item, index) => (
  <LazyLoad key={index} className="" height={200} once>
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div py-4" >
{/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        <a href={item.github} target="_blank" rel="noopener noreferrer">
          <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-[#53225a] font-bold text-lg" >
            Code
          </button>
        </a>
        <a href={item.live} target="_blank" rel="noopener noreferrer">
          <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-[#53225a] font-bold text-lg" >
            Live
          </button>
        </a>
        </div>
    </div>
  </div>
  </LazyLoad>
))}
</div>
</div>
</motion.div>
   )
}
export default Portfolio