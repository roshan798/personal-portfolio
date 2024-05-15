import avatarImage from '../assets/images/Designer1.png'
import useTypewriter from '../hooks/useTypewriter'
import LinkArrow01Icon from './icons/LinkArrow01Icon'
const HeroSection = ({ heroRef }) => {
    const words = [
        'Full stack developer',
        'UI/UX designer',
        'Software engineer',
    ]
    const { text, blink } = useTypewriter({ words })
    return (
        <section
            ref={heroRef}
            id="home"
            className=" item-center mb-8 flex min-h-[100dvh] scroll-mt-24  flex-col  p-4 pt-32  md:flex-row  md:items-start md:p-6 md:pt-32">
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
                        <span className="text-2xl italic text-slate-700 dark:text-gray-300  md:text-3xl">
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
                    <div className="flex flex-col gap-2">
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
                            <span className="text-yellow">
                                backend programming
                            </span>
                            .
                        </p>
                        <p className="text-pretty pr-3 text-lg text-slate-700 dark:text-gray-300 sm:pr-4 md:pr-8">
                            Currently seeking a full-time role as a
                            <span className="text-yellow">
                                {' '}
                                full stack engineer
                            </span>
                            , I bring a blend of creativity and technical
                            expertise to any team.
                        </p>
                        <p className="text-pretty pr-3 text-lg text-slate-700 dark:text-gray-300 sm:pr-4 md:pr-8">
                            If you're interested in{' '}
                            <span className="text-yellow">collaborating</span>{' '}
                            or <span className="text-yellow">learning</span>{' '}
                            more about my work, don't hesitate to contact! Let's
                            turn ideas into reality.
                            <span className="text-sm text-black dark:text-white">
                                (will change it)
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 flex justify-start  text-black dark:text-white">
                        <button className="mr-4 min-w-max text-nowrap rounded-full  bg-secondary px-5 py-3 text-center text-xl text-gray-300 sm:text-2xl md:px-8">
                            Let&apos;s connect
                        </button>{' '}
                        <button className="animate-link-arrow-hover group mr-4 min-w-max text-nowrap rounded-full border border-secondary bg-[#ee5f3810] px-5 py-3 pr-8 text-center text-xl text-gray-300 transition-colors hover:bg-secondary sm:text-2xl md:px-8">
                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/10clY7OTb-8LSQPhFYQ_E6e014VvNckp_/view?usp=drive_link"
                                className=" relative  text-secondary  transition-colors group-hover:text-white">
                                Resume{' '}
                                <LinkArrow01Icon
                                    id="link-arrow"
                                    className={
                                        'absolute -right-4 top-0 h-4 w-4 rotate-[5deg] text-secondary transition-colors  group-hover:text-white '
                                    }
                                />{' '}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
