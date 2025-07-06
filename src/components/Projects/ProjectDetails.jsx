import { motion } from "framer-motion";


const ProjectDetails = () => {
  return (
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} >
      <div className='mt-35 mb-10 rounded-2xl max-w-screen-2xl mx-auto border border-zinc-600 text-white
     min-h-screen  flex justify-center items-center'>
 
      </div>
    </motion.div>
  )
}

export default ProjectDetails