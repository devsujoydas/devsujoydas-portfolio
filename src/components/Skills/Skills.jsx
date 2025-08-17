
import htmlImg from '/images/skillsImage/html.webp'
import cssImg from '/images/skillsImage/css.webp'
import jsImg from '/images/skillsImage/javascript.webp'
import reactImg from '/images/skillsImage/react.webp'
import firebaseImg from '/images/skillsImage/firebase.webp'
import tailwindImg from '/images/skillsImage/tailwind.png'
import nodeImg from '/images/skillsImage/nodeimg.png'
import expressImg from '/images/skillsImage/express.png'
import FigmaImg from '/images/skillsImage/figma.webp'
import illustratorImg from '/images/skillsImage/illustrator.webp'
import GitImg from '/images/skillsImage/git.png'
import MongoDBImg from '/images/skillsImage/mongodb.png'
import vscodeImg from '/images/skillsImage/vscode.png'
import GitHubImg from '/images/skillsImage/github.png'
import ShadcnUIImg from '/images/skillsImage/ShadcnUi.png'
import npmImg from '/images/skillsImage/npm.png'
import SwiperJSImg from '/images/skillsImage/swiperjs.svg'
import NextUIImg from '/images/skillsImage/NextUI.png'
import UniverseioImg from '/images/skillsImage/Universeio.webp'
import daisyUIImg from '/images/skillsImage/daisyUI.png'
import AntDesignImg from '/images/skillsImage/AntDesign.svg'
import MerakiUIImg from '/images/skillsImage/MerakiUI.png'
import CreativeTimImg from '/images/skillsImage/Creative-Tim.webp'
import Lenis from '/images/skillsImage/lenis.jpeg'
import Cursor from '/images/skillsImage/cursorai.jpeg'
import ReactRouter from '/images/skillsImage/reactrouter.png'
import MongooseImg from '/images/skillsImage/MongooseImg.png'

const skills = [
  { name: 'HTML', description: 'Markup language for web pages', img: `${htmlImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', description: 'Styles and layouts for web pages', img: `${cssImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', description: 'Programming language for the web', img: `${jsImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling', img: `${tailwindImg}`, webUrl: 'https://tailwindcss.com/' },
  { name: 'React.js', description: 'Build user interfaces with components', img: `${reactImg}`, webUrl: 'https://reactjs.org/' },
  { name: 'Node.js', description: 'JavaScript runtime for backend development', img: `${nodeImg}`, webUrl: 'https://nodejs.org/' },
  { name: 'Express.js', description: 'Minimal Node.js web framework', img: `${expressImg}`, webUrl: 'https://expressjs.com/' },
  { name: 'MongoDB', description: 'NoSQL database for modern applications', img: `${MongoDBImg}`, webUrl: 'https://www.mongodb.com/' },
  { name: 'Mongoose', description: 'Elegant MongoDB object modeling for Node.js', img: `${MongooseImg}`, webUrl: 'https://mongoosejs.com/' },
  { name: 'Firebase', description: 'Backend platform for web apps', img: `${firebaseImg}`, webUrl: 'https://firebase.google.com/' },
  { name: 'Framer Motion', description: 'Animation library for React apps', img: 'https://framerusercontent.com/images/p82ZbUPQdsB3LwOnllbkrrIIH5Y.png', webUrl: 'https://www.framer.com/motion/' },
  { name: 'Lenis', description: 'Smooth scroll library for web', img: `${Lenis}`, webUrl: 'https://github.com/darkroomengineering/lenis' },
  { name: 'JWT', description: 'Token-based authentication for APIs', img: 'https://img.icons8.com/color/96/java-web-token.png', webUrl: 'https://jwt.io/' },
  { name: 'React Router', description: 'Declarative routing for React apps', img: `${ReactRouter}`, webUrl: 'https://reactrouter.com/' },
  { name: 'Postman', description: 'API platform for building APIs', img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png', webUrl: 'https://www.postman.com/' },
  { name: 'VS Code', description: 'Popular source-code editor for development', img: `${vscodeImg}`, webUrl: 'https://code.visualstudio.com/' },
  { name: 'Cursor Ai', description: 'AI-powered code editor for developers', img: `${Cursor}`, webUrl: 'https://cursor.com' },
  { name: 'Figma', description: 'Collaborative design tool for teams', img: `${FigmaImg}`, webUrl: 'https://figma.com/' },
  { name: 'npm', description: 'Package manager for JavaScript projects', img: `${npmImg}`, webUrl: 'https://www.npmjs.com/' },
  { name: 'Git', description: 'Distributed version control system', img: `${GitImg}`, webUrl: 'https://git-scm.com/' },
  { name: 'GitHub', description: 'Host and manage Git repositories', img: `${GitHubImg}`, webUrl: 'https://github.com/' },
  { name: 'Shadcn UI', description: 'Customizable React component library', img: `${ShadcnUIImg}`, webUrl: 'https://ui.shadcn.com/' },
  { name: 'NextUI', description: 'Modern React UI component library', img: `${NextUIImg}`, webUrl: 'https://nextui.org/' },
  { name: 'SwiperJS', description: 'Mobile touch slider for web', img: `${SwiperJSImg}`, webUrl: 'https://swiperjs.com/' },
  { name: 'daisyUI', description: 'Tailwind CSS components plugin', img: `${daisyUIImg}`, webUrl: 'https://daisyui.com/' },
  { name: 'Universe.io', description: 'Metaverse engine for 3D experiences', img: `${UniverseioImg}`, webUrl: 'https://www.universe.io/' },
  { name: 'Meraki UI', description: 'Tailwind CSS UI components library', img: `${MerakiUIImg}`, webUrl: 'https://merakiui.com/' },
  { name: 'Creative Tim', description: 'UI tools and dashboards for web', img: `${CreativeTimImg}`, webUrl: 'https://www.creative-tim.com/' },
  { name: 'Ant Design', description: 'Enterprise React UI design system', img: `${AntDesignImg}`, webUrl: 'https://ant.design/' },
  { name: 'Illustrator', description: 'Vector graphics editor for artwork', img: `${illustratorImg}`, webUrl: 'https://www.adobe.com/products/illustrator.html' },
];



import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id='skills' className="text-white md:py-36 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        className='md:pb-20 pb-10'
      >
        <h1 className='text-secondary font-semibold text-center'>Skills & Tools</h1>
        <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>
          My Skills & Tools
        </h1>
      </motion.div>

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6 ">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.03,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.1 }}
            className=''
          >
            <a
              href={skill.webUrl}
              target='_blank'
              className=" inline-block bgMain w-full h-full cursor-pointer rounded-xl p-5 active:shadow-none active:scale-100 shadow-lg hover:scale-105 transition-transform space-y-2 border  border-[#362929]"
            >
              <img className='md:w-10 md:h-10 w-8 h-8' src={skill.img} alt={skill.name} />
              <h2 className="md:text-xl text-base font-semibold">{skill.name}</h2>
              <p className="text-zinc-400 text-sm">{skill.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

