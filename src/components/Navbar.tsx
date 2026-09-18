"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Practice Areas",
    href: "/services",
    children: [
      { label: "Family Law", href: "/services#family" },
      { label: "Elders Law", href: "/services#elders" },
      { label: "Immigration", href: "/services#immigration" },
      { label: "Legal Aid", href: "/services#legal-aid" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setDropdown(false);
  };

  const onDark = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/90 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <div className="container-default flex items-center justify-between py-4">
          <Logo dark={onDark || scrolled} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button
                    type="button"
                    className={`group inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors ${
                      onDark || scrolled ? "text-white" : "text-white"
                    }`}
                    aria-expanded={dropdown}
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-1/2 mt-4 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-deep/95 p-2 shadow-2xl backdrop-blur-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDropdown(false)}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-auburn hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-sunbeam"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="squircle-sm hidden bg-auburn px-6 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-auburn-mid hover:shadow-lg shadow-auburn/30 sm:inline-flex"
            >
              Free Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-xl bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy-deep/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-default flex items-center justify-between py-4">
              <Logo dark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={22} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
              className="container-default mt-8 flex flex-col gap-1"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-heading block border-b border-white/10 py-4 text-3xl font-bold text-white transition-colors hover:text-sunbeam"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="flex flex-wrap gap-2 py-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className="squircle-sm bg-white/10 px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-auburn hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="squircle-sm inline-flex bg-auburn px-8 py-4 text-base font-bold text-white transition hover:bg-auburn-mid"
                >
                  Book a free consultation
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}