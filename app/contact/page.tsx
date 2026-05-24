"use client";

import { motion } from "framer-motion";

import {
  //   Instagram,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] overflow-hidden">
      {/* CONTACT SECTION */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-[#285533] mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-6xl font-serif text-[#14361d] leading-tight">
              Let's Brew Something Beautiful Together
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              Whether you have questions about our teas, want to collaborate, or
              simply wish to say hello — we’re here for you.
            </p>

            <div className="mt-12 space-y-8">
              {/* PHONE */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                  <Phone size={28} />
                </div>

                <div>
                  <p className="text-gray-500">Phone Number</p>
                  <h3 className="text-2xl font-semibold text-[#14361d]">
                    80 0049 0059
                  </h3>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                  <Mail size={28} />
                </div>

                <div>
                  <p className="text-gray-500">Email Address</p>
                  <h3 className="text-2xl font-semibold text-[#14361d]">
                    pureleaf.teaco@gmail.com
                  </h3>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                  <Image alt="insta" src="/instagram.png" width={28} height={28} />
                </div>

                <div>
                  <p className="text-gray-500">Instagram</p>
                  <h3 className="text-2xl font-semibold text-[#14361d]">
                    <a href="https://www.instagram.com/pureleaf.teaco?igsh=MXFxaWpzaWJmMXo2">
                      @pureleaf.teaco
                    </a>
                  </h3>
                </div>
              </div>
              {/* Facebook */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                  <Image alt="fb" className="text-white" src="/logofb1.png" width={35} height={35} />
                </div>

                <div>
                  <p className="text-gray-500">Facebook</p>
                  <h3 className="text-2xl font-semibold text-[#14361d]">
                    <a href="https://www.facebook.com/share/1BikXNiFmP/">
                      Pure Leaf Tea Co.
                    </a>
                  </h3>
                </div>
              </div>
              {/* Youtube */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                  <Image alt="fb" className="text-white" src="/youtubelogo.png" width={40} height={40} />
                </div>

                <div>
                  <p className="text-gray-500">Youtube</p>
                  <h3 className="text-2xl font-semibold text-[#14361d]">
                    <a href="https://youtube.com/@pureleafteaco?si=3TFKplb_bfAUrJOT">
                      PureLeafTeaCo
                    </a>
                  </h3>
                </div>
              </div>

              
            </div>
          </motion.div>
          <img
            src="/bio.png"
            className="absolute right-36 top-1/2 -translate-y-1/2 opacity-30 md:opacity-80 w-[500px] z-10"
            alt="Leaf Design"
          />
        </div>
      </section>
    </main>
  );
}
