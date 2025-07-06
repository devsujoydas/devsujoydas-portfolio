import React from "react";
import Typed from 'typed.js';

import { IoMdDownload } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

import heroImg from '/images/hero-img.png'
import './Hero.css'
import FindWithMe from "../FindWithMe/FindWithMe";

import { motion } from "framer-motion";

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
        <div id='home' className='text-white max-w-screen-2xl font-montserrat mx-auto lg:px-0 px-5 md:pt-40 pt-28 pb-10 gap-5 flex lg:flex-row flex-col-reverse'>

            {/* Hero Text  */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='md:space-y-12 lg:w-full space-y-4 flex justify-center flex-col'
            >

                {/* about info  */}
                <div className='md:space-y-5 space-y-2'>
                    
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-primary'
                    >
                        Welcome to my digital space.
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='text-3xl md:text-7xl font-bold'
                    >
                        Hi, I’m <span className='text-secondary'>Sujoy Das</span>
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='text-2xl md:text-5xl font-bold'
                    >
                        a <span ref={el}></span>
                    </motion.h1>

                    <motion.p
                       initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className='text-gray-300 font-poppins md:leading-6 leading-5 md:text-sm text-xs'
                    >
                       Passionate Frontend Developer skilled in React.js, Tailwind CSS, and Firebase. Self-taught through YouTube and free resources, building real projects without formal courses. Now confident in Node.js, Express, MongoDB, and EJS for backend development. Aiming to deliver smooth and scalable full-stack solutions.

                    </motion.p>
                </div>

                {/* hire and resume btn  */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="md:text-xl flex items-center gap-5"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="button active:scale-95 duration-500 transition-all"
                    >
                        <span className="button__icon-wrapper">
                            <GoArrowUpRight className="button__icon-svg" />
                            <GoArrowUpRight className="button__icon-svg button__icon-svg--copy" />
                        </span>
                        Hire Me
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://drive.google.com/file/d/1tRiK-GdxwROqLvnL6kyDaafJIyZfPJI5/view?usp=sharing"
                        target="_blank"
                        className="button active:scale-95 duration-500 transition-all"
                    >
                        <span className="button__icon-wrapper">
                            <IoMdDownload className="button__icon-svg" />
                            <IoMdDownload className="button__icon-svg button__icon-svg--copy" />
                        </span>
                        Resume
                    </motion.a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <FindWithMe />
                </motion.div>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='relative flex justify-center items-center'
            >
                <div className="box-shadow rounded-3xl absolute bottom-0 h-9/12 w-5/6 -z-10"></div>
                <img className='md:w-5/6 w-4/6' src={heroImg} alt="" />
            </motion.div>

        </div>
    )
}

export default Hero;
