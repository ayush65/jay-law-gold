import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Jay Law — home"
      className="group inline-flex items-center gap-3"
    >
      <span className="font-heading grid size-11 place-items-center rounded-xl bg-auburn text-lg font-extrabold text-white transition-transform duration-300 group-hover:-rotate-6">
        JL
      </span>
      <span className="font-heading leading-none">
        <span
          className={`block text-xl font-bold tracking-[0.18em] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          JAY&nbsp;LAW
        </span>
        <span
          className={`mt-1 block text-[0.6rem] font-medium tracking-[0.32em] uppercase ${
            dark ? "text-white/60" : "text-auburn"
          }`}
        >
          Property · Immigration · Family
        </span>
      </span>
    </Link>
  );
}