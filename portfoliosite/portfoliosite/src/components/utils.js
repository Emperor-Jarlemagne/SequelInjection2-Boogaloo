/*import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"

export function scrollToElement(elementId, duration) {
  const element = document.getElementById(elementId)
  const elementTop = element.offsetTop
  const durationStep = 10
  const scrollStep = elementTop / (duration / durationStep)
  let scrollTop = 0

  function handleScroll() {
    if (scrollTop < elementTop) {
      scrollTop += scrollStep
      window.scrollTo(0, scrollTop)
      setTimeout(handleScroll, durationStep)
    }
  }

  return new Promise((resolve) => {
    handleScroll(elementTop)
    setTimeout(resolve, duration)
  })
} 
function ScrollToPage() {
  const location = useLocation()

  useEffect(() => {
    scroll.ScrollToPage({
      duration: 500,
      smooth: true,
    })
  }, [location])
  return null
}

export default ScrollToPage

Heres jsut a bunch of crap Im copy and pasting:
activeClass='active' to='home' spy={true} smooth={true} offset={-75} duration={500} */