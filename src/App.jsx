import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import SkillsSection from './components/Skills/SkillsSection'
import ContactSection from './components/Contact/ContactSection'
import { Analytics } from '@vercel/analytics/react'
function App() {
    const [activeSection, setActiveSection] = useState('home')
    const homeRef = useRef(null)
    const projectsRef = useRef(null)
    const skillsRef = useRef(null)
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
        observer.observe(contactRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div className='h-[100vh] w-full overflow-auto scroll-smooth bg-[var(--custom-white)] dark:bg-primary'>
                <ThemeToggle />
                <Navbar activeSection={activeSection} />
                <HeroSection heroRef={homeRef} />
                <ProjectsSection projectsRef={projectsRef} />
                <SkillsSection skillsRef={skillsRef} />
                <ContactSection contactRef={contactRef} />
                <Footer />
                <Analytics />
            </div>
        </>
    )
}

export default App
