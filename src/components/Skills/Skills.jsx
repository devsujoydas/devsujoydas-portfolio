
import htmlImg from '/images/html.webp'
import cssImg from '/images/css.webp'
import jsImg from '/images/javascript.webp'
import reactImg from '/images/react.webp'
import firebaseImg from '/images/firebase.webp'
import tailwindImg from '/images/tailwind.png'
import nodeImg from '/images/nodeimg.png'
import photoshopImg from '/images/photoshop.webp'
import expressImg from '/images/express.png'
import FigmaImg from '/images/figma.webp'
import illustratorImg from '/images/illustrator.webp'
import GitImg from '/images/git.png'
import MongoDBImg from '/images/mongodb.png'
import vscodeImg from '/images/vscode.png'
import GitHubImg from '/images/github.png'
import ShadcnUIImg from '/images/ShadcnUi.png'
import npmImg from '/images/npm.png'
import SwiperJSImg from '/images/swiperjs.svg'
import NextUIImg from '/images/NextUI.png'
import UniverseioImg from '/images/Universeio.webp'
import daisyUIImg from '/images/daisyUI.png'
import AntDesignImg from '/images/AntDesign.svg'
import MerakiUIImg from '/images/MerakiUI.png'
import CreativeTimImg from '/images/Creative-Tim.webp'
import Lenis from '/images/lenis.jpeg'
import Cursor from '/images/cursorai.jpeg'

const skills = [
  { name: 'HTML', description: 'Markup language for web pages', img: `${htmlImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', description: 'Style and layout of web pages', img: `${cssImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', description: 'Programming language for the Web', img: `${jsImg}`, webUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework', img: `${tailwindImg}`, webUrl: 'https://tailwindcss.com/' },
  { name: 'React.js', description: 'Library for building web interfaces', img: `${reactImg}`, webUrl: 'https://reactjs.org/' },
  { name: 'Node.js', description: 'JavaScript runtime for server-side', img: `${nodeImg}`, webUrl: 'https://nodejs.org/' },
  { name: 'Express.js', description: 'Minimal Node.js web framework', img: `${expressImg}`, webUrl: 'https://expressjs.com/' },
  { name: 'MongoDB', description: 'NoSQL database for modern apps', img: `${MongoDBImg}`, webUrl: 'https://www.mongodb.com/' },
  { name: 'Firebase', description: 'Backend platform for building web and mobile applications', img: `${firebaseImg}`, webUrl: 'https://firebase.google.com/' },
  { name: 'Framer Motion', description: 'Animation library for React applications', img: 'https://framerusercontent.com/images/p82ZbUPQdsB3LwOnllbkrrIIH5Y.png', webUrl: 'https://www.framer.com/motion/' },
  { name: 'Lenis', description: 'Smooth scroll library for modern web experiences', img: `${Lenis}`, webUrl: 'https://github.com/darkroomengineering/lenis' },
  { name: 'JWT', description: 'Compact, URL-safe means of representing claims between two parties', img: 'https://img.icons8.com/color/96/java-web-token.png', webUrl: 'https://jwt.io/' },
  { name: 'Postman', description: 'API platform for building and using APIs', img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png', webUrl: 'https://www.postman.com/' },
  { name: 'VS Code', description: 'Popular source-code editor with support for debugging', img: `${vscodeImg}`, webUrl: 'https://code.visualstudio.com/' },
  { name: 'Cursor Ai', description: 'AI-powered code editor', img: `${Cursor}`, webUrl: 'https://cursor.com' },
  { name: 'Figma', description: 'Collaborative design tool', img: `${FigmaImg}`, webUrl: 'https://figma.com/' },
  { name: 'npm', description: 'Package manager for JavaScript projects', img: `${npmImg}`, webUrl: 'https://www.npmjs.com/' },
  { name: 'Git', description: 'Distributed version control system', img: `${GitImg}`, webUrl: 'https://git-scm.com/' },
  { name: 'GitHub', description: 'Platform for hosting and managing Git repos', img: `${GitHubImg}`, webUrl: 'https://github.com/' },
  { name: 'Shadcn UI', description: 'Highly customizable component library', img: `${ShadcnUIImg}`, webUrl: 'https://ui.shadcn.com/' },
  { name: 'NextUI', description: 'Beautiful, fast, and modern React UI library', img: `${NextUIImg}`, webUrl: 'https://nextui.org/' },
  { name: 'SwiperJS', description: 'Modern mobile touch slider with hardware-accelerated transitions', img: `${SwiperJSImg}`, webUrl: 'https://swiperjs.com/' },
  { name: 'daisyUI', description: 'Tailwind CSS components plugin with styled elements', img: `${daisyUIImg}`, webUrl: 'https://daisyui.com/' },
  { name: 'Universe.io', description: 'Metaverse engine for immersive 3D experiences', img: `${UniverseioImg}`, webUrl: 'https://www.universe.io/' },
  { name: 'Meraki UI', description: 'Tailwind CSS UI components for rapid prototyping', img: `${MerakiUIImg}`, webUrl: 'https://merakiui.com/' },
  { name: 'Creative Tim', description: 'UI tools and dashboards built on Bootstrap, React, Vue & Tailwind', img: `${CreativeTimImg}`, webUrl: 'https://www.creative-tim.com/' },
  { name: 'Ant Design', description: 'Enterprise-class UI design language and React-based implementation', img: `${AntDesignImg}`, webUrl: 'https://ant.design/' },
  { name: 'Photoshop', description: 'Industry-standard software for image editing and graphic design', img: `${photoshopImg}`, webUrl: 'https://www.adobe.com/products/photoshop.html' },
  { name: 'Illustrator', description: 'Vector graphics editor for logos, illustrations, and artwork', img: `${illustratorImg}`, webUrl: 'https://www.adobe.com/products/illustrator.html' },
];



import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id='skills' className="text-white md:py-40 py-20 ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: false }}
        className='md:pb-20 pb-10'
      >
        <h1 className='text-secondary font-semibold text-center'>Skills & Tools</h1>
        <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>
          My Skills & Tools
        </h1>
      </motion.div>

      <div className="overflow-hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6 max-w-screen-2xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.03,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <a
              href={skill.webUrl}
              target='_blank'
              className="bg-zinc-900 inline-block w-full h-full cursor-pointer rounded-xl p-5 active:shadow-none active:scale-100 shadow-lg hover:scale-105 transition-transform space-y-2"
            >
              <img className='w-10 h-10' src={skill.img} alt={skill.name} />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
              <p className="text-zinc-400 text-sm">{skill.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

