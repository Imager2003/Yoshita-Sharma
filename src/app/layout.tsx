import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { RevealController } from "@/components/RevealController";
import { person } from "@/data/yoshita";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const title = "Yoshita Sharma | Corporate & Commercial Legal Professional";
const description =
  "Yoshita Sharma is a corporate and commercial legal professional with experience across corporate advisory, M&A, insolvency, banking & finance, due diligence, commercial contracts and regulatory compliance.";

export const metadata: Metadata = {
  // TODO: Update person.siteUrl in src/data/yoshita.ts once the domain is live.
  metadataBase: new URL(person.siteUrl),
  title: {
    default: title,
    template: "%s | Yoshita Sharma",
  },
  description,
  applicationName: "Yoshita Sharma — Portfolio",
  authors: [{ name: person.name, url: person.linkedin }],
  creator: person.name,
  keywords: [
    "Yoshita Sharma",
    "corporate lawyer",
    "commercial law",
    "corporate and commercial legal professional",
    "insolvency and bankruptcy code",
    "banking and finance law",
    "legal due diligence",
    "NMIMS School of Law Indore",
    "BBA LLB",
    "CSEET",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    siteName: person.name,
    locale: "en_IN",
    firstName: "Yoshita",
    lastName: "Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Legal",
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
  colorScheme: "light",
};

/*
 * Runs before the page paints: marks the document script-enabled so scroll
 * reveals can start hidden, and unhides everything if hydration never
 * happens (a JS error, an aggressive in-app browser, a stalled bundle).
 */
const revealBootstrap = `document.documentElement.setAttribute("data-js","");
setTimeout(function(){if(!window.__revealReady)document.documentElement.removeAttribute("data-js")},2000);`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.title,
  email: `mailto:${person.email}`,
  telephone: person.phoneRaw,
  url: person.siteUrl,
  sameAs: [person.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "NMIMS School of Law, Indore",
  },
  knowsAbout: [
    "Corporate and commercial law",
    "Mergers and acquisitions",
    "Insolvency and Bankruptcy Code",
    "Banking and finance law",
    "Legal due diligence",
    "Regulatory compliance",
  ],
  knowsLanguage: ["English", "Hindi"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      // The inline bootstrap below stamps data-js before React hydrates.
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        {children}
        <RevealController />
        <script
          type="application/ld+json"
          // Structured data is static, author-controlled content.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
