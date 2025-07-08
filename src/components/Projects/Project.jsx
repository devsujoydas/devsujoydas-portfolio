import React from 'react'
import { motion } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { memo } from "react";

const Project = ({ project }) => {

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                opacity: { duration: 0.5, ease: "easeInOut" },
            }}
            viewport={{ once: false }}
        >
            <div className='shadow-lg hover:shadow-xl overflow-hidden hover:-translate-y-1 rounded-2xl  uration-500 transition-all group'>



                <div className="bg-[#18181B] rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg flex h-full flex-row gap-10" >
                    {/* Project Img */}
                    <div className='relative md:h-96 h-48 mb-6 w-full overflow-hidden rounded-lg'>
                        <Link to={`/project/${project.id}`}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="absolute top-0 w-full h-full object-cover object-top   transition-all duration-1000"
                            />
                        </Link>
                    </div>

                    {/* Details */}
                    <div className='flex w-full h-full flex-col'>
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <p className="text-zinc-300 mb-4">{project.description}</p>
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <h1 className="font-semibold text-xl">Technologes: </h1>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

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
        </motion.div>
    )
}

export default memo(Project);
