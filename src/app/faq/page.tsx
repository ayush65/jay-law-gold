import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AccordionGroup } from "@/components/Accordion";
import { contactDetails } from "@/lib/data";

const faqGroups = [
  {
    group: "Getting started",
    items: [
      {
        title: "Is the first consultation really free?",
        content:
          "Yes. Your first consultation is free. It's a chance for us to understand your situation and for you to get expert, practical advice on what outcomes are realistic.",
      },
      {
        title: "How quickly will I hear back?",
        content:
          "We respond to calls and emails within one working day. Where matters are urgent — such as protection order applications — we prioritise your matter.",
      },
      {
        title: "Do you charge fixed fees?",
        content:
          "Where possible we agree fees up front so you know where you stand before we start. Where a matter is unusual, we will quote before undertaking the work.",
      },
    ],
  },
  {
    group: "Family law",
    items: [
      {
        title: "Can I sign a Contracting Out Agreement before marriage?",
        content:
          "Yes. A Contracting Out Agreement (commonly known as a prenuptial agreement) protects your assets in the event that you separate from your partner. We can prepare one for you.",
      },
      {
        title: "How do I apply for a Protection Order?",
        content:
          "We can talk through your situation and help you apply for a Protection Order, property order and furniture order. A Protection Order will protect you and your children from family violence.",
      },
      {
        title: "Oranga Tamariki is involved with my family — can you help?",
        content:
          "Yes. We assist clients in all their dealings with Oranga Tamariki (formerly Child, Youth & Family), which deals with care and safety issues relating to children.",
      },
    ],
  },
  {
    group: "Property & business",
    items: [
      {
        title: "When should I involve a lawyer in a property purchase?",
        content:
          "Right from the start. We recommend having your lawyer involved from the beginning — we prepare the sale and purchase agreement and carry out conveyancing.",
      },
      {
        title: "What business services do you offer?",
        content:
          "Company incorporation, joint venture and partnership agreements, restructurings and refinancing, franchising, commercial leases, finance and security documentation, commercial contracts, forestry rights, buying and selling a business, and directors' and shareholders' duties and obligations.",
      },
    ],
  },
  {
    group: "Immigration",
    items: [
      {
        title: "Which visas do you help with?",
        content:
          "Student, Visitor, Work, Resident and Family visas. We also assist employers with accreditation, employee visas and job checks.",
      },
      {
        title: "What is a Section 61 request, and can you help?",
        content:
          "A Section 61 request is made when your visa has expired and you want to apply for another visa. We can prepare and lodge these requests for you, alongside PPI, RFI and DLN responses, ministerial appeals, and appeals to the Immigration and Protection Tribunal and High Court.",
      },
      {
        title: "I hold a temporary visa but need to leave due to family violence.",
        content:
          "We can apply for another visa on the grounds of family violence. This is a complex area — early consultation with us ensures your application is accurate, complete and strategically positioned.",
      },
      {
        title: "Can you help with passport and citizenship applications?",
        content:
          "Yes. We offer assistance with passport and citizenship applications and renewals, ensuring all documentation is correctly prepared and submitted.",
      },
    ],
  },
  {
    group: "Legal aid",
    items: [
      {
        title: "Am I eligible for Legal Aid?",
        content:
          "If you cannot afford a lawyer, you may be able to apply for Legal Aid. We can advise you whether or not you may be eligible to apply for aid. We only provide Legal Aid for eligible Family Law proceedings.",
      },
      {
        title: "Does Legal Aid cover immigration or commercial work?",
        content:
          "No — we only provide Legal Aid for eligible Family Law proceedings.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-40 pb-24 text-white lg:pt-48">
        <div className="grid-noise pointer-events-none absolute inset-0" />
        <span className="pointer-events-none absolute -top-28 right-[-6%] size-[440px] rounded-full bg-sunbeam/15 blur-[130px]" />
        <div className="container-default relative">
          <Reveal>
            <span className="font-heading mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-sunbeam uppercase">
              <span className="inline-block h-px w-8 bg-sunbeam" />
              Frequently asked questions
            </span>
            <h1 className="font-heading max-w-3xl text-5xl leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
              Answers to the questions{" "}
              <span className="text-gradient-warm">we hear most</span>
              <span className="text-auburn">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Can&apos;t find what you&apos;re looking for? Ask us directly —
              your first consultation is free.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blush py-24 lg:py-28">
        <div className="container-default grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl leading-tight font-bold sm:text-4xl">
                Still have{" "}
                <span className="text-gradient-auburn">questions</span>
                <span className="text-auburn">?</span>
              </h2>
              <p className="mt-4 max-w-sm text-lg text-navy/70">
                Call Jayanthi on{" "}
                <a
                  href={contactDetails.north.phoneHref}
                  className="font-bold text-auburn hover:underline"
                >
                  {contactDetails.north.phone}
                </a>{" "}
                or send us a note — we answer within one working day.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href={contactDetails.north.phoneHref}
                  className="squircle-sm lg:inline-flex inline-flex items-center justify-center gap-3 bg-auburn px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-auburn-mid"
                >
                  <Phone size={18} />
                  {contactDetails.north.phone}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-8 py-4 text-base font-bold text-navy transition-all duration-300 hover:border-auburn hover:text-auburn"
                >
                  Send an enquiry
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            {faqGroups.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 0.06}>
                <h2 className="font-heading mb-5 flex items-center gap-3 text-xl font-bold">
                  <span className="grid size-9 place-items-center rounded-lg bg-auburn text-sm text-white">
                    {gi + 1}
                  </span>
                  {group.group}
                </h2>
                <AccordionGroup items={group.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}