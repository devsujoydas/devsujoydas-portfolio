
import htmlImg from '../../../public/SkillsImgs/html.webp'
import cssImg from '../../../public/SkillsImgs/css.webp'
import jsImg from '../../../public/SkillsImgs/javascript.webp'
import reactImg from '../../../public/SkillsImgs/react.webp'
import firebaseImg from '../../../public/SkillsImgs/firebase.webp'
import tailwindImg from '../../../public/SkillsImgs/tailwind.webp'
import nodeImg from '../../../public/SkillsImgs/nodeimg.png'
import expressImg from '../../../public/SkillsImgs/express.png'
import MongoDBImg from '../../../public/SkillsImgs'
import ShadcnUIImg from '../../../public/SkillsImgs'
import NextUIImg from '../../../public/SkillsImgs'
import FigmaImg from '../../../public/SkillsImgs'
import GitImg from '../../../public/SkillsImgs'
import GitHubImg from '../../../public/SkillsImgs'
import npmImg from '../../../public/SkillsImgs'
import SwiperJSImg from '../../../public/SkillsImgs'
import daisyUIImg from '../../../public/SkillsImgs'
import UniverseioImg from '../../../public/SkillsImgs'
import MerakiUIImg from '../../../public/SkillsImgs'
import CreativeTimImg from '../../../public/SkillsImgs'
import AntDesignImg from '../../../public/SkillsImgs'
import vscodeImg from '../../../public/SkillsImgs'
import photoshopImg from '../../../public/SkillsImgs/photoshop.webp'
import illustratorImg from '../../../public/SkillsImgs/illustrator.webp'

const skills = [
  {
    name: 'HTML',
    description: 'Markup language for web pages',
    img: `${htmlImg}`
  },
  {
    name: 'CSS',
    description: 'Style and layout of web pages',
    img: `${cssImg}`

  },
  {
    name: 'JavaScript',
    description: 'Programming language for the Web',
    img: `${jsImg}`

  },
  {
    name: 'React.js',
    description: 'Library for building web interfaces',
    img: `${reactImg}`

  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    img: `${tailwindImg}`

  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for server-side',
    img: `${nodeImg}`

  },
  {
    name: 'Express.js',
    description: 'Minimal Node.js web framework',
    img: `${expressImg}`

  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for modern apps',
    img: `${MongoDBImg}`

  },
  {
    name: 'Firebase',
    description: 'Backend platform for building web and mobile applications',
    img: `${firebaseImg}`

  },
  {
    name: 'Shadcn UI',
    description: 'Highly customizable component library',
    img: `${ShadcnUIImg}`

  },
  {
    name: 'NextUI',
    description: 'Beautiful, fast, and modern React UI library',
    img: `${NextUIImg}`

  },
  {
    name: 'SwiperJS',
    description: 'Modern mobile touch slider with hardware-accelerated transitions',
    img: `${SwiperJSImg}`
    
  },
  {
    name: 'daisyUI',
    description: 'Tailwind CSS components plugin with styled elements',
    img: `${daisyUIImg}`
    
  },
  {
    name: 'Universe.io',
    description: 'Metaverse engine for immersive 3D experiences (or decentralized web tools)',
    img: `${UniverseioImg}`
    
  },
  {
    name: 'Meraki UI',
    description: 'Tailwind CSS UI components for rapid prototyping',
    img: `${MerakiUIImg}`
    
  },
  {
    name: 'Creative Tim',
    description: 'UI tools and dashboards built on Bootstrap, React, Vue & Tailwind',
    img: `${CreativeTimImg}`
    
  },
  {
    name: 'Ant Design',
    description: 'Enterprise-class UI design language and React-based implementation',
    img: `${AntDesignImg}`
    
  },
  { 
    name: 'VS Code', 
    description: 'Popular source-code editor with support for debugging, Git, and extensions', 
    img: `${vscodeImg}`
  },
  {
    name: 'Figma',
    description: 'Collaborative design tool',
    img: `${FigmaImg}`

  },
  {
    name: 'npm',
    description: 'Package manager for JavaScript projects',
    img: `${npmImg}`
    
  },
  {
    name: 'Git',
    description: 'Distributed version control system',
    img: `${GitImg}`

  },
  {
    name: 'GitHub',
    description: 'Platform for hosting and managing Git repos',
    img: `${GitHubImg}`

  },
  {
    name: 'Photoshop',
    description: 'Industry-standard software for image editing and graphic design',
    img: `${photoshopImg}`
  },
  {
    name: 'Illustrator',
    description: 'Vector graphics editor for logos, illustrations, and artwork',
    img: `${illustratorImg}`
  },
];


const Skills = () => {
  return (
    <div className="min-h-screen  text-white py-12 px-6">
      <div className='py-20'>
        <h1 className='text-secondary font-semibold text-center'>Slills & Tools</h1>
        <h1 className='text-7xl font-bold mt-5 text-primary text-center'>My Skills & Tools
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-xl p-5 shadow-lg hover:scale-105 transition-transform"
          >
            <img src={skill.img} alt="" />
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <p className="text-zinc-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
