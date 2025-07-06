
import React from "react";
import Typed from 'typed.js';

import { IoMdDownload } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

import heroImg from '/images/hero-img.png'
import './Hero.css'
import FindWithMe from "../FindWithMe/FindWithMe";

const Hero = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Software Developer.',
                'Web Developer.',
                'Frontend Developer.',
                'Ai Content Creator.',
            ],
            typeSpeed: 40,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='home' className='text-white max-w-7xl font-montserrat  md:mx-auto lg:px-0 px-5 md:pt-40 pt-28 pb-10 gap-5 flex lg:flex-row flex-col-reverse'>
            
            {/* Hero Text  */}
            <div className='md:space-y-12 lg:w-full space-y-4 flex justify-center flex-col'>

                {/* about info  */}
                <div className='md:space-y-5 space-y-2'>
                    <p className='text-primary'>Welcome to my digital space.</p>
                    <h1 className='text-3xl md:text-7xl font-bold'>Hi, I’m <span className='text-secondary'>Sujoy Das</span></h1>
                    <h1 className='text-2xl md:text-5xl font-bold'>a <span ref={el}></span></h1>
                    <p className='text-gray-300 font-poppins md:leading-6 leading-5 md:text-md text-xs'>Passionate Frontend Developer with hands-on experience in building responsive and interactive web applications using React.js, Tailwind CSS, and Firebase. Currently expanding skills in backend development with Node.js, Express.js, MongoDB, and EJS to become a proficient Full-Stack Developer. Committed to delivering seamless and scalable user experiences.</p>
                </div>


                {/* hire and resume btn  */}
                <div className="md:text-xl flex items-center gap-5">
                    <a href="#contact" className="button active:scale-95 duration-500 transition-all ">
                        <span className="button__icon-wrapper">
                            <GoArrowUpRight className="button__icon-svg" />
                            <GoArrowUpRight className="button__icon-svg button__icon-svg--copy" />
                        </span>
                        Hire Me
                    </a>
                    <a href="https://drive.google.com/file/d/1tRiK-GdxwROqLvnL6kyDaafJIyZfPJI5/view?usp=sharing"
                        target="_blank"
                        className="button active:scale-95 duration-500 transition-all ">
                        <span className="button__icon-wrapper">
                            <IoMdDownload className="button__icon-svg" />
                            <IoMdDownload className="button__icon-svg button__icon-svg--copy" />
                        </span>
                        Resume
                    </a>
                </div>


                {/* Social Icons  */}
                <FindWithMe />
            </div>

            {/* Hero Image Section */}
            <div className='relative  flex justify-center items-center '>
                <div className="box-shadow rounded-3xl absolute bottom-0 h-9/12 w-5/6 -z-10"></div>
                <img className='md:w-5/6 w-4/6' src={heroImg} alt="" />
            </div>

        </div>
    )
}

export default Hero