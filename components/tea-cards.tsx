"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const teas = [
  {
    name: "Premium Masala Tea",
    image: "/masalatea.png",
    desc: "A perfect blend of aromatic spices and fresh herbs",
    origin: "Assam, India",
    brew: "3–4 min",
    strength: "Bold",
    tag: "Bestseller",
    tagColor: "#285533",
    accentLight: "#d4e8c2",
  },
  {
    name: "Elaichi Royal Tea",
    image: "/elaichitea.png",
    desc: "From the land of Himalayas",
    origin: "Darjeeling, India",
    brew: "2–3 min",
    strength: "Delicate",
    tag: "Premium",
    tagColor: "#14361d",
    accentLight: "#e8f0df",
  },
];

const pillars = [
  { label: "Origin", key: "origin" },
  { label: "Brew Time", key: "brew" },
  { label: "Strength", key: "strength" },
];

export default function TeaCards() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="teas"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-[#f7f3ec]"
    >
      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-[#a3c98b]/20 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#285533]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#a3c98b]/15 blur-3xl pointer-events-none z-0" />

      {/* ── Dashed botanical rings ── */}
      <svg className="absolute left-4 top-16 w-24 h-24 opacity-[0.07] pointer-events-none hidden md:block" viewBox="0 0 96 96" fill="none">
        <circle cx="48" cy="48" r="46" stroke="#285533" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="48" cy="48" r="34" stroke="#285533" strokeWidth="1" strokeDasharray="3 5" />
      </svg>
      <svg className="absolute right-6 bottom-20 w-16 h-16 opacity-[0.07] pointer-events-none hidden md:block" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#285533" strokeWidth="1.2" strokeDasharray="5 4" />
      </svg>

      {/* ── Floating leaf watermark ── */}
      <motion.div
        style={{ y: floatY }}
        className="absolute right-8 top-16 opacity-[0.06] pointer-events-none select-none hidden md:block z-0"
        aria-hidden
      >
        <img src="/leaf.png" className="w-28 h-28 object-contain" alt="" />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#285533]" />
            <p className="uppercase tracking-[6px] text-[#285533] text-[10px]" style={{ fontFamily: "sans-serif" }}>
              Our Collection
            </p>
            <span className="block w-8 h-px bg-[#285533]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#14361d] leading-[1.1] tracking-tight" style={{ fontFamily: "serif" }}>
            A Tea for Every{" "}
            <span className="italic relative inline-block">
              Mood
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 120 6" preserveAspectRatio="none">
                <path d="M0 4 Q30 0 60 3 Q90 6 120 2" stroke="#a3c98b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-md mx-auto leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            Handpicked from the finest gardens, each blend tells a story of land, craft, and care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {teas.map((tea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(20,54,29,0.08)] hover:shadow-[0_16px_48px_rgba(20,54,29,0.18)] transition-shadow duration-500 cursor-default"
            >
              {/* Tag badge */}
              <div
                className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white shadow-lg"
                style={{ backgroundColor: tea.tagColor, fontFamily: "sans-serif" }}
              >
                <span className="w-1 h-1 rounded-full bg-[#a3c98b] inline-block" />
                {tea.tag}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-[260px] sm:h-[320px] md:h-[380px]">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient over image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

                {/* Floating origin pill on image */}
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm border border-[#285533]/15 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-xs">🌿</span>
                  <p className="text-xs font-medium text-[#14361d]" style={{ fontFamily: "sans-serif" }}>{tea.origin}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 pt-2">
                <h3
                  className="text-2xl md:text-3xl text-[#14361d] leading-tight mb-2"
                  style={{ fontFamily: "serif" }}
                >
                  {tea.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "sans-serif" }}>
                  {tea.desc}
                </p>

                {/* Stat pills row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillars.map((p) => (
                    <div
                      key={p.key}
                      className="flex flex-col items-center bg-[#f7f3ec] border border-[#285533]/10 rounded-xl px-4 py-2 min-w-[80px]"
                    >
                      <p className="text-[9px] uppercase tracking-widest text-[#285533]/60 mb-0.5" style={{ fontFamily: "sans-serif" }}>{p.label}</p>
                      <p className="text-xs font-semibold text-[#14361d]" style={{ fontFamily: "sans-serif" }}>{tea[p.key as keyof typeof tea]}</p>
                    </div>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between pt-4 border-t border-[#285533]/8">
                  <a
                    href="/shop"
                    className="group/btn inline-flex items-center gap-3 bg-[#14361d] text-white text-sm px-6 py-3 rounded-full hover:bg-[#285533] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(40,85,51,0.35)] hover:-translate-y-0.5"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Shop Now
                    <span className="w-6 h-6 rounded-full bg-[#285533] group-hover/btn:bg-[#14361d] flex items-center justify-center transition-colors duration-300 text-xs">
                      →
                    </span>
                  </a>

                  {/* Wishlist / leaf icon */}
                  <button
                    className="w-10 h-10 rounded-full border border-[#285533]/20 flex items-center justify-center hover:border-[#285533]/50 hover:bg-[#285533]/8 transition-all duration-300"
                    aria-label="Add to wishlist"
                  >
                    <img src="/leaf.png" className="w-4 h-4 object-contain opacity-50 hover:opacity-80 transition-opacity" alt="" />
                  </button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: "linear-gradient(to right, transparent, #a3c98b80, transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom "View All" link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="/shop"
            className="inline-flex items-center gap-3 text-[#285533] text-sm border border-[#285533]/25 px-7 py-3.5 rounded-full hover:bg-[#285533]/8 hover:border-[#285533]/50 transition-all duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            <span className="w-5 h-px bg-[#285533]" />
            View Full Collection
            <span className="w-5 h-px bg-[#285533]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}