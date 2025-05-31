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
import ecommerce from "../../../public/e-co.jpg";
import spotify from "../../../public/spotify.avif"
import tic from "../../../public/tic-tac-toe.jpg"
import uber from "../../../public/uber.jpg"
import dariy from "../../../public/dairy.jpg"
import employee from "../../../public/employs.jpg"
import jobhunty from "../../../public/jobHunt.jpg"
import chess from "../../../public/chess.jpg"
import work from "../../../public/work2.jpg"


import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { TbBrandLeetcode } from "react-icons/tb";




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

export const ContectData =[
  
  {
    name: "Email",
    icon: <IoMdMail color="#1FA0E5" />,
    link: "mailto:lenoxon@gmail.com"
  },
  {
    name: "Gmail",
    icon: <BiLogoGmail />,
    link: "https://mail.google.com/mail/u/0/?fs=1&to=lenoxon@gmail.com"   

  },
  {
    name: "Github",
    icon: <SiGithub />,
    link: "https://github.com/AbhishekSharma-07"
  },
  {
    name: "Leetcode",
    icon: <TbBrandLeetcode color="#E7A41F" />,
    link: "https://leetcode.com/lenoxon/"

  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin color="#0078D4" />,
    link: "https://www.linkedin.com/in/lenoxon/"
  },{
    name: "Discord",
    icon: <FaDiscord color="#8C9EFF" />,
    link: "https://discord.gg/9w4r4u3"
  }
  ,{
    name: "Hackerrank",
    icon: <FaHackerrank />,
    link: "https://www.hackerrank.com/lenoxon"
  },
  {
    name: "Stack Overflow",
    icon: <FaStackOverflow />,
    link: "https://stackoverflow.com/users/14863186/lenoxon"
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    link: "https://twitter.com/lenoxon"
  },
  {
    name: "Instagram",
    icon: <FaInstagramSquare color="#E6D1DA" />,
    link: "https://www.instagram.com/lenoxon/"
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare color="#3F51B5" />,
    link: "https://www.facebook.com/lenoxon/"
  },
  {
    name: "Snapchat",
    icon: <FaSnapchat color="#FEDE00" />,
    link: "https://www.snapchat.com/add/lenoxon"
  }
  

]