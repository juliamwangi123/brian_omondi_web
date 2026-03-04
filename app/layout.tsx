import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
  keywords: ["Brian Omondi", "Mumias West MP 2027", "Mumias West aspirant 2027", "Kenya elections", "MP candidate"],
  authors: [{ name: "Brian Omondi" }],
  openGraph: {
    title: "Brian Omondi - Mumias West MP 2027",
    description: "Son of the Soil, Servant of the People",
    url: "https://brianomondi.ke",
    siteName: "Brian Omondi Campaign",
    images: [
      {
        url: "https://brianomondi.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Omondi - Mumias West MP Aspirant",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Omondi - Mumias West MP 2027",
    description: "Son of the Soil, Servant of the People",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}
