"use client";

import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useHooks } from "@/lib/hook";

function AboutMe() {
  const customRef = useHooks(0.8, "About");

  return (
    <motion.section
      ref={customRef}
      className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        Doing graduation in{" "}
        <span className="font-medium">Computer Science degree</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js</span>. I am also
        familiar with TypeScript. I am always looking to learn new technologies.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a website
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and doing gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Node.js and MongoDB</span>.
        I'm also learning networking.
      </p>
    </motion.section>
  );
}

export default AboutMe;
