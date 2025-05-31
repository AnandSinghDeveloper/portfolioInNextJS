import React from 'react'
import { ContectData } from '../config/config'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      color: '#5918df',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  }

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  }

  return (
    <motion.div 
      className='w-full h-full text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 
        className='p-10 text-2xl lg:text-3xl   font-bold w-full h-full' 
        variants={titleVariants}
      >
        Contact <span className='text-[#5918df]'>{'/>'}</span>
      </motion.h2>
      
      <motion.div 
        className='text-lg font-medium mb-7'
        variants={itemVariants}
      >
        Find me on:
      </motion.div>
      
      <div className='grid grid-cols-2 ml-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {ContectData.map((contact, index) => {
          return (
            <motion.a
              href={contact.link}
              key={index}
              className='flex text-2xl items-center gap-2'
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              {contact.icon}
              <span className='text-lg text-[#5918DF] '>{contact.name}</span>
            </motion.a>
          )
        })}
      </div>

      <motion.button className='mt-7 px-8 py-2 rounded-2xl lg:px-10 lg:py-3 text-xl bg-[#5918df] '>Get In Touch</motion.button>
    </motion.div>
  )
}

export default Footer