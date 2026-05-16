"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    // Added 'relative' and 'overflow-hidden' to contain the background image
    <section id="about" className="relative py-28 overflow-hidden"> 
      
      {/* 1. THE BACKGROUND IMAGE */}
      {/* Positioned absolutely, z-[-1] puts it behind the content, and opacity-20 keeps it subtle */}
      <motion.img
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.8, x: 0 }} // Fades into a subtle background opacity
        viewport={{ once: true }}
        src="/bio.png"
        className="absolute right-0 bottom-0 max-w-[40%] h-auto z-[10] pointer-events-none select-none"
        alt=""
      />

      {/* 2. THE MAIN CONTENT (Now a 2-column grid) */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Main Image */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="/about.png"
          className="rounded-2xl shadow-2xl w-full"
          alt="About PureLeaf"
        />

        {/* Right Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-[#285533] mb-4">
            About PureLeaf 
          </p>

          <h2 className="text-5xl font-serif text-[#14361d] leading-tight">
            Rooted in Tradition, Committed to Quality
          </h2>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Our tea leaves are handpicked from the finest tea gardens and
            crafted to retain their natural aroma, taste, and purity.
          </p>

          <button className="mt-8 bg-[#14361d] text-white px-7 py-4 rounded-full hover:scale-105 transition flex items-center gap-5">
          <a href="/contact" className="flex items-center gap-5">
            Learn More <img src="/leaf.png" className="w-8" alt="" />
            </a>
          </button>
        </motion.div>

      </div>
    </section>
  );
}