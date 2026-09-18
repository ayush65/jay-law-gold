"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { practiceAreas } from "@/lib/data";

type Pill = { left: number; width: number };

export default function PracticeTabs() {
  const [active, setActive] = useState(0);
  const [pill, setPill] = useState<Pill | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const area = practiceAreas[active];

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const btn = bar.querySelector<HTMLButtonElement>(
      `[data-tab-index="${active}"]`
    );
    if (!btn) return;

    const measure = () => {
      const left = btn.offsetLeft - bar.offsetLeft;
      const width = btn.offsetWidth;
      setPill((prev) =>
        prev && prev.left === left && prev.width === width
          ? prev
          : { left, width }
      );
    };
    measure();

    const ro = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(measure)
      : null;
    ro?.observe(bar);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % practiceAreas.length;
    else if (e.key === "ArrowLeft")
      next = (i - 1 + practiceAreas.length) % practiceAreas.length;
    else if (e.key === "Home") next = 0;
    else next = practiceAreas.length - 1;
    setActive(next);
    document.getElementById(`practice-tab-${next}`)?.focus();
  };

  return (
    <div>
      <div
        ref={barRef}
        role="tablist"
        aria-label="Practice areas"
        className="relative mx-auto flex w-full max-w-2xl overflow-x-auto rounded-full bg-teal/90 p-1.5 shadow-lg"
      >
        {pill && (
          <m.span
            initial={false}
            animate={{ left: pill.left, width: pill.width }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            aria-hidden
            className="absolute top-1.5 bottom-1.5 rounded-full bg-auburn"
            style={{ left: pill.left, width: pill.width }}
          />
        )}
        {practiceAreas.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`practice-tab-${i}`}
            data-tab-index={i}
            aria-selected={active === i}
            aria-controls="practice-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onTabKey(e, i)}
            className={`squircle-sm relative z-10 flex-1 px-5 py-3 text-sm font-bold tracking-wide whitespace-nowrap transition-colors sm:text-base ${
              active === i ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="practice-panel"
        role="tabpanel"
        aria-labelledby={`practice-tab-${active}`}
        className="relative mt-10"
      >
        <AnimatePresence mode="wait">
          <m.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-navy/75 sm:text-xl">
              {area.tagline}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {area.items.map((item, idx) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + idx * 0.08, duration: 0.5 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-2"
                >
                  <span className="squircle-sm mb-5 inline-grid size-12 place-items-center bg-peach text-auburn">
                    <item.icon size={22} />
                  </span>
                  <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-navy/70">
                    {item.description}
                  </p>
                  {item.details && item.details.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.details.slice(0, 3).map((d) => (
                        <li
                          key={d}
                          className="squircle-sm bg-blush px-3 py-1.5 text-xs font-medium text-navy/70"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-5 hidden items-center gap-2 text-sm font-bold text-auburn md:inline-flex">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-base font-bold text-auburn transition-colors hover:text-auburn-dark"
        >
          Explore all our services in detail
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </div>
  );
}