
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
  { name: 'VS Code', description: 'Popular source-code editor with support for debugging', img: `${vscodeImg}`, webUrl: 'https://code.visualstudio.com/' },
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




const Skills = () => {
  return (
    <div id='skills' className="min-h-screen  text-white md:py-40 py-20 px-6">
      <div className='md:pb-20 pb-10'>
        <h1 className='text-secondary font-semibold text-center'>Slills & Tools</h1>
        <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>My Skills & Tools
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
           
          >
            <a href={skill.webUrl} target='_blank'  className="bg-zinc-900 inline-block w-full h-full cursor-pointer rounded-xl p-5 active:shadow-none active:scale-100 shadow-lg hover:scale-105 transition-transform space-y-2">
            <img className='w-10 h-10 ' src={skill.img} alt="" />
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <p className="text-zinc-400 text-sm">{skill.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
