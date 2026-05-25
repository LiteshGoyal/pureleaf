"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Teas", href: "#teas" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  { icon: "📞", value: "+91 - 8000490059", href: "tel:+918000490059" },
  { icon: "✉️", value: "pureleaf.teaco@gmail.com", href: "mailto:pureleaf.teaco@gmail.com" },
  { icon: "📸", value: "@pureleaf.teaco", href: "https://www.instagram.com/pureleaf.teaco" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#062d18] text-white overflow-hidden pt-20 pb-10">

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-[#285533]/25 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#285533]/15 blur-3xl pointer-events-none z-0" />

      {/* ── Botanical dashed ring ── */}
      <svg className="absolute right-8 bottom-16 w-28 h-28 opacity-[0.07] pointer-events-none z-0 hidden md:block" viewBox="0 0 112 112" fill="none">
        <circle cx="56" cy="56" r="54" stroke="#a3c98b" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="56" cy="56" r="38" stroke="#a3c98b" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      {/* ── Large watermark text ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/[0.03] pointer-events-none select-none z-0 hidden md:block"
        style={{ fontSize: "clamp(60px, 12vw, 160px)", fontFamily: "serif", letterSpacing: "-0.04em" }}
        aria-hidden
      >
        PureLeafTea
      </div>

      {/* ── Top divider line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a3c98b]/30 to-transparent z-[1]" />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:col-span-1"
          >
            <Image
              src="/logo.png"
              width={160}
              height={60}
              className="w-40 object-contain"
              alt="PureLeaf"
            />

            <p className="mt-5 text-white/50 leading-7 text-sm max-w-xs" style={{ fontFamily: "sans-serif" }}>
              PureLeafTea is more than just tea — it's a lifestyle of freshness,
              purity, and mindful living brewed into every cup.
            </p>

            {/* Social pill */}
            <a
              href="https://www.instagram.com/pureleaf.teaco"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#a3c98b]/40 text-white/60 hover:text-white text-xs px-4 py-2.5 rounded-full transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              <span className="text-base">📸</span>
              Follow us on Instagram
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-5 h-px bg-[#a3c98b]" />
              <h3
                className="uppercase tracking-[5px] text-[#a3c98b] text-[10px]"
                style={{ fontFamily: "sans-serif" }}
              >
                Quick Links
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-300"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#a3c98b] transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-5 h-px bg-[#a3c98b]" />
              <h3
                className="uppercase tracking-[5px] text-[#a3c98b] text-[10px]"
                style={{ fontFamily: "sans-serif" }}
              >
                Contact Us
              </h3>
            </div>

            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.value}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors duration-300"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    <span className="text-base flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-white/30 text-xs" style={{ fontFamily: "sans-serif" }}>
            © 2026 PureLeaf Tea. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3c98b] animate-pulse" />
            <p className="text-white/20 text-xs" style={{ fontFamily: "sans-serif" }}>
              Crafted with care · Naturally yours
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}