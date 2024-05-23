/* eslint-disable react/prop-types */

import { skills, skills2 } from './skillsData'

const SkillsRow = ({ skills, className }) => {
    // console.log(skills);
    return (
        <div className="logos relative flex gap-4 overflow-hidden whitespace-nowrap">
            <div
                className={`logos-slide flex flex-row justify-center gap-4  ${className}`}>
                {skills.map((skill, index) => (
                    <div
                        className="flex w-[20vh] items-center justify-center rounded-md border bg-[#ee5f3830] p-4  dark:border-gray-800 dark:bg-[#ffffff10]"
                        key={index}
                        title={skill.name}
                        style={{
                            borderColor: skill.color,
                            boxShadow: 'inset 0px -5px 0px 0px ' + skill.color,
                        }}>
                        <img
                            src={`/skillsIcons/${skill.name.toLowerCase().replace(/\..*$/, '')}.svg`}
                            alt={skill.name}
                            className="inline aspect-square w-full rounded-md  object-cover"
                            onError={(e) =>
                                (e.target.src = '/skillsIcons/defaultIcon.svg')
                            }
                        />
                    </div>
                ))}
            </div>
            <div
                className={`logos-slide flex flex-row justify-center gap-4  ${className}`}>
                {skills.map((skill, index) => (
                    <div
                        className="flex w-[20vh] items-center justify-center rounded-md border bg-[#ee5f3830] p-4  dark:border-gray-800 dark:bg-[#ffffff10]"
                        key={index}
                        title={skill.name}
                        style={{
                            boxShadow: 'inset 0px -5px 0px 0px ' + skill.color,
                        }}>
                        <img
                            src={`/skillsIcons/${skill.name.toLowerCase().replace(/\..*$/, '')}.svg`}
                            alt={skill.name}
                            className="inline aspect-square w-full rounded-md  object-cover"
                            onError={(e) =>
                                (e.target.src = '/skillsIcons/defaultIcon.svg')
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function SkillsSection({ skillsRef }) {
    return (
        <section
            id="skills"
            ref={skillsRef}
            className="mb-8 min-h-[100dvh] w-full overflow-hidden pt-8">
            <h2 className="relative  mb-8 text-center text-6xl font-semibold text-black dark:text-white">
                Skills
            </h2>
            <div className=" logo-container flex w-full flex-col gap-4 space-y-4">
                <SkillsRow skills={skills} className="left-slide" />
                <SkillsRow skills={skills2} className="right-slide" />
                <SkillsRow
                    skills={skills.slice().reverse()}
                    className="left-slide"
                />
            </div>
        </section>
    )
}
