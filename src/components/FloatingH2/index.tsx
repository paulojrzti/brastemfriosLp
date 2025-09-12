"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";

export function FloatingH2({
  children,
  amplitude = 20,
  speed = 1,
}: {
  children: React.ReactNode;
  amplitude?: number;
  speed?: number;
}) {
  const y = useMotionValue(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useAnimationFrame((t) => {
    // t é em ms → transformo pra segundos e aplico senoide
    const newY = Math.sin((t / 1000) * speed) * amplitude;
    y.set(newY);
  });

  return (
    <motion.h2
      ref={ref}
      style={{ y }}
      className="hidden md:flex text-blue opacity-30 font-bold text-9xl top-0 mb-4 absolute right-0"
    >
      {children}
    </motion.h2>
  );
}
