/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import Menu01Icon from './icons/Menu01Icon'
import '../styles/buttonHoverEffect.css'

const Navbar = ({ activeSection }) => {
    const menuRef = useRef(null)
    const [menustate, setMenuState] = useState(false)
    const toggleMenu = () => {
        setMenuState((prev) => !prev)
    }
    return (
        <>
            <nav className='absolute left-0 top-0 z-10 flex w-full items-center justify-center px-6 py-3 font-[silkscreen]'>
                <div className=' h-auto min-h-[70px] w-full rounded-2xl border border-gray-400 bg-[#00000020]  px-[38px] backdrop-blur-md transition-[height] dark:border-gray-600 dark:bg-[#175b8126] md:h-[76px] md:rounded-full '>
                    <div className=' flex h-full flex-col items-center justify-between md:flex-row'>
                        <a
                            href='#home'
                            className='flex  h-full min-h-[70px] w-full flex-1 flex-row items-center  font-[silkscreen] text-2xl font-bold text-primary dark:text-white sm:text-3xl md:w-auto lg:text-4xl'>
                            <span className='font-[silkscreen] text-secondary'>
                                R
                            </span>
                            oshan
                        </a>
                        <div
                            ref={menuRef}
                            id='menu'
                            className={`menu ${menustate ? 'menu-open' : ''}    h-full  w-full overflow-hidden  md:block  md:w-auto `}>
                            <ul className='*:text-shadow-custom  flex h-full flex-col items-start justify-center *:cursor-pointer    *:p-2 *:px-3 *:text-lg *:font-semibold *:text-primary   hover:*:text-secondary  dark:*:text-white dark:hover:*:text-secondary md:flex md:flex-row md:items-center md:gap-0 md:space-x-6'>
                                <li className='hover-effect'>
                                    <a
                                        href='#home'
                                        className={`${activeSection == 'home' ? 'text-secondary' : ''}`}>
                                        Home
                                    </a>
                                </li>
                                <li className='hover-effect'>
                                    <a
                                        href='#project'
                                        className={`${activeSection == 'project' ? 'text-secondary' : ''}`}>
                                        Projects
                                    </a>
                                </li>
                                <li className='hover-effect'>
                                    <a
                                        href='#skills'
                                        className={`${activeSection == 'skills' ? 'text-secondary' : ''}`}>
                                        Skills
                                    </a>
                                </li>
                                {/* <li className='hover-effect'>
                                    <a
                                        href='#about'
                                        className={`${activeSection == 'about' ? 'text-secondary' : ''}`}>
                                        About
                                    </a>
                                </li> */}
                                <li className='hover-effect'>
                                    <a
                                        href='#contact'
                                        className={`${activeSection == 'contact' ? 'text-secondary' : ''}`}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            onClick={toggleMenu}
                            className={`group transition-colors ${menustate ? 'bg-[#ee5f3850]' : 'bg-transparent'} absolute right-6 top-[15px] block cursor-pointer rounded-md p-2  md:hidden md:hover:bg-[#ee5f3850]`}>
                            <Menu01Icon
                                className={` ${menustate ? 'text-secondary' : 'text-black dark:text-white'} transition-colors  md:hidden`}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
