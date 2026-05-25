"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "12K+", label: "Happy Customers" },
  { value: "25+", label: "Years of Craft" },
  { value: "100%", label: "Natural Leaves" },
];

export default function CTABanner() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(480px, 80vh, 780px)" }}
    >
      {/* ── Parallax background image ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-10%] z-0"
      >
        <img
          src="/banner.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </motion.div>

      {/* ── Layered overlays ── */}
      {/* Dark gradient left-to-right so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a1f10]/90 via-[#0e2a18]/70 to-[#0a1f10]/30" />
      {/* Subtle green tint at bottom */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0e2a18]/60 via-transparent to-transparent" />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Botanical dashed ring (desktop) ── */}
      <svg
        className="absolute right-10 top-10 w-32 h-32 opacity-10 pointer-events-none z-[3] hidden md:block"
        viewBox="0 0 128 128" fill="none"
      >
        <circle cx="64" cy="64" r="62" stroke="#a3c98b" strokeWidth="1.5" strokeDasharray="7 5" />
        <circle cx="64" cy="64" r="46" stroke="#a3c98b" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* ── Floating leaf (parallax, desktop) ── */}
      <motion.img
        style={{ y: floatY }}
        src="/leaf.png"
        alt=""
        className="absolute bottom-10 right-12 w-20 opacity-[0.12] pointer-events-none select-none z-[3] hidden md:block"
      />

      {/* ── Glow accent behind headline ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#285533]/30 blur-[80px] pointer-events-none z-[2]" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[inherit] max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-2xl">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-6 h-px bg-[#a3c98b]" />
            <p
              className="uppercase tracking-[6px] text-[#a3c98b] text-[10px]"
              style={{ fontFamily: "sans-serif" }}
            >
              Pure · Natural · Crafted
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[1.08] tracking-tight"
            style={{ fontFamily: "serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Taste the Purity.
            <br />
            <span className="italic text-[#a3c98b]">Feel</span> the Difference.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-md"
            style={{ fontFamily: "sans-serif" }}
          >
            Join thousands of tea lovers who trust PureLeaf for every sip — from
            the first brew of the morning to the last cup of the night.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="/shop"
              className="group inline-flex items-center gap-3 bg-[#14361d] text-white text-sm font-medium px-7 py-4 rounded-full hover:bg-[#285533] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(40,85,51,0.5)] hover:-translate-y-0.5"
              style={{ fontFamily: "sans-serif" }}
            >
              Shop Now
              <span className="w-8 h-8 rounded-full bg-[#285533] group-hover:bg-[#14361d] flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                <img src="/leaf.png" className="w-4 h-4 object-contain" alt="" />
              </span>
            </a>

            {/* Ghost secondary CTA */}
            <a
              href="/about-us"
              className="inline-flex items-center gap-2 text-white/70 text-sm border border-white/20 px-7 py-4 rounded-full hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              Our Story →
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
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
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f7f3ec] to-transparent z-[4] pointer-events-none" />
    </section>
  );
}