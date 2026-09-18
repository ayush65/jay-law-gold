"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** Transform-only (no opacity keyframes) — safe for above-the-fold / LCP text. */
  transformOnly?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.7,
  className,
  once = true,
  transformOnly = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const motionY = reduce ? 0 : y;
  const motionX = reduce ? 0 : x;

  return (
    <m.div
      className={className}
      initial={
        transformOnly
          ? { y: motionY, x: motionX }
          : { opacity: 0, y: motionY, x: motionX }
      }
      whileInView={
        transformOnly
          ? { y: 0, x: 0 }
          : { opacity: 1, y: 0, x: 0 }
      }
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}