import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const locales = ["en", "sw"] as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sw" }];
}

async function getRequestConfig(locale: string) {
  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getRequestConfig(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Navbar locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* <WhatsAppButton /> */}
      </div>
    </NextIntlClientProvider>
  );
}
