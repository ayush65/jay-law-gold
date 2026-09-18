import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "From a sole practitioner to a two-island practice — the story of Jay Law, founded in 2022 by Jayanthi Vallipuram and expanded in 2026 with Manik Sadat.",
  alternates: {
    canonical: "/about",
  },
};

const timeline = [
  {
    year: "2017",
    title: "The journey begins",
    text: "Jayanthi Vallipuram starts practising as a sole practitioner in Family, Immigration, Employment and Commercial Law.",
  },
  {
    year: "2022",
    title: "Jay Law is established",
    text: "Jayanthi Vallipuram (Jay) establishes Jay Law — a firm built on strong relationships and practical, human legal advice.",
  },
  {
    year: "2026",
    title: "Expansion to the South Island",
    text: "Jay Law expands its services to the South Island with the support of Manik Sadat, extending experience and wisdom to more New Zealanders.",
  },
];

const team = [
  {
    name: "Jayanthi Vallipuram",
    role: "Principal · Barrister & Solicitor",
    initials: "J",
    color: "bg-auburn",
    island: "North Island",
    bio: "Jay has been a sole practitioner providing services in Family, Immigration, Employment and Commercial Law since 2017. In 2022 she founded Jay Law on the belief that expert legal care should feel human — fixed clarity, fast responses and advice you can actually use.",
    tags: ["Family Law", "Immigration", "Employment", "Commercial"],
  },
  {
    name: "Manik Sadat",
    role: "Associate",
    initials: "S",
    color: "bg-teal",
    island: "South Island",
    bio: "Sadat joined Jay Law in 2026, bringing extensive personal experience and wisdom from his legal background. His presence allowed Jay Law to expand its services to the South Island, extending the firm's reach and depth.",
    tags: ["Property", "Commercial", "South Island clients"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white lg:pt-48">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -top-28 right-[-6%] size-[460px] rounded-full bg-teal/20 blur-[130px]" />
        <div className="container-default relative">
          <Reveal transformOnly>
            <span className="font-heading mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase">
              <span className="inline-block h-px w-8 bg-sunbeam" />
              Our story
            </span>
            <h1 className="font-heading max-w-3xl text-5xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              A firm built on{" "}
              <span className="text-gradient-warm">relationships</span>
              <span className="text-auburn">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              From a sole practitioner to a two-island practice — this is the
              story of Jay Law.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-blush py-24 lg:py-32">
        <div className="container-default">
          <SectionHeading
            eyebrow="Milestones"
            title="How Jay Law came to"
            accent="be"
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute top-0 bottom-0 left-4 w-px bg-auburn/25 sm:left-1/2" />
            <ol className="space-y-12">
              {timeline.map((item, i) => (
                <li key={item.year} className="relative">
                  <Reveal delay={i * 0.1}>
                    <div
                      className={`flex flex-col gap-4 pl-14 sm:w-1/2 sm:pl-0 ${
                        i % 2 === 0
                          ? "sm:pr-14 sm:text-right"
                          : "sm:ml-auto sm:pl-14"
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-4 grid size-7 -translate-x-1/2 place-items-center rounded-full border-4 border-blush bg-auburn sm:left-1/2 ${
                          i % 2 === 0 ? "" : ""
                        }`}
                      >
                        <span className="size-1.5 rounded-full bg-white" />
                      </span>
                      <span className="font-heading text-sm font-bold tracking-[0.2em] text-auburn uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-2xl font-bold">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-navy/70">{item.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-navy py-20">
        <div className="container-default">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote size={44} className="mx-auto text-auburn" />
            <blockquote className="font-heading mt-6 text-2xl leading-relaxed font-semibold text-white sm:text-3xl">
              “The life of the law has not been logic; it has been
              experience.”
            </blockquote>
            <cite className="mt-4 block text-sm font-bold tracking-wide text-sunbeam not-italic">
              — Oliver Wendell Holmes Jr.
            </cite>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section id="our-people" className="scroll-mt-24 bg-peach py-24 lg:py-32">
        <div className="container-default">
          <SectionHeading
            eyebrow="Our people"
            title="Who you'll be"
            accent="working with"
            description="A dynamic team that combines experience, wisdom, insight and integrity to resolve your legal issues."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.12}>
                <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden bg-navy">
                    <div className={`grid-noise absolute inset-0`} />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`font-heading grid size-24 place-items-center rounded-3xl ${member.color} text-4xl font-extrabold text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105`}
                      >
                        {member.initials}
                      </span>
                    </span>
                    <span className="absolute top-4 right-4 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur">
                      {member.island}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl font-bold">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-auburn">
                          {member.role}
                        </p>
                      </div>
                      <span className="squircle-sm inline-grid size-11 shrink-0 place-items-center bg-blush text-auburn">
                        <Users size={20} />
                      </span>
                    </div>
                    <p className="mt-5 leading-relaxed text-navy/75">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="squircle-sm bg-peach/60 px-3.5 py-1.5 text-xs font-semibold text-navy/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-auburn px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-auburn-mid hover:shadow-2xl hover:shadow-auburn/30"
            >
              Meet us over a free first consultation
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}