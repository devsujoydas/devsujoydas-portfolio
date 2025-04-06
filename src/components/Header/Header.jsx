import { NavLink } from 'react-router-dom'
import logo from '../../../public/logo.png'

const Header = () => {
    return (
        <div className='bg-black '>
            <div className='max-w-7xl mx-auto md:px-0 px-5 py-10 flex justify-between items-center text-white'>
                <div><img src={logo} alt="" /></div>
                <div className='flex items-center gap-5 font-poppins'>
                    <NavLink className={"hover:border  px-6 py-1.5 rounded-full transition-all duration-500"} to={"/"}>Home</NavLink>
                    <NavLink className={"hover:border  px-6 py-1.5 rounded-full transition-all duration-500"} to={"/about"}>About</NavLink>
                    <NavLink className={"hover:border  px-6 py-1.5 rounded-full transition-all duration-500"} to={"/projects"}>Projects</NavLink>
                    <NavLink className={"hover:border  px-6 py-1.5 rounded-full transition-all duration-500"} to={"/contact"}>Contact</NavLink>
                </div>
                <div><button className='border px-4 py-2 rounded-full font-russo'>HIRE ME</button></div>
            </div>
        </div>
    )
}

export default Header;