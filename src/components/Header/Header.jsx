import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 border font-montserrat bg-[#212428]">
      <div className="text-[#B4BECC] max-w-7xl mx-auto flex justify-between items-center  py-7">

        <div className="relative overflow-hidden">
          <a href="/" className='flex items-center justify-center gap-2'>
            <img className='rounded-full w-15' src="https://avatars.githubusercontent.com/u/157239662?v=4" alt="" />
            <h1 className='text-xl '>Sujoy Das</h1>
          </a>
        </div>

        <div className="">
          <div className="">

            <nav id="" className="">
              <ul className="flex justify-center items-center  gap-10 text-lg">
                <li className=""><a className="" href="">Home</a></li>
                <li className=""><a className="" href="">Services</a></li>
                <li className=""><a className="" href="">Portfolio</a></li>
                <li className=""><a className="" href="">Resume</a></li>
                <li className=""><a className="" href="">Contact</a></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header