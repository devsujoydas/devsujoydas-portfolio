import { motion } from "framer-motion";
import Project from "./Project";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Projects() {

  const { projectsData } = useContext(AuthContext);

  return (
    <section id="projects" className="text-white md:py-40 py-20 px-4 font-montserrat">
      <h1 className='text-secondary font-semibold text-center md:text-md text-sm'>
        Visit my project and keep your feedback
      </h1>
      <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>
        My Project
      </h1>

      <div className="max-w-screen-2xl mx-auto mt-10">
        {
          projectsData.length > 0 ?
            <div className="grid gap-3 lg:gap-5">
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ x: idx % 2 === 0 ? 100 : -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 0.6,
                    delay: idx * 0.05 // Optional: stagger effect
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <Project project={project}   />
                </motion.div>
              ))}
            </div>
            :
            <div>
              <h1 className="text-zinc-500 text-center">no project found</h1>
            </div>
        }
      </div>
    </section>
  );
}
