import Contact from "../../components/Contact/Contact"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Services from "../../components/Servicess/Services"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home