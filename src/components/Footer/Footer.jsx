import Nav from "../Header/Nav"

const Footer = () => {
  return (
    <div className="relative py-10   px-5 bg-[#050709] font-montserrat">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center">
        <a href="/">
          <h1 className="md:text-5xl text-2xl font-semibold font-montserrat  text-white">SUJOY DAS</h1>
        </a>
        <div className="flex flex-wrap gap-3 md:gap-5 text-white  my-5">
          <ul className="flex md:flex-row  justify-center md:items-center flex-wrap md:gap-10 gap-5 md:text-lg">
            <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#hero">Home</a>
            <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#service">Services</a>
            <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#projects">Projects</a>
            <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#skills">Skills</a>
            <a className="hover:text-[#FF014F] duration-500 transition-all" target='_blank' href="https://drive.google.com/file/d/12yAP7YIjhRR7SZVXFcGI3tg3Cjt80Pse/view?usp=drive_link">Resume</a>
            <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#contact">Contact</a>
          </ul>
        </div>
        <p className="text-sm text-primary">© 2025 All Rights Reserved by Sujoy Das</p>
      </div>
    </div>
  )
}

export default Footer