
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { memo } from "react";

const Project = ({ project }) => {

    return (
        <div>
            <div className='shadow-lg hover:shadow-xl overflow-hidden hover:-translate-y-1 rounded-2xl  uration-500 transition-all group '>
                <div className={`bg-[#18181B] rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg flex h-full md:flex-row flex-col ${project.serial % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-5`} >
                    {/* Project Img */}
                    <div className='relative h-[200px] md:h-[460px] md:w-2/3 overflow-hidden rounded-lg'>
                        <Link to={`/project/${project.id}`}>
                            <img
                                src={project.image}
                                alt={project.name}
                                // className="absolute cursor-pointer top-0 w-full h-full object-cover object-top active:object-bottom md:active:object-top hover:object-bottom transition-all duration-1000    rounded-lg"
              
                                className="absolute top-0  object-cover object-top   transition-all duration-1000"
                            />
                        </Link>
                    </div>
                    {/* Details */}
                    <div className='flex md:w-1/3 h-full flex-col md:gap-3'>
                        <h3 className="md:text-2xl text-xl font-bold mb-2">{project.name}</h3>
                        <p className="text-zinc-300 mb-4">{project.description}</p>
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <h1 className="font-semibold md;text-xl">Technologes: </h1>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Features */}
                        {project?.projectDetails.features && (
                            <div className="md:block hidden">
                                <h3 className="font-semibold md:text-xl mb-2">Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {project?.projectDetails?.features?.map((feat, i) => (
                                        <li className="text-sm md:text-[16px]" key={i}>{feat}</li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        <hr className="text-gray-700 mt-5" />

                        <div className="mt-auto pt-4 grid grid-cols-2 gap-3">
                            <a target='_blank' href={project.links[0].href} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold" >
                                <TbWorld className='md:text-2xl text-sm' /> {project.links[0].label}
                            </a>
                            <Link to={`/project/${project.id}`} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-1 md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold" >
                                View Details
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Project);
