import { motion } from "framer-motion";
import Project from "./Project";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Projects() {
  const { projectsData } = useContext(AuthContext);
  const [selected, setSelected] = useState("all");
  const [displayProjects, setdisplayProjects] = useState(projectsData);


  const mernProject = projectsData.filter(project => project.type == "mern")
  const frontendProject = projectsData.filter(project => project.type == "frontend")


  return (
    <section id="projects" className="text-white md:py-36 py-20  font-montserrat">
      <h1 className='text-secondary font-semibold text-center md:text-md text-sm'>
        Visit my project and keep your feedback
      </h1>
      <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>
        My Project
      </h1>



      <div className="flex gap-2 w-fit px-5 overflow-x-auto max-w-[300px] md:max-w-full mx-auto py-3 bg-white/5 backdrop-blur-md justify-start md:justify-center rounded-full border border-white/10 my-10">

        <button
          onClick={() => { setSelected("all"), setdisplayProjects(projectsData) }}
          className={`border border-zinc-500  px-3 py-1 rounded-full cursor-pointer transition-colors duration-300
            ${selected === "all" ? "bg-[#3c3c41]" : "bg-transparent hover:bg-[#3c3c41]"}`}
        >
          <span className="relative z-10">All</span>
        </button>

        <button
          onClick={() => { setSelected("frontend"), setdisplayProjects(frontendProject) }}
          className={`border border-zinc-500  px-3 py-1 rounded-full cursor-pointer transition-colors duration-300
            ${selected === "frontend" ? "bg-[#3c3c41]" : "bg-transparent hover:bg-[#3c3c41]"}`}
        >
          <span className="relative z-10">Frontend</span>
        </button>

        <button
          onClick={() => { setSelected("mern"), setdisplayProjects(mernProject) }}
          className={`border border-zinc-500  px-3 py-1 rounded-full cursor-pointer transition-colors duration-300
            ${selected === "mern" ? "bg-[#3c3c41]" : "bg-transparent hover:bg-[#3c3c41]"}`}
        >
          <span className="relative z-10">MERN</span>
        </button>

      </div>


      <div className="mt-10">
        {
          displayProjects.length > 0 ?
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-5 ">
              {displayProjects.map((project, idx) => (
                <motion.div
                  key={idx} viewport={{ once: true, amount: 0.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <Project project={project} />
                </motion.div>
              ))}
            </div>
            :
            <div>
              <h1 className="text-zinc-500 text-center">no project found</h1>
            </div>
        }
      </div>
    </section >
  );
}
