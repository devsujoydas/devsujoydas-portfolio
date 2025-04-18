

import { GrAndroid } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { LiaDesktopSolid } from "react-icons/lia";
const Services = () => {
  return (
    <div className='text-primary max-w-7xl mx-auto font-montserrat my-20'>

      <h1 className='text-secondary font-semibold'>FEATURES</h1>
      <h1 className='text-7xl text-primary font-bold mt-5'>Services</h1>

      <div className="grid md:grid-cols-3 gap-10 mt-10">

        <div className="p-12 rounded-3xl space-y-4 shadow-2xl shadow-[#000000] hover:-translate-y-3 duration-500 transition-all ">
          <FaCode className="text-5xl" />
          <h1 className="text-2xl font-semibold ">Web Development</h1>
          <p>Creating responsive and user-friendly websites using modern technologies.</p>
        </div>

        <div className="p-12 rounded-3xl space-y-4 shadow-2xl shadow-[#000000] hover:-translate-y-3 duration-500 transition-all ">
          <GrAndroid className="text-5xl" />
          <h1 className="text-2xl font-semibold ">Mobile App Development</h1>
          <p>Building cross-platform mobile applications for iOS and Android.</p>
        </div>

        <div className="p-12 rounded-3xl space-y-4 shadow-2xl shadow-[#000000] hover:-translate-y-3 duration-500 transition-all ">
          <FaCode className="text-5xl" />
          <h1 className="text-2xl font-semibold ">Software Consulting</h1>
          <p>Providing expert guidance and solutions for software development projects.</p>
        </div>
        
        
        




      </div>
    </div>
  )
}

export default Services