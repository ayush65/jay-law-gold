import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`font-heading mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] uppercase ${
            dark ? "text-sunbeam" : "text-auburn"
          }`}
        >
          <span
            className={`inline-block h-px w-8 ${dark ? "bg-sunbeam" : "bg-auburn"}`}
          />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl">
        {title}{" "}
        {accent && (
          <span className={dark ? "text-sunbeam" : "text-gradient-auburn"}>
            {accent}
          </span>
        )}
        <span className={dark ? "text-sunbeam" : "text-auburn"}>.</span>
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed sm:text-xl ${
            dark ? "text-white/70" : "text-navy/70"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}