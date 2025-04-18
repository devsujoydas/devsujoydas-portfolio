import React from "react";

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
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
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
        image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
        // "https://images.unsplash.com/photo-1581091012184-5c71a55f50a0?auto=format&fit=crop&w=800&q=80",
      links: [
        { label: "Website", href: "#" },
        { label: "Source Client", href: "#" },
        { label: "Source Server", href: "#" }
      ]
    }
  ];

  return (
    <section className=" text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">MY PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#18181B] rounded-2xl border border-purple-800 p-6 shadow-lg flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl object-cover w-full h-64 mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-zinc-300 mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-zinc-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
