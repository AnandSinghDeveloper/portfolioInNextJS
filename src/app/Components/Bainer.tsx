'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ContainerTextFlip } from './ui/container-text-flip';

const Bainer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textFlipVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className='pt-20 md:pt-32 ml-5 md:ml-10 w-full font-robotoCondensed'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div>
        <motion.h1 
          className="text-4xl ml-[-20] md:text-5xl font-bold mb-3 text-white"
          variants={itemVariants}
        >
          Hi, My name is <span className='text-[#5918df]'>Anand Singh</span>    
        </motion.h1>
        
        <motion.h1 
          className="text-3xl ml-[-20] md:text-5xl font-bold mb-3 text-neutral-100"
          variants={itemVariants}
        >
          I design and develop{' '}
          <motion.span variants={textFlipVariants}>
            <ContainerTextFlip words={["WebApps", "Mobile Apps", "UI/UX Design", "Frontend", "Backend", "Full Stack"]} />
          </motion.span>
        </motion.h1>
        
        <motion.h3 
          className='text-sm mt-10 lg:ml-35 lg:text-xl opacity-30'
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 0.3,
              x: 0,
              transition: {
                delay: 1.2,
                duration: 0.5
              }
            }
          }}
        >
          Let me show you ....
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default Bainer;