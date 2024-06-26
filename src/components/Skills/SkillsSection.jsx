/* eslint-disable react/prop-types */

import { array1, array2, array3 } from './skillsData'
import '../../styles/carousel.css'

const SkillsRow = ({ skills, className }) => {
    return (
        <div className='logos relative flex gap-4 overflow-hidden whitespace-nowrap'>
            <div
                className={`logos-slide flex flex-row justify-center gap-4  ${className}`}>
                {skills.map((skill, index) => (
                    <div
                        className='flex w-[20vh] flex-col items-center justify-center rounded-md border bg-[#ee5f3830] p-4 pb-2   dark:border-gray-800 dark:bg-[#ffffff10]'
                        key={index}
                        title={skill.name}
                        style={{
                            borderColor: skill.color,
                            boxShadow: 'inset 0px -5px 0px 0px ' + skill.color,
                        }}>
                        <img
                            src={`/skillsIcons/${skill.name.toLowerCase().replace(/\..*$/, '')}.svg`}
                            alt={skill.name}
                            className='inline aspect-square w-full rounded-md  object-cover'
                            onError={(e) =>
                                (e.target.src = '/skillsIcons/defaultIcon.svg')
                            }
                        />
                        <p style={{ color: skill.color }}>{skill.name}</p>
                    </div>
                ))}
            </div>
            <div
                className={`logos-slide flex flex-row justify-center gap-4  ${className}`}>
                {skills.map((skill, index) => (
                    <div
                        className='flex w-[20vh] flex-col items-center justify-center gap-1 rounded-md border bg-[#ee5f3830] p-4 pb-2   dark:border-gray-800 dark:bg-[#ffffff10]'
                        key={index}
                        title={skill.name}
                        style={{
                            borderColor: skill.color,
                            boxShadow: 'inset 0px -5px 0px 0px ' + skill.color,
                        }}>
                        <img
                            src={`/skillsIcons/${skill.name.toLowerCase().replace(/\..*$/, '')}.svg`}
                            alt={skill.name}
                            className='inline aspect-square w-full rounded-md  object-cover'
                            loading='lazy'
                            onError={(e) =>
                                (e.target.src = '/skillsIcons/defaultIcon.svg')
                            }
                        />
                        <p className='' style={{ color: skill.color }}>
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function SkillsSection({ skillsRef }) {
    return (
        <section
            id='skills'
            ref={skillsRef}
            className='mb-8 min-h-[100dvh] w-full overflow-hidden pt-8'>
            <h2 className='relative  mb-8 text-center text-6xl font-semibold text-black dark:text-white'>
                Skills
            </h2>
            <div className=' logo-container flex w-full flex-col gap-4 space-y-4'>
                <SkillsRow skills={array1} className='left-slide' />
                <SkillsRow skills={array2} className='right-slide' />
                <SkillsRow skills={array3} className='left-slide' />
            </div>
        </section>
    )
}
