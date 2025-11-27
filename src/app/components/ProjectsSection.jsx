"use client";
import React from "react";
import Image from "next/image";

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="px-6 py-12 text-white scroll-mt-24">
      <h2 className="text-4xl font-bold mb-10 text-center">Project Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Skrik Fragments",
            description:
              "A digital artwork combining three distinct artistic styles, inspired by Edvard Munch’s iconic painting The Scream and the Scream movie franchise. This project explores the fusion of traditional and modern art influences to create a visually striking piece.",
            image: "/images/FragmentsOfSkrik.png",
          },
          {
            title: "Python Periodic Table Quizzer",
            description:
              "A text-based educational application, similar to Duolingo, designed to help users learn the Periodic Table of Elements. It features adjustable difficulty levels, multiple quiz modes, and customizable question types such as multiple choice, true/false, and identification exercises.",
            image: "/images/periodictablequizzer.png",
          },
          {
            title: "Virtual Store for Case Study",
            description:
              "An online shopping platform built for demonstration purposes. While the UI/UX is a work in progress, the backend is fully functional with database management, product search and filtering, and editable data entries, providing a complete end-to-end store experience.",
            image: "/images/virtualstore.png",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >

            <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm flex-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
