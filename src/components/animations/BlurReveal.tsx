"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BlurReveal({ children, className = "", delay = 0 }: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
