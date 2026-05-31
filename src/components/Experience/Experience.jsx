import { experiences } from './data'

// const TYPE_LABELS = {
//   "full-time": "Full-time",
//   internship: "Internship",
//   freelance: "Freelance",
//   contract: "Contract",
// };

const LOC_LABELS = {
    onsite: 'On-site',
    remote: 'Remote',
    hybrid: 'Hybrid',
}

// eslint-disable-next-line react/prop-types
export default function Experience({ experienceRef }) {
    const visible = experiences
        .filter((e) => e.show)
        .sort((a, b) => {
            // "Present" roles first, then by startDate descending
            if (a.endDate === 'Present') return -1
            if (b.endDate === 'Present') return 1
            return 0
        })

    if (visible.length === 0) return null

    return (
        <section
            id='experience'
            className='background-grid mb-12 min-h-[100dvh]'
            ref={experienceRef}>
            <div className='mx-auto'>
                <h2 className='z-1 relative mb-8 text-center text-6xl font-semibold text-black dark:text-white'>
                    Experience
                </h2>
                <div className='mt-4 '>
                    <div className='w-full '>
                        <div className='mx-auto max-w-4xl'>
                            <div className='flex flex-col gap-6'>
                                {visible.map((exp) => (
                                    <article
                                        key={exp.id}
                                        className='group relative'>
                                        {/* Featured card with left accent */}
                                        <div className='card-base card-hover overflow-hidden'>
                                            {/* Top accent bar */}
                                            <div className='from-accent-secondary absolute bottom-0 left-0 h-[98%] w-1 rounded-l-xl bg-gradient-to-b to-transparent' />

                                            <div className='pb-6 pl-7 pr-6 pt-6'>
                                                {/* Header row */}
                                                <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                                                    <div className='flex flex-col gap-1'>
                                                        {/* Company */}
                                                        <div className='flex items-center gap-2'>
                                                            {exp.companyUrl ? (
                                                                <a
                                                                    href={
                                                                        exp.companyUrl
                                                                    }
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                    className='text-xl font-bold  transition-colors duration-200 dark:text-white '>
                                                                    {
                                                                        exp.company
                                                                    }
                                                                </a>
                                                            ) : (
                                                                <h3 className='text-xl font-bold text-secondary dark:text-white'>
                                                                    {
                                                                        exp.company
                                                                    }
                                                                </h3>
                                                            )}
                                                            {exp.endDate ===
                                                                'Present' && (
                                                                <span className='flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/5 px-2 py-0.5 font-mono text-[10px] text-green-400'>
                                                                    <span className='h-1 w-1 animate-pulse rounded-full bg-green-400' />
                                                                    Current
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Role */}
                                                        <p className='font-body  font-medium text-secondary '>
                                                            {exp.role}
                                                        </p>
                                                    </div>

                                                    {/* Meta badges */}
                                                    <div className='flex shrink-0 flex-wrap gap-2'>
                                                        <span className='text-text-secondary border-border-subtle bg-border-subtle/30 whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-xs dark:border-gray-600 dark:bg-white/5 dark:text-gray-300'>
                                                            {exp.startDate} —{' '}
                                                            {exp.endDate}
                                                        </span>
                                                        <span className='text-text-muted border-border-subtle bg-border-subtle/20 rounded-md border px-2.5 py-1 font-mono text-xs dark:border-gray-600 dark:bg-white/5 dark:text-gray-400'>
                                                            {exp.location}
                                                        </span>
                                                        <span className='text-text-muted border-border-subtle bg-border-subtle/20 rounded-md border px-2.5 py-1 font-mono text-xs dark:border-gray-600 dark:bg-white/5 dark:text-gray-400'>
                                                            {
                                                                LOC_LABELS[
                                                                    exp
                                                                        .locationType
                                                                ]
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Summary */}
                                                <p className='text-text-secondary font-body mb-5 text-sm leading-relaxed dark:text-gray-300'>
                                                    {exp.description}
                                                </p>

                                                {/* Bullet points */}
                                                <ul className='mb-6 flex flex-col gap-3'>
                                                    {exp.bullets.map(
                                                        (bullet, bi) => (
                                                            <li
                                                                key={bi}
                                                                className='flex items-start gap-3'>
                                                                <span className='text-accent-cyan mt-1 shrink-0 select-none font-mono text-xs dark:text-cyan-300'>
                                                                    ▹
                                                                </span>
                                                                <span
                                                                    className='bullet-content font-body text-text-secondary text-sm leading-relaxed dark:text-gray-300'
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: bullet,
                                                                    }}
                                                                />
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                {/* Tech stack */}
                                                <div className='border-border-subtle border-t pt-4 dark:border-gray-600'>
                                                    <p className='text-text-muted mb-3 font-mono text-[10px] uppercase tracking-widest dark:text-gray-400'>
                                                        Tech Stack
                                                    </p>
                                                    <div className='flex flex-wrap gap-2 '>
                                                        {exp.techStack.map(
                                                            (tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className='rounded-md bg-[#007aff20] p-1 text-xs font-semibold text-gray-300'>
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Future timeline hint */}
                            {visible.length === 1 && (
                                <div className='mt-8 max-w-3xl'>
                                    <div className='flex items-center gap-4'>
                                        <div className='bg-border-subtle h-px flex-1 dark:bg-gray-600' />
                                        <p className='text-text-muted whitespace-nowrap font-mono text-xs dark:text-gray-400'>
                                            More to come
                                        </p>
                                        <div className='bg-border-subtle h-px flex-1 dark:bg-gray-600' />
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* </SectionWrapper> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
