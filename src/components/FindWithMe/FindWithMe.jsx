import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const FindWithMe = () => {
    return (
        <div>
            <div className='space-y-5'>
                <h1 className='text-primary'>FIND WITH ME</h1>
                <div className='flex flex-wrap items-center gap-5 '>
                    <a target="_blank" href='https://facebook.com/devsujoydas' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <FiFacebook className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                    <a target="_blank" href='https://github.com/devsujoydas' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <FiGithub className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/devsujoydas' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <FaLinkedinIn className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                    <a target="_blank" href='http://wa.me/+8801303436299' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <BsWhatsapp className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                    <a target="_blank" href='https://www.instagram.com/devsujoydas' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <IoLogoInstagram className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                    <a target="_blank" href='https://www.youtube.com/@devsujoydas' className='Btn'>
                        <span className="svgContainer active:scale-95 transition-all">
                            <FiYoutube className="text-2xl " />
                        </span>
                        <span className="BG"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FindWithMe