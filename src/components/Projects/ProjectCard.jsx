/* eslint-disable react/prop-types */
import { useState } from 'react'
import LinkIcon from '../icons/LinkIcon'
import GitHubIcon from '../icons/GithubIcon'

export default function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggle = () => {
        setIsExpanded(!isExpanded)
    }
    const numberOfTechVisible = 6
    const visibleTechStack = isExpanded
        ? project.stack
        : project.stack.slice(0, numberOfTechVisible)

    return (
        <div className='relative mx-auto h-full w-full min-w-60 max-w-[28rem] p-4 px-4'>
            <div className='background-gradient overflow-hidden rounded-lg bg-black p-2 shadow-sm shadow-[#00ffb1]'>
                <div className='mb-1 flex flex-nowrap items-start justify-between p-2'>
                    <div>
                        <h3 className='text-xl font-bold text-white'>
                            {project.title}
                        </h3>
                        <span className='text-xs text-gray-700'>
                            {project.duration}
                        </span>
                    </div>
                    <div className='flex items-center justify-center gap-2 rounded'>
                        <a
                            href={project.githubLink}
                            className='rounded p-1 hover:bg-[#79797920] focus:outline-none focus:ring-2 focus:ring-secondary'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`GitHub repository for ${project.title}`}>
                            <GitHubIcon className='text-gray-500 hover:text-secondary' />
                        </a>
                        <a
                            href={project.demoLink}
                            className='rounded p-1 hover:bg-[#79797920] focus:outline-none focus:ring-2 focus:ring-secondary'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`Live demo of ${project.title}`}>
                            <LinkIcon className='text-gray-500 hover:text-secondary' />
                        </a>
                    </div>
                </div>
                <div className='w-full overflow-hidden rounded-md'>
                    <img
                        className=' w-full object-cover'
                        src={project.img}
                        alt={`Screenshot of ${project.title}`}
                    />
                </div>
                <div className='p-2 px-0'>
                    <p className='text-sm text-gray-500'>
                        {project.description}
                    </p>
                    <div className='mt-3 flex flex-row flex-wrap justify-start gap-2'>
                        {visibleTechStack.map((tech, index) => (
                            <img
                                key={index}
                                src={`/skillsIcons/${tech.toLowerCase()}.svg`}
                                alt={tech}
                                title={tech}
                                className='h-8 w-8 rounded-md bg-[#007aff20] p-1 text-sm font-semibold text-gray-300'
                                onError={(e) => {
                                    e.target.onerror = null
                                    e.target.src = `/skillsIcons/defaultIcon.svg`
                                }}
                            />
                        ))}
                        {project.stack.length > numberOfTechVisible && (
                            <button
                                onClick={handleToggle}
                                className='inline-block rounded-full bg-[#80808031] px-3 py-1 text-sm font-semibold text-gray-300 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary'>
                                {isExpanded ? 'Less' : 'More'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
