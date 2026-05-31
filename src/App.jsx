import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
const ProjectsSection = lazy(() => import('./components/Projects/ProjectsSection'))
const SkillsSection = lazy(() => import('./components/Skills/SkillsSection'))
const ContactSection = lazy(() => import('./components/Contact/ContactSection'))
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
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
        const observedElements = new Set()

        const observeIfElement = (ref) => {
            const element = ref.current
            if (element instanceof Element && !observedElements.has(element)) {
                observer.observe(element)
                observedElements.add(element)
            }
        }

        const observeAll = () => {
            observeIfElement(homeRef)
            observeIfElement(projectsRef)
            observeIfElement(skillsRef)
            observeIfElement(contactRef)
        }

        observeAll()
        const retryId = window.setInterval(() => {
            if (observedElements.size >= 4) {
                window.clearInterval(retryId)
                return
            }
            observeAll()
        }, 200)

        return () => {
            window.clearInterval(retryId)
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div className='h-[100vh] w-full overflow-auto scroll-smooth bg-[var(--custom-white)] dark:bg-primary'>
                <ThemeToggle />
                <Navbar activeSection={activeSection} />
                <main className='w-full'>
                    <HeroSection heroRef={homeRef} />
                    <Suspense fallback={<div className='h-20' aria-live='polite'>Loading...</div>}>
                        <ProjectsSection projectsRef={projectsRef} />
                        <SkillsSection skillsRef={skillsRef} />
                        <ContactSection contactRef={contactRef} />
                    </Suspense>
                </main>
                <Footer />
                <Analytics />
                <SpeedInsights />
            </div>
        </>
    )
}

export default App
