"use client"
import React from 'react'
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../../components/magicui/animated-gradient-text";
import { SkillsData } from '@/app/config/config'
import { motion } from 'framer-motion'

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 20px rgba(89, 24, 223, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15
      }
    }
  }

  const gradientColors = {
    from: '#5918df',
    via: '#9c40ff',
    to: '#ff40e6'
  }

  return (
    <motion.div 
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 w-full lg:w-[150%] lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      {SkillsData.map((skill, index) => {
        return (
          <motion.div 
            key={index} 
            className="group relative mx-auto flex w-full items-center justify-center rounded-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 shadow-[inset_0_-8px_10px_#8fdfff1f] bg-white/5 backdrop-blur-sm"
            variants={item}
            whileHover="hover"
          >
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r p-[1px]",
              )}
              style={{
                backgroundImage: `linear-gradient(to right, ${gradientColors.from}/50, ${gradientColors.via}/50, ${gradientColors.to}/50)`,
                backgroundSize: '300% 100%',
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
              }}
            />
            
            <motion.span 
              className='text-lg sm:text-xl md:text-2xl lg:text-2xl flex-shrink-0'
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              {skill.icon}
            </motion.span> 
            
            <motion.hr 
              className="mx-2 h-4 w-px shrink-0 bg-neutral-500/50" 
              whileHover={{ scaleY: 1.5, backgroundColor: gradientColors.via }}
            />
            
            <AnimatedGradientText 
              className="text-sm sm:text-base md:text-lg lg:text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis"
             
            >
              {skill.name}
            </AnimatedGradientText>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Skills