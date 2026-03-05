"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { getNavLinks } from "@/data/navLinks";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  const navLinks = getNavLinks();
  const socials = socialLinks;

  return (
    <footer className="bg-[#080f09] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d4a017] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#0d2b14] font-playfair font-bold text-lg">B</span>
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-lg leading-tight">
                  Brian Omondi
                </p>
                <p className="text-gray-500 text-xs">
                  Mumias West MP Aspirant 2027
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Son of the Soil, Servant of the People. Dedicated to transforming
              Mumias West through integrity, real action, and results that every
              family will feel.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#d4a017] hover:text-[#d4a017] transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4a017] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mumias West Constituency, Kakamega County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4a017] flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4a017] flex-shrink-0" />
                <a
                  href="mailto:info@brianomondi.co.ke"
                  className="text-gray-400 text-sm hover:text-[#d4a017] transition-colors"
                >
                  info@brianomondi.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © 2027 Brian Omondi. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}