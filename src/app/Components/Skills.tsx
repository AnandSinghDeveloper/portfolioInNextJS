"use client"
import React from 'react'
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../../components/magicui/animated-gradient-text";
import { SkillsData } from '@/app/config/config'

const Skills = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
      {SkillsData.map((skill, index) => {
        return (
          <div 
            key={index} 
            className="group relative mx-auto flex w-full items-center justify-center rounded-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-all duration-300 ease-out "
          >
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#5918df]/50 via-[#9c40ff]/50 to-[#5918df]/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <span className='text-lg sm:text-xl md:text-2xl lg:text-2xl flex-shrink-0'>
              {skill.icon}
            </span> 
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500/50" />
            <AnimatedGradientText className="text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              {skill.name}
            </AnimatedGradientText>
          </div>
        )
      })}
    </div>
  )
}

export default Skills