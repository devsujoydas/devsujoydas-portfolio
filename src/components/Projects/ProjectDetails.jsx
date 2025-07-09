import { motion } from "framer-motion";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

const ProjectDetails = () => {
  const { projectsData } = useContext(AuthContext);
  const { id } = useParams();

  const project = projectsData.find(proj => proj.id === id);

  if (!project) {
    return (
      <div className="text-white text-center mt-20 font-poppins">
        <p>Project not found.</p>
      </div>
    );
  }

  const {
    name,
    description,
    tech,
    image,
    links,
    projectDetails
  } = project;

  const clientCodeLink = links[1];
  const serverCodeLink = links.length > 2 ? links[2] : null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:mt-24 mt-14 font-poppins max-w-screen-2xl  mx-auto rounded-lg overflow-hidden px-4 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 my-10">

        {/* Left - Image */}
        <div className="lg:col-span-3 ">

          <h1 className="md:text-4xl md:hidden text-2xl text-white  font-bold mb-4">{name}</h1>

          <div className="relative md:h-full min-h-56 rounded-lg border border-zinc-700 ">
            <img 
              src={image}
              alt={name}
              className="absolute cursor-pointer top-0 w-full h-full object-cover object-top active:object-bottom md:active:object-top hover:object-bottom transition-all duration-1000 rounded-lg"
            />
          </div>
        </div>

        {/* Right - Details */}
        <div className="lg:col-span-2 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:block hidden font-montserrat font-bold mb-4">{name}</h1>
            <p className="md:mb-6 mb-3 text-sm md:text-lg">{description}</p>

            {/* Technologies */}
            <div className="mb-6">
              <h2 className="font-semibold md:text-xl mb-2">Technologies Used:</h2>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 border border-gray-500 text-xs px-2 md:px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details Sections */}
            {projectDetails && (
              <div className="space-y-6">

                {/* Purpose */}
                {projectDetails.purpose && (
                  <div>
                    <h3 className="font-semibold md:text-2xl mb-2">Purpose</h3>
                    <p className="text-gray-300 text-sm md:text-[16px]">{projectDetails.purpose}</p>
                  </div>
                )}

                {/* Features */}
                {projectDetails.features && (
                  <div>
                    <h3 className="font-semibold md:text-2xl mb-2">Features</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {projectDetails.features.map((feat, i) => (
                        <li className="text-sm md:text-[16px]" key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* UX Highlights */}
                {projectDetails.UX_highlights && (
                  <div>
                    <h3 className="font-semibold md:text-2xl mb-2">UX Highlights</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {projectDetails.UX_highlights.map((ux, i) => (
                        <li className="text-sm md:text-[16px]" key={i}>{ux}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Suggested Improvements */}
                {projectDetails.suggested_improvements && (
                  <div>
                    <h3 className="font-semibold md:text-2xl mb-2">Suggested Improvements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {projectDetails.suggested_improvements.map((imp, i) => (
                        <li className="text-sm md:text-[16px]" key={i}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Links Buttons */}
          <div className={`mt-8 grid ${!serverCodeLink.href == "" ? "grid-cols-3" : "grid-cols-2"}  gap-3`}>
            {/* Website Link */}
            {links[0] && (
              <a
                href={links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 md:px-6 py-3 rounded-md md:text-sm text-xs font-semibold"
              >
                <TbWorld className="md:text-2xl text-lg" /> Website
              </a>
            )}

            {/* Client Code */}
            {clientCodeLink && (
              <a
                href={clientCodeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 md:px-6 py-3 rounded-md md:text-sm text-xs font-semibold"
              >
                Client Code
              </a>
            )}

            {/* Server Code (conditionally render) */}
            {!serverCodeLink.href == "" && (
              <a
                href={serverCodeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-2 md:px-6 py-3 rounded-md md:text-sm text-xs font-semibold"
              >
                Server Code
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectDetails;
