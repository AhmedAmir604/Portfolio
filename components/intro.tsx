"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useHooks } from "@/lib/hook";
import { useActiveSectionContext } from "@/context-provider/active-section";

export default function Intro() {
  const customRef = useHooks(0.75, "Home");
  const { setActiveSelection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={customRef}
      id="home"
      className=" mb-28 mt-20 max-w-[50rem] text-center
    sm:mb-0 scroll-mt-[100rem]"
      onClick={() => (
        setActiveSelection("Contact"), setTimeOfLastClick(Date.now())
      )}
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.2,
              type: "tween",
            }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              height={120}
              width={120}
              quality={100}
              priority={true}
              alt="Profile Picture"
              className=" h-24 w-24 rounded-full border-white border-[0.35rem] shadow-xl"
            ></Image>
          </motion.div> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AhmedAmir604"
            className="px-3 py-1 flex gap-2 items-center rounded-sm bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 active-scale-105 transition
          cursor-pointer dark:bg-white/10 font-semibold text-[14px]"
          >
            <div className="">🎉</div>
            Check out my new project
          </a>

          <motion.span
            className="absolute right-0 bottom-0 text-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.p
        className="mt-4 !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* MERN Stack Developer | Driven to Build Seamless Full-Stack Solutions */}
        <span className="font-bold text-3xl ">
          {" "}
          MERN Stack Developer. Driven to Build Seamless Full-Stack Solutions
        </span>
        <span className="mt-4 block text-[18px] px-5 text-black dark:text-gray-400">
          Hello, I'm Ahmed I'm a website developer with 6 months of experience.
          I enjoy building sites & apps
        </span>
        {/* <span className="font-bold">Hello, I'm Ahmed.</span> I'm a{" "}
        <span className="font-bold">website developer</span> with{" "}
        <span className="font-bold">6 months</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>. */}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center font-medium text-lg gap-2 px-4 mt-5 justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group dark:bg-[#ececed] bg-black dark:text-gray-900 text-white px-7 py-3 flex item-center gap-2 text-sm rounded-full
          outline-none  dark:hover:bg-[#c7c7c7] hover:bg-gray-700 active-scale-105 transition"
        >
          Get in touch{" "}
          <BsArrowRight className="mt-1 opacity-70 group-hover:translate-x-1 transition " />
        </Link>
        <a
          href="/CV.pdf"
          className="group  px-6 py-3 flex item-center gap-2 text-sm rounded-full
          outline-none bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 active-scale-105 transition
          cursor-pointer dark:bg-white/10"
          download
        >
          Download CV{" "}
          <HiDownload className="mt-1 opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedamir604/"
          target="_blank"
          className="dark:bg-[#27272a] dark:text-[#fafafa] p-3 text-gray-700 flex items-center gap-2 rounded-full  hover:text-gray-950  bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 active-scale-105 transition
          cursor-pointer dark:bg-white/10 "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/AhmedAmir604"
          target="_blank"
          className="dark:bg-[#27272a] dark:text-[#fafafa] bg-gray-100 p-3 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 dark:hover:bg-white/20 active-scale-105 transition
          cursor-pointer dark:bg-white/10
          "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
