import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { contactDetails, footerLinks } from "@/lib/data";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45A1.77 1.77 0 0 0 24 22.27V1.72A1.75 1.75 0 0 0 22.22 0Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-default py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              A leading firm in Property, Immigration, Family and Commercial
              Law. Established in 2022 by Jayanthi Vallipuram, serving clients
              across New Zealand with care, experience and integrity.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:bg-auburn hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading text-sm font-bold tracking-[0.22em] text-white/40 uppercase">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 transition-colors hover:text-sunbeam"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-bold tracking-[0.22em] text-white/40 uppercase">
              Contact us
            </h3>
            <ul className="mt-5 space-y-4 text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-sunbeam" />
                <span>
                  <strong className="block text-white">North Island</strong>
                  {contactDetails.north.name}, {contactDetails.north.role}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-sunbeam" />
                <span>
                  <strong className="block text-white">South Island</strong>
                  {contactDetails.south.name}
                </span>
              </li>
              <li>
                <a
                  href={contactDetails.north.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-sunbeam"
                >
                  <Phone size={18} className="shrink-0 text-sunbeam" />
                  {contactDetails.north.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.north.emailHref}
                  className="flex items-center gap-3 break-all transition-colors hover:text-sunbeam"
                >
                  <Mail size={18} className="shrink-0 text-sunbeam" />
                  {contactDetails.north.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-default flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/50 sm:flex-row">
          <p>Copyright © {year} Jay Law. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}