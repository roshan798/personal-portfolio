import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import ProjectCard from './ProjectCard'
import projects from './data.json'
import { useRef, useEffect } from 'react'

export default function ProjectsSection({ projectsRef }) {
    const swiperElRef = useRef(null)

    useEffect(() => {
        const swiperInstance = swiperElRef.current.swiper
        swiperInstance.navigation.init()
        swiperInstance.navigation.update()
    }, [])

    // Determine number of slides per view based on screen width
    const slidesPerView = window.innerWidth >= 768 ? 2 : 1

    return (
        <section
            id="project"
            className="background-grid mb-8 min-h-[100dvh]"
            ref={projectsRef}>
            <div className="mx-auto py-20">
                <h2 className="z-1 relative text-center text-6xl font-semibold text-black dark:text-white">
                    Projects
                </h2>
                <div className="mt-8 ">
                    <div className="w-full ">
                        <div className="m-auto">
                            <Swiper
                                ref={swiperElRef}
                                effect="coverflow"
                                slidesPerView={slidesPerView}
                                speed={500}
                                loop={true}
                                spaceBetween={50}
                                centeredSlides={true} // Ensure that single slide is centered
                                grabCursor={true}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 200,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={{ clickable: true }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[
                                    EffectCoverflow,
                                    Navigation,
                                    Pagination,
                                ]} // Add Pagination module
                                className="swiper-container">
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="slider-controller">
                                <div className="swiper-button-prev slide-arrow"></div>
                                <div className="swiper-button-next slide-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
