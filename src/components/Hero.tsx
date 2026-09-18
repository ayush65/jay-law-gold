"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, CalendarCheck, Scale } from "lucide-react";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

/**
 * Transform-only animation (no opacity keyframes) so the headline is
 * painted in the server HTML before hydration — the large above-the-fold
 * text stays part of the LCP render instead of starting invisible.
 */
const heroItem = {
  hidden: { y: 34 },
  show: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const heroTitle = {
  hidden: { y: 18 },
  show: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stats = [
  ["2022", "Firm established"],
  ["2017", "Practising since"],
  ["2", "Islands served"],
] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-navy">
      <div className="grid-noise pointer-events-none absolute inset-0" />
      <span className="animate-float-slow pointer-events-none absolute -top-24 right-[-10%] size-[520px] rounded-full bg-auburn/20 blur-[140px]" />
      <span className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[520px] rounded-full bg-teal/20 blur-[140px]" />

      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="font-heading pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[14rem] font-extrabold tracking-tight text-white/[0.03] lg:block xl:text-[19rem]"
        aria-hidden
      >
        JAY LAW
      </m.p>

      <div className="container-default relative z-10 py-32">
        <m.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <m.span
            variants={heroItem}
            className="font-heading mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase backdrop-blur"
          >
            <Scale size={14} />
            Barrister &amp; Solicitor · New Zealand
          </m.span>

          <m.h1
            variants={heroTitle}
            className="font-heading text-5xl leading-[1.02] font-extrabold text-white sm:text-6xl lg:text-8xl"
          >
            Leading firm in
            <span className="block">
              <span className="text-sunbeam">Property</span>,{" "}
              <span className="text-peach">Immigration</span>
            </span>
            <span className="block text-gradient-warm">
              Family &amp; Commercial Law
            </span>
          </m.h1>

          <m.blockquote
            variants={heroItem}
            className="mt-8 max-w-2xl border-l-2 border-auburn pl-6"
          >
            <p className="text-lg leading-relaxed text-white/70 italic sm:text-xl">
              &ldquo;The life of the law has not been logic; it has been
              experience.&rdquo;
            </p>
            <cite className="mt-2 block text-sm font-semibold text-sunbeam not-italic">
              — Oliver Wendell Holmes Jr.
            </cite>
          </m.blockquote>

          <m.div
            variants={heroItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="squircle-sm group inline-flex items-center justify-center gap-3 bg-auburn px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-auburn-mid hover:shadow-2xl hover:shadow-auburn/40"
            >
              <CalendarCheck size={20} />
              Book a free first consultation
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore our services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </m.div>

          <m.dl
            variants={heroItem}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map(([num, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  {num}
                </dd>
                <dd className="mt-1 text-sm text-white/55">{label}</dd>
              </div>
            ))}
          </m.dl>
        </m.div>
      </div>
    </section>
  );
}