import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Services from "../../components/Servicess/Services"
import Skills from "../../components/Skills/Skills"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="">

        <div className="w-primary"><Hero /></div>

        <hr className=" text-gray-600" />

        <div className="w-primary"><Services /></div>

        <hr className=" text-gray-600" />

        <div className="w-primary"><Projects /></div>

        <hr className=" text-gray-600" />

        <div className="w-primary"><Skills /></div>

        <hr className=" text-gray-600" />

        <div className="w-primary"><Contact /></div>

        <hr className=" text-gray-600" />
      </div>
      <Footer />
    </div>
  )
}

export default Home