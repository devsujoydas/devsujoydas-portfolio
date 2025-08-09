import { Outlet } from "react-router-dom"
import Loader from "../../components/Loader/Loader"
import StarBackground from "../../components/StarBackground/StarBackground"
import StarBackground1 from "../../components/StarBackground/StarBackground1"
import StarBackground2 from "../../components/StarBackground/StarBackground2"
import StarBackground3 from "../../components/StarBackground/StarBackground3"
import StarBackground4 from "../../components/StarBackground/StarBackground4"
import GridBackground from "../../components/StarBackground/GridBackground"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { div } from "framer-motion/client"


const RootPage = () => {
    const { loading, setLoading } = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
 


    return (
        <div className="relative   h-screen w-full " >
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black -z-50"></div>
            <GridBackground />
            <StarBackground1 />
            {loading ?
                // <Loader />
                <div className="h-screen flex justify-center items-center">
                    <div className="w-14 h-14 border-y-4 border-white rounded-full animate-spin"></div>
                </div>
                :
                <Outlet />}

        </div >
    )
}

export default RootPage