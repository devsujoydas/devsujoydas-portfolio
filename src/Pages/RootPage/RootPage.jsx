import { Outlet } from "react-router-dom"
import Loader from "../../components/Loader/Loader"


const RootPage = () => {
    return ( 
        <div className="relative   h-screen w-full ">
            <div className="fixed bg-black -z-10  bottom-0 left-0 right-0 top-0 ">
                <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_95%_105%_at_50%_0%,#000_70%,transparent_110%)]">

                </div>
            </div>
            {/* <div class="header finisher-header" style={{ width: "100%", height: "300px" }}></div> */}
            <Loader />
            <div className="">
                <Outlet />
            </div>

        </div>
    )
}

export default RootPage