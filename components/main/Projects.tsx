import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/netflix.png"
          title="Video streaming application"
          description="Redesign of the netflix site presenting the Content Catalog"
          stack="React.Js, Tailwind CSS, Node.Js, TMDB api"
        />
        <ProjectCard
          src="/ecom.png"
          title="Online sales web application"
          description = "Development of an e-commerce site selling flowers and plants"
          stack="React.Js, Tailwind CSS, Node.Js"
          />
        <ProjectCard
          src="/airbnb.png"
          title="Rental apart web application"
          description="Redesign of the AIRBNB site presenting the Content Catalog"
          stack="HTML, CSS, PHP, MySql"
        />
      </div>
    </div>
  );
};

export default Projects;
