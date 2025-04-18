import React from 'react'

const Hero = () => {
    return (
        <div className='text-white max-w-7xl font-montserrat  mx-auto py-20 grid grid-cols-2'>
            <div className='col-span-1 border '>
                <div className='space-y-5'>
                    <p className='text-primary'>Welcome to my digital space.</p>
                    <h1 className='text-7xl font-bold'>Hi, I’m <span className='text-secondary'>Sujoy Das</span></h1>
                    <h1 className='text-5xl font-bold'>a Software Developer.</h1>
                    <p className='text-gray-300 font-poppins leading-7'>Through my experience in web and mobile development, I've gained proficiency in full-stack development, delivering projects from concept to deployment with a strong emphasis on performance and scalability.</p>
                </div>
                <div>
                    <h1 className='text-primary'>FIND WITH ME</h1>
                    <div>
                        
                    </div>
                </div>
            </div>

            <div className='col-span-1 border flex justify-center items-center '>
                <img className='w-96 mt-10' src="https://mahmoudnabhan.com/assets/img/me.png" alt="" />
            </div>
        </div>
    )
}

export default Hero