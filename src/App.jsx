import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import { useState } from 'react'
import DarkIcon from './components/icons/DarkIcon'
import SystemDefaultIcon from './components/icons/SystemDefaultIcon'
import LightIcon from './components/icons/LightIcon'
import Cancel01Icon from './components/icons/Cancel01Icon'
const ThemeToggle = () => {
    const [modalOpen, setModalOpen] = useState(true)
    const { mode, theme, toggleTheme } = useTheme()
    const toggleModal = () => {
        setModalOpen((prev) => !prev)
    }

    return (
        <>
            <div className="Theme-toggle absolute right-8 top-[90%] rounded-md ">
                <div className="relative  ">
                    {modalOpen && (
                        <div className=" absolute bottom-2 right-4 rounded bg-white shadow-md shadow-[#000000] dark:bg-[#081a25] dark:text-white">
                            <ul className="flex flex-col py-2 *:flex  *:flex-nowrap *:items-center *:justify-start *:gap-2 *:px-4 *:py-2 hover:*:cursor-pointer hover:*:bg-[#0d202b]  hover:*:text-white  ">
                                <li
                                    className={`${theme === 'dark' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('dark')
                                    }}>
                                    <DarkIcon /> <span>Dark</span>
                                </li>
                                <li
                                    className={`${theme === 'light' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('light')
                                    }}>
                                    <LightIcon /> <span>Light</span>
                                </li>
                                <li
                                    className={` whitespace-nowrap ${theme === 'system' ? 'bg-primary text-white hover:bg-primary' : ''}`}
                                    onClick={() => {
                                        toggleTheme('system')
                                    }}>
                                    <SystemDefaultIcon />
                                    <span>System</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    onClick={toggleModal}
                    type="button"
                    className="  rounded-md  bg-secondary px-3 py-2 text-sm font-medium text-gray-300">
                    {modalOpen ? (
                        <Cancel01Icon className="text-white" />
                    ) : mode === 'light' ? (
                        <svg
                            id="theme-toggle-light-icon"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fillRule="evenodd"
                                clipRule="evenodd"></path>
                        </svg>
                    ) : (
                        <svg
                            id="theme-toggle-dark-icon"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </>
    )
}
function App() {
    return (
        <>
            <div className="h-[100vh] w-full overflow-auto scroll-smooth dark:bg-primary">
                <ThemeToggle />
                <Navbar></Navbar>
                <Home />
                <About />
                <Footer />
            </div>
        </>
    )
}

export default App

/////
// dummy elements

const About = () => {
    return (
        <>
            <hr />
            <div id="About" className="scroll-mt-20 p-6 dark:text-white">
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
const Home = () => {
    return (
        <>
            <section id="Home" className="Hero scroll-mt-16 p-6">
                <div className="text:black dark:text-white">
                    Here all things will come which are b/w nav and footer Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quis
                    repudiandae nemo accusamus dicta, rem consequuntur sequi,
                    facere laudantium itaque totam eum culpa quia necessitatibus
                    reiciendis, incidunt mollitia ipsa! Natus ex harum, omnis
                    voluptatum provident obcaecati ipsam itaque amet non illum
                    magnam! Laboriosam, delectus! Laudantium assumenda quaerat
                    blanditiis placeat id dolorum consequatur ad praesentium.
                    Dolores sed deserunt nobis vitae voluptates, quasi quod
                    dolor laborum! Laboriosam minus voluptatum odit veniam
                    voluptate maiores quam autem voluptatibus dolor blanditiis.
                    A iure eligendi atque quibusdam reiciendis repellendus ullam
                    iste architecto maxime dolorum dignissimos exercitationem,
                    quo recusandae reprehenderit. Et magni, tempora quisquam
                    natus nostrum veniam sunt minus nulla itaque animi sed aut.
                    Nostrum earum libero sed reprehenderit autem, cupiditate ea
                    sint dolore eos laborum alias molestiae voluptatum
                    necessitatibus excepturi quae repudiandae placeat tenetur
                    cumque non. Inventore aut perferendis, laudantium itaque,
                    dignissimos quod nam modi repudiandae dolorum debitis
                    praesentium tempora veritatis sequi. Ducimus tenetur,
                    perferendis molestias, vero facilis earum excepturi
                    dignissimos autem vel velit doloremque maxime corrupti odit
                    enim necessitatibus sunt illum, perspiciatis voluptatum
                    maiores culpa! Assumenda fuga soluta, odit sed aperiam
                    consequatur. Ipsum necessitatibus aliquid qui amet accusamus
                    rem placeat inventore maiores exercitationem, dolores at
                    voluptatem sint distinctio iure harum quo consectetur,
                    assumenda labore officiis officia tenetur neque. Nesciunt
                    fugiat labore quisquam cumque quo illum amet quam ea totam
                    odio ipsa quibusdam soluta, cupiditate impedit nobis
                    excepturi adipisci. Nemo quod quos ipsa. Alias inventore, a
                    quia ipsa eum error nam commodi recusandae omnis fugiat
                    ullam. Nihil unde itaque quidem illum eligendi explicabo
                    hic, molestiae assumenda aspernatur ipsa odit rerum.
                    Corrupti doloribus eius esse atque rerum, voluptatum saepe
                    quo sunt mollitia hic, magni perferendis assumenda quisquam
                    error, veniam ipsa fuga numquam aut. Quidem, blanditiis,
                    itaque modi dolore dolor molestiae ex laudantium a eveniet
                    doloribus est veniam fuga cupiditate molestias corporis
                    laboriosam suscipit beatae? Adipisci eveniet, commodi at
                    tenetur omnis veniam impedit vel eligendi nihil recusandae
                    dignissimos libero cumque minus? Officia repellendus amet
                    placeat quos ratione culpa incidunt enim id, minus, aliquid
                    quae, officiis dolore deleniti sapiente corporis vitae
                    beatae adipisci repudiandae ex reprehenderit eos facere?
                    Enim similique soluta quae quaerat quibusdam doloremque
                    beatae voluptate! Repudiandae, asperiores, cum expedita
                    eligendi sapiente id amet aliquam non facere dolores iste
                    omnis qui minima! Explicabo, nulla. Minus earum aperiam ipsa
                    tempore eaque, adipisci doloribus, alias iure tenetur ipsam
                    quae itaque quisquam, ad unde quia repellat repudiandae quas
                    sequi accusantium iusto doloremque corporis assumenda
                    obcaecati! Earum adipisci ex voluptatibus non fugiat enim
                    accusamus quaerat reiciendis deserunt. Dolor ex,
                    consequuntur recusandae perferendis itaque repellendus totam
                    aliquam rerum veniam temporibus? Dicta similique sint cum,
                    doloribus consequuntur voluptas perspiciatis nihil
                    distinctio tempore accusamus rerum nostrum sit culpa! Facere
                    quia, perferendis eaque harum nam cupiditate veritatis sed
                    amet officia accusantium possimus nisi ea assumenda
                    recusandae quam natus dolores, delectus reprehenderit
                    consectetur saepe distinctio molestiae asperiores commodi.
                    Nostrum aspernatur debitis optio qui nemo facilis cum,
                    veniam quos molestias voluptates quibusdam ducimus quae,
                    quo, sunt eligendi at. Fugit ullam eveniet, reprehenderit
                    sint incidunt, beatae omnis, delectus voluptate sapiente rem
                    praesentium exercitationem fugiat hic ducimus nulla
                    perferendis modi quaerat.
                </div>
            </section>
        </>
    )
}
