'use client'
import React from 'react'
import { IconCloud } from "../../components/magicui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",  
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "c++",
  "MYSQL",
  "mongodb",
  "github",
  "gitlab",
  "visualstudiocode",
  
  "figma",
];
const SkillsGlobe = () => {

    const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <span className="relative flex   overflow-hidden">
      <IconCloud images={images} />
    </span>
  )
}

export default SkillsGlobe
