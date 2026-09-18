"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { contactEmail } from "@/lib/site";

const SUBJECTS = [
  "General enquiry",
  "Family Law",
  "Property / Conveyancing",
  "Business & Commercial",
  "Immigration",
  "Legal Aid",
  "Book a free consultation",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n");

    const url = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Jay Law] ${form.subject} — ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-navy/10 bg-white px-5 py-3.5 text-navy placeholder:text-navy/40 outline-none transition-all focus:border-auburn focus:ring-4 focus:ring-auburn/15";

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <m.div
            key="done"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-3xl bg-white px-8 py-16 text-center shadow-[var(--shadow-card)]"
          >
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              className="grid size-16 place-items-center rounded-full bg-mint text-jade"
            >
              <CheckCircle2 size={32} />
            </m.span>
            <h3 className="font-heading mt-6 text-2xl font-bold">
              Thank you, {form.name.split(" ")[0] || "friend"}!
            </h3>
            <p className="mt-3 max-w-sm text-navy/70">
              Your email draft has been prepared in your mail app. Hit send and
              our team will get back to you within one working day.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="squircle-sm mt-8 bg-auburn px-8 py-3.5 font-bold text-white transition hover:bg-sunbeam hover:text-navy"
            >
              Send another message
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="jane@email.com"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  placeholder="021 000 0000"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-bold text-navy">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                >
                  {SUBJECTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                autoComplete="off"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell us a little about your situation..."
              />
            </div>

            <button
              type="submit"
              className="squircle-sm group mt-7 inline-flex items-center gap-3 bg-auburn px-9 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sunbeam hover:text-navy hover:shadow-sunbeam/30"
            >
              Send enquiry
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <p className="mt-4 text-xs text-navy/50">
              Enquiries are answered within one working day. Your details are
              kept strictly confidential.
            </p>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}