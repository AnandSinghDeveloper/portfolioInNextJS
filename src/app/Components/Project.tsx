import React from 'react'
import { IconCloud } from '@/components/magicui/icon-cloud'


 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",  
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "MySQL",
  "vercel",
  "C++",  
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio", 
  "figma",
  "tailwindcss",
];

const Project = () => {

   const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <div className='h-screen w-full flex items-center justify-center  mt-50'>
     <IconCloud  images={images}   />
    </div>
  )
}

export default Project
