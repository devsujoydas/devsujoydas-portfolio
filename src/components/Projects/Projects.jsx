import { motion } from "framer-motion";
import Project from "./Project";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Projects() {

  const { projectsData } = useContext(AuthContext);

  return (
    <section id="projects" className="text-white md:py-40 py-20  font-montserrat">
      <h1 className='text-secondary font-semibold text-center md:text-md text-sm'>
        Visit my project and keep your feedback
      </h1>
      <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>
        My Project
      </h1>

      <div className="max-w-screen-2xl mx-auto mt-10">
        {
          projectsData.length > 0 ?
            <div className="grid gap-3 lg:gap-5 overflow-hidden">
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.03,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
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
