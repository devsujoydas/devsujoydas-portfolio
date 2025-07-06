
import { FaCode } from "react-icons/fa6";
const Services = () => {
  const servicelist = [
    {
      "img": "",
      "name": "Web Development",
      "description": "Modern, responsive websites crafted with HTML, CSS, JavaScript, and React."
    },
    {
      "img": "",
      "name": "Backend Development",
      "description": "Server-side logic using Node.js, Express, and MongoDB for dynamic applications."
    },
    {
      "img": "",
      "name": "E-Commerce Solutions",
      "description": "Custom online stores with cart, payment, and user management features."
    },
    {
      "img": "",
      "name": "UI/UX Design",
      "description": "Clean, user-friendly designs focusing on experience and modern interface trends."
    },
    {
      "img": "",
      "name": "Progressive Web Apps",
      "description": "Installable, offline-capable web apps that feel like native mobile apps."
    },
    {
      "img": "",
      "name": "Real-Time Web Application",
      "description": "Live updates with Socket.io for chat, notifications, and collaborative tools."
    }
  ]


  return (
    <div id="service" className='text-primary max-w-screen-2xl md:px-0 px-5 mx-auto font-montserrat md:py-45 py-20' >

      <h1 className='text-secondary font-semibold'>FEATURES</h1>
      <h1 className='text-4xl md:text-7xl text-primary font-bold mt-5'>Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10 mt-10">
        {servicelist.map((service, idx) => (
          <div key={idx} className="md:p-12 p-9 rounded-3xl space-y-4 shadow-2xl shadow-[#00000098] hover:shadow-[#201d1d] active:shadow-[#201d1d] hover:-translate-y-3 active:-translate-y-3 duration-500 transition-all ">
            <FaCode className="text-4xl md:text-5xl" />
            <h1 className="text-xl md:text-2xl font-semibold ">{service.name}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services