"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";

interface NumberCounterProps {
  value: number;
  label: string;
  duration?: number; // em segundos
  suffix?: string; // opcional (ex: "+", "%", "k")
}

export function NumberCounter({
  value,
  label,
  duration = 2,
  suffix = "+",
}: NumberCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [displayValue, setDisplayValue] = useState(0);

  // sincroniza motionValue -> state
  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration, ease: "easeOut" });
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <div ref={ref} className="numbers text-center">
      <motion.span className="block 2xl:text-4xl text-3xl font-bold text-orange ">
        {displayValue}
        {suffix}
      </motion.span>
      <small className="text-blue font-light text-sm">{label}</small>
    </div>
  );
}
