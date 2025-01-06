import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import superSlot from "@/public/superSlot.jpg";
import TourTales from "@/public/Tourtales.png";
import TT from "@/public/TT.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import freightHub from "@/public/freightHub.png";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { PiMountainsFill } from "react-icons/pi";

export const skillIcons = [
  <FaNodeJs key="nodejs" />,
  <FaReact key="react" />,
  <SiExpress key="express" />,
  <SiMongodb key="mongodb" />,
  <SiTailwindcss key="tailwind" />,
  <SiWebpack key="webpack" />,
  <FaGitAlt key="git" />,
  <TbBrandNextjs key="nextjs" />,
  <FiFramer key="framer" />,
  <SiTypescript key="typescript" />,
  <IoLogoJavascript key={"javascript"} />,
  <SiMicrosoftsqlserver key={"microsoftSql"} />,
];

export const myProjects = [
  {
    title: "TourTales",
    description: "Complete MERN Stack app for booking Tours and many more...",
    text: "TT",
    skills: ["Node.js", " Express.js", " MongoDB ", "React.js", "TailwindCSS"],
    links: {
      live: "https://tourtales-p02r.onrender.com",
      github: "https://github.com/AhmedAmir604/TourTales",
      stars: "starsHere",
    },
  },
  {
    title: "FreightHub",
    description:
      "FreightHub is a modern logistics platform built using Next.js.",
    text: "FH",
    skills: ["Next.js", " React.js", "TypeScript", "TailwindCSS", "Resend"],
    links: {
      live: "https://freight-hub-inky.vercel.app/",
      github: "https://github.com/AhmedAmir604/FreightHub",
      stars: "starsHere",
    },
  },
  {
    title: "PortfolioSite",
    description: "A dynamic portfolio showcasing my web development skills.",
    text: "PS",
    skills: [
      "FramerMotion",
      "Next.js",
      " React.js",
      "TypeScript",
      "TailwindCSS",
      "Resend",
    ],
    links: {
      live: "https://freight-hub-inky.vercel.app/",
      github: "https://github.com/AhmedAmir604/FreightHub",
      stars: "starsHere",
    },
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "Univeristy of Management and Technology",
    description:
      "I am a passionate student of BSCS with lean towards CyberSecurity.",
    icon: <LuGraduationCap />,
    date: "2024-present",
  },
  {
    title: "Creative StoryBoard Writer",
    location: "Fiverr",
    description:
      "I worked as a story board writer for 6 months where i learn about creative and eye catching animations for instagram reels.",
    icon: <CgWorkAlt />,
    date: "2023-2024",
  },
  {
    title: "Website Developer",
    location: "Fiverr",
    description:
      "I'm now a MERN Stack developer working as a freelancer. I'm open to full-time opportunities.",
    icon: <FaReact />,
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Freight Hub",
    description:
      "A website for a trucking agency with multiple pages beautiful custom sliders and contact form.",
    tags: ["React", "Next.js", "Resend", "Tailwind", "Framer", "Vercel"],
    imageUrl: freightHub,
    url: "https://freight-hub-inky.vercel.app/",
  },
  {
    title: "SuperSlot",
    description: `A booking platform using the MERN stack, Live maps, Secure JWT authentication,
  RESTful APIs, Eeminder mails, Active jobs and more.\n
  `,
    tags: [
      "MapBox Api",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Stripe",
    ],
    imageUrl: superSlot,
    url: "https://supersslot.onrender.com/",
  },
  {
    title: "TourTales",
    description: `Tour booking platform using MERN stack, integrated JWT for secure
  authentication, RESTful APIs, Complete Emailing system and payment methods. Platform handles complex
  queries!`,
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind", "Stripe"],
    imageUrl: TourTales,
    url: "https://tourtales-p02r.onrender.com/",
  },
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies. I created full-stack web application including front-end and back-end.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    url: "#",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I developed the back-end of this application. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
    url: "#",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MS SQL",
  "Express",
  "Python",
  "Framer Motion",
] as const;
