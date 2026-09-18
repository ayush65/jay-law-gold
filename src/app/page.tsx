import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PracticeTabs from "@/components/PracticeTabs";
import { values, contactDetails } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
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
        <span className="pointer-events-none absolute -top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-sunbeam/25 blur-[120px]" />
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
                className="squircle-sm group inline-flex items-center gap-3 bg-auburn px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sunbeam hover:text-navy hover:shadow-sunbeam/40"
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