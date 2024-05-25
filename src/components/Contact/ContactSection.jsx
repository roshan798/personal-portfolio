/* eslint-disable react/prop-types */

import { useRef, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './Animation.json'
import './styles.css'

export default function ContactSection({ contactRef }) {
    const formRef = useRef(null)
    const [emailError, setEmailError] = useState('')

    const validateEmail = (email) => {
        const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        return emailRegEx.test(email)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = formRef.current
        const formData = new FormData(form)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        console.log(name, email, message)
        if (!validateEmail(email)) {
            setEmailError('Invalid Email')
            return
        }

        // logic to send mail

        console.log(name, email, message)
        console.log('Form Submitted')
        form.reset()
    }

    // eslint-disable-next-line no-unused-vars
    const handleEmailChange = (e) => {
        // const email = e.target.value
        if (emailError) setEmailError('')
    }

    return (
        <section
            ref={contactRef}
            id='contact'
            className='mt-8 min-h-[100vh] w-full scroll-mt-40 overflow-hidden p-8 pt-8 md:pb-0'>
            <div className='flex flex-col flex-wrap justify-between md:flex-row'>
                <div className='flex-1 p-4 pt-0'>
                    <div className=''>
                        <div className='mx-auto  hidden w-[85%] md:block'>
                            <Player autoplay loop src={animationData}></Player>
                        </div>
                    </div>
                </div>
                <div className='flex-1 p-2'>
                    <div className='mb-8 pt-8 '>
                        <h2 className='heading text-center text-3xl font-semibold text-black dark:text-white md:text-4xl'>
                            Get in Touch
                        </h2>
                        <p className='text-center text-sm text-yellow'>
                            Let&apos;s make something awesome together.
                        </p>
                    </div>
                    <form
                        onSubmit={handleFormSubmit}
                        className='flex flex-col gap-4'
                        ref={formRef}>
                        <div className='flex flex-col gap-4 *:w-full md:flex-row'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='rounded-md bg-[#175b8126] p-3 py-4 text-xl text-black shadow shadow-[#175b81] outline-none focus:shadow-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                                required
                                name='name'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className={`rounded-md bg-[#175b8126] p-3 py-4 text-xl text-black shadow shadow-[#175b81] outline-none focus:shadow-none focus:ring-2 focus:ring-blue-500 dark:text-white`}
                                required
                                style={{
                                    outline: emailError ? '2px solid red' : '',
                                }}
                                name='email'
                                onChange={handleEmailChange}
                            />
                        </div>
                        <textarea
                            placeholder='Message'
                            className='h-32 resize-none rounded-md bg-[#175b8126] p-3 py-4 text-xl text-black shadow shadow-[#175b81] outline-none focus:shadow-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                            required
                            name='message'
                        />
                        <div className='flex flex-row-reverse items-end gap-4 *:mt-3 *:rounded-md *:border *:border-yellow *:p-3 *:px-6 *:font-semibold *:outline-none *:transition *:duration-300 *:ease-in-out focus:*:border-transparent focus:*:shadow-none focus:*:ring-2 focus:*:ring-blue-500'>
                            <button
                                type='submit'
                                className='bg-[#ffc000] text-black'
                                onClick={handleFormSubmit}>
                                Send
                            </button>
                            <button
                                type='reset'
                                className='bg-[#ffc00020] font-semibold text-black dark:text-white'>
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
