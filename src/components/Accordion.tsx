"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  title: string;
  content: string;
  details?: string[];
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({
  title,
  content,
  details,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-300 hover:shadow-[var(--shadow-card)]">
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-heading text-lg font-bold text-navy">{title}</span>
          <span
            aria-hidden
            className={`shrink-0 grid size-10 place-items-center rounded-full bg-blush transition-all duration-300 ${
              isOpen ? "rotate-180 bg-auburn text-white" : "text-navy"
            }`}
          >
            <ChevronDown size={20} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-[0.95rem] leading-relaxed text-navy/70">
                {content}
              </p>
              {details && details.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-navy/75"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-auburn" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type Props = {
  title: string;
  content: string;
  details?: string[];
};

export function AccordionGroup({ items }: { items: Props[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          {...item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}