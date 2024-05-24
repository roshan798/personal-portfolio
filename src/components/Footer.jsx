import '../styles/buttonHoverEffect.css'
const social = [
    {
        name: 'GitHub',
        url: 'https://github.com/roshann798',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/roshan-kumar7989/',
    },
    {
        name: 'Twitter',
        url: 'https://x.com/Roshank10254505',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/roshan.kumar798/',
    },
    {
        name: 'Email',
        url: 'mailto:roshankumar_2022@outlook.com',
    },
]
const Footer = () => {
    return (
        <footer className="border-t border-t-slate-400 py-2 pt-4 text-black dark:text-white">
            <div className="mx-auto text-center">
                <div className="mb-2 flex justify-center space-x-4">
                    {social.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="hover-effect social-card flex h-12 w-12 items-center justify-center p-2"
                            aria-label={item.name}
                            referrerPolicy="no-referrer">
                            <img
                                src={`/social/${item.name.toLowerCase()}.svg`}
                                alt={item.name}
                                className="dark:invert"
                            />
                        </a>
                    ))}
                </div>
                <p>Roshan Kumar | &copy; 2024 Made with 💖 from India</p>
            </div>
        </footer>
    )
}

export default Footer
