import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { cn } from "@/lib/utils";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brian Omondi - Mumias West MP 2027 | Son of the Soil",
  description: "Son of the Soil, Servant of the People. Campaign website for Hon. Brian Omondi, Mumias West MP Aspirant 2027. Vote for integrity, action, and results.",
  keywords: ["Brian Omondi", "Mumias West MP 2027", "Mumias West aspirant 2027", "Kenya elections", "MP candidate", "politics", "leadership"],
  authors: [{ name: "Brian Omondi Campaign Team" }],
  creator: "Brian Omondi Campaign",
  publisher: "Brian Omondi Campaign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Brian Omondi - Mumias West MP 2027 | Son of the Soil",
    description: "Son of the Soil, Servant of the People. Join the movement for integrity, action, and results in Mumias West.",
    url: "/",
    siteName: "Brian Omondi Campaign",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Brian Omondi - Mumias West MP 2027 | Son of the Soil",
    description: "Son of the Soil, Servant of the People. Join the movement for integrity, action, and results in Mumias West.",
    creator: "@brianomondi",
    site: "@brianomondi",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hon. Brian Omondi",
    jobTitle: "Mumias West MP Aspirant",
    image: "https://brianomondi.ke/brian-omondi.jpg",
    description: "Son of Mumias West, aspiring MP, committed to serving the people with integrity, action, and results.",
    url: "https://brianomondi.ke",
    sameAs: [
      "https://www.facebook.com/brianomondi",
      "https://www.twitter.com/brianomondi",
    ],
    knowsAbout: [
      "Agriculture",
      "Education",
      "Health",
      "Infrastructure",
      "Youth Empowerment",
    ],
  };

  return (
    <html lang="en" className={cn("font-sans")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1a5c2a" />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}