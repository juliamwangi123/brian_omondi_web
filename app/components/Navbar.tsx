"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale} from "next-intl";
import { Menu, X } from "lucide-react";

export default function Navbar({ locale }: { locale: string }) {
  // const t = useTranslations();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/about`, label: "About" },
    { href: `/${locale}/manifesto`, label: "Manifesto" },
    { href: `/${locale}/news`, label: "News" },
    { href: `/${locale}/gallery`, label: "Gallery" },
    { href: `/${locale}/volunteer`, label: "Volunteer" },
  ];

  const otherLocale = currentLocale === "en" ? "sw" : "en";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d2b14] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#d4a017] rounded-full flex items-center justify-center">
            <span className="text-[#0d2b14] font-playfair font-bold text-lg">B</span>
          </div>
          <span className="font-playfair font-bold text-white hidden sm:inline">
            Brian Omondi
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#d4a017] transition font-semibold text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              const newPath = window.location.pathname.replace(
                `/${currentLocale}`,
                `/${otherLocale}`
              );
              window.location.href = newPath || `/${otherLocale}`;
            }}
            className="text-sm font-bold text-white/70 hover:text-[#d4a017] transition border border-white/20 rounded-full px-3 py-1"
          >
            {otherLocale.toUpperCase()}
          </button>

          <Link
            href={`/${locale}/donate`}
            className="hidden sm:inline-block px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
            style={{ background: "#d4a017", color: "#0d2b14" }}
          >
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d2b14] border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#d4a017] transition font-semibold py-2 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/donate`}
              className="px-4 py-3 rounded-lg font-semibold text-center transition-all hover:brightness-110"
              style={{ background: "#d4a017", color: "#0d2b14" }}
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}