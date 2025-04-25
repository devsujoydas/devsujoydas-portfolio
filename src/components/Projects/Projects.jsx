import porfolio from "../../../public/SkillsImgs/devsujoydas-thubnail.png"
import residential from "../../../public/SkillsImgs/residential-thubnail.png"
import tourtotuscany from "../../../public/SkillsImgs/tourtotuscany-thubnail.png"
import elexyelectronic from "../../../public/SkillsImgs/elexyelectronic-thubnail.png"
import gadgetmartbd from "../../../public/SkillsImgs/gadgetmartbd-thubnail.png"
import nestmartbd from "../../../public/SkillsImgs/nestmartbd-thubnail.png"
import careerrhub from "../../../public/SkillsImgs/careerhub-thubnail.png"
import chairstore from "../../../public/SkillsImgs/chairstore-thubnail.png"
import tictactoe from "../../../public/SkillsImgs/Tictactoe-thumbnail.png"
import recipes from "../../../public/SkillsImgs/recipescaloris-thubnail.png"

import Project from "./Project";
export default function Projects() {
  const projects = [

    {
      "name": "Sujoy Das Portfolio",
      "description": "A modern portfolio showcasing Sujoy Das's projects, skills, achievements, and web development expertise.",
      "tech": ["React", "Tailwind CSS", "Typed.js", "SwiperJS"],
      "image": `${porfolio}`,
      "links": [
        { "label": "Website", "href": "https://devsujoydas.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/devsujoydas-portfolio" }
      ]
    },
    {
      "name": "Residential Real Estate",
      "description": "Real estate platform to discover, list, and explore apartments, townhouses, and vacation rentals.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${residential}`,
      "links": [
        { "label": "Website", "href": "https://residentialrealestate.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/residential-real-estate" }
      ]
    },
    {
      "name": "Elexy Electronics",
      "description": "Electronics e-commerce site offering a wide range of gadgets with smooth shopping experience.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${elexyelectronic}`,
      "links": [
        { "label": "Website", "href": "https://elexyelectronic.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/elexy-electronics." }
      ]
    },
    {
      "name": "Tour To Tuscany",
      "description": "Travel site for Tuscany, offering guides, experiences, and easy tour package bookings online.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${tourtotuscany}`,
      "links": [
        { "label": "Website", "href": "https://tourtotuscany.vercel.app/" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/tour-to-tuscany" }
      ]
    },
    
    {
      "name": "GADGET MART BD",
      "description": "Electronics e-commerce site offering a wide range of gadgets with smooth shopping experience.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${gadgetmartbd}`,
      "links": [
        { "label": "Website", "href": "https://gadgetmartbd.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/gadget-mart-bd" }
      ]
    },
    {
      "name": "Nest Mart BD",
      "description": "User-friendly online store offering various products to enhance daily life and convenience.",
      "tech": ["React", "Tailwind CSS", "SwiperJS"],
      "image": `${nestmartbd}`,
      "links": [
        { "label": "Website", "href": "https://nestmartbd.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/nest-mart-bd" }
      ]
    },
    {
      "name": "Furni Chair Store",
      "description": "Modern furniture store offering stylish, affordable options for home and office decoration.",
      "tech": ["Html", "Tailwind CSS", "JavaScript"],
      "image": `${chairstore}`,
      "links": [
        { "label": "Website", "href": "https://furnichairstore.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/chair-store" }
      ]
    },
    {
      "name": "React-Career-Hub",
      "description": "Job and career guidance platform helping users explore opportunities and career resources effectively.",
      "tech": ["React", "Tailwind CSS", "Firebase"],
      "image": `${careerrhub}`,
      "links": [
        { "label": "Website", "href": "https://careerrhub.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/react-career-hub" }
      ]
    },
    {
      "name": "Tic Tac Toe",
      "description": "Fun browser-based Tic Tac Toe game offering classic two-player interactive strategy experience.",
      "tech": ["HTML", "CSS", "JavaScript"],
      "image": `${tictactoe}`,
      "links": [
        { "label": "Website", "href": "https://tic-tac-toe36.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/tic-tac-toe" }
      ]
    },
    {
      "name": "Recipes Calories",
      "description": "Recipe-sharing platform helping cooking lovers discover, save, and share delicious homemade meals.",
      "tech": ["React", "Tailwind CSS"],
      "image": `${recipes}`,
      "links": [
        { "label": "Website", "href": "https://recipecaloris.netlify.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/recipe-calories" }
      ]
    }
  ]




  return (
    <section id="projects" className=" text-white md:py-40 py-20 px-4 font-montserrat">
      <h1 className='text-secondary font-semibold text-center'>Visit my project and keep your feedback</h1>
      <h1 className='text-4xl md:text-7xl font-bold mt-5 text-primary text-center'>My Project
      </h1>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid md:grid-cols-3 gap-5">
          {
            projects.map((project, idx) => <Project key={idx} project={project} />)
          }
        </div>
      </div>
    </section>
  );
}
