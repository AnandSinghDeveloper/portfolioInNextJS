"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../Components/CustomCursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default");

  // Track mouse movement
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const onHover = () => setVariant("hover");
    const onLeave = () => setVariant("default");

    const elements = document.querySelectorAll("a, button, .hover-target");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // Animation variants for dot and outline
  const dotVariants = {
    default: {
      x: position.x - 5, // Center 10px dot
      y: position.y - 5,
      width: 7,
      height: 7,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      scale: 1,
    },
    hover: {
      x: position.x - 7, // Center 14px dot
      y: position.y - 7,
      width: 7,
      height: 7,
      backgroundColor: "rgba(255, 255, 255, 1)",
      scale: 1.2,
    },
  };

  const outlineVariants = {
    default: {
      x: position.x - 15, // Center 30px outline
      y: position.y - 15,
      width: 25,
      height: 25,
      border: "2px solid rgba(255, 255, 255, 0.5)",
      scale: 1,
      opacity: 0.6,
    },
    hover: {
      x: position.x - 20, // Center 40px outline
      y: position.y - 20,
      width: 50,
      height: 50,
      border: "2px solid rgba(59, 130, 246, 0.8)",
      scale: 1,
      opacity: 0.8,
    },
  };

  return (
    <  >
      {/* Animated Outline */}
      <motion.div 
        className={styles.outline}
        variants={outlineVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 400, damping: 50 }}
        initial={{ scale: 0.5, opacity: 0.4 }}
        
        
      />
      {/* Central Dot */}
      <motion.div
        className={styles.dot}
        variants={dotVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 600, damping: 50 }}
      />
    </>
  );
}