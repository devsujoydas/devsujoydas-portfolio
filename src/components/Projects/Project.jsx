import React from 'react'

import { TbWorld } from "react-icons/tb";
const Project = ({ project }) => {

    return (
        <div className='shadow-2xl shadow-[#2e2c2c] hover:shadow-[#3f3d3d] rounded-2xl hover:-translate-y-3 duration-500 transition-all'>

            <div className="bg-[#18181B] rounded-2xl overflow-hidden p-5 shadow-lg flex h-full flex-col" >

                <div>
                    <a target='_blank' href={project.links[0].href}>

                        <img src={project.image}
                            alt={project.name}
                            className="rounded-xl object-cover w-full  md:h-50 h-48 mb-6"
                        />
                    </a>
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    <h1 className="font-semibold text-xl">Technologes: </h1>
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <hr className="text-gray-700 mt-5" />
                <div className="mt-auto pt-4 grid grid-cols-2 gap-3">

                    <a target='_blank' href={project.links[0].href} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold" >
                        <TbWorld className='text-2xl ' /> {project.links[0].label}
                    </a>
                    <a target='_blank' href={project.links[1].href} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold" >
                        <TbWorld className='text-2xl ' /> {project.links[1].label}
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Project