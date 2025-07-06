import React from 'react'
import { motion } from "framer-motion";



const ProjectDetails = () => {
  return (
    <div className='mt-40 mb-10 rounded-2xl max-w-screen-2xl mx-auto border border-zinc-600 text-white
     min-h-[70vh] flex justify-center items-center'>


      <motion.div
      
   initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}


      >
        <img src="https://i.ibb.co/sJjZrNzk/nestmartbd-vercel-app.png" alt="hero" />
      </motion.div>

    </div>
  )
}

export default ProjectDetails