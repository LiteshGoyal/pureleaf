"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Sharma",
    review:
      "PureLeaf completely changed my tea experience. The aroma is incredible.",
    image: "/testimonial2.png",
  },
  {
    name: "Priya Mehta",
    review:
      "The freshness and taste feel premium. Beautiful packaging too.",
    image: "/testimonial1.png",
  },
  {
    name: "Rohan Kapoor",
    review:
      "Their tea became part of my everyday wellness routine.",
    image: "/testimonial3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#f2efe7]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-serif text-[#14361d] mb-16">
          What Tea Lovers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-xl">
                    {review.name}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}