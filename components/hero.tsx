"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center ">
      {/* <img
        src="/Hero.png"
        className="absolute inset-0 w-full h-full "
      /> */}
      <img
        src="/Hero.png"
        className="
    absolute inset-0
    w-full h-full
    object-cover
    object-left
    md:object-center
  "
      />
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto ms-16 px-6"
      >
        <h1 className="text-6xl md:text-8xl text-[#14361d] font-serif leading-tight max-w-4xl">
          Pure by Nature, Perfect in Every Sip.
        </h1>

        <p className="text-white text-xl mt-8 max-w-xl leading-8">
          Finest tea leaves sourced from premium gardens and crafted with love.
        </p>

        <button className="mt-10 bg-[#0d3b20] hover:bg-[#174f2e] transition px-8 py-4 rounded-full text-white text-lg shadow-2xl flex items-center gap-5">
          Discover Our Teas{" "}
          <Image width={8} height={8} src="/leaf.png" className="w-8" alt="" />
        </button>
      </motion.div>
    </section>
  );
}
