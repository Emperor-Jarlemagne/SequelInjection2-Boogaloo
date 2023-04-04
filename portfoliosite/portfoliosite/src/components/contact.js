import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import pageVariants from './routetransitions'

const Contact = () => {
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
      className="w-full h-full flex justify-center items-center p-4 bg-[#fffdf0]"
      variants={pageVariants.RouteTransition}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="contact-container">
        <div className="ml-20 mr-10">
          <p className="text-3xl font-bold inline border-b-4 border-[#db7b48] text-[#53225a] leading-3">
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
                    className="p-2 bg-gray-100 outline-none w-full"/>
                </li>
                <li className="w-3/4">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="my-4 p-2 bg-[#ccd6f6] outline-none w-full"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    className="my-4 p-2 bg-[#ccd6f6] outline-none w-full md:w-7/8"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="bg-[#ccd6f6] p-2 outline-none w-full md:w-7/8"
                    required
                    rows="8"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" 
                  className="text-[#53225a] border-2 hover:bg-[#db7b48] hover:border-[#db7b48] px-4 py-3 my-8 mx-auto flex items-center" 
                  value="SEND" />
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