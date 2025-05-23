"use client"
import React from 'react'
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../../components/magicui/animated-gradient-text";
import { SkillsData } from '@/app/config/config'


const Skills = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-7  '>
      {
        SkillsData.map((skill, index) => {
          return(
           
        <div className="group relative mx-auto flex items-center justify-center rounded-full px-5 lg:px-7 py-2.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#5918df]/50 via-[#9c40ff]/50 to-[#5918df]/50 bg-[length:300%_100%] p-[1px]",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
    <span className='text-xl lg:text-2xl'> {skill.icon}</span> <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-lg lg:text-xl
      
       font-medium">
        {skill.name}
      </AnimatedGradientText>
     
    </div>
   
          )
        })
      }
    </div>
  )
}

export default Skills
