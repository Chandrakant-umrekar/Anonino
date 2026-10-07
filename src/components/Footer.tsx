"use client";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: FaTwitter,
    href: "https://x.com/Chandrakant_0w",
    name: "Twitter",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/chandrakant-umrekar-141bb932b/",
    name: "LinkedIn",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/sign-in" },
  { label: "Sign up", href: "/sign-up" },
  { label: "Dashboard", href: "/dashboard" },
];

const Footer = () => {
  return (
    <section className="bg-[#EFF0F1] p-4 dark:bg-[#0f141c]">
      <footer className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-colors duration-300 hover:bg-white dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-slate-950/60">
        <div className="h-1 w-full bg-gradient-to-r from-[#ff4500] to-[#ff8c00]" />

        <div className="container mx-auto grid gap-10 px-6 py-10 md:grid-cols-3">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="bg-gradient-to-r from-[#ff4500] to-[#ff8c00] bg-clip-text text-2xl font-extrabold text-transparent dark:from-[#ff5e57] dark:to-[#ff7849]">
              Anonino
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-gray-600 dark:text-gray-400 md:mx-0">
              Share honest thoughts and receive candid feedback, all without
              revealing your identity.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="text-center md:text-left">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Quick links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors duration-150 hover:text-[#ff4500] dark:text-gray-400 dark:hover:text-[#ff8c00]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="text-center md:text-left">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Connect
            </h4>
            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#ff4500] hover:to-[#ff8c00] hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
          <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Anonino. All rights reserved.
            Developed by{" "}
            <Link
              className="font-semibold text-gray-800 hover:text-[#ff4500] hover:underline dark:text-gray-200 dark:hover:text-[#ff8c00]"
              href="https://www.linkedin.com/in/chandrakant-umrekar-141bb932b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chandrakant Umrekar
            </Link>
            .
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
