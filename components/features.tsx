"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, HandHelping, CupSoda, Globe } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure tea leaves with zero additives, exactly as nature intended.",
    accent: "#a3c98b",
    number: "01",
  },
  {
    icon: HandHelping,
    title: "Handpicked",
    description: "Carefully selected leaves for the perfect balance of flavor.",
    accent: "#c8ddb4",
    number: "02",
  },
  {
    icon: CupSoda,
    title: "Rich in Antioxidants",
    description: "Brewed goodness that fuels your body and brightens your day.",
    accent: "#a3c98b",
    number: "03",
  },
  {
    icon: Globe,
    title: "Sustainable Practices",
    description: "We nurture the earth as tenderly as we tend to every leaf.",
    accent: "#c8ddb4",
    number: "04",
  },
];

export default function FeaturesBanner() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0e2a18] text-white py-16 md:py-20"
    >
      {/* ── Moving noise texture ── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Parallax botanical watermark ── */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
      >
        <span
          className="text-white whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 18vw, 200px)", fontFamily: "serif", letterSpacing: "-0.04em" }}
        >
          PureLeafTea
        </span>
      </motion.div>

      {/* ── Glow blobs ── */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#285533]/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#285533]/20 blur-3xl pointer-events-none" />

      {/* ── Top decorative rule ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">

        {/* Section micro-label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 md:mb-12"
        >
          <span className="block w-6 h-px bg-[#a3c98b]" />
          <p
            className="uppercase tracking-[5px] text-[#a3c98b] text-[10px]"
            style={{ fontFamily: "sans-serif" }}
          >
            Why PureLeafTea Co.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 md:p-7 cursor-default transition-colors duration-300 overflow-hidden"
              >
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 40%, ${feature.accent}18 0%, transparent 70%)` }}
                />

                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 text-5xl font-bold text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300 select-none leading-none"
                  style={{ fontFamily: "serif" }}
                >
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="relative mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.accent}22`, border: `1px solid ${feature.accent}40` }}
                  >
                    <Icon className="w-5 h-5 stroke-[1.5]" style={{ color: feature.accent }} />
                  </div>
                  {/* Dot accent */}
                  <span
                    className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: feature.accent }}
                  />
                </div>

                {/* Text */}
                <h3
                  className="text-base font-semibold text-white/95 mb-2 tracking-wide"
                  style={{ fontFamily: "serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${feature.accent}80, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}