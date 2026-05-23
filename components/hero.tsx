"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stats = [
  { value: "100%", label: "Natural" },
  { value: "25+", label: "Yrs of Craft" },
  { value: "12K+", label: "Happy Sippers" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* ── Parallax background ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img
          src="/Hero.png"
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </motion.div>

      {/* ── Overlay layers ── */}
      {/* Left dark veil so text is always readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a1f10]/75 via-[#0e2a18]/40 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a1f10]/50 via-transparent to-transparent" />
      {/* Subtle top vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-transparent" />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Decorative dashed ring (desktop) ── */}
      <svg
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-[0.08] pointer-events-none z-[3] hidden lg:block"
        viewBox="0 0 320 320" fill="none"
      >
        <circle cx="160" cy="160" r="158" stroke="#a3c98b" strokeWidth="1.5" strokeDasharray="8 5" />
        <circle cx="160" cy="160" r="120" stroke="#a3c98b" strokeWidth="1" strokeDasharray="4 7" />
        <circle cx="160" cy="160" r="80" stroke="#a3c98b" strokeWidth="0.8" strokeDasharray="3 6" />
      </svg>

      {/* ── Floating glow behind headline ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[360px] rounded-full bg-[#1a4d28]/40 blur-[100px] pointer-events-none z-[2]" />

      {/* ── Main content (fades + rises on scroll) ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="block w-7 h-px bg-[#a3c98b]" />
          <p
            className="uppercase tracking-[7px] text-[#a3c98b] text-[10px]"
            style={{ fontFamily: "sans-serif" }}
          >
            Est. 2001 · Darjeeling, India
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white leading-[1.05] tracking-tight max-w-3xl"
          style={{
            fontFamily: "serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            textShadow: "0 2px 32px rgba(10,31,16,0.4)",
          }}
        >
          Pure by Nature,
          <br />
          <span className="italic text-[#a3c98b]">Perfect</span> in Every Sip.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38 }}
          className="mt-6 text-white/65 text-base md:text-lg max-w-md leading-relaxed"
          style={{ fontFamily: "sans-serif" }}
        >
          Finest tea leaves sourced from premium gardens and crafted with
          generations of love.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary */}
          <a
            href="#teas"
            className="group inline-flex items-center gap-3 bg-[#0d3b20] hover:bg-[#285533] text-white text-sm font-medium px-7 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(40,85,51,0.55)] hover:-translate-y-0.5"
            style={{ fontFamily: "sans-serif" }}
          >
            Discover Our Teas
            <span className="w-8 h-8 rounded-full bg-[#285533] group-hover:bg-[#0d3b20] flex items-center justify-center transition-colors duration-300 flex-shrink-0">
              <Image width={16} height={16} src="/leaf.png" className="w-4 h-4 object-contain" alt="" />
            </span>
          </a>

          {/* Ghost secondary */}
          {/* <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/65 hover:text-white text-sm border border-white/20 hover:border-white/40 px-7 py-4 rounded-full hover:bg-white/8 transition-all duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            Our Story →
          </a> */}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 md:mt-16 flex items-center gap-0"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col px-5 md:px-7 first:pl-0">
                <span
                  className="text-2xl md:text-3xl font-bold text-white leading-none"
                  style={{ fontFamily: "serif" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] uppercase tracking-widest text-[#a3c98b] mt-1"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {s.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/15 flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <p
          className="uppercase tracking-[5px] text-white/30 text-[9px]"
          style={{ fontFamily: "sans-serif" }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7f3ec] to-transparent z-[4] pointer-events-none" />
    </section>
  );
}