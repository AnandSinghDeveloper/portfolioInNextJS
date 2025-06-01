"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren"
      } 
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#5918df",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      x: 5,
      color: "#5918df",
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const mobileNavItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      className="w-full sticky  bgackdrop-blur-sm text-white px-4 sm:px-6 lg:px-8 py-4 z-50 "
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl sm:text-3xl font-bold flex items-center">
            <span className="text-[#5918df]">{'<'}</span>
            Anand
            <span className="text-[#5918df]">{'/>'}</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={navItemVariants}
              whileHover="hover"
            >
              <Link 
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`} 
                className="text-lg font-medium flex items-center px-1"
              >
                {item}
                <motion.span 
                  className="ml-1 opacity-50"
                  whileHover={{ opacity: 1 }}
                >
                  {'/>'}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="text-2xl focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </SheetTrigger>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={overlayVariants}
                  className="fixed inset-0 bg-black/50 z-40 md:hidden"
                  onClick={() => setIsOpen(false)}
                />
              )}
            </AnimatePresence>

            <SheetContent 
              side="right" 
              className="bg-[#0a0a0a] text-white border-l border-white/10 rounded-bl-2xl rounded-tl-2xl w-[220px]"
            >
              <motion.div
                className="flex flex-col space-y-6 mt-12 px-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {mobileNavItems.map((item, i) => (
                  <motion.div 
                    key={item}
                    custom={i}
                    variants={mobileItemVariants}
                    whileHover="hover"
                  >
                    <Link
                      href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                      className="text-xl font-medium block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.nav>
  );
}