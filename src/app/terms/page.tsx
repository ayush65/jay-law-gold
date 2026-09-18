import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description:
    "The terms on which Jay Law provides legal services to clients.",
};

export default function TermsPage() {
  return (
    <section className="bg-blush pt-40 pb-24 lg:pt-44">
      <div className="container-default max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Terms of <span className="text-gradient-auburn">Engagement</span>
            <span className="text-auburn">.</span>
          </h1>
          <p className="mt-4 text-navy/60">Last updated: 2026</p>
        </Reveal>

        <Reveal className="mt-12 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              1. Our commitment to you
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              When you instruct Jay Law you will know the fee in advance where
              possible, receive clear advice and fantastic service, and get a
              response to a call or email within one working day.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">2. Fees</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Where a fixed fee is agreed, that fee covers the work described
              in your fee proposal. Where a matter is unusual or falls outside
              the agreed scope, we will quote before undertaking the
              additional work. Disbursements (such as filing fees, LIM
              reports, building reports or valuations) are charged in addition
              where they apply.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              3. Communication
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              We will keep you informed of progress on your matter. Please let
              us know promptly if your contact details change or if there is
              information relevant to your matter that we should know about.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              4. Confidentiality and conflicts
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              We treat all client information as confidential. Should a
              conflict of interest arise, we will advise you promptly and take
              appropriate steps in accordance with the Lawyers and Conveyancers
              Act 2006 and the Lawyers&apos; Conduct and Client Care Rules.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">
              5. Complaints
            </h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              If you are not satisfied with our service, please raise the
              matter with us in the first instance. If we cannot resolve your
              complaint, you may contact the Law Society or the Legal
              Complaints Review Officer as may be applicable to your matter.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold">6. Contact</h2>
            <p className="mt-3 leading-relaxed text-navy/75">
              Any correspondence relating to these terms can be sent to
              jaylawandassociates@gmail.com or by calling 0277218483.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}