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
