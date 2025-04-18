import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
const Hero = () => {
    return (
        <div className='text-white max-w-7xl  font-montserrat  mx-auto pt-20 grid grid-cols-2'>
            <div className='col-span-1 space-y-20 flex justify-center flex-col'>
                <div className='space-y-5'>
                    <p className='text-primary'>Welcome to my digital space.</p>
                    <h1 className='text-7xl font-bold'>Hi, I’m <span className='text-secondary'>Sujoy Das</span></h1>
                    <h1 className='text-5xl font-bold'>a Software Developer.</h1>
                    <p className='text-gray-300 font-poppins leading-7'>Through my experience in web and mobile development, I've gained proficiency in full-stack development, delivering projects from concept to deployment with a strong emphasis on performance and scalability.</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-primary'>FIND WITH ME</h1>
                    <div className='flex items-center gap-5 '>
                        <a href='/' className='social-icons'> <FiFacebook /> </a>
                        <a href='/' className='social-icons'> <IoLogoInstagram /> </a>
                        <a href='/' className='social-icons'> <FiYoutube /> </a>
                        <a href='/' className='social-icons'> <FiGithub /> </a>
                    </div>
                    
                </div>
            </div>

            <div className='col-span-1  flex justify-center items-center '>
                <img className='w-3/4 ' src="/public/hero-img.png" alt="" />
            </div>
        </div>
    )
}

export default Hero