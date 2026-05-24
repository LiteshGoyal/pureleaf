"use client";

import { motion } from "framer-motion";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] overflow-hidden relative">
      {/* CONTACT SECTION */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#285533]/30 to-transparent z-0" />

      {/* CONTENT */}
      <div className="relative z-10">
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-20">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="uppercase tracking-[5px] text-[#285533] mb-4 text-sm md:text-base">
                Get In Touch
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#14361d] leading-tight">
                Let's Brew Something Beautiful Together
              </h2>

              <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-lg leading-7 md:leading-8 max-w-2xl">
                Whether you have questions about our teas, want to collaborate,
                or simply wish to say hello — we’re here for you.
              </p>

              <div className="mt-10 md:mt-12 space-y-8">
                {/* PHONE */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="min-w-14 min-h-14 md:w-16 md:h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                    <Phone size={28} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm md:text-base">
                      Phone Number
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#14361d] break-words">
                      80 0049 0059
                    </h3>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="min-w-14 min-h-14 md:w-16 md:h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                    <Mail size={28} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm md:text-base">
                      Email Address
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#14361d] break-all">
                      pureleaf.teaco@gmail.com
                    </h3>
                  </div>
                </div>

                {/* INSTAGRAM */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="min-w-14 min-h-14 md:w-16 md:h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                    <Image
                      alt="insta"
                      src="/instagram.png"
                      width={28}
                      height={28}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm md:text-base">
                      Instagram
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#14361d] break-words">
                      <a
                        href="https://www.instagram.com/pureleaf.teaco?igsh=MXFxaWpzaWJmMXo2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @pureleaf.teaco
                      </a>
                    </h3>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="min-w-14 min-h-14 md:w-16 md:h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                    <Image
                      alt="fb"
                      className="text-white"
                      src="/logofb1.png"
                      width={35}
                      height={35}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm md:text-base">
                      Facebook
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#14361d] break-words">
                      <a
                        href="https://www.facebook.com/share/1BikXNiFmP/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pure Leaf Tea Co.
                      </a>
                    </h3>
                  </div>
                </div>

                {/* Youtube */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="min-w-14 min-h-14 md:w-16 md:h-16 rounded-full bg-[#14361d] text-white flex items-center justify-center">
                    <Image
                      alt="youtube"
                      className="text-white"
                      src="/youtubelogo.png"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-gray-500 text-sm md:text-base">
                      Youtube
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#14361d] break-words">
                      <a
                        href="https://youtube.com/@pureleafteaco?si=3TFKplb_bfAUrJOT"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PureLeafTeaCo
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <img
            src="/bio.png"
            className="
            absolute
            right-[-120px]
            md:right-20
            lg:right-36
            top-1/2
            -translate-y-1/2
            opacity-10
            md:opacity-40
            lg:opacity-80
            w-[260px]
            sm:w-[350px]
            md:w-[420px]
            lg:w-[500px]
            z-10
            pointer-events-none
          "
            alt="Leaf Design"
          />
        </section>
      </div>
    </main>
  );
}
