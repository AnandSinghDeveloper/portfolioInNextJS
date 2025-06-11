'use client';
import React from 'react'
import { ContectData } from '../config/config'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { useRouter } from "next/navigation";



const Footer = () => {

 const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacit: 0, scale: 0.8 },
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
    hidden: { x: -50, opacity: 0, scale: 0.8 },
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
      className='w-full h-full text-white '
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 
        className='pb-20 text-5xl lg:text-5xl lg:ml-[-120px] font-bold w-full h-full' 
        variants={titleVariants}
      >
        Contact <span className='text-[#5918df]'>{'/>'}</span>
      </motion.h2>
      
      <motion.div 
        className='text-4xl lg:ml-[-110px]  font-medium mb-7'
        variants={itemVariants}
      >
        Find me on:
      </motion.div>
      
      <div className='grid grid-cols-2 ml-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {ContectData.map((contact, index) => {
          return (
            <motion.div className='flex items-center text-2xl gap-2' key={index}>
              <Image src={contact.icon} alt={contact.name} width={40} height={40} />
              <a href={contact.link} target="_blank" rel="noreferrer">{contact.name}</a>
            </motion.div>
          )
        })}
      </div>
      
      <button onClick={()=>{
        router.push('/connect')
      }} className='mt-7 px-8 py-2 rounded-3xl lg:px-15 lg:py-4 text-xl bg-[#5918df] '>Get In Touch</button>
    </motion.div>
  )
}

export default Footer