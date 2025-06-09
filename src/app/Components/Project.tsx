"use client";

import React from 'react';
import { ProjectCardsData } from '@/app/config/config';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ImGithub } from "react-icons/im";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BorderBeam } from "../../components/magicui/border-beam";

const Project = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -100px 0px" });

  // Animation for continuous left movement of tech stack
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: '-100%',
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          },
        },
      });
    };
    animate();
  }, [controls]);

  // Simple fade-in animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <div ref={containerRef} className="px-4 sm:px-6 lg:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 text-2xl lg:text-3xl font-bold w-full text-start"
      >
        Projects <span className="text-[#5918df]">{'/>'}</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-10 w-full h-full lg:w-[90%]">
        {ProjectCardsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.5, 
                delay: index * 0.1 
              } 
            } : {}}
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-[18rem] lg:w-[22rem] mx-auto rounded-xl p-6 transition-all mb-2 h-110 border border-gray-800">
                <CardItem
                
                  translateZ="50"
                  className="text-xl font-bold text-neutral-100 w-full shadow-2xl flex items-center justify-between"
                >
                  <span>{project.title}</span>
                  <button className="border text-sm font-medium relative border-neutral-400 dark:border-white/[0.2] text-neutral-400 px-2 py-0.5 rounded-full">
                    <span>{project.category}</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f1eff6] to-transparent h-px" />
                  </button>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-full mt-2 line-clamp-3"
                >
                  {project.description}
                </CardItem>

                <CardItem className="mt-4 w-full overflow-hidden">
                  <motion.div
                    className="flex gap-2"
                    animate={controls}
                    style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
                  >
                    {[...project.techStack, ...project.techStack].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="inline-block m-1 border border-gray-700 bg-gray-800/50 px-3 py-1 rounded-full text-neutral-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </motion.div>
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height={1000}
                    width={1000}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-200 hover:bg-gray-700/50 transition-colors"
                  >
                    Live Demo →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold text-neutral-200 hover:bg-gray-700/50 transition-colors"
                  >
                    <ImGithub /> Github
                  </CardItem>
                </div>
             <BorderBeam size={300}  duration={8}  />

              </CardBody>
           
            </CardContainer>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;