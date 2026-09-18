import {
  Scale,
  Shield,
  Users,
  Home,
  Briefcase,
  Stamp,
  Building2,
  FileSearch,
  Globe,
  Landmark,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  details?: string[];
  icon: LucideIcon;
};

export type PracticeArea = {
  id: string;
  label: string;
  shortLabel: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  items: ServiceItem[];
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "family",
    label: "Family Law",
    shortLabel: "Family",
    tagline:
      "Sensitive, practical guidance through relationship property, protection orders and care matters.",
    icon: Users,
    color: "auburn",
    items: [
      {
        title: "Relationship Property",
        description:
          "When you separate, decisions need to be made about how your property is divided. We help you negotiate a settlement and provide expert, practical advice so you obtain the best property settlement for your situation.",
        details: [
          "Negotiating separation settlements",
          "Contracting Out Agreements (prenuptial agreements) to protect your assets in the event you separate from your partner",
          "Expert practical advice on division of property",
        ],
        icon: Scale,
      },
      {
        title: "Domestic Violence",
        description:
          "We talk through your situation with you and help you apply for a Protection Order, property order and furniture order. A Protection Order will protect you and your children from family violence.",
        details: [
          "Protection Order applications",
          "Property orders and furniture orders",
          "Support through the court process",
        ],
        icon: Shield,
      },
      {
        title: "Oranga Tamariki",
        description:
          "Oranga Tamariki (formerly known as Child, Youth & Family) deals with care and safety issues relating to children. We can assist you in all your dealings with the Ministry.",
        details: [
          "Care and protection matters",
          "Meetings and correspondence with the Ministry",
          "Advice on your rights and options",
        ],
        icon: Users,
      },
    ],
  },
  {
    id: "elders",
    label: "Elders Law",
    shortLabel: "Elders",
    tagline:
      "Property, business and commercial expertise — from conveyancing to company incorporations.",
    icon: Landmark,
    color: "teal",
    items: [
      {
        title: "Property",
        description:
          "If you're looking to purchase or sell a property, we prepare the sale and purchase agreement and carry out conveyancing. We recommend having your lawyer involved right from the start.",
        details: [
          "Sale and purchase agreements",
          "Conveyancing",
          "Advice from the very start of your purchase or sale",
        ],
        icon: Home,
      },
      {
        title: "Business",
        description:
          "We support businesses of every size with a full suite of commercial legal services.",
        details: [
          "Company Incorporation",
          "Joint Venture Agreements",
          "Partnership Agreements",
          "Restructurings and Refinancing",
          "Franchising",
          "Commercial Leases",
          "Finance (including lending and security documentation)",
          "Commercial Contracts",
          "Forestry Rights",
          "Buying and Selling a Business",
          "Directors' and Shareholders' Duties and Obligations",
        ],
        icon: Briefcase,
      },
    ],
  },
  {
    id: "immigration",
    label: "Immigration",
    shortLabel: "Immigration",
    tagline:
      "Accurate, complete and strategically positioned applications — giving you the best chance of success in New Zealand.",
    icon: Globe,
    color: "jade",
    items: [
      {
        title: "Visa Applications",
        description:
          "Early consultation with us ensures your application is accurate, complete and strategically positioned, giving you the best chance to achieve your immigration objectives in New Zealand.",
        details: [
          "Student Visas",
          "Visitor Visas",
          "Work Visas",
          "Resident Visas",
          "Family Visas",
        ],
        icon: Stamp,
      },
      {
        title: "Employers",
        description:
          "We help employers stay ahead of accreditation and employee visa requirements so your workforce can move quickly.",
        details: [
          "Employer Accreditation",
          "Employee Visas",
          "Job Check",
        ],
        icon: Building2,
      },
      {
        title: "Complex Cases",
        description:
          "When the answer isn't straightforward, we draw on deep experience to protect your position.",
        details: [
          "Legal Opinion on which visa is suitable, considering your immigration history",
          "PPI Response — when Immigration NZ holds potentially prejudicial information",
          "RFI Response — responding to Immigration NZ requests",
          "DLN Response — responding to a Deportation Liability Notice",
          "Section 61 Requests — when your visa has expired and you wish to apply again",
          "Family Violence — when you hold a temporary visa and need another because of family violence",
          "Ministerial Appeals — when all avenues through Immigration NZ are exhausted",
          "Appeal to the Immigration and Protection Tribunal",
          "Appeal to the High Court",
        ],
        icon: FileSearch,
      },
    ],
  },
];

export const businessServices = [
  "Company Incorporation",
  "Joint Venture Agreements",
  "Partnership Agreements",
  "Restructurings and Refinancing",
  "Franchising",
  "Commercial Leases",
  "Finance (including lending and security documentation)",
  "Commercial Contracts",
  "Forestry Rights",
  "Buying and Selling a Business",
  "Directors' and Shareholders' Duties and Obligations",
];

export const contactDetails = {
  north: {
    island: "North Island",
    name: "Jayanthi Vallipuram",
    role: "Barrister & Solicitor",
    phone: "0277218483",
    phoneHref: "tel:0277218483",
    email: "jaylawandassociates@gmail.com",
    emailHref: "mailto:jaylawandassociates@gmail.com",
  },
  south: {
    island: "South Island",
    name: "Sadat",
    role: "Associate",
    phone: "",
    phoneHref: "",
    email: "jaylawandassociates@gmail.com",
    emailHref: "mailto:jaylawandassociates@gmail.com",
  },
};

export const values = [
  {
    icon: HeartHandshake,
    title: "Their issues become ours",
    description:
      "We pride ourselves on the strong relationships we form with our clients. We are with you every step of the way.",
  },
  {
    icon: Shield,
    title: "Experience, wisdom & integrity",
    description:
      "Jay and Sadat bring a combination of experience, wisdom, insight and integrity to resolve your legal issues.",
  },
  {
    icon: Scale,
    title: "Honest, practical advice",
    description:
      "Clear guidance in plain English — we deal with the fine print so you don't have to.",
  },
  {
    icon: Users,
    title: "Free first consultation",
    description:
      "Book a free first consultation to explore how we can help you and what outcomes are realistic.",
  },
];

export const footerLinks = [
  {
    heading: "Practice Areas",
    links: [
      { label: "Family Law", href: "/services#family" },
      { label: "Elders Law", href: "/services#elders" },
      { label: "Immigration", href: "/services#immigration" },
      { label: "Legal Aid", href: "/services#legal-aid" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our people", href: "/about#our-people" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];