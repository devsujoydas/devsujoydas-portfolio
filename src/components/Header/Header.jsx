import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Nav from "./Nav";
import FindWithMe from "../FindWithMe/FindWithMe";

const Header = () => {
  const [humbarger, setHumbarger] = useState(true);

  return (
    <header className="fixed bg-[#0000007e] backdrop-blur-sm z-50 top-0 left-0 right-0 shadow font-montserrat  border-b border-b-zinc-800">

      <div className="text-[#B4BECC] w-primary flex flex-col md:flex-row gap-10 justify-between md:items-center md:py-4 py-3">
 
        <div className="flex w-full lg:w-fit  justify-between items-center  md:py-0 py-1 ">

          <a href="/" className="flex items-center gap-3">
            <div className="relative  border border-zinc-700 p-[3px] w-11 h-11 rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/157239662?v=4"
                alt="Logo"
                className="w-full h-full scale-125 rounded-full border-4 border-black bg-black"
              />
            </div>
            <h1 className="font-poppins md:text-[16px] text-xs">devsujoydas@gmail.com</h1>
          </a>


          {/* Menu Button for small devices */}
          <div onClick={() => setHumbarger(!humbarger)} className=" lg:hidden block text-3xl text-secondary">
            <LuMenu />
          </div>
        </div>

        {/* Nav for large screen */}
        <div className="hidden lg:flex justify-end ">
          <Nav />
        </div>

        {/* Nav for mobile */}
        <div className={`md:hidden fixed z-40 top-0 ${humbarger ? "-left-full opacity-0" : "left-0 opacity-100"} w-full h-screen grid grid-cols-5 duration-700 transition-all`}>

          {/* Sidebar Menu */}
          <div className="col-span-4 bg-[#15171a] px-5 py-5 space-y-5">
            <div className="flex justify-between items-center">
              <a href="/" className='flex items-center gap-2'>
                <img className='rounded-full w-12' src="https://avatars.githubusercontent.com/u/157239662?v=4" alt="Logo" />
                <h1 className='text-lg'>Sujoy Das</h1>
              </a>
              <div onClick={() => setHumbarger(true)} className="text-4xl">
                <IoClose className="text-secondary bg-[#2e333a] rounded-full p-1" />
              </div>
            </div>

            <p className="text-primary text-sm leading-6 font-poppins">
              Explore the portfolio of Sujoy Das. Discover projects, skills & modern web development.
            </p>

            <hr className="border-gray-700" />

            <div onClick={() => setHumbarger(true)} className="flex flex-col gap-5">
              <Nav />
            </div>

            <hr className="border-gray-700" />

            <FindWithMe />
          </div>

          {/* Backdrop */}
          <div onClick={() => setHumbarger(true)} className="col-span-1 bg-[#000000b6]" />
        </div>

      </div>
    </header>
  );
};

export default Header;
