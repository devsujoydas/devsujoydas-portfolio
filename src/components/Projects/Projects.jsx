
import Project from "./Project";
export default function Projects() {
    const projects = [
        {
            name: "DevBlog",
            description:
                "A blogging platform for developers. Users can browse, search, interact with, and create blogs across various categories related to development.",
            tech: [
                "Next.js",
                "Next UI",
                "Tailwind",
                "React Query",
                "TipTap Editor",
                "Prism.js",
                "MongoDB",
                "NextAuth.js"
            ],
            image: "https://i.imgur.com/1aEY3Cs.jpeg",
            links: [
                { label: "Website", href: "#" },
                { label: "Source", href: "#" }
            ]
        },
        {
            name: "Job Nebula",
            description:
                "A full-stack web application for posting and applying for jobs. Users can search, filter, and browse jobs by category, apply directly, and post and manage job listings.",
            tech: [
                "React",
                "Tailwind",
                "Material Tailwind",
                "Firebase",
                "Node.js",
                "Express.js",
                "MongoDB"
            ],
            image: "https://i.imgur.com/TKpYgfT.jpeg",
            links: [
                { label: "Website", href: "#" },
                { label: "Source Client", href: "#" },
                { label: "Source Server", href: "#" }
            ]
        },
        {
            name: "DevBlog",
            description:
                "A blogging platform for developers. Users can browse, search, interact with, and create blogs across various categories related to development.",
            tech: [
                "Next.js",
                "Next UI",
                "Tailwind",
                "React Query",
                "TipTap Editor",
                "Prism.js",
                "MongoDB",
                "NextAuth.js"
            ],
            image: "https://i.imgur.com/1aEY3Cs.jpeg",
            links: [
                { label: "Website", href: "#" },
                { label: "Source", href: "#" }
            ]
        },
        {
            name: "Job Nebula",
            description:
                "A full-stack web application for posting and applying for jobs. Users can search, filter, and browse jobs by category, apply directly, and post and manage job listings.",
            tech: [
                "React",
                "Tailwind",
                "Material Tailwind",
                "Firebase",
                "Node.js",
                "Express.js",
                "MongoDB"
            ],
            image: "https://i.imgur.com/TKpYgfT.jpeg",
            links: [
                { label: "Website", href: "#" },
                { label: "Source Code", href: "#" },
            ]
        },
    ];


    return (
        <section id="projects" className=" text-white py-40 px-4 font-montserrat">
            <h1 className='text-secondary font-semibold text-center'>Visit my portfolio and keep your feedback</h1>
            <h1 className='text-7xl font-bold mt-5 text-primary text-center'>My Portfolio
            </h1>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        projects.map((project,idx)=><Project key={idx} project={project}/>)
                    }
                </div>
            </div>
        </section>
    );
}
