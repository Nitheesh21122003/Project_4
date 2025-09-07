import React from "react";

export default function Projects() {
  const projects = [
    {
      title: " Smart Railway Level Crossing System",
      description: "A short description of Project 1.",
    },
    {
      title: "Candy Catcher",
      description: "A short description of Project 2.",
    },
    {
      title: "Driver Drowsiness System",
      description: "A short description of Project 3.",
    },
   
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg p-6 
                       transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
