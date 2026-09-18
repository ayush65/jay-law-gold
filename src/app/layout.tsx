import type { Metadata } from "next";
import { Cabin, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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

export const metadata: Metadata = {
  title: {
    default: "Jay Law | Property, Immigration, Family & Commercial Law",
    template: "%s | Jay Law",
  },
  description:
    "Jay Law is a leading New Zealand firm specialising in Property, Immigration, Family and Commercial Law. Established in 2022 by Jayanthi Vallipuram. Book your free first consultation today.",
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
  openGraph: {
    title: "Jay Law | Property, Immigration, Family & Commercial Law",
    description:
      "A leading New Zealand firm in Property, Immigration, Family and Commercial Law. Book your free first consultation.",
    siteName: "Jay Law",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}