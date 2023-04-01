import { useEffect, useRef } from 'react'
import { data } from '../portfolio/examples'
//import * as Scroll from 'react-scroll'
import { Element } from 'react-scroll'

const Portfolio = () => {
  const project = data
//  const Element = Scroll.Element
  const elementRef = useRef(null)
  const currentElementRef = useRef(null)

  useEffect(() => {
    const scrollElement = new Element()
    scrollElement.id = 'portfolio'
    const currentRef = currentElementRef.current
    if (currentRef) {
      currentRef.scrollEvent = () => {}
      currentRef.register(scrollElement)
      return () => {
        currentRef.scrollEvent = undefined
        currentRef.unregister(scrollElement)
      }
    }
    }, [currentElementRef])

  return (
    <>
      <Element ref={elementRef} id='portfolio' name='portfolio' className='w-full md:h-full bg-[#fffdf0] text-[#53225a] pt-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#db7b48]'>
          </p>
          <p className='py-6'> </p>
        </div>
        <div className="text-zone">
          <h1>
            Portfolio
          </h1>
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
                       bg-white text-[#53225a] font-bold text-lg" >
            Code
          </button>
        </a>
        <a href={item.live}>
          <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-[#53225a] font-bold text-lg" >
            Live
          </button>
        </a>
        </div>
    </div>
  </div>
))}
</div>
</div>
</Element>
  </>
   )
}
export default Portfolio