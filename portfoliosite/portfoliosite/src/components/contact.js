import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import pageVariants from './routetransitions'
import AnimatedLetters from './letters'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .send(
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        },
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          // alert('Message successfully sent!')
          toast.success('Message successfully sent!', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          const timeout = setTimeout(() => {
            window.location.reload(false)
          }, 3900)

          return () => clearTimeout(timeout)
        },
        () => {
          // alert('Failed to send the message, please try again')
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      )
  }

  return (
    <motion.div 
      id="contact" 
      name="contact" 
      key="contact"
      className="w-full h-full bg-[#fffdf0] pt-16"
      variants={pageVariants.RouteTransition}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="ml-10 md:ml-40 mr-20 mt-8 flex justify-center items-center">
        <div className="max-w-[1000px] w-full">
        <h1 className='text-3xl sm:text-5xl font-bold inline border-b-4 border-[#8892b0]'>
              <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'Contact'.split('')}
                  idx={15}
                />
          </h1>
          <br />
          <p className="text-3xl font-bold text-[#53225a] leading-3">
            If you would like to get in contact, please do! <br />
            I&apos;m looking for a Junior Full Stack position at a company
            that has challenging and diverse projects.
          </p>
          <div className="flex flex-col max-w-lg w-full mt-8">
            <form 
            ref={form} 
            onSubmit={sendEmail} 
            style={{outline: 'none'}}>
              <ul>
                <li className="w-3/4">
                  <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    required 
                    className="my-2 p-2 bg-gray-100 outline-none w-full"/>
                </li>
                <li className="w-3/4">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="my-2 p-2 bg-[#ccd6f6] outline-none w-full"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    className="my-2 p-2 bg-[#ccd6f6] outline-none w-full md:w-7/8"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="my-2 p-2 bg-[#ccd6f6] outline-none w-full md:w-7/8"
                    required
                    rows="8"
                  ></textarea>
                </li>
                <li className="group">
                  <button 
                  type="submit" 
                  className="px-4 py-2 my-8 w-[50%] mx-auto flex text-center items-center text-[#53225a] border-2 hover:bg-[#db7b48] hover:border-[#db7b48] hover:text-[#53225a]" 
                  value="SEND">
                    SUBMIT
                    <span className='group-hover:rotate-90 duration-200'>
                      <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                  </button>
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
    </div>
    </motion.div>
  )
}
export default Contact