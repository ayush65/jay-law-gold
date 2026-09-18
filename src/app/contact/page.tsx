import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, FileQuestion } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contactDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "North Island or South Island — we reply within one working day. Book your free first consultation with Jay Law today.",
  alternates: {
    canonical: "/contact",
  },
};

const offices = [
  {
    island: "North Island",
    name: contactDetails.north.name,
    role: contactDetails.north.role,
    phone: contactDetails.north.phone,
    phoneHref: contactDetails.north.phoneHref,
    email: contactDetails.north.email,
    emailHref: contactDetails.north.emailHref,
    color: "bg-auburn",
  },
  {
    island: "South Island",
    name: contactDetails.south.name,
    role: contactDetails.south.role,
    phone: "Enquire online",
    phoneHref: contactDetails.south.emailHref,
    email: contactDetails.south.email,
    emailHref: contactDetails.south.emailHref,
    color: "bg-teal",
  },
];

const faqs = [
  {
    q: "Is the first consultation really free?",
    a: "Yes. Your first consultation is free — it's a chance for us to understand your situation and for you to understand what's realistic.",
  },
  {
    q: "Can I apply for Legal Aid?",
    a: "Possibly. We can advise whether or not you may be eligible to apply for aid. We only provide Legal Aid for eligible Family Law proceedings.",
  },
  {
    q: "Which areas does Jay Law cover?",
    a: "Property, Immigration, Family and Commercial Law — including conveyancing, businesses, relationship property, protection orders, Oranga Tamariki and visa work across New Zealand.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white lg:pt-48">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -top-32 left-[-8%] size-[460px] rounded-full bg-auburn/25 blur-[130px]" />
        <div className="container-default relative">
          <Reveal transformOnly>
            <span className="font-heading mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase">
              <span className="inline-block h-px w-8 bg-sunbeam" />
              Contact Jay Law
            </span>
            <h1 className="font-heading max-w-3xl text-5xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              For expert legal advice,{" "}
              <span className="text-gradient-warm">get in touch</span>
              <span className="text-auburn">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              North Island or South Island — we reply within one working day.
              Book your free first consultation today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OFFICES */}
      <section className="bg-blush py-24 lg:py-28">
        <div className="container-default grid gap-6 lg:grid-cols-2">
          {offices.map((office, i) => (
            <Reveal key={office.island} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[2rem] bg-white p-9 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2 sm:p-10">
                <span
                  className={`absolute top-0 left-0 h-1.5 w-full ${office.color}`}
                />
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-auburn" />
                  <h2 className="font-heading text-2xl font-bold">
                    {office.island}
                  </h2>
                </div>
                <h3 className="font-heading mt-6 text-xl font-bold text-navy">
                  {office.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-navy/60">
                  {office.role}
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={office.phoneHref}
                    className="flex items-center gap-4 text-lg font-semibold transition-colors hover:text-auburn"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-peach text-auburn">
                      <Phone size={20} />
                    </span>
                    {office.phone}
                  </a>
                  <a
                    href={office.emailHref}
                    className="flex items-center gap-4 text-lg font-semibold break-all transition-colors hover:text-auburn"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-softblue text-teal">
                      <Mail size={20} />
                    </span>
                    {office.email}
                  </a>
                  <div className="flex items-center gap-4 text-lg font-semibold text-navy/70">
                    <span className="grid size-12 place-items-center rounded-xl bg-blush text-navy/60">
                      <Clock size={20} />
                    </span>
                    Mon – Fri · 9am – 5pm
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM + SIDE */}
      <section className="bg-softblue py-24 lg:py-28">
        <div className="container-default grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <h2 className="font-heading text-3xl leading-tight font-bold sm:text-4xl">
              Send us an <span className="text-gradient-auburn">enquiry</span>
              <span className="text-auburn">.</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-navy/70">
              Tell us a little about your situation and we&apos;ll be in touch
              within one working day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-jade p-8 text-white">
                <span className="font-heading block text-xs font-bold tracking-[0.24em] text-sunbeam uppercase">
                  Legal Aid
                </span>
                <p className="mt-4 leading-relaxed text-white/80">
                  If you cannot afford a lawyer, you may be able to apply for
                  Legal Aid. We can advise whether you may be eligible — Legal
                  Aid is only provided for eligible Family Law proceedings.
                </p>
                <Link
                  href="/faq"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-sunbeam transition-colors hover:text-white"
                >
                  Read our FAQs
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-navy/10 bg-white p-8">
                <div className="flex items-center gap-3">
                  <FileQuestion size={20} className="text-auburn" />
                  <h3 className="font-heading text-lg font-bold">
                    Quick answers
                  </h3>
                </div>
                <ul className="mt-6 space-y-5">
                  {faqs.map((f) => (
                    <li key={f.q}>
                      <h4 className="font-bold text-navy">{f.q}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                        {f.a}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}