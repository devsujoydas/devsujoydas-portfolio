import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Loader from "../../components/Loader/Loader" 


const RootPage = () => {
    return (
        <div className="">
            <Header />
            <Loader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootPage