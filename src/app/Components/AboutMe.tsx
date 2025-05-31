"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeBlock } from "./ui/code-block";

const AboutMe = () => {
  const code = `class AnandSingh {
  // I can, because I did.
  // My vast variety of skills is continuously expanding.
  constructor() {
    this.name = 'Anand Singh';
    this.dayOfBirthTimestamp = Date.parse('2005-03-01');
    this.email = 'anandsingh23112005@gmail.com';
  }
  
  workExperience() {
    return [
      { '2025-now': 'Full-stack Developer at Ishrey Consulting & Placement Services' }
    ];
  }
  
  education() {
    return [
      { '2024-2025': 'Full stack Developer course at Dice Academy' }
    ];
  }
}`;

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

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const codeBlockVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="w-full h-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 
        className="py-5 text-2xl md:text-3xl lg:text-4xl font-bold"
        variants={titleVariants}
      >
        About Me <span className="text-[#5918df]">{'/>'}</span>
      </motion.h1>

      <motion.div 
        className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5"
        variants={codeBlockVariants}
      >
        <CodeBlock 
          language="javascript"
          filename="AboutMe.js"
          highlightLines={[5, 7, 11, 16]}
          code={code}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;