import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
function App() {
    const [activeSection, setActiveSection] = useState('home')
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    // const servicesRef = useRef(null)
    // const contactRef = useRef(null)

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
        observer.observe(aboutRef.current)
        // observer.observe(servicesRef.current)
        // observer.observe(contactRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <div className="h-[100vh] w-full overflow-auto scroll-smooth dark:bg-primary">
                <ThemeToggle />
                <Navbar activeSection={activeSection} />
                <HeroSection heroRef={homeRef} />
                <About aboutRef={aboutRef} />
                {/* <Services servicesRef={servicesRef} /> */}
                {/* <Contact contactRef={contactRef} /> */}
                <Footer />
            </div>
        </>
    )
}

export default App

const About = ({ aboutRef }) => {
    return (
        <>
            <hr />
            <h2
                ref={aboutRef}
                id="about"
                className="my-4 text-center text-4xl font-semibold text-black dark:text-white">
                About section
            </h2>
            <div id="About" className="scroll-mt-24 p-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                esse aperiam tenetur culpa sit tempore voluptatum delectus
                dolorem nemo sunt, ducimus voluptatibus illo doloribus
                voluptates natus aut vitae porro voluptate impedit fugiat
                perferendis, aliquam odit iste! Culpa, quis dolorem quae dolorum
                perspiciatis odit necessitatibus tempora dicta. Esse vitae
                voluptates, neque eligendi ratione accusantium error quasi
                laboriosam? Mollitia impedit ullam, deleniti, voluptatem nemo
                tenetur amet reprehenderit non esse facilis repellat vitae
                eaque? Ea quas, facilis unde laboriosam commodi similique
                distinctio minima ex sunt voluptatibus officiis, ullam modi.
                Suscipit nemo similique, a porro tempore ad rem eius dolorem
                omnis officia velit distinctio ut mollitia illum totam est
                quisquam quia delectus deserunt, hic harum deleniti consequatur
                rerum. Nostrum deserunt nisi assumenda repudiandae obcaecati
                exercitationem suscipit aliquid ad velit quibusdam! Quod
                asperiores aliquam omnis adipisci! Enim provident earum at
                voluptas sapiente sed, cum ad ipsa explicabo iusto unde
                repellendus commodi, quis amet perspiciatis porro dolorem omnis
                tenetur totam nihil esse. Commodi odio excepturi eligendi
                laudantium itaque quam totam quae assumenda, corporis similique
                voluptate, beatae sit, quis facere facilis officiis! Cum
                doloribus nostrum expedita alias dolores, odio, distinctio
                soluta libero eum, ipsum in assumenda repudiandae debitis.
                Architecto quas sit iusto exercitationem eaque magnam error!
                Facilis nisi velit corrupti nam explicabo temporibus, obcaecati
                rerum tempore error! Minus blanditiis, quis quam voluptate, odio
                nesciunt optio aut delectus animi, ex laudantium. Numquam
                dolores veniam molestiae iusto tempore placeat. Adipisci
                quibusdam, aut quod recusandae neque nostrum natus, velit
                reiciendis voluptatibus, optio inventore eos. Odio modi quam
                nesciunt provident at quibusdam, maiores, tempora placeat eum
                officiis quasi, eaque aliquam veritatis ab nulla laborum? Facere
                aut alias voluptates temporibus consectetur eum sint labore
                consequuntur reiciendis maxime, vero laboriosam iure corrupti
                exercitationem et modi perferendis? Dolorum doloremque optio
                temporibus itaque cupiditate odio a repudiandae inventore et
                totam. Fuga dicta mollitia dolore. Fugiat, voluptate molestias
                magni nostrum quia, tenetur distinctio, voluptatum blanditiis
                labore at eligendi odio quae quaerat ducimus sunt optio deserunt
                omnis pariatur temporibus alias aut assumenda perferendis ipsam?
                Expedita eos provident officia accusamus explicabo aut dolores
                et aliquid in vel at officiis doloribus rerum delectus quaerat
                deleniti, ab architecto quasi error excepturi tempora magnam,
                ipsam a. Id, facilis similique accusamus mollitia dolor,
                voluptatibus sequi placeat iste quidem porro vero labore vitae
                ratione alias quo, voluptas culpa cumque deserunt doloribus.
                Excepturi, deleniti numquam! Atque consequuntur ex sed hic eum
                vero molestiae, similique tempore. Voluptatum labore ipsam
                repudiandae saepe aperiam harum consectetur ex!
            </div>
        </>
    )
}
