
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    return (
        <div>
            <div className='shadow-xs shadow-zinc-300 hover:shadow-sm  hover:-translate-y-1 rounded-2xl  duration-500 transition-all group '>
                <div className={`bg-[#18181ba6] border border-zinc-600 h-fit rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg    gap-5`} >

                    <div className='relative h-[200px] md:h-[220px] border border-zinc-600 overflow-hidden rounded-lg'>
                        <Link to={`/project/${project.id}`}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="absolute top-0  object-top transition-all duration-1000"
                            />
                        </Link>
                    </div>
                    <div className='flex mt-5 h-full flex-col md:gap-2'>
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>

                        <p className="text-xs md:text-base text-gray-300 mb-1">
                            {project.description.slice(0, 82) + (project.description.length > 82 ? "..." : "")}
                        </p>

                        <div className="mb-2 flex flex-wrap items-center gap-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-zinc-900 border border-zinc-800 text-xs px-3 py-1 rounded-full"> {tech} </span>
                            ))}
                        </div>

                        <hr className="text-gray-700 pt-2" />

                        <div className="mt-auto  grid grid-cols-2 gap-3">
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

export default Project;
