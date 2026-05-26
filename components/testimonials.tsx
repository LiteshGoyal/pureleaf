"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useMemo, useRef, useState } from "react";

// ─── Brand Colors ────────────────────────────────────────────────────────────
// Background:   #f2efe7  (warm cream)
// Primary:      #14361d  (deep forest green)
// Accent green: #2a6e3f
// Card bg:      #ffffff
// Muted:        rgba(20,54,29,0.55)

const reviews = [
  {
    name: "Aarav Sharma",
    tag: "Daily Ritual",
    initials: "AS",
    rating: 5,
    review:
      "I’ve tried dozens of tea brands over the years, but PureLeaf genuinely feels different from the very first sip. The aroma is calming, the flavor is smooth without being overpowering, and it somehow turns an ordinary evening into a peaceful ritual. After long workdays filled with stress and screen time, making myself a cup of PureLeaf tea has become the moment I look forward to the most.",
    accentColor: "#2a6e3f",
  },
  {
    name: "Priya Mehta",
    tag: "Wellness Seeker",
    initials: "PM",
    rating: 5,
    review:
      "PureLeaf has completely changed the way I enjoy tea. Most brands either taste too artificial or lose flavor after a few sips, but this tea stays rich, fresh, and incredibly soothing till the last drop. I started drinking it during late-night work sessions, and now it’s become part of my daily lifestyle. The packaging feels premium, the quality is consistent, and every cup tastes like it was crafted with care.",
    accentColor: "#14361d",
  },
  {
    name: "Rohan Kapoor",
    tag: "Mindful Living",
    initials: "RK",
    rating: 5,
    review:
      "What impressed me most about PureLeaf is how authentic it tastes. You can immediately tell the ingredients are high quality. There’s no bitterness, no artificial aftertaste — just a clean, refreshing flavor that feels natural and comforting. I usually struggle to find teas that help me unwind without feeling heavy, but PureLeaf strikes the perfect balance. It has become my go-to companion during reading sessions, rainy evenings, and quiet mornings.",
    accentColor: "#3d6b30",
  },
];

// ── Particle data defined OUTSIDE component so Math.random() is never called during render ──
const PARTICLE_DATA = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: (i * 1.37) % 8,
  duration: 7 + (i * 1.13) % 8,
  left: 5 + (i * 5.3) % 90,
  size: 2 + (i * 0.7) % 4,
  colorIndex: i % 4,
}));

const PARTICLE_COLORS = [
  "rgba(20,54,29,0.18)",
  "rgba(42,110,63,0.14)",
  "rgba(61,107,48,0.12)",
  "rgba(20,54,29,0.08)",
];

/* ── Floating Particle ── */
function Particle({
  delay, duration, left, size, colorIndex,
}: {
  delay: number; duration: number; left: number; size: number; colorIndex: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size * 1.6,
        left: `${left}%`,
        bottom: 0,
        borderRadius: "50% 0 50% 0",
        background: PARTICLE_COLORS[colorIndex],
      }}
      initial={{ y: 0, opacity: 0, rotate: 0 }}
      animate={{ y: -500, opacity: [0, 0.7, 0.5, 0], rotate: 180 }}
      transition={{ duration, delay, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
    />
  );
}

/* ── Spinning Ring Avatar ── */
function AvatarRing({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className="relative w-[52px] h-[52px] shrink-0">
      <motion.svg
        viewBox="0 0 52 52"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
      >
        <circle
          cx="26" cy="26" r="24"
          stroke={accent}
          strokeWidth="0.8"
          strokeDasharray="4 6"
          fill="none"
          opacity="0.4"
        />
        <circle cx="26" cy="2" r="1.5" fill={accent} opacity="0.6" />
      </motion.svg>
      <div
        className="absolute inset-[5px] rounded-full flex items-center justify-center"
        style={{ background: "#dceadc" }}
      >
        <span
          style={{
            color: accent,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}

/* ── 3D Tilt Card ── */
function TestimonialCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.23, 1, 0.32, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="relative rounded-[20px] p-8 cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card base */}
      <div
        className="absolute inset-0 rounded-[20px] transition-all duration-300"
        style={{
          background: "#ffffff",
          border: hovered
            ? "0.5px solid rgba(20,54,29,0.3)"
            : "0.5px solid rgba(20,54,29,0.1)",
          boxShadow: hovered
            ? "0 12px 40px rgba(20,54,29,0.12), 0 2px 8px rgba(20,54,29,0.07)"
            : "0 2px 16px rgba(20,54,29,0.06)",
        }}
      />

      {/* Top sliding green bar on hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] overflow-hidden rounded-b-sm">
        <motion.div
          className="h-full w-full"
          style={{
            background: `linear-gradient(90deg, ${review.accentColor}, #2a6e3f, transparent)`,
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45 }}
        />
      </div>

      {/* Radial spotlight following cursor */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(20,54,29,0.06) 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-7 w-0.5 h-10 rounded-sm"
        style={{
          background: `linear-gradient(180deg, ${review.accentColor}, transparent)`,
        }}
      />

      {/* Giant decorative quote mark */}
      <div
        className="absolute top-4 right-6 pointer-events-none select-none transition-colors duration-300"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 100,
          lineHeight: 1,
          color: hovered ? "rgba(20,54,29,0.09)" : "rgba(20,54,29,0.04)",
          fontStyle: "italic",
        }}
      >
        "
      </div>

      {/* Leaf badge on hover */}
      <motion.div
        className="absolute bottom-5 right-5 w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          background: "#f2efe7",
          border: "0.5px solid rgba(20,54,29,0.15)",
        }}
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.7,
          rotate: hovered ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1 C7 1 11.5 4 11.5 8 C11.5 10.8 9.5 12.5 7 12.5 C4.5 12.5 2.5 10.8 2.5 8 C2.5 4 7 1 7 1Z"
            fill="#14361d"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      {/* Shine overlay */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,255,255,0.5) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.18 + 0.4 + i * 0.07,
                type: "spring",
                stiffness: 400,
              }}
              className="w-[10px] h-[10px]"
              style={{
                background: "#14361d",
                clipPath:
                  "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
              }}
            />
          ))}
        </div>

        {/* Quote */}
        <p
          className="mb-7"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(20,54,29,0.75)",
            lineHeight: 1.78,
            margin: "0 0 28px",
          }}
        >
          {review.review}
        </p>

        {/* Separator */}
        <div
          style={{
            height: "0.5px",
            background:
              "linear-gradient(90deg, rgba(20,54,29,0.2), transparent)",
            marginBottom: 18,
          }}
        />

        {/* Author */}
        <div className="flex items-center gap-3.5">
          <AvatarRing initials={review.initials} accent={review.accentColor} />
          <div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#14361d",
                margin: 0,
              }}
            >
              {review.name}
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "rgba(20,54,29,0.5)",
                textTransform: "uppercase",
                fontWeight: 300,
                margin: 0,
              }}
            >
              {review.tag}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#f2efe7", fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Load fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');`}</style>

      {/* Ambient green orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(20,54,29,0.08), transparent 70%)",
          filter: "blur(70px)",
          top: -100,
          left: -100,
        }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(42,110,63,0.07), transparent 70%)",
          filter: "blur(70px)",
          bottom: -60,
          right: "10%",
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, -15, 0] }}
        transition={{ duration: 7, delay: 3.5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Floating leaf particles — data is static, no Math.random() in render */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLE_DATA.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Botanical top ornament */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              width: 52,
              height: "0.5px",
              background: "linear-gradient(90deg, transparent, rgba(20,54,29,0.3))",
            }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5 C8 1.5 13 5 13 9.5 C13 12.5 10.8 14.5 8 14.5 C5.2 14.5 3 12.5 3 9.5 C3 5 8 1.5 8 1.5Z"
              fill="rgba(20,54,29,0.3)"
            />
            <line
              x1="8" y1="14.5" x2="8" y2="16"
              stroke="rgba(20,54,29,0.35)"
              strokeWidth="0.8"
            />
          </svg>
          <div
            style={{
              width: 52,
              height: "0.5px",
              background: "linear-gradient(90deg, rgba(20,54,29,0.3), transparent)",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            letterSpacing: "0.35em",
            fontSize: 11,
            fontWeight: 300,
            color: "#14361d",
            textTransform: "uppercase",
            marginBottom: 12,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Voices of the Ritual
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 52px)",
            fontWeight: 400,
            color: "#14361d",
            margin: "0 0 8px",
          }}
        >
          What Tea{" "}
          <em style={{ fontStyle: "italic", color: "#2a6e3f" }}>Lovers</em> Say
        </motion.h2>

        {/* Ornamental divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <div
            style={{
              width: 60,
              height: 0.5,
              background:
                "linear-gradient(90deg, transparent, rgba(20,54,29,0.3))",
            }}
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2 C10 2 16 6 16 11 C16 14.5 13.3 17 10 17 C6.7 17 4 14.5 4 11 C4 6 10 2 10 2Z"
              fill="rgba(20,54,29,0.2)"
            />
            <line
              x1="10" y1="17" x2="10" y2="19"
              stroke="rgba(20,54,29,0.3)"
              strokeWidth="0.8"
            />
          </svg>
          <div
            style={{
              width: 60,
              height: 0.5,
              background:
                "linear-gradient(90deg, rgba(20,54,29,0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} review={r} index={i} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-9">
          {reviews.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{
                width: activeIndex === i ? 24 : 6,
                background:
                  activeIndex === i
                    ? "#14361d"
                    : "rgba(20,54,29,0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="h-1.5 rounded-full border-none cursor-pointer p-0"
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 15,
              color: "rgba(20,54,29,0.6)",
              letterSpacing: "0.1em",
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            Join over 5.3Cr tea lovers who found their ritual
          </p>
          <motion.button
            whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(20,54,29,0.22)" }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden"
            style={{
              background: "#14361d",
              border: "none",
              color: "#f2efe7",
              padding: "12px 36px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 50,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1 C7 1 11.5 4 11.5 8 C11.5 10.8 9.5 12.5 7 12.5 C4.5 12.5 2.5 10.8 2.5 8 C2.5 4 7 1 7 1Z"
                fill="#f2efe7"
                opacity="0.8"
              />
            </svg>
            Explore the Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}