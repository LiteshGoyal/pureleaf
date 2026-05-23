"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const floatY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const rotateLeaf = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-[#f7f3ec]"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* ── Textured noise overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Decorative large circle ── */}
      <div className="absolute -left-28 -top-28 w-[420px] h-[420px] rounded-full bg-[#285533]/8 blur-3xl pointer-events-none z-0" />
      <div className="absolute right-0 bottom-0 w-[320px] h-[320px] rounded-full bg-[#a3c98b]/20 blur-3xl pointer-events-none z-0" />

      {/* ── Floating background leaf ── */}
      <motion.img
        style={{ y: floatY2, rotate: rotateLeaf }}
        src="/bio.png"
        className="absolute right-[-4%] bottom-[-6%] max-w-[48%] md:max-w-[36%] h-auto z-[2] pointer-events-none select-none opacity-[0.18]"
        alt=""
      />

      {/* ── Decorative botanical rings ── */}
      <svg
        className="absolute left-6 top-12 w-20 h-20 opacity-10 pointer-events-none z-0 hidden md:block"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="38" stroke="#285533" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="40" cy="40" r="28" stroke="#285533" strokeWidth="1" strokeDasharray="3 5" />
      </svg>
      <svg
        className="absolute right-10 top-20 w-14 h-14 opacity-10 pointer-events-none z-0"
        viewBox="0 0 56 56"
        fill="none"
      >
        <circle cx="28" cy="28" r="26" stroke="#285533" strokeWidth="1.2" strokeDasharray="5 4" />
      </svg>

      {/* ── Main layout ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* Overline label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 md:mb-0"
        >
          <span className="block w-8 h-px bg-[#285533]" />
          <p className="uppercase tracking-[6px] text-[#285533] text-xs font-semibold" style={{ fontFamily: "sans-serif" }}>
            About PureLeaf
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mt-6 md:mt-12">

          {/* ── LEFT: Image stack ── */}
          <div className="relative">
            {/* Decorative frame behind main image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full rounded-2xl border-2 border-[#285533]/20 z-0"
            />

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/about.png"
                className="w-full h-[320px] md:h-[480px] object-cover"
                alt="About PureLeaf"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14361d]/40 via-transparent to-transparent" />
            </motion.div>

            {/* ── Floating stat badge ── */}
            <motion.div
              style={{ y: floatY }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-5 -right-3 md:-bottom-7 md:-right-7 z-20 bg-[#14361d] text-white rounded-2xl px-5 py-4 shadow-2xl"
            >
              <p className="text-3xl md:text-4xl font-bold leading-none" style={{ fontFamily: "serif" }}>25+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#a3c98b] mt-1" style={{ fontFamily: "sans-serif" }}>Years of Craft</p>
            </motion.div>

            {/* ── Floating "Origin" tag ── */}
            <motion.div
              style={{ y: floatY2 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="absolute -top-4 right-4 md:-top-6 md:right-6 z-20 bg-[#f7f3ec] border border-[#285533]/25 rounded-xl px-4 py-3 shadow-lg flex items-center gap-2"
            >
              <span className="text-base">🌱</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#285533]/60" style={{ fontFamily: "sans-serif" }}>Origin</p>
                <p className="text-xs font-semibold text-[#14361d]" style={{ fontFamily: "serif" }}>Darjeeling, India</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#14361d] leading-[1.1] tracking-tight">
              Rooted in{" "}
              <span className="italic text-[#285533]">Tradition,</span>
              <br />
              Committed to{" "}
              <em className="not-italic relative inline-block">
                Quality
                {/* Underline flourish */}
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#a3c98b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </em>
            </h2>

            <div className="mt-8 flex gap-4">
              <div className="flex-shrink-0 w-px bg-gradient-to-b from-[#285533]/60 to-transparent mt-1" />
              <p className="text-gray-600 leading-8 text-base md:text-lg" style={{ fontFamily: "sans-serif" }}>
                Our tea leaves are handpicked from the finest tea gardens and
                crafted to retain their natural aroma, taste, and purity. Every
                sip carries decades of knowledge passed down through generations
                of dedicated growers.
              </p>
            </div>

            {/* ── Pillars row ── */}
            <div className="mt-10 grid grid-cols-3 gap-3 md:gap-5">
              {[
                { icon: "✦", label: "Hand Picked", sub: "Single estate leaves" },
                { icon: "◈", label: "Pure & Natural", sub: "Zero additives" },
                { icon: "❋", label: "Artisan Crafted", sub: "Small batch only" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="bg-white/60 backdrop-blur-sm border border-[#285533]/12 rounded-xl p-3 md:p-4 hover:bg-[#285533]/8 transition-colors duration-300 group"
                >
                  <span className="text-[#285533] text-lg block mb-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <p className="text-[#14361d] text-xs md:text-sm font-semibold leading-tight">{item.label}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5 hidden md:block" style={{ fontFamily: "sans-serif" }}>{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* ── CTA button ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#14361d] text-[#f7f3ec] px-7 py-4 rounded-full hover:bg-[#285533] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(40,85,51,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-sm tracking-wide font-medium" style={{ fontFamily: "sans-serif" }}>Discover Our Story</span>
                <span className="w-8 h-8 bg-[#285533] group-hover:bg-[#14361d] rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <img src="/leaf.png" className="w-4 h-4 object-contain" alt="" />
                </span>
              </a>
            </motion.div>

            {/* ── Trust strip ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["#a3c98b", "#285533", "#d4e8c2"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#f7f3ec]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p className="text-gray-500 text-xs" style={{ fontFamily: "sans-serif" }}>
                Trusted by <strong className="text-[#14361d]">12,000+</strong> tea lovers worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}