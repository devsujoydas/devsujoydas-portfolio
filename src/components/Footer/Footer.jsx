import Nav from "../Header/Nav";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="relative py-10 px-5 bg-[#050709] font-montserrat"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col justify-between items-center">
        <a href="/">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-5xl text-2xl font-semibold text-white"
          >
            SUJOY DAS
          </motion.h1>
        </a>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex md:flex-row justify-center flex-wrap md:gap-10 gap-5 md:text-lg text-white my-5"
        >
          <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#home">Home</a>
          <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#service">Services</a>
          <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#projects">Projects</a>
          <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#skills">Skills</a>
          <a className="hover:text-[#FF014F] duration-500 transition-all" target='_blank' href="https://drive.google.com/file/d/12yAP7YIjhRR7SZVXFcGI3tg3Cjt80Pse/view?usp=drive_link">Resume</a>
          <a className="hover:text-[#FF014F] duration-500 transition-all" href="/#contact">Contact</a>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-primary"
        >
          © 2025 All Rights Reserved by Sujoy Das
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;
