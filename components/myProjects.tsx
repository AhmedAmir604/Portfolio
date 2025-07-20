import { myProjects } from "@/lib/data";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { TfiNewWindow } from "react-icons/tfi";

export default function MyProjects() {
  return (
    <section>
      <h1 className="text-4xl text-center text-gray-700 mb-10 dark:text-gray-100">
        Repo's & Links
      </h1>
      <div className="w-full mb-16 px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {myProjects.map((project) => (
          <div
            key={project.title}
            className="w-full max-w-[25rem] flex flex-col gap-1 py-5 px-4 items-center dark:bg-[#141415] bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-fit p-3 rounded-full bg-gray-200 dark:bg-[#27272a]  ">
              {" "}
              <span className="p-1 text-sm bg-black text-gray-100 rounded-sm block">
                {project.text}
              </span>
            </div>
            <div>
              <h1 className="text-lg text-center font-semibold ">
                {project.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-[14px] pb-1 px-8 text-center font-light">
                {project.description}
              </p>
            </div>
            <div className="text-center text-[14px] dark:text-gray-100 text-gray-800 py-1 pb-1 px-2 flex flex-wrap gap-2 justify-center">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 dark:bg-[#27272a] bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-center flex justify-center gap-2 pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.links.live}
                className="dark:hover:bg-[#2c2c2e] hover:bg-black/10 transition-all duration-200 border text-lg cursor-pointer dark:border-[#333336] border-gray-400 rounded-full w-fit py-2 px-5"
              >
                <TfiNewWindow />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.links.github}
                className="dark:hover:bg-[#2c2c2e] hover:bg-black/10 transition-all duration-200 border cursor-pointer dark:border-[#333336] border-gray-400 text-xl rounded-full w-fit py-2 px-5"
              >
                {" "}
                <FiGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
