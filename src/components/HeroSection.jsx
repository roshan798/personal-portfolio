import avatarImage from '../assets/images/Designer1.png'
import useTypewriter from '../hooks/useTypewriter'
const HeroSection = ({ heroRef }) => {
    const words = [
        'Full stack developer',
        'Backend (Node) developer',
        'Frontend developer',
        'UI/UX designer',
        'Software engineer',
    ]
    const { text, blink } = useTypewriter({ words })
    return (
        <section
            ref={heroRef}
            id="home"
            className="item-center flex min-h-[100dvh] scroll-mt-24  flex-col  p-4 pt-32  md:flex-row  md:items-start md:p-6 md:pt-32">
            <div className="m-auto min-h-[25rem] w-full min-w-48 p-0  sm:w-[30rem] md:min-h-[30rem] md:pl-2 ">
                <img
                    src={avatarImage}
                    alt="avatar"
                    className="h-auto  max-w-full self-center object-cover"
                />
            </div>
            <div className=" flex flex-1 flex-col  justify-center   p-0 md:place-self-center md:pr-2">
                <div className=" flex flex-col  justify-center gap-4 px-6 text-3xl md:text-left md:text-4xl ">
                    <p>
                        <span className="italic text-slate-700 dark:text-gray-300">
                            Hello, i&apos;m{' '}
                        </span>
                        <span className="block font-semibold  text-secondary underline">
                            Roshan Kumar
                        </span>
                    </p>
                    <div className=" text-3xl font-semibold text-black dark:text-white">
                        {''}
                        {text}
                        <span
                            className={`${blink ? 'blink' : ''} text-secondary opacity-100`}>
                            |
                        </span>
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
