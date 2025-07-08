import Contact from "../../components/Contact/Contact"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Services from "../../components/Servicess/Services"
import Skills from "../../components/Skills/Skills"

const Home = () => {
  return (
    <div className="md:mx-0 mx-3">
      <Hero />
      <hr className="max-w-screen-2xl mx-auto text-gray-600" />
      <Services />
      <hr className="max-w-screen-2xl mx-auto text-gray-600" />
      <Projects />
      <hr className="max-w-screen-2xl mx-auto text-gray-600" />
      <Skills />
      <hr className="max-w-screen-2xl mx-auto text-gray-600" />
      <Contact />
    </div>
  )
}

export default Home