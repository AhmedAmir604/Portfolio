import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import superSlot from "@/public/superSlot.jpg";
import TourTales from "@/public/TourTales.jpg";
import TT from "@/public/TT.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import freightHub from "@/public/freightHub.png";
import linkShrink from "@/public/linkShrink(1).png";
import ghostBox from "@/public/ghostBox.png";
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
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const skillIcons = [
  <SiHtml5 key="html" />,
  <SiCss3 key="css" />,
  <IoLogoJavascript key="javascript" />,
  <SiTypescript key="typescript" />,
  <FaReact key="react" />,
  <SiRedux key="redux" />,
  <SiMicrosoftsqlserver key="mssql" />,
  <SiMysql key="mysql" />,
  <SiPostgresql key="postgresql" />,
  <SiMongodb key="mongodb" />,
  <SiSupabase key="supabase" />,
  <SiFirebase key="firebase" />,
  <FaNodeJs key="nodejs" />,
  <TbBrandNextjs key="nextjs" />,
  <SiExpress key="express" />,
  <SiGraphql key="graphql" />,
  <FaGitAlt key="git" />,
  <FaGithub key="github" />,
  <SiTailwindcss key="tailwind" />,
  <FaAws key="aws" />,
  <SiMeta key="meta" />,
  <FaLinux key="linux" />,
  <FaPython key="python" />,
  <FiFramer key="framer" />,
];

export const myProjects = [
  {
    title: "Ghost Box",
    description: "Fast, private temp mail with real-time inbox, auto-delete, and AWS-powered backend.",
    text: "GB",
    skills: ["TypeScript", "Next.js 14", "MongoDB", "AWS Lambda", "SES", "Node.js", "WebSocket"],
    links: {
      live: "https://ghostbox.ahmedamir.me",
      github: "https://github.com/AhmedAmir604/10-min-mailer",
      stars: "starsHere",
    },
  },
  {
    title: "LinkShink",
    description: "A sleek URL shortener built with React and Node.js, featuring link tracking, and powerful analytics tools.",
    text: "LS",
    skills: ["React 18", "Express", "Mongoose", "Axios", "Node.js", "REST API", "Analytics"],
    links: {
      live: "https://linkshink.ahmedamir.me",
      github: "https://github.com/AhmedAmir604/Muhammad-innovaxel-Ahmed",
      stars: "starsHere",
    },
  },
  {
    title: "Freight Hub",
    description: "A website for a trucking agency with multiple pages beautiful custom sliders and contact form.",
    text: "FH",
    skills: ["React", "Next.js", "Resend", "Tailwind", "Framer", "Vercel"],
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
    location: "University of Management and Technology",
    description:
      "I am a passionate student of BSCS with lean towards CyberSecurity.",
    icon: <LuGraduationCap />,
    date: "2024-present",
  },
  {
    title: "Full-Stack Developer",
    location: "AHBytes - Johar Town, LHR",
    description:
      "Built optimized Next.js dashboards (-40% load), added real-time WebSocket charts (+25% engagement), Meta API AI auto-replies, and AWS SES email on EC2.",
    icon: <FaReact />,
    date: "Jan 2025 - Jun 2025",
  },
  // {
  //   title: "Creative StoryBoard Writer",
  //   location: "Fiverr",
  //   description:
  //     "I worked as a story board writer for 6 months where i learn about creative and eye catching animations for instagram reels.",
  //   icon: <CgWorkAlt />,
  //   date: "2023-2024",
  // },
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
    title: "Ghost Box",
    description:
      "Fast, private temp mail with real-time inbox, sleek UI, auto-delete, full viewer, and AWS-powered backend.",
    tags: ["TypeScript", "React", "Next.js 14", "MongoDB", "AWS Lambda", "SES", "Node.js", "WebSocket", "Vercel"],
    imageUrl: ghostBox,
    url: "https://ghostbox.ahmedamir.me",
  },
  {
    title: "LinkShink - Modern URL Shortener",
    description:
      "A sleek URL shortener built with React and Node.js, featuring link tracking, and powerful analytics tools.",
    tags: ["React 18", "Express", "Mongoose", "Axios", "Node.js", "REST API", "Analytics"],
    imageUrl: linkShrink,
    url: "https://linkshink.ahmedamir.me",
  },
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
  "RTK",
  "MS SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase",
  "Node.js",
  "Next.js",
  "Express",
  "RESTful APIs",
  "GraphQL",
  "WebSockets",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "AWS Services",
  "Meta API",
  "Linux CLI",
  "Python",
  "Framer Motion",
] as const;
