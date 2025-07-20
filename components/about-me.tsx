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
        With a solid foundation in{" "}
        <span className="font-medium">Computer Science</span>, I've built my
        expertise across the full development spectrum. I specialize in crafting
        robust applications using{" "}
        <span className="font-medium">JavaScript, TypeScript, React, and Next.js</span>,
        backed by powerful server-side solutions with{" "}
        <span className="font-medium">Node.js and Express</span>.{" "}
        <span className="italic">What drives me</span> is architecting scalable
        systems that solve real problems. I work confidently with diverse databases -
        from <span className="underline">SQL variants</span> like PostgreSQL and MySQL
        to NoSQL solutions like MongoDB. My toolkit extends to{" "}
        <span className="font-medium">AWS services, GraphQL, WebSockets, and modern
          state management with RTK</span>. I deliver production-ready applications
        that perform.
      </p>
      {/* 
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and doing gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Node.js and MongoDB</span>.
        I'm also learning networking.
      </p> */}
    </motion.section>
  );
}

export default AboutMe;
