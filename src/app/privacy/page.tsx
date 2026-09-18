import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jay Law collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-blush pt-40 pb-24 lg:pt-44">
      <div className="container-default max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Privacy <span className="text-gradient-auburn">Policy</span>
            <span className="text-auburn">.</span>
          </h1>
          <p className="mt-4 text-navy/60">Last updated: 2026</p>
        </Reveal>

        <Reveal className="mt-12 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              1. Who we are
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Jay Law is a New Zealand law firm providing legal services in
              Property, Immigration, Family and Commercial Law. This policy
              explains what personal information we collect, why we collect
              it, and how we protect it.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              2. Information we collect
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              We collect information you provide to us, including your name,
              contact details, and details of your legal matter. This may
              include sensitive information relevant to your matter, such as
              immigration history or family circumstances.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              3. How we use your information
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Your information is used to provide legal advice and services, to
              communicate with you, to meet professional obligations including
              those owed to the courts, and to comply with the law. We do not
              sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              4. Confidentiality
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              All information you share with us is subject to strict
              professional confidentiality obligations. Information is accessed
              only by those involved in your matter.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              5. Your rights
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Under the Privacy Act 2020, you may request access to, and
              correction of, your personal information. To make a request,
              contact us at jaylawandassociates@gmail.com.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              6. Contact
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Questions about this policy can be sent to
              jaylawandassociates@gmail.com or by calling 0277218483.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}