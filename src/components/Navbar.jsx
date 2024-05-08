const Navbar = () => {
    return (
        <>
            <nav className="sticky left-0 top-0 flex w-full items-center justify-center px-6 py-3 font-[silkscreen]">
                <div className="h-[76px] w-full rounded-full  border border-gray-400 bg-[#00000020] px-[38px] backdrop-blur-md dark:border-gray-600 dark:bg-[#175b8126] ">
                    <div className="flex h-full items-center justify-between">
                        <div className="font-[silkscreen] text-2xl font-bold text-primary first-letter:text-secondary dark:text-white sm:text-3xl lg:text-4xl">
                            Roshan
                        </div>
                        <div className="links-container h-full">
                            <ul className="*:text-shadow-custom flex h-full items-center justify-center space-x-6  *:text-lg *:font-semibold *:text-primary hover:*:text-secondary dark:*:text-white dark:hover:*:text-secondary">
                                <li>
                                    <a href="#Home">Home</a>
                                </li>
                                <li>
                                    <a href="#About">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
