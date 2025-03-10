"use client";

import { projectsData } from "@/lib/data";
import { useScroll } from "framer-motion";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TfiNewWindow } from "react-icons/tfi";
import React from "react";

type project = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  tags,
  url,
}: project) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-[42rem] rounded-lg relative bg-gray-100 border border-black/5 overflow-hidden sm:pr-8 mb-3 sm:mb-8 last:mb-0 sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="py-4 px-5 pb-7 sm:group-even:ml-[18rem] sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold flex gap-3 text-gray-300">
            {title}{" "}
            <TfiNewWindow className="text-lg my-auto mb-[10px] group-hover:opacity-100 transition-all duration-150 opacity-0" />
          </h3>
          <p className=" mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        hidden
        sm:block
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:right-[initial]
        group-even:-left-40
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        
        "
          src={imageUrl}
          alt="This is the picture"
          quality={90}
        ></Image>
      </a>
    </motion.div>
  );
}
