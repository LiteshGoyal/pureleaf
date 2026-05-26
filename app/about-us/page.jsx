"use client";

import { useEffect, useRef, useState } from "react";

// ─── Utility: simple intersection-observer hook ───────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Section wrapper with slide-up reveal ─────────────────────────────────────
function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Highlighted word span ────────────────────────────────────────────────────
function Hi({ children }) {
  return (
    <span style={{
      color: "#c8750a",
      fontWeight: 700,
      position: "relative",
      display: "inline",
    }}>
      {children}
    </span>
  );
}

// ─── Decorative leaf SVG ──────────────────────────────────────────────────────
function Leaf({ style = {}, opacity = 0.12, rotate = 0, size = 80 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 80 80"
      style={{ position: "absolute", opacity, transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      <path
        d="M40 8 C18 8 8 28 8 44 C8 62 22 74 40 74 C40 74 40 40 72 24 C60 10 50 8 40 8Z"
        fill="#3a6b2a"
      />
      <path d="M40 74 C40 74 40 40 72 24" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

// ─── Tea steam SVG animation ──────────────────────────────────────────────────
// function SteamCup() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
//       <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
//         <style>{`
//           @keyframes steam1 { 0%,100%{transform:translateY(0) scaleX(1);opacity:0.7} 50%{transform:translateY(-14px) scaleX(1.3);opacity:0} }
//           @keyframes steam2 { 0%,100%{transform:translateY(0) scaleX(1);opacity:0.6} 50%{transform:translateY(-18px) scaleX(0.8);opacity:0} }
//           @keyframes steam3 { 0%,100%{transform:translateY(0) scaleX(1);opacity:0.5} 50%{transform:translateY(-12px) scaleX(1.2);opacity:0} }
//           .s1{animation:steam1 2s ease-in-out infinite;}
//           .s2{animation:steam2 2.4s ease-in-out 0.4s infinite;}
//           .s3{animation:steam3 1.8s ease-in-out 0.8s infinite;}
//         `}</style>
//         {/* Steam */}
//         <path className="s1" d="M35 32 Q32 24 35 16" stroke="#c8750a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
//         <path className="s2" d="M50 28 Q47 20 50 12" stroke="#c8750a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
//         <path className="s3" d="M65 32 Q62 24 65 16" stroke="#c8750a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
//         {/* Cup */}
//         <path d="M18 44 L28 90 H72 L82 44 Z" fill="#3a6b2a" />
//         <rect x="18" y="40" width="64" height="8" rx="4" fill="#2d5422" />
//         {/* Saucer */}
//         <ellipse cx="50" cy="96" rx="36" ry="7" fill="#2d5422" />
//         <ellipse cx="50" cy="94" rx="36" ry="7" fill="#3a6b2a" />
//         {/* Tea surface */}
//         <ellipse cx="50" cy="49" rx="28" ry="6" fill="#a05c10" />
//         {/* Handle */}
//         <path d="M82 52 Q96 52 96 62 Q96 72 82 72" stroke="#2d5422" strokeWidth="5" fill="none" strokeLinecap="round" />
//         {/* Brand text */}
//         <text x="50" y="73" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#fff" fontWeight="bold">Pure Leaf</text>
//       </svg>
//     </div>
//   );
// }

// ─── Stats card ───────────────────────────────────────────────────────────────
function StatCard({ number, suffix, label, delay }) {
  return (
    <RevealSection delay={delay} style={{ flex: "1 1 160px" }}>
      <div style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(200,117,10,0.25)",
        borderRadius: "16px",
        padding: "1.75rem 1rem",
        textAlign: "center",
        backdropFilter: "blur(8px)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(200,117,10,0.2)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      >
        <div style={{ fontSize: "2.4rem", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, color: "#e8930d", lineHeight: 1 }}>
          <Counter target={number} suffix={suffix} />
        </div>
        <div style={{ marginTop: "0.5rem", fontSize: "0.82rem", color: "#c9b99a", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
      </div>
    </RevealSection>
  );
}

// ─── Value pill ───────────────────────────────────────────────────────────────
function ValuePill({ icon, text, delay }) {
  return (
    <RevealSection delay={delay}>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.75rem",
        background: "rgba(58,107,42,0.15)",
        border: "1px solid rgba(58,107,42,0.35)",
        borderRadius: "999px",
        padding: "0.65rem 1.25rem",
        fontSize: "0.9rem", color: "#d4c5a9",
        backdropFilter: "blur(6px)",
        transition: "background 0.3s",
        whiteSpace: "nowrap",
      }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(58,107,42,0.3)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(58,107,42,0.15)"}
      >
        <span style={{ fontSize: "1.1rem" }}>{icon}</span>
        <span>{text}</span>
      </div>
    </RevealSection>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');


        .about-root {
          background: #0f1a0a;
          color: #e8ddd0;
          font-family: 'Lora', Georgia, serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 50% 30%, rgba(58,107,42,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 80%, rgba(200,117,10,0.12) 0%, transparent 60%),
            #0f1a0a;
        }
        .hero-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(200,117,10,0.15);
          border: 1px solid rgba(200,117,10,0.4);
          border-radius: 999px;
          padding: 0.45rem 1.2rem;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #e8930d;
          margin-bottom: 1.5rem;
          animation: fadeSlideDown 0.8s ease 0.2s both;
        }
        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(3rem, 9vw, 7rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          animation: fadeSlideDown 0.9s ease 0.35s both;
          position: relative;
        }
        .hero-title-green { color: #a0c83e; }
        .hero-title-amber { color: #e8930d; font-style: italic; }
        .hero-divider {
          width: 80px; height: 3px;
          background: linear-gradient(90deg, transparent, #c8750a, transparent);
          margin: 1.75rem auto;
          animation: scaleIn 0.8s ease 0.7s both;
        }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #b8a98e;
          max-width: 560px;
          line-height: 1.7;
          animation: fadeSlideDown 0.9s ease 0.55s both;
        }
        .tagline-hero {
          margin-top: 2.5rem;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          color: #e8930d;
          animation: fadeSlideDown 0.9s ease 0.75s both;
        }
        .scroll-hint {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          color: #6b5e4e; font-size: 0.7rem; letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: fadeIn 1.2s ease 1.5s both;
        }
        .scroll-arrow { animation: bounce 1.8s ease-in-out infinite; }

        /* ── Sections ── */
        .section { padding: 5rem 1.5rem; position: relative; }
        .section-inner { max-width: 900px; margin: 0 auto; }
        .section-label {
          font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: #c8750a; margin-bottom: 0.75rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .section-label::before, .section-label::after {
          content: ""; flex: 1; max-width: 40px; height: 1px; background: #c8750a; opacity: 0.5;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800; line-height: 1.15;
          margin-bottom: 1.75rem;
          color: #f0e6d6;
        }
        .body-text {
          font-size: clamp(0.95rem, 2.2vw, 1.08rem);
          line-height: 1.85;
          color: #c4b59e;
        }

        /* ── Divider band ── */
        .band {
          border-top: 1px solid rgba(58,107,42,0.2);
          border-bottom: 1px solid rgba(58,107,42,0.2);
          padding: 4rem 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .band-inner { max-width: 900px; margin: 0 auto; }

        /* ── Stats grid ── */
        .stats-grid {
          display: flex; flex-wrap: wrap; gap: 1rem;
          justify-content: center;
        }

        /* ── Values grid ── */
        .values-grid {
          display: flex; flex-wrap: wrap; gap: 0.75rem;
          margin-top: 2rem;
        }

        /* ── Regions ── */
        .regions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .region-chip {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(200,117,10,0.2);
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          font-size: 0.82rem;
          color: #c9b99a;
          text-align: center;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
        }
        .region-chip:hover {
          background: rgba(200,117,10,0.1);
          border-color: rgba(200,117,10,0.5);
          transform: translateY(-3px);
        }

        /* ── Tagline section ── */
        .tagline-section {
          text-align: center;
          padding: 5rem 1.5rem;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,117,10,0.08) 0%, transparent 70%);
        }
        .tagline-big {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(2.2rem, 7vw, 5rem);
          font-weight: 900;
          color: #e8930d;
          line-height: 1.1;
        }
        .tagline-meaning {
          margin-top: 1rem;
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: #8a7b67;
          font-style: italic;
        }

        /* ── Footer strip ── */
        .footer-strip {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2rem 1.5rem;
          text-align: center;
          font-size: 0.78rem;
          color: #4a3f32;
          letter-spacing: 0.05em;
        }

        /* ── Keyframes ── */
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatLeaf {
          0%,100% { transform: translateY(0) rotate(var(--r,0deg)); }
          50%      { transform: translateY(-18px) rotate(calc(var(--r,0deg) + 12deg)); }
        }
        .float1 { --r: 20deg; animation: floatLeaf 6s ease-in-out infinite; }
        .float2 { --r: -35deg; animation: floatLeaf 8s ease-in-out 1s infinite; }
        .float3 { --r: 55deg; animation: floatLeaf 7s ease-in-out 2s infinite; }
        .float4 { --r: -10deg; animation: floatLeaf 9s ease-in-out 0.5s infinite; }
        .float5 { --r: 80deg; animation: floatLeaf 5.5s ease-in-out 1.5s infinite; }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .section { padding: 3.5rem 1.25rem; }
          .band    { padding: 3rem 1.25rem; }
          .regions-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { gap: 0.6rem; }
        }
      `}</style>

      <main className="about-root">

        {/* ════ HERO ════ */}
        <section className="hero ">
          <div className="hero-bg" />
          <div className="hero-noise" />

          {/* Floating leaves */}
          <div className="float1" style={{ position: "absolute", top: "12%", left: "5%", pointerEvents: "none" }}>
            <Leaf size={90} opacity={0.18} rotate={20} />
          </div>
          <div className="float2" style={{ position: "absolute", top: "20%", right: "6%", pointerEvents: "none" }}>
            <Leaf size={65} opacity={0.13} rotate={-35} />
          </div>
          <div className="float3" style={{ position: "absolute", bottom: "22%", left: "8%", pointerEvents: "none" }}>
            <Leaf size={55} opacity={0.10} rotate={55} />
          </div>
          <div className="float4" style={{ position: "absolute", bottom: "15%", right: "4%", pointerEvents: "none" }}>
            <Leaf size={75} opacity={0.14} rotate={-10} />
          </div>
          <div className="float5" style={{ position: "absolute", top: "55%", left: "2%", pointerEvents: "none" }}>
            <Leaf size={45} opacity={0.09} rotate={80} />
          </div>

          {/* Hero content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* <SteamCup /> */}
            <h1 className="hero-title">
              <span className="hero-title-green text-[#a0c83e]">Pure Leaf</span><br />
              <span className="hero-title-amber">Tea Co.</span>
            </h1>
            <div className="hero-divider" />
            <p className="hero-sub">
              Delivering authentic Indian tea with purity,<br />
              consistency, and rich flavour — since 2001.
            </p>
            <p className="tagline-hero">&ldquo; Har Cup Mein Swaad! &rdquo;</p>
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <svg className="scroll-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="#6b5e4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ════ OUR STORY ════ */}
        <section className="section">
          <div className="section-inner">
            <RevealSection>
              <p className="section-label">Our Story</p>
              <h2 className="section-title">A Humble Beginning,<br />A Proud Legacy</h2>
            </RevealSection>
            <RevealSection delay={0.1}>
              <p className="body-text">
                Established in 2001 in <Hi>Bathinda district</Hi>, Pure Leaf Tea Co. was founded with a vision
                to deliver authentic Indian tea with purity, consistency, and rich flavour in every cup.
                What began as a humble family initiative has today grown into a trusted tea brand, proudly
                carried forward by the second generation.
              </p>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                For more than two decades, we have been serving tea lovers with the original richness and
                flavour of teas sourced from the renowned gardens of{" "}
                <Hi>Assam, Darjeeling, and Dooars</Hi>. Our journey has always been guided by ethical
                business practices, superior quality, and long-term customer trust.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* ════ STATS BAND ════ */}
        <div className="band bg-[#062d18]">
          <div className="band-inner">
            <RevealSection>
              <p style={{ textAlign: "center", marginBottom: "2.5rem", color: "#8a7b67", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Two decades of trust
              </p>
            </RevealSection>
            <div className="stats-grid">
              <StatCard number={2001} suffix="" label="Founded" delay={0} />
              <StatCard number={25} suffix="+" label="Years of Heritage" delay={0.1} />
              <StatCard number={10} suffix="+" label="States & UTs Served" delay={0.2} />
              <StatCard number={3} suffix="" label="Premium Tea Origins" delay={0.3} />
            </div>
          </div>
        </div>

        {/* ════ WHERE WE SERVE ════ */}
        <section className="section">
          <div className="section-inner">
            <RevealSection>
              <p className="section-label">Our Reach</p>
              <h2 className="section-title">Serving Tea Lovers<br />Across North India</h2>
            </RevealSection>
            <RevealSection delay={0.1}>
              <p className="body-text">
                Today, <Hi>Pure Leaf Tea Co. proudly</Hi> caters to customers across{" "}
                <Hi>Punjab, Haryana, Himachal Pradesh, Rajasthan, Uttarakhand, Uttar Pradesh, Bihar, Jharkhand</Hi>,
                along with the Union Territories of <Hi>Jammu &amp; Kashmir and Chandigarh</Hi>. Over the years,
                our consistent taste and dependable quality have made us a preferred choice among consumers and
                trade partners alike.
              </p>
            </RevealSection>
            <div className="regions-grid" style={{ marginTop: "2rem" }}>
              {[
                "Punjab","Haryana","Himachal Pradesh","Rajasthan",
                "Uttarakhand","Uttar Pradesh","Bihar","Jharkhand",
                "Jammu & Kashmir","Chandigarh"
              ].map((r, i) => (
                <RevealSection key={r} delay={0.05 * i}>
                  <div className="region-chip">🌿 {r}</div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ════ QUALITY & INFRASTRUCTURE ════ */}
        <div className="band">
          <div className="band-inner" style={{ position: "relative" }}>
            <Leaf size={140} opacity={0.07} rotate={-30} style={{ top: "-20px", right: "-20px" }} />
            <RevealSection>
              <p className="section-label">Quality & Infrastructure</p>
              <h2 className="section-title">Where Tradition Meets<br />Modern Excellence</h2>
            </RevealSection>
            <RevealSection delay={0.1}>
              <p className="body-text">
                At Pure Leaf Tea Co., we combine traditional tea expertise with modern technology to maintain
                superior tea quality standards. Our advanced infrastructure, equipped with modern machinery
                and quality-focused systems, allows us to deliver premium tea blends with{" "}
                <Hi>freshness, rich colour, strong flavour, and refreshing aroma</Hi> in every pack.
              </p>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                We are supported by a dedicated team of skilled professionals and an{" "}
                <Hi>in-house quality testing system</Hi> where every product undergoes multiple quality checks
                to ensure purity, hygiene, and excellence. Our infrastructure is systematically divided into
                specialised departments including production, quality testing, research &amp; development, and
                warehousing &amp; packaging to maintain the highest operational standards.
              </p>
            </RevealSection>

            {/* Quality pillars */}
            <div className="values-grid">
              {[
                ["🧪", "In-House Quality Testing"],
                ["🏭", "Modern Machinery"],
                ["🔬", "R&D Department"],
                ["📦", "Warehousing & Packaging"],
                ["✅", "Multi-Stage Quality Checks"],
                ["🌿", "Ethical Sourcing"],
              ].map(([icon, text], i) => (
                <ValuePill key={text} icon={icon} text={text} delay={0.05 * i} />
              ))}
            </div>
          </div>
        </div>

        {/* ════ OUR PROMISE ════ */}
        <section className="section">
          <div className="section-inner">
            <RevealSection>
              <p className="section-label">Our Promise</p>
              <h2 className="section-title">More Than a Beverage —<br />A Daily Ritual</h2>
            </RevealSection>
            <RevealSection delay={0.1}>
              <p className="body-text">
                At the heart of our identity lies our tagline —{" "}
                <Hi>&ldquo; Har Cup Mein Swaad! &rdquo;</Hi> meaning &ldquo;Taste in Every Cup.&rdquo; This
                original expression reflects our promise that every sip of Pure Leaf Tea Co. delivers
                satisfaction, authentic flavour, and the warmth of traditional Indian tea culture.
              </p>
            </RevealSection>
            <RevealSection delay={0.2}>
              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                For us, tea is more than just a beverage — it is a daily ritual that brings people together.
                With every cup served, Pure Leaf Tea Co. continues its journey of delivering purity, trust,
                and authentic taste to tea lovers across India.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* ════ TAGLINE CENTREPIECE ════ */}
        <section className="tagline-section">
          <RevealSection>
            <div style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: 1 }}>☕</div>
            {/* <p className="tagline-big">&ldquo; Har Cup Mein Swaad! &rdquo;</p>
            <p className="tagline-meaning">Taste in Every Cup</p> */}
            {/* <div style={{
              marginTop: "2.5rem",
              display: "inline-block",
              background: "rgba(200,117,10,0.12)",
              border: "1px solid rgba(200,117,10,0.3)",
              borderRadius: "999px",
              padding: "0.6rem 1.8rem",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#e8930d",
            }}>
              Pure Leaf Tea Co. — Est. 2001
            </div> */}
            
            <p className="tagline-hero">&ldquo; Har Cup Mein Swaad! &rdquo;</p>
          </RevealSection>
        </section>

        {/* ════ FOOTER ════ */}
        <footer className="footer-strip">
          © {new Date().getFullYear()} Pure Leaf Tea Co. · Bathinda, Punjab · All Rights Reserved
        </footer>
      </main>
    </>
  );
}