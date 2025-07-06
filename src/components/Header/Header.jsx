
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Nav from "./Nav";
import FindWithMe from "../FindWithMe/FindWithMe";

const Header = () => {
  const [humbarger, setHumbarger] = useState(1)

  return (
    <header className="fixed w-full z-10 top-0 shadow shadow-[#2e2c2c] font-montserrat bg-[#212428] xl:px-0 px-3">

      <div className="text-[#B4BECC] max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-10 justify-between md:items-center  md:py-5 py-3">

        {/* Nav Logo & Humbarger Menu Close  */}
        <div className="flex justify-between items-center  md:px-0 px-3">
          <div className="relative overflow-hidden">
            <a href="/" className='flex items-center justify-center gap-2'>
              <img className='rounded-full w-12' src="https://avatars.githubusercontent.com/u/157239662?v=4" alt="" />
              <h1 className='text-xl '>Sujoy Das</h1>
            </a>
          </div>

          <div onClick={() => setHumbarger(!humbarger)} className="md:hidden block text-5xl text-secondary shadow-2xl">
            <LuMenu />
          </div>
        </div>

        {/* nav for large device */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* nav for small device */}
        <div className={humbarger ? 'md:hidden fixed z-20 top-0 -left-121 w-full h-screen grid grid-cols-5 opacity-0 duration-700 transition-all' : 'md:hidden opacity-100 fixed z-20 top-0 left-0 w-full h-screen grid grid-cols-5 duration-700 transition-all'} >
          
          <div className=" col-span-4 md:px-8 px-5 bg-[#15171a] space-y-5">
            
            <div className="flex justify-between items-center py-5 ">
              <div className="relative overflow-hidden">
                <a href="/" className='flex items-center justify-center gap-2'>
                  <img className='rounded-full md:w-15 w-12' src="https://avatars.githubusercontent.com/u/157239662?v=4" alt="" />
                  <h1 className='md:text-xl text-lg '>Sujoy Das</h1>
                </a>
              </div>
              <div onClick={() => setHumbarger(!humbarger)} className="md:hidden block text-4xl">
                <IoClose className="text-secondary shadow-2xl shadow-gray-200 bg-[#2e333a] rounded-full p-1" />
              </div>
            </div>

            <div>
              <p className="leading-7 font-poppins md:text-lg text-sm text-primary ">Explore the web development portfolio and blog of Mahmoud Nabhan. Discover projects, skills, and insights into modern web technologies.</p>
            </div>

            <hr className="text-gray-700 my-5" />
            
            <div onClick={() => setHumbarger(!humbarger)} className="flex flex-col gap-5">
              <Nav />
            </div>

            <hr className="text-gray-700 my-5" />
            
            <FindWithMe/>
            
          </div>

          <div onClick={() => setHumbarger(!humbarger)} className=" col-span-1 bg-[#000000b6]"></div>
        </div>

      </div>

    </header >
  )
}

export default Header