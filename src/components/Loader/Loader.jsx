import loaderimg from "/images/Infinity Loader.gif"
import { useEffect, useState } from 'react';
const Loader = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer); // cleanup
    }, []);

    if (!loading) return null;

    return (
        <div>
            <div className='fixed inset-0 bg-[#2B2C2F] z-50 flex justify-center items-center'>
                <img className="md:w-1/6 w-5/6" src={loaderimg} alt="" />
            </div>
        </div>
    )
}

export default Loader