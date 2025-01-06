"use client";

import Heading from "./heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import React from "react";
import { useHooks } from "@/lib/hook";

function Projects() {
  const customRef = useHooks(0.4, "Projects");
  return (
    <section ref={customRef} id="projects" className="scroll-mt-28 mb-28">
      <Heading>My Projects</Heading>
      <p className="text-center text-sm -mt-6 mb-2 text-gray-300">
        Click To visit 😎
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
