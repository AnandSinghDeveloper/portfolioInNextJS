"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";
import Link from "next/link";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed top-0 inset-x-0 mx-auto border border-transparent  dark:bg-transparent backdrop-blur-lg  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
          className
        )}
      >
        <div>
           <Link href="/" className="text-4xl leading-none font-bold"><span className="text-[#5918DF] text-3xl">{`<`} </span>Anand <span className="text-3xl text-[#5918DF]">{`/>`}</span></Link>
        </div>
       <div className="flex">
         {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 text-2xl items-center flex space-x-1 text-neutral-500 p-1 dark:hover:text-neutral-300 hover:text-neutral-200"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-xl font-bold  ">{navItem.name}</span>
            <span className=" px-1 opacity-50 sm:text-xm">{`/>`}</span> 
          </a>
        ))}
         <button className="border  text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] light:text-black text-white px-4 py-  rounded-xl">
          <span>Get In Touch</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#5918DF] to-transparent  h-px" />
        </button>
       </div>
       
      </motion.div>
    </AnimatePresence>
  );
};
