import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Shield,
  Users,
  Home,
  Briefcase,
  Stamp,
  Building2,
  FileSearch,
  Globe,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { AccordionGroup } from "@/components/Accordion";
import { businessServices, contactDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legal Services",
  description:
    "Property, Immigration, Family and Commercial Law across New Zealand — with Employment Law experience since 2017. Explore our practice areas, from conveyancing to complex visa cases.",
  alternates: {
    canonical: "/services",
  },
};

const anchors = [
  { label: "Family Law", href: "#family" },
  { label: "Elders Law", href: "#elders" },
  { label: "Immigration", href: "#immigration" },
  { label: "Legal Aid", href: "#legal-aid" },
];

const familyItems = [
  {
    title: "Relationship Property",
    content:
      "When you separate, decisions need to be made about how your property is divided. We can assist you with negotiating a settlement and provide expert practical advice so you obtain the best property settlement for your situation. We also prepare Contracting Out Agreements (commonly known as prenuptial agreements) to protect your assets in the event that you separate from your partner.",
    details: [
      "Property division and settlement negotiation",
      "Contracting Out Agreements (prenuptial agreements)",
      "Expert practical advice on obtaining the best settlement",
    ],
  },
  {
    title: "Domestic Violence",
    content:
      "We can talk through these issues with you and help you apply for a Protection Order, property order and furniture order. A Protection Order will protect you and your children from family violence.",
    details: [
      "Protection Order applications",
      "Property orders and furniture orders",
      "Guidance through the court process",
    ],
  },
  {
    title: "Oranga Tamariki",
    content:
      "Oranga Tamariki (formerly known as Child, Youth & Family) deals with care and safety issues relating to children. We can assist you in your dealings with the Ministry.",
    details: [
      "Care and protection matters",
      "Representation at meetings with the Ministry",
      "Advice on your rights and parenting options",
    ],
  },
];

const visaTypes = ["Student Visas", "Visitor Visas", "Work Visas", "Resident Visas", "Family Visas"];
const employerServices = ["Employer Accreditation", "Employee Visas", "Job Check"];

const complexCases = [
  {
    title: "Suitable Visa Opinion",
    text: "Legal opinion on which visa is suitable for you, having considered the background of your immigration history.",
  },
  {
    title: "PPI Response",
    text: "When Immigration NZ informs you it holds potentially prejudicial information, we respond for you.",
  },
  {
    title: "RFI Response",
    text: "Responding to Immigration NZ requests for further information.",
  },
  {
    title: "DLN Response",
    text: "Responding to a Deportation Liability Notice.",
  },
  {
    title: "Section 61 Requests",
    text: "When your visa has expired and you want to apply for another visa.",
  },
  {
    title: "Family Violence",
    text: "When you are a spouse on a temporary visa and need another visa because of family violence.",
  },
  {
    title: "Ministerial Appeals",
    text: "When you have exhausted all avenues through Immigration NZ and want to appeal to the Minister.",
  },
  {
    title: "Tribunal Appeals",
    text: "Appeals to the Immigration and Protection Tribunal.",
  },
  {
    title: "High Court",
    text: "Judicial review and appeals to the High Court.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white lg:pt-48">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -top-32 right-[-8%] size-[480px] rounded-full bg-sunbeam/25 blur-[130px]" />
        <div className="container-default relative">
          <Reveal transformOnly>
            <span className="font-heading mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase">
              <span className="inline-block h-px w-8 bg-sunbeam" />
              Our expertise
            </span>
            <h1 className="font-heading max-w-3xl text-5xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              Legal services, focused on{" "}
              <span className="text-gradient-warm">your wellbeing</span>
              <span className="text-auburn">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Property, Immigration, Family and Commercial Law — with
              Employment Law experience dating back to 2017 — handled by a team
              combining experience, wisdom, insight and integrity.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <nav className="mt-12 flex flex-wrap gap-3" aria-label="On this page">
              {anchors.map((a, i) => (
                <a
                  key={a.href}
                  href={a.href}
                  className={`squircle-sm border px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    i === 0
                      ? "bg-auburn border-auburn hover:bg-sunbeam hover:text-navy"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {a.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* FAMILY LAW */}
      <section id="family" className="scroll-mt-24 bg-blush py-24 lg:py-32">
        <div className="container-default grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <span className="squircle-sm mb-6 inline-grid size-14 place-items-center bg-auburn text-white">
              <Scale size={26} />
            </span>
            <h2 className="font-heading text-4xl leading-tight font-bold sm:text-5xl">
              Family <span className="text-gradient-auburn">Law</span>
              <span className="text-auburn">.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
              Family matters are deeply personal. We meet you with empathy,
              practical advice and a clear path forward — whether you&apos;re
              separating, need protection, or dealing with Oranga Tamariki.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-blush p-5 text-sm text-navy/70">
              <Shield size={20} className="shrink-0 text-auburn" />
              Confidential, compassionate support from someone who has
              walked this path with many families.
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <AccordionGroup items={familyItems} />
          </Reveal>
        </div>
      </section>

      {/* ELDERS LAW */}
      <section id="elders" className="scroll-mt-24 bg-peach py-24 lg:py-32">
        <div className="container-default">
          <Reveal className="max-w-3xl">
            <span className="squircle-sm mb-6 inline-grid size-14 place-items-center bg-teal text-white">
              <Home size={26} />
            </span>
            <h2 className="font-heading text-4xl leading-tight font-bold sm:text-5xl">
              Elders <span className="text-gradient-auburn">Law</span>
              <span className="text-auburn">.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
              Property, business and commercial expertise — from your first
              home purchase to complex commercial restructurings. We recommend
              having your lawyer involved right from the start.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Property */}
            <Reveal>
              <div className="group flex h-full flex-col rounded-3xl bg-white p-9 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2">
                <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-peach text-auburn">
                  <Home size={22} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Property</h3>
                <p className="mt-4 leading-relaxed text-navy/70">
                  Looking to purchase or sell a property? We prepare the sale
                  and purchase agreement and carry out conveyancing — and we
                  recommend having your lawyer involved right from the start.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Sale and purchase agreements", "Conveyancing", "Advice from day one"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm font-medium text-navy/80"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-auburn" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Reveal>

            {/* Business */}
            <Reveal delay={0.12}>
              <div className="group flex h-full flex-col rounded-3xl bg-navy p-9 text-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2">
                <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-sunbeam text-navy">
                  <Briefcase size={22} />
                </span>
                <h3 className="font-heading text-2xl font-bold">Business</h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  We support businesses of every size with a full suite of
                  commercial legal services.
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {businessServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-white/85"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-sunbeam" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-white/70 p-8 backdrop-blur sm:flex-row sm:items-center">
              <span className="squircle-sm inline-grid size-12 shrink-0 place-items-center bg-mint text-jade">
                <HeartHandshake size={22} />
              </span>
              <p className="leading-relaxed text-navy/80">
                Our dynamic team, <strong>Jay</strong> and <strong>Sadat</strong>,
                bring a combination of experience, wisdom, insight and
                integrity to help resolve your legal issues. We pride ourselves
                on the strong relationships we form with our clients —{" "}
                <em>their issues become ours</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMMIGRATION */}
      <section id="immigration" className="scroll-mt-24 bg-softblue py-24 lg:py-32">
        <div className="container-default">
          <Reveal className="max-w-3xl">
            <span className="squircle-sm mb-6 inline-grid size-14 place-items-center bg-jade text-white">
              <Globe size={26} />
            </span>
            <h2 className="font-heading text-4xl leading-tight font-bold sm:text-5xl">
              Immigration<span className="text-auburn">.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
              Early consultation with us ensures that your application is
              accurate, complete and strategically positioned — giving you the
              best chance to achieve your immigration objectives in New
              Zealand.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* Visas */}
            <Reveal>
              <div className="h-full rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-softblue text-jade">
                  <Stamp size={22} />
                </span>
                <h3 className="font-heading text-xl font-bold">Visa Applications</h3>
                <ul className="mt-5 space-y-2.5">
                  {visaTypes.map((v) => (
                    <li
                      key={v}
                      className="flex items-start gap-3 text-sm font-medium text-navy/80"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-jade" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Employers */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
                <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-teal text-white">
                  <Building2 size={22} />
                </span>
                <h3 className="font-heading text-xl font-bold">Employers</h3>
                <ul className="mt-5 space-y-2.5">
                  {employerServices.map((v) => (
                    <li
                      key={v}
                      className="flex items-start gap-3 text-sm font-medium text-navy/80"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-teal" />
                      {v}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-navy/60">
                  Stay ahead of accreditation and workforce visa requirements
                  so your team can move quickly.
                </p>
              </div>
            </Reveal>

            {/* Passports */}
            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl bg-navy p-8 text-white shadow-[var(--shadow-card)]">
                <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-sunbeam text-navy">
                  <Users size={22} />
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Passports &amp; Citizenship
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  We offer assistance with passport and citizenship
                  applications and renewals, ensuring all documentation is
                  correctly prepared and submitted.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["Passport applications", "Passport renewals", "Citizenship documentation"].map(
                    (v) => (
                      <li
                        key={v}
                        className="flex items-start gap-3 text-sm font-medium text-white/85"
                      >
                        <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-sunbeam" />
                        {v}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Complex cases */}
          <Reveal className="mt-16">
            <div className="flex items-center gap-3">
              <FileSearch size={22} className="text-auburn" />
              <h3 className="font-heading text-2xl font-bold">
                Complex Immigration Cases
              </h3>
            </div>
            <p className="mt-3 max-w-2xl text-navy/70">
              When the answer isn&apos;t straightforward, we draw on deep
              experience to protect your position.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {complexCases.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-auburn/30 hover:shadow-[var(--shadow-card)]">
                  <h4 className="font-heading font-bold text-navy">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL AID */}
      <section id="legal-aid" className="scroll-mt-24 bg-jade py-20 lg:py-24">
        <div className="container-default grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="font-heading text-4xl leading-tight font-bold text-white sm:text-5xl">
              Legal Aid{" "}
              <span className="text-sunbeam">for eligible proceedings</span>
              <span className="text-auburn">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              If you cannot afford a lawyer, you may be able to apply for Legal
              Aid. We can advise you whether or not you may be eligible to
              apply for aid. We only provide Legal Aid for eligible Family Law
              proceedings.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="font-heading text-xl font-bold text-white">
                Talk to us about eligibility
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Call {contactDetails.north.name} on{" "}
                <a
                  href={contactDetails.north.phoneHref}
                  className="font-bold text-sunbeam"
                >
                  {contactDetails.north.phone}
                </a>{" "}
                or email{" "}
                <a
                  href={contactDetails.north.emailHref}
                  className="font-bold text-sunbeam break-all"
                >
                  {contactDetails.north.email}
                </a>
                .
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-sunbeam px-7 py-3.5 font-bold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Contact Jay Law
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}