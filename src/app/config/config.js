import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { SiGitlab } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import ecommerce from "../../../public/photo-1664455340023-214c33a9d0bd.avif";
import spotify from "../../../public/31111689.jpg"
import tic from "../../../public/36118988.jpg"
import uber from "../../../public/46040760.jpg"
import dariy from "../../../public/47533589.jpg"
import employee from "../../../public/career-opportunities-concept-with-modern-flat-vector-52865458.avif"
import jobhunty from "../../../public/concept-landing-page-design-process_23-2148303914.jpg"
import chess from "../../../public/file-searching-concept-landing-page_52683-22221.jpg"
import work from "../../../public/search-engine-optimization-ideas-blog-promotion_882313-15675.jpg"







export const ProjectCardsData = [
  {
    title: "E-Commerce",
    description: "Full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
    image: ecommerce,
    link: "#",
    github: "#",
    techStack: ["React.js", "Tailwind CSS", "Shadcn UI", "Redux-Toolkit", "Node.js", "Express", "MongoDB"],
    category: "Full Stack"
  },
  {
    title: "Uber Clone",
    description: "Ride-sharing application with real-time location tracking and trip estimation.",
    image: uber,
    link: "#",
    github: "#",
    techStack: ["React.js", "Tailwind CSS", "Socket.io", "Node.js", "Express", "MongoDB"],
    category: "Full Stack"
  },
  {
    title: "Work Management System",
    description: "Productivity application for task organization and team collaboration.",
    image: work,
    link: "#",
    techStack: ["React.js", "Tailwind CSS", "Redux-Toolkit", "LocalStorage"],
    category: "Frontend"
  },
  {
    title: "Job Huntly",
    description: "Job search platform with advanced filtering and application tracking.",
    image: jobhunty,
    link: '#',
    github: "#",
    techStack: ["Next.js", "Tailwind CSS", "Redux-Toolkit", "Framer Motion"],
    category: "Frontend"
  },
  {
    title: "Employee Management System",
    description: "HR solution for managing employee records, attendance, and performance.",
    image: employee,
    link: "#",
    techStack: ["React.js", "Tailwind CSS", "Redux-Toolkit", "LocalStorage"],
    category: "Frontend"
  },
  {
    title: "Chess Game",
    description: "Multiplayer chess game with real-time moves and chat functionality.",
    image: chess,
    link: "#",
    github: "#",
    techStack: ["EJS", "Tailwind CSS", "Socket.io", "Node.js", "Express"],
    category: "Backend"
  },
  {
    title: "Diary Writing App",
    description: "Personal journal application with rich text editing and entry organization.",
    image: dariy,
    link: "#",
    techStack: ["EJS", "Tailwind CSS", "Node.js", "Express"],
    category: "Backend"
  },
  {
    title: "MiniSpotify",
    description: "Music player with playlist management and audio controls.",
    image: spotify,
    link: "#",
    github: "#",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend"
  },
  {
    title: "Tic Tac Toe",
    description: "Classic game with multiplayer mode and game history tracking.",
    image: tic,
    link: "#",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend"
  }
];

export const SkillsData = [
  {

    name: "React.js",
    icon: <IoLogoReact color="#61DAFB" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill color="#06B6D4" />,
  },
  {
    name: "Node.js",
    icon: <FaNode color="#549F45" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#404D55" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio color="#404D55"/>,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#F0DB4F"/>,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript color="#3178C6" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql color="#356992"/>,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#45AA3C" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-[#FF6700]" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel color="#404D55" />,

  },
  {
    name: "Docker",
    icon: <SiDocker color="#099CEC" />,
  },
  {
    name: "Git",
    icon: <SiGithub />,
  },
  {
    name: "GitLab",
    icon: <SiGitlab color="#FB6D26" />,
  },
  

  
]