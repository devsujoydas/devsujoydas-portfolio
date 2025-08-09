import StarBackground from "../StarBackground/StarBackground";
import loaderimg from "/images/Infinity Loader.gif"
import { useEffect, useState } from 'react';
const Loader = () => {


    return (
        <div>
            <div className='fixed inset-0 bg-[#2B2C2F] z-50 flex justify-center items-center'>
                {/* <StarBackground /> */}
                <img className="md:w-1/6 w-5/6" src={loaderimg} alt="" />
            </div>
        </div>
    )
}

export default Loader