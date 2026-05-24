"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Teas", href: "/#teas" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        {/* ── Pill container ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
          <motion.div
            animate={
              scrolled
                ? {
                    backgroundColor: "rgba(6, 45, 24, 0.92)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 4px 32px rgba(6,45,24,0.25)",
                    borderColor: "rgba(163,201,139,0.15)",
                  }
                : {
                    backgroundColor: "rgba(255,255,255,0)",
                    backdropFilter: "blur(0px)",
                    boxShadow: "none",
                    borderColor: "rgba(255,255,255,0)",
                  }
            }
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between px-4 md:px-6 py-2.5 rounded-2xl border"
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-plt.png"
                width={120}
                height={80}
                alt="PureLeaf Logo"
                className="w-[110px] md:w-[130px] h-auto object-contain rounded-lg"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 group ${
                    scrolled
                      ? "text-white/75 hover:text-white hover:bg-white/10"
                      : "text-[#14361d] hover:text-[#14361d] hover:bg-[#14361d]/8"
                  }`}
                  style={{ fontFamily: "sans-serif" }}
                >
                  {link.label}
                  {/* Underline dot */}
                  <span
                    className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      scrolled ? "bg-[#a3c98b]" : "bg-[#285533]"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-[#a3c98b] text-[#0d3b20] hover:bg-white hover:shadow-[0_4px_20px_rgba(163,201,139,0.4)]"
                    : "bg-[#14361d] text-white hover:bg-[#285533] hover:shadow-[0_4px_20px_rgba(20,54,29,0.35)]"
                }`}
                style={{ fontFamily: "sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                Shop Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl transition-colors duration-300 ${
                scrolled ? "hover:bg-white/10" : "hover:bg-[#14361d]/8"
              }`}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`block w-5 h-px transition-colors duration-300 ${scrolled ? "bg-white" : "bg-[#14361d]"}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className={`block w-5 h-px transition-colors duration-300 ${scrolled ? "bg-white" : "bg-[#14361d]"}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`block w-5 h-px transition-colors duration-300 ${scrolled ? "bg-white" : "bg-[#14361d]"}`}
              />
            </button>
          </motion.div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(6, 45, 24, 0.96)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(163,201,139,0.15)",
                boxShadow: "0 8px 40px rgba(6,45,24,0.4)",
              }}
            >
              {/* Overline label */}
              <div className="px-5 pt-5 pb-3 flex items-center gap-2">
                <span className="block w-5 h-px bg-[#a3c98b]/50" />
                <p
                  className="uppercase tracking-[5px] text-[#a3c98b]/60 text-[9px]"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Navigation
                </p>
              </div>

              <div className="px-3 pb-3 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all duration-200 group"
                      style={{ fontFamily: "sans-serif", fontSize: "15px" }}
                    >
                      <span>{link.label}</span>
                      <span className="text-[#a3c98b]/40 group-hover:text-[#a3c98b] transition-colors duration-200 text-xs">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-5 pb-5 pt-2 border-t border-white/[0.07]">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#a3c98b] text-[#0d3b20] font-semibold text-sm py-3.5 rounded-xl hover:bg-white transition-colors duration-300"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d3b20]/50" />
                  Shop Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop tap-to-close on mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}