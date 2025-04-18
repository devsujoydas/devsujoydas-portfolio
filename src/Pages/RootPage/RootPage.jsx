import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const RootPage = () => {
    return (
        <div className="bg-[#212428]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootPage