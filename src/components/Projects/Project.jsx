import React from 'react'

import { TbWorld } from "react-icons/tb";
const Project = ({ project }) => {
 
    return (
        <div className='hover:scale-105 transition-transform'>
            <div className="bg-[#18181B] rounded-2xl overflow-hidden border border-purple-800 p-6 shadow-lg flex flex-col" >

                <div>
                    <img src='https://i.imgur.com/1aEY3Cs.jpeg'
                        alt={project.name}
                        className="rounded-xl object-cover w-full  h-64 mb-6"
                    />
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
                <div className="mt-auto pt-4 grid grid-cols-3 gap-3">

                    <a href={project.links[0].href} className="bg-gray-600 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold" >
                        <TbWorld className='text-2xl ' /> {project.links[0].label}
                    </a>
                    <a href={project.links[1].href} className="bg-gray-600 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold" >
                        <TbWorld className='text-2xl ' /> {project.links[1].label}
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Project