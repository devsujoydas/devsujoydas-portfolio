import React from 'react'

const Header = () => {
  return (
    <header className="">
      <div className="text-white max-w-7xl mx-auto flex justify-between items-center border py-10">

        <div className="">
          <a href="/">
            <h1 className='font-poppins font-bold text-3xl'>SUJOY</h1>
          </a>
        </div>

        <div className="">
          <div className="">

            <nav id="" className="">
              <ul className="flex justify-center items-center gap-20">
                <li className=""><a className="" href="">Home</a></li>
                <li className=""><a className="" href="">Services</a></li>
                <li className=""><a className="" href="">Portfolio</a></li>

                <li className=""><a className="" href="">Privacy Policy</a></li>
                <li className=""><a className="" href="">Terms and Conditions</a></li>

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