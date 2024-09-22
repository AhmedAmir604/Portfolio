"use client";

import React from "react";
import Heading from "./heading";
import { skillIcons, skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useHooks } from "@/lib/hook";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const customRef = useHooks(0.75, "Skills");

  return (
    <section
      ref={customRef}
      id="skills"
      className="px-5 mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
    >
      <Heading>My skills</Heading>
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))} 
      </ul> */}

      <ul className="flex flex-wrap text-center justify-center gap-8">
        {skillIcons.map((icon) => (
          <div key={icon.key} className="text-5xl">
            {icon}
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
