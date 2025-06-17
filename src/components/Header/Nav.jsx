import React from 'react'

const Nav = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-10 gap-4 md:text-lg">
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#home">Home</a>
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#service">Services</a>
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#projects">Projects</a>
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#skills">Skills</a>
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#contact">Contact</a>
    </div>
  )
}

export default Nav