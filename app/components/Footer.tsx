"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-campaign-green text-white py-8 mt-12">
      <div className="container">
        <div className="text-center space-y-4">
          <p className="text-sm font-source-sans">
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs font-source-sans opacity-75">
            {t("footer.copyright")} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
