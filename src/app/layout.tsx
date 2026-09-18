import type { Metadata, Viewport } from "next";
import { Cabin, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MotionProvider from "@/components/MotionProvider";
import {
  siteUrl,
  siteName,
  siteDescription,
  contactPhone,
  contactEmail,
} from "@/lib/site";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legal-service`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteDescription,
  telephone: contactPhone,
  email: contactEmail,
  priceRange: "$$",
  areaServed: "NZ",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NZ",
  },
  founder: {
    "@type": "Person",
    name: "Jayanthi Vallipuram",
  },
  foundingDate: "2022",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Property, Immigration, Family & Commercial Law`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Jay Law",
    "family law",
    "immigration law",
    "property law",
    "commercial law",
    "New Zealand lawyer",
    "conveyancing",
    "legal aid",
    "Oranga Tamariki",
    "domestic violence protection order",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Property, Immigration, Family & Commercial Law`,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Property, Immigration, Family & Commercial Law`,
    description: siteDescription,
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2e40",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${cabin.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}