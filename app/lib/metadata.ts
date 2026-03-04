import type { Metadata } from "next";

export function generatePageMetadata(
  title: string,
  description: string,
  pathname: string,
  keywords?: string[]
): Metadata {
  return {
    title: `${title} | Brian Omondi`,
    description,
    keywords: [
      "Brian Omondi",
      "Mumias West MP 2027",
      "Mumias West aspirant 2027",
      ...(keywords || []),
    ],
    openGraph: {
      title: `${title} | Brian Omondi Campaign`,
      description,
      url: `https://brianomondi.ke${pathname}`,
      type: "website",
      images: [
        {
          url: "https://brianomondi.ke/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Brian Omondi`,
      description,
    },
  };
}
