"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-4xl font-serif text-[#14361d] font-bold">
          <Link href="/">
          PureLeaf
          </Link>
          
        </h1>

        <div className="hidden md:flex gap-10 text-[#14361d] font-medium">
          <Link className="hover:scale-110 transition duration-300" href="/">Home</Link>
          <Link className="hover:scale-110 transition duration-300" href="#about">About</Link>
          <Link className="hover:scale-110 transition duration-300" href="#teas">Our Teas</Link>
          <Link className="hover:scale-110 transition duration-300" href="/contact">Contact Us</Link>
        </div>

        
      <div className="flex md:hidden">
          <Link className="hover:scale-110 transition duration-300" href="/contact">Contact Us</Link>

      </div>
      </div>
    </motion.nav>
  );
}