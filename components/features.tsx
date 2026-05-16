import React from "react";
import { Leaf, HandHelping, CupSoda, Globe } from "lucide-react";

export default function FeaturesBanner() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "100% Natural",
      description: "Pure and natural tea leaves with no additives.",
    },
    {
      icon: <HandHelping className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Handpicked",
      description: "Carefully selected leaves for the perfect flavor.",
    },
    {
      icon: <CupSoda className="w-6 h-6 text-white stroke-[1.5]" />, // Using CupSoda or Coffee for the tea cup
      title: "Rich in Antioxidants",
      description: "Good for your health, great for your day.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Sustainable Practices",
      description: "We care for nature as much as we care for tea.",
    },
  ];

  return (
    <section className="bg-[#0e2a18] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center justify-between">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 py-4 md:px-4 ${
              // Adds vertical dividing borders between items on large screens
              index !== features.length - 1
                ? "lg:border-r lg:border-white/10"
                : ""
            }`}
          >
            {/* Circular Icon Wrapper */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:scale-120 hover:bg-white/9 transition duration-300">
              {feature.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg text-white/95 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300/80 leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}