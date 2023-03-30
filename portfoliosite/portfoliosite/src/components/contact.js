import { useEffect, useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import AnimatedLetters from './letters'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Scroll from 'react-scroll'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const Element = Scroll.Element
  const elementRef = useRef(null)

  useEffect(() => {
    let currentElementRef = elementRef.current
    currentElementRef = Element('contact')
    return () => {
      currentElementRef.destroy()
    };
  }, [Element])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
    }, [])

    useEffect(() => {
      const currentElementRef = elementRef.current
      return () => {
        currentElementRef.destroy()
      }
    }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        },
        process.env.REACT_APP_PUBLIC_KEY
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
    <Element ref={elementRef} id="contact" name="name" className="w-full h-screen flex justify-center items-center p-4 bg-[#fffdf0]">
      <div>
        <div className="ml-20 mr-10">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact Me'.split('')}
              idx={15}
            />
          </h1>
          <p className="text-4xl font-bold inline border-b-4 border-[#db7b48] text-[#53225a] leading-4">
            If you would like to get in contact, please do! <br />
            I'm looking for a Junior Full Stack position at a company
            that has challenging and diverse projects.
          </p>
          <div className="flex flex-col max-w-[600px] w-full mt-8">
            <form ref={form} onSubmit={sendEmail} style={{outline: 'none'}}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required style={{outline: 'none'}}/>
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="my-4 p-2 bg-[#ccd6f6]"
                    required
                    style={{outline: 'none'}}
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    className="my-4 p-2 bg-[#ccd6f6]"
                    required
                    style={{outline: 'none'}}
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="bg-[#ccd6f6] p-2"
                    required
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
    </Element>
  )
}
export default Contact