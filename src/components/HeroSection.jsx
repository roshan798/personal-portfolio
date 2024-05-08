import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'
import avatarImage from '../assets/images/Designer2.png'

const HeroSection = () => {
    const options = {
        textStyle: {
            // color: 'white',
            fontWeight: 500,
            fontSize: '1.2em',
        },
        startDelay: 0,
        cursorColor: '#EE5F38',
        multiText: [
            'Full stack developer',
            'Backend (Node) developer',
            'Frontend developer',
            'UI/UX designer',
            'Software engineer',
        ],
        multiTextDelay: 2000,
        typeSpeed: 50,
    }

    return (
        <section
            id="Home"
            className="Hero item-center d flex scroll-mt-24  flex-col p-6 md:flex-row  md:items-start">
            <div className=" m-auto  w-[30rem]  p-0 md:pl-2">
                <img
                    src={avatarImage}
                    alt="avatar"
                    className="h-auto max-w-full self-center object-cover"
                />
            </div>
            <div className=" flex flex-1 flex-col  justify-center   p-0 md:place-self-center md:pr-2">
                <div className=" flex flex-col  justify-center gap-4 px-6 text-4xl md:text-left ">
                    <p>
                        <span className="italic text-slate-700 dark:text-gray-300">
                            Hello, i&apos;m{' '}
                        </span>
                        <span className="font-semibold text-secondary underline">
                            Roshan Kumar
                        </span>
                    </p>
                    <div className=" text-black dark:text-white">
                        {''}
                        <TypeWriterEffect {...options} />
                    </div>
                    <p className="text-pretty pr-3 text-lg text-slate-700 dark:text-gray-300 sm:pr-4 md:pr-8">
                        I'm excellent at combining{' '}
                        <span className="text-yellow">
                            development and design
                        </span>{' '}
                        to create stunning and useful applications. I take a
                        comprehensive approach to projects, leveraging my
                        abilities in{' '}
                        <span className="text-yellow">frontend</span> and{' '}
                        <span className="text-yellow">design skills</span>{' '}
                        closely behind my strengths in{' '}
                        <span className="text-yellow">backend programming</span>
                        . I am excited to bring my{' '}
                        <span className="text-yellow">technical expertise</span>{' '}
                        and <span className="text-yellow">artistic flair</span>{' '}
                        to your team and am currently open to opportunities.
                        Let's investigate possibilities for cooperation
                        together! Please get in touch with me to talk about
                        possible joint ventures!{' '}
                        <span className="text-sm text-black dark:text-white">
                            (will change it)
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
