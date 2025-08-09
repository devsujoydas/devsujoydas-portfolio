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
      <div className="w-8xl 2xl:mx-auto md:mx-10 mx-3">
        <Hero />
        <hr className=" text-gray-600" />
        <Services />
        <hr className=" text-gray-600" />
        <Projects />
        <hr className=" text-gray-600" />
        <Skills />
        <hr className=" text-gray-600" />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home