import porfolio from "/images/devsujoydas-thubnail.png"
import residential from "/images/residential-thubnail.png"
import tourtotuscany from "/images/tourtotuscany-thubnail.png"
import elexyelectronic from "/images/elexyelectronic-thubnail.png"
import gadgetmartbd from "/images/gadgetmartbd-thubnail.png"
import nestmartbd from "/images/nestmartbd-thubnail.png"
import careerrhub from "/images/careerhub-thubnail.png"
import chairstore from "/images/chairstore-thubnail.png"
import tictactoe from "/images/Tictactoe-thumbnail.png"
import recipes from "/images/recipescaloris-thubnail.png"

import xenonmedia from '/images/xenonmedia-thumbnail.png';
import devmovieshub from '/images/devmovieshub-thumbnail.png';

import Project from "./Project";
export default function Projects() {
  const projects = [

    {
      "name": "Sujoy Das Portfolio",
      "description": "A modern portfolio showcasing Sujoy Das's projects, skills, achievements, and web development expertise.",
      "tech": ["React", "Tailwind CSS", "Typed.js", "SwiperJS"],
      "image": `${porfolio}`,
      "links": [
        { "label": "Website", "href": "https://devsujoydas.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/devsujoydas-portfolio" }
      ]
    },

    {
      "name": "Xenon Media - Mini Social App",
      "description": "A mini social media platform to post, like, and interact—built with modern React tools.",
      "tech": ["React", "Tailwind CSS",],
      "image": `${xenonmedia}`,
      "links": [
        { "label": "Website", "href": "https://xenonmedia.netlify.app/" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/mini-social-app" }
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
      "name": "Job Portal BD  ",
      "description": "Job and career guidance platform helping users explore opportunities and career resources effectively.",
      "tech": ["React", "Tailwind CSS", "Firebase"],
      "image": `${careerrhub}`,
      "links": [
        { "label": "Website", "href": "https://reactcareerhub.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/react-career-hub" }
      ]
    },
    {
      "name": "Tour To Tuscany",
      "description": "Travel site for Tuscany, offering guides, experiences, and easy tour package bookings online.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${tourtotuscany}`,
      "links": [
        { "label": "Website", "href": "https://tourtotuscany.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/tour-to-tuscany" }
      ]
    },

    {
      "name": "GADGET MART BD",
      "description": "Electronics e-commerce site offering a wide range of gadgets with smooth shopping experience.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${gadgetmartbd}`,
      "links": [
        { "label": "Website", "href": "https://gadgetmartbd.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/gadget-mart-bd" }
      ]
    },
    {
      "name": "Nest Mart BD",
      "description": "User-friendly online store offering various products to enhance daily life and convenience.",
      "tech": ["React", "Tailwind CSS", "SwiperJS"],
      "image": `${nestmartbd}`,
      "links": [
        { "label": "Website", "href": "https://nestmartbd.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/nest-mart-bd" }
      ]
    },
    {
      "name": "Elexy Electronics",
      "description": "Electronics e-commerce site offering a wide range of gadgets with smooth shopping experience.",
      "tech": ["React", "Tailwind CSS", "Firebase", "SwiperJS"],
      "image": `${elexyelectronic}`,
      "links": [
        { "label": "Website", "href": "https://elexyelectronics.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/elexy-electronics." }
      ]
    },
    {
      "name": "Furni Chair Store",
      "description": "Modern furniture store offering stylish, affordable options for home and office decoration.",
      "tech": ["Html", "Tailwind CSS", "JavaScript"],
      "image": `${chairstore}`,
      "links": [
        { "label": "Website", "href": "https://furnichairstore.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/chair-store" }
      ]
    },

    {
      "name": "Tic Tac Toe",
      "description": "Fun browser-based Tic Tac Toe game offering classic two-player interactive strategy experience.",
      "tech": ["HTML", "CSS", "JavaScript"],
      "image": `${tictactoe}`,
      "links": [
        { "label": "Website", "href": "https://tictactoe36.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/tic-tac-toe" }
      ]
    },
    {
      "name": "Recipes Calories",
      "description": "Recipe-sharing platform helping cooking lovers discover, save, and share delicious homemade meals.",
      "tech": ["React", "Tailwind CSS"],
      "image": `${recipes}`,
      "links": [
        { "label": "Website", "href": "https://recipecaloris.vercel.app" },
        { "label": "Source Code", "href": "https://github.com/devsujoydas/recipe-calories" }
      ]
    }
  ]




  return (
    <section id="projects" className=" text-white md:py-40 py-20 px-4 font-montserrat">
      <h1 className='text-secondary font-semibold text-center md:text-md text-sm'>Visit my project and keep your feedback</h1>
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
