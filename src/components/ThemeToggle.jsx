import useTheme from '../hooks/useTheme'
import { useState } from 'react'
import DarkIcon from './icons/DarkIcon'
import SystemDefaultIcon from './icons/SystemDefaultIcon'
import LightIcon from './icons/LightIcon'
import Cancel01Icon from './icons/Cancel01Icon'

const ThemeToggle = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const { mode, theme, toggleTheme } = useTheme()
    const toggleModal = () => {
        setModalOpen((prev) => !prev)
    }

    return (
        <>
            <div
                className="Theme-toggle absolute right-8 top-[90%] rounded-md "
                style={{ boxShadow: '1px 1px 50px 1px #ee5f3873' }}>
                <div className="relative">
                    {modalOpen && (
                        <div className=" absolute bottom-2 right-4 rounded bg-white shadow-md shadow-[#000000] dark:bg-[#081a25] dark:text-white">
                            <ul className="flex flex-col py-2 *:flex  *:flex-nowrap *:items-center *:justify-start *:gap-2 *:px-4 *:py-2 hover:*:cursor-pointer hover:*:bg-[#0d202b]  hover:*:text-white  ">
                                <li
                                    className={`${theme === 'dark' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('dark')
                                        toggleModal()
                                    }}>
                                    <DarkIcon /> <span>Dark</span>
                                </li>
                                <li
                                    className={`${theme === 'light' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('light')
                                        toggleModal()
                                    }}>
                                    <LightIcon /> <span>Light</span>
                                </li>
                                <li
                                    className={` whitespace-nowrap ${theme === 'system' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('system')
                                        toggleModal()
                                    }}>
                                    <SystemDefaultIcon />
                                    <span>System</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    onClick={toggleModal}
                    type="button"
                    className="  rounded-md  bg-secondary px-3 py-2 text-sm font-medium text-gray-300">
                    {modalOpen ? (
                        <Cancel01Icon className="text-white" />
                    ) : mode === 'light' ? (
                        <svg
                            id="theme-toggle-light-icon"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fillRule="evenodd"
                                clipRule="evenodd"></path>
                        </svg>
                    ) : (
                        <svg
                            id="theme-toggle-dark-icon"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </>
    )
}

export default ThemeToggle
