const items = [
  "Family Law",
  "Relationship Property",
  "Protection Orders",
  "Oranga Tamariki",
  "Property & Conveyancing",
  "Business & Commercial",
  "Immigration",
  "Employer Accreditation",
  "Complex Immigration Cases",
  "Legal Aid",
  "Free First Consultation",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="font-heading flex items-center gap-6 px-6 text-lg font-semibold tracking-wide whitespace-nowrap text-white"
        >
          {item}
          <span className="size-2 rounded-full bg-sunbeam" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-auburn py-5">
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}