import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import SkillsSection from './components/Skills/SkillsSection'
import ContactSection from './components/Contact/ContactSection'
function App() {
    const [activeSection, setActiveSection] = useState('home')
    const homeRef = useRef(null)
    // const aboutRef = useRef(null)
    const projectsRef = useRef(null)
    const skillsRef = useRef(null)
    // const servicesRef = useRef(null)
    const contactRef = useRef(null)

    // Function to handle intersection observer changes
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
        })
    }

    // Initialize Intersection Observer
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
        const observer = new IntersectionObserver(handleIntersection, options)

        observer.observe(homeRef.current)
        observer.observe(projectsRef.current)
        observer.observe(skillsRef.current)
        // observer.observe(aboutRef.current)
        // observer.observe(servicesRef.current)
        observer.observe(contactRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div
                id='ss'
                className='h-[100vh] w-full overflow-auto scroll-smooth bg-[var(--custom-white)] dark:bg-primary'>
                <ThemeToggle />
                <Navbar activeSection={activeSection} />
                <HeroSection heroRef={homeRef} />
                <ProjectsSection projectsRef={projectsRef} />
                <SkillsSection skillsRef={skillsRef} />
                {/* <About aboutRef={aboutRef} /> */}
                {/* <Services servicesRef={servicesRef} /> */}
                <ContactSection contactRef={contactRef} />
                <Footer />
            </div>
        </>
    )
}

export default App

// eslint-disable-next-line react/prop-types, no-unused-vars
const About = ({ aboutRef }) => {
    return (
        <>
            <h2
                ref={aboutRef}
                id='about'
                className='my-4 text-center text-4xl font-semibold text-black dark:text-white'>
                About section
            </h2>
            <div id='About' className='scroll-mt-24 p-6 dark:text-white'></div>
        </>
    )
}
