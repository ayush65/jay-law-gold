"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the animation features the site needs (variants, exit,
 * whileInView, whileHover/tap/focus) instead of the full Framermotion
 * bundle. All motion components in this app must use `m` from framer-motion,
 * never `motion`, so features resolve through this lazy registry.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}