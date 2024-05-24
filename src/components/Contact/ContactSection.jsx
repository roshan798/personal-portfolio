export default function ContactSection({ contactRef }) {
    return (
        <section
            ref={contactRef}
            id='contact'
            className='mb-8 min-h-[100dvh] w-full overflow-hidden pt-8'>
            <h2 className='relative  mb-8 text-center text-6xl font-semibold text-black dark:text-white'>
                Contact
            </h2>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
