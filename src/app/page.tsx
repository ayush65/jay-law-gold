"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Scale,
  CalendarCheck,
} from "lucide-react";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PracticeTabs from "@/components/PracticeTabs";
import { values, contactDetails } from "@/lib/data";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-navy">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <span className="animate-float-slow pointer-events-none absolute -top-24 right-[-10%] size-[520px] rounded-full bg-auburn/20 blur-[140px]" />
        <span className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[520px] rounded-full bg-teal/20 blur-[140px]" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-heading pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 text-[14rem] font-extrabold tracking-tight whitespace-nowrap text-white/[0.03] lg:block xl:text-[19rem]"
          aria-hidden
        >
          JAY LAW
        </motion.p>

        <div className="container-default relative z-10 py-32">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.span
              variants={heroItem}
              className="font-heading mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase backdrop-blur"
            >
              <Scale size={14} />
              Barrister &amp; Solicitor · New Zealand
            </motion.span>

            <motion.h1
              variants={heroItem}
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
            </motion.h1>

            <motion.blockquote
              variants={heroItem}
              className="mt-8 max-w-2xl border-l-2 border-auburn pl-6"
            >
              <p className="text-lg leading-relaxed text-white/70 italic sm:text-xl">
                “The life of the law has not been logic; it has been
                experience.”
              </p>
              <cite className="mt-2 block text-sm font-semibold text-sunbeam not-italic">
                — Oliver Wendell Holmes Jr.
              </cite>
            </motion.blockquote>

            <motion.div
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
            </motion.div>

            <motion.dl
              variants={heroItem}
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {[
                ["2022", "Firm established"],
                ["2017", "Practising since"],
                ["2", "Islands served"],
              ].map(([num, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                    {num}
                  </dd>
                  <dd className="mt-1 text-sm text-white/55">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* ---------- ABOUT ---------- */}
      <section className="relative overflow-hidden bg-blush py-24 lg:py-32">
        <span className="pointer-events-none absolute top-10 right-[-120px] size-72 rounded-full bg-teal/15 blur-3xl" />
        <div className="container-default grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Experienced, approachable,
              <span className="text-gradient-auburn"> on your side</span>
              <span className="text-auburn">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5 text-lg leading-relaxed text-navy/75">
              <p>
                Jay Law was established in 2022 by{" "}
                <strong className="text-navy">Jayanthi Vallipuram (Jay)</strong>.
                A sole practitioner providing services in Family, Immigration,
                Employment and Commercial Law since 2017, she founded the firm
                on a simple belief — that expert legal care should feel human.
              </p>
              <p>
                In 2026, Jay Law expanded its services to the{" "}
                <strong className="text-navy">South Island</strong> with the
                support of Manik Sadat, who brings extensive personal
                experience and wisdom from his legal background.
              </p>
              <p>
                Together they bring a combination of experience, wisdom,
                insight and integrity — and we pride ourselves on the strong
                relationships we form with our clients.{" "}
                <em>Their issues become ours.</em>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PRACTICE AREAS ---------- */}
      <section className="relative overflow-hidden bg-peach py-24 lg:py-32">
        <span className="pointer-events-none absolute top-24 left-[-120px] size-80 rounded-full bg-white/40 blur-3xl" />
        <div className="container-default relative">
          <SectionHeading
            eyebrow="Our expertise"
            title="A client-focused legal service"
            accent="unlike any other"
            description="Three core areas of practice — handled with fixed clarity, fast responses and practical advice."
          />
          <div className="mt-14">
            <PracticeTabs />
          </div>
        </div>
      </section>

      {/* ---------- LEGAL AID ---------- */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-28">
        <span className="pointer-events-none absolute -top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-auburn/25 blur-[120px]" />
        <div className="container-default relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <span className="font-heading mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase">
              <span className="inline-block h-px w-8 bg-sunbeam" />
              Legal Aid
            </span>
            <h2 className="font-heading text-4xl leading-tight font-bold text-white sm:text-5xl">
              If you cannot afford a lawyer,{" "}
              <span className="text-sunbeam">Legal Aid</span> may be able to
              help<span className="text-auburn">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              You may be able to apply for Legal Aid. We can advise you whether
              or not you may be eligible to apply for aid, and we only provide
              Legal Aid for eligible Family Law proceedings.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-sunbeam transition-colors hover:text-white"
            >
              Ask us about your eligibility
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Family Law", "Relationship property, protection orders and care matters."],
                ["Oranga Tamariki", "Assistance in all dealings with the Ministry."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <h3 className="font-heading text-xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- VALUES / WHY US ---------- */}
      <section className="relative overflow-hidden bg-jade py-24 lg:py-32">
        <span className="grid-noise pointer-events-none absolute inset-0" />
        <div className="container-default relative">
          <SectionHeading
            dark
            eyebrow="Why Jay Law"
            title="The strong relationships we form with our clients"
            accent="set us apart"
            description="Our dynamic team combines experience, wisdom, insight and integrity to help resolve your legal issues."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl bg-white/[0.06] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                  <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-sunbeam text-navy transition-transform duration-500 group-hover:rotate-6">
                    <value.icon size={22} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-28">
        <div className="container-default relative text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Ready to get in touch<span className="text-auburn">?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
              Your first consultation is free. Call, email, or book directly
              and we&apos;ll be in touch within one working day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="squircle-sm group inline-flex items-center gap-3 bg-auburn px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-auburn-mid hover:shadow-2xl hover:shadow-auburn/40"
              >
                Book your consultation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={contactDetails.north.phoneHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-9 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                {contactDetails.north.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}