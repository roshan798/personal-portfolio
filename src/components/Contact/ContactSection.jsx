/* eslint-disable react/prop-types */

import { useRef, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './Animation.json'
import './styles.css'
import sendEmail from '../../services/sendEmail'

const Spinner = () => (
    <svg
        className='h-5 w-5 animate-spin text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'>
        <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'></circle>
        <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
)

export default function ContactSection({ contactRef }) {
    const formRef = useRef(null)
    const [error, setError] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    // it will check if the message has been sent in the last 24 hours
    const checkMessageSentStatus = () => {
        const messageSent = localStorage.getItem('messageSent')
        const messageSentTime = localStorage.getItem('messageSentTime')
        if (messageSent === null || messageSentTime === null) return false
        const currentTime = new Date().getTime()
        if (currentTime - messageSentTime < 1000 * 60 * 60 * 24) {
            return true
        }
        localStorage.setItem('messageSent', false)
        return false
    }
    const [messageSent, setMessageSent] = useState(checkMessageSentStatus())
    // it will chec email validation and set error message
    const checkEmail = (email) => {
        if (check(() => email === '', email, 'email', 'Email is required'))
            return true
        const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (emailRegEx.test(email) === false) {
            setError({ ...error, email: 'Email is invalid' })
            return true
        }
        return false
    }
    // it will check name validation and set error message
    const checkName = (name) => {
        return check(() => name === '', name, 'name', 'Name is required')
    }
    // it will check message validation and set error message
    const checkMessage = (message) => {
        return check(
            () => message === '',
            message,
            'message',
            'Message is required'
        )
    }

    // it is a generic function to check the criteria and set the error message
    const check = (criteriaCallback, item, name, onErrorMessage) => {
        if (criteriaCallback(item)) {
            setError((prevError) => ({ ...prevError, [name]: onErrorMessage }))
            return true
        }
        return false
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        // calling three not in same line to check all the error
        let flag = checkName(name)
        flag |= checkEmail(email)
        flag |= checkMessage(message)
        if (flag) {
            return
        } else {
            setLoading(true)
            try {
                const response = await sendEmail(formRef.current)
                if (response.success) {
                    console.log('Email Sent Successfully')
                    setMessageSent(true)
                    localStorage.setItem('messageSent', true)
                    localStorage.setItem(
                        'messageSentTime',
                        new Date().getTime()
                    )
                    formRef.current.reset()
                } else {
                    alert(response.message)
                    console.log(response)
                }
            } catch (error) {
                alert('Failed to send Email')
                console.error(error.message)
            }
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        if (error[e.target.name] != '')
            setError({ ...error, [e.target.name]: '' })
    }

    return (
        <section
            ref={contactRef}
            id='contact'
            className='mt-8 w-full scroll-mt-40 overflow-hidden p-8 pt-8 md:pb-0'>
            <div className='flex flex-col flex-wrap justify-between md:flex-row'>
                {messageSent === false && (
                    <div className='flex-1 p-4 pt-0'>
                        <div className=''>
                            <div className='mx-auto  hidden w-[85%] md:block'>
                                <Player
                                    autoplay
                                    loop
                                    src={animationData}></Player>
                            </div>
                        </div>
                    </div>
                )}
                <div className='flex-1 p-2'>
                    <div className='mb-8 pt-8 '>
                        <h2 className='heading text-nowrap text-center text-4xl font-semibold text-black dark:text-white md:text-6xl'>
                            Get in Touch
                        </h2>
                        <p className='text-center text-xs text-yellow md:text-sm'>
                            Let&apos;s make something awesome together.
                        </p>
                    </div>
                    {messageSent === false ? (
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
                                    style={{
                                        outline: error.name
                                            ? '2px solid red'
                                            : '',
                                    }}
                                    name='name'
                                    onChange={handleChange}
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className={`rounded-md bg-[#175b8126] p-3 py-4 text-xl text-black shadow shadow-[#175b81] outline-none focus:shadow-none focus:ring-2 focus:ring-blue-500 dark:text-white`}
                                    required
                                    style={{
                                        outline: error.email
                                            ? '2px solid red'
                                            : '',
                                    }}
                                    name='email'
                                    onChange={handleChange}
                                />
                            </div>
                            <textarea
                                placeholder='Message'
                                className='h-32 resize-none rounded-md bg-[#175b8126] p-3 py-4 text-xl text-black shadow shadow-[#175b81] outline-none focus:shadow-none focus:ring-2 focus:ring-blue-500 dark:text-white'
                                required
                                style={{
                                    outline: error.message
                                        ? '2px solid red'
                                        : '',
                                }}
                                name='message'
                                onChange={handleChange}
                            />
                            <div className='flex flex-row-reverse items-end gap-4 *:mt-3 *:rounded-md *:border *:border-yellow *:p-3 *:px-6 *:font-semibold *:outline-none *:transition *:duration-300 *:ease-in-out focus:*:border-transparent focus:*:shadow-none focus:*:ring-2 focus:*:ring-blue-500'>
                                <button
                                    type='submit'
                                    className='bg-[#ffc000] text-black'
                                    onClick={handleFormSubmit}>
                                    {loading ? <Spinner /> : 'Send'}
                                </button>
                                {loading === false && (
                                    <button
                                        type='reset'
                                        className='bg-[#ffc00020] font-semibold text-black dark:text-white'>
                                        Reset
                                    </button>
                                )}
                            </div>
                        </form>
                    ) : (
                        <div className='m-auto mb-8 w-fit rounded-md border border-green-500 p-6 text-center text-green-700 md:px-12'>
                            <h2 className='text-2xl font-semibold'>
                                Thank you!
                            </h2>
                            <p>
                                Your message has been sent successfully.
                                <br /> We will get back to you soon.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
