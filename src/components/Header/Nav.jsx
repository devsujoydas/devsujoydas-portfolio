import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-10 gap-4 md:text-lg">
      <NavLink className="hover:text-[#FF014F] duration-500 transition-all" to={"/#home"}>Home</NavLink >
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#service">Services</a>
      <NavLink className="hover:text-[#FF014F] duration-500 transition-all" to={"/projects"}>Projects</NavLink >
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#skills">Skills</a>
      <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#contact">Contact</a>
    </div>
  )
}

export default Nav