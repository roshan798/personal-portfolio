/* eslint-disable react/prop-types */
import LinkIcon from '../icons/LinkIcon'
import GitHubIcon from '../icons/Skill/GithubIcon'

export default function ProjectCard({ project }) {
    return (
        <div className="relative mx-auto h-full w-full min-w-60 max-w-[28rem]  p-4 px-4">
            <div className="overflow-hidden rounded-lg bg-black p-2 shadow-lg">
                <div className=" mb-1 flex flex-nowrap items-center justify-between p-2">
                    <h3 className="text-xl font-bold text-white">
                        {project.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 rounded">
                        <a
                            href={project.demoLink}
                            className="rounded  p-1 hover:bg-[#79797920]">
                            {/* <img
                                src={gitHubIcon}
                                className=" hover:text-secondary"
                            /> */}
                            <GitHubIcon className="text-gray-500 hover:text-secondary" />
                        </a>
                        <a
                            href={project.demoLink}
                            className="rounded  p-1 hover:bg-[#79797920]">
                            <LinkIcon className="text-gray-500 hover:text-secondary" />
                        </a>
                    </div>
                </div>
                <div className=" w-full overflow-hidden rounded-md">
                    <img
                        className="aspect-video h-[175px] w-full object-cover"
                        src={project.img}
                        alt={project.title}
                    />
                </div>
                <div className="p-4">
                    <p className="text-sm text-gray-400 ">
                        {project.description}
                    </p>
                    <div className="mt-4">
                        {project.stack.map((tech, index) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
