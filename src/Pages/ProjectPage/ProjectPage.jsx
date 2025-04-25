
import Project from "../../components/Projects/Project";
export default function ProjectPage() {
    const projects = [
        {
          "name": "Residential Real Estate",
          "description": "A modern real estate platform for finding and listing residential properties, including apartments, townhouses, and vacation rentals.",
          "tech": ["React", "Tailwind CSS", "Firebase","SwiperJS"],
          "image": "https://i.ibb.co.com/RkdW7sXH/residential36-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://residential36.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Residential_Real_Estate" }
          ]
        },
        {
          "name": "Tour-To-Tuscany",
          "description": "Tour-To-Tuscany is a comprehensive travel guide and booking platform dedicated to providing travelers with an in-depth experience of Tuscany, Italy.",
          "tech": ["React", "Tailwind CSS", "Firebase","SwiperJS"],
          "image": "https://i.ibb.co.com/cdxdybz/tourtotuscany36-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://tourtotuscany36.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Tour-To-Tuscany.git" }
          ]
        },
        {
          "name": "GADGET-MART-BD",
          "description": "GADGET-MART-BD is an advanced e-commerce platform designed to offer a seamless shopping experience for electronics and gadgets in Bangladesh.",
          "tech": ["React", "Tailwind CSS", "Firebase","SwiperJS"],
          "image": "https://i.ibb.co.com/7dXRDypQ/gadgetmartbd-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://gadgetmartbd.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/GADGET-MART-BD.git" }
          ]
        },
        {
          "name": "Nest-Mart-BD",
          "description": "Nest-Mart-BD is a user-centric e-commerce platform that provides a wide range of products, making shopping more accessible and convenient.",
          "tech": ["React", "Tailwind CSS","SwiperJS"],
          "image": "https://i.ibb.co.com/wrwwYKV9/nestmartbd-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://nestmartbd.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Nest-Mart-BD.git" }
          ]
        },
        {
          "name": "Furni",
          "description": "Furni is an online store specializing in stylish and modern furniture for homes and offices.",
          "tech": ["Html", "Tailwind CSS", "JavaScript"],
          "image": "https://i.ibb.co.com/tW1xfkj/furniwordpress-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://furniwordpress.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Furni_Wordpress.git" }
          ]
        },
        {
          "name": "React-Career-Hub",
          "description": "React Career Hub is a career guidance and job recommendation platform designed to assist job seekers in finding suitable opportunities based on their skills and interests.",
          "tech": ["React", "Tailwind CSS", "Firebase" ],
          "image": "https://i.ibb.co.com/JR2HDjcD/careerhub36-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://careerhub36.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/React-Career-Hub.git" }
          ]
        },
        {
          "name": "Tic Tac Toe",
          "description": "Tic Tac Toe is a fun and interactive game that allows users to enjoy the classic strategy-based gameplay directly in their browser.",
          "tech": ["HTML", "CSS", "JavaScript"],
          "image": "https://i.ibb.co.com/XZmN7WZm/Tic-tac-toe-Old-Project-Apna-Collage.png",
          "links": [
            { "label": "Website", "href": "https://devsujoy36.github.io/Tic-tac-toe-Old-Project-Apna-Collage/" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Tic-tac-toe-Old-Project-Apna-Collage.git" }
          ]
        },
        {
          "name": "Recipes36",
          "description": "Recipes36 is a recipe-sharing platform designed for cooking enthusiasts looking for inspiration and guidance in their culinary journey.",
          "tech": ["React", "Tailwind CSS"],
          "image": "https://i.ibb.co.com/whsC9qRT/recipes36-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://recipes36.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/Assignment-7.git" }
          ]
        },
        {
          "name": "Crypto World",
          "description": "Crypto World is an informative platform that provides users with real-time updates, news, and analysis related to the cryptocurrency market.",
          "tech": ["Html", "Tailwind CSS","JavaScript"],
          "image": "https://i.ibb.co.com/8gP2W8g8/sujoydas36-thubnail.png",
          "links": [
            { "label": "Website", "href": "https://sujoydas36.netlify.app" },
            { "label": "Source Code", "href": "https://github.com/devsujoy36/crypto-world.git" }
          ]
        }
      ]




    return (
        <section id="projects" className=" text-white md:py-40 py-24 px-4 font-montserrat">
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
