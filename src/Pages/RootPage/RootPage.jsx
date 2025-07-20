import { Outlet } from "react-router-dom"
import Loader from "../../components/Loader/Loader"


const RootPage = () => {
    return (
        <div className="">

            <Loader />
            <Outlet />

        </div>
    )
}

export default RootPage