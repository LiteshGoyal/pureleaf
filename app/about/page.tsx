// 'use client'

// import { useState, useEffect, useRef } from "react";

// const useInView = (threshold = 0.15) => {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
//   return [ref, inView];
// };

// const useCountUp = (
//   target: number,
//   duration: number = 2000,
//   start: boolean = false
// ) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime = null;
//     const animate = (ts) => {
//       if (!startTime) startTime = ts;
//       const progress = Math.min((ts - startTime) / duration, 1);
//       const ease = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(ease * target));
//       if (progress < 1) requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, [start, target, duration]);
//   return count;
// };

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');


//   :root {
//     --forest: #1C3A1E;
//     --forest-mid: #2D5A30;
//     --leaf: #4A8C4F;
//     --sage: #8AB88E;
//     --mist: #C8DEC9;
//     --cream: #F5EDD8;
//     --parchment: #EFE3C2;
//     --gold: #C8922A;
//     --gold-light: #E8B84B;
//     --amber: #D4701A;
//     --copper: #8B4513;
//     --tea-brown: #6B3A2A;
//     --dark: #0F1E10;
//     --text-body: #2C1810;
//   }

//   body { margin: 0; background: var(--cream); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

//   .page { background: var(--cream); }

//   /* ── HERO ── */
//   .hero {
//     min-height: 100vh;
//     background: var(--forest);
//     position: relative;
//     display: flex; flex-direction: column; justify-content: center;
//     overflow: hidden;
//     padding: 0;
//   }
//   .hero-bg-pattern {
//     position: absolute; inset: 0;
//     background-image:
//       radial-gradient(ellipse 60% 50% at 70% 50%, rgba(74,140,79,0.18) 0%, transparent 70%),
//       radial-gradient(ellipse 40% 60% at 20% 30%, rgba(200,146,42,0.12) 0%, transparent 60%);
//   }
//   .hero-lines {
//     position: absolute; inset: 0; overflow: hidden;
//   }
//   .hero-lines::before {
//     content: '';
//     position: absolute;
//     width: 1px; height: 100%;
//     left: 33%; top: 0;
//     background: linear-gradient(to bottom, transparent, rgba(200,146,42,0.25), transparent);
//   }
//   .hero-lines::after {
//     content: '';
//     position: absolute;
//     width: 1px; height: 100%;
//     left: 66%; top: 0;
//     background: linear-gradient(to bottom, transparent, rgba(138,184,142,0.15), transparent);
//   }

//   .hero-content {
//     position: relative; z-index: 2;
//     display: grid; grid-template-columns: 1fr 1fr;
//     gap: 0; min-height: 100vh;
//   }
//   .hero-left {
//     display: flex; flex-direction: column; justify-content: center;
//     padding: 80px 60px 80px 80px;
//   }
//   .hero-right {
//     position: relative;
//     display: flex; align-items: center; justify-content: center;
//     overflow: hidden;
//   }
//   .hero-tag {
//     display: inline-flex; align-items: center; gap: 10px;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
//     color: var(--gold-light); font-weight: 500;
//     margin-bottom: 40px;
//     opacity: 0; animation: fadeUp 0.8s 0.2s ease forwards;
//   }
//   .hero-tag::before {
//     content: ''; display: inline-block;
//     width: 32px; height: 1px; background: var(--gold);
//   }
//   .hero-h1 {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(3.2rem, 5.5vw, 5.5rem);
//     font-weight: 900;
//     line-height: 1.0;
//     color: var(--cream);
//     opacity: 0; animation: fadeUp 0.9s 0.4s ease forwards;
//   }
//   .hero-h1 em {
//     display: block;
//     font-style: italic;
//     color: var(--gold-light);
//     font-weight: 400;
//   }
//   .hero-tagline {
//     margin-top: 32px;
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.5rem; font-style: italic;
//     color: var(--mist); font-weight: 300;
//     letter-spacing: 0.01em;
//     opacity: 0; animation: fadeUp 0.9s 0.6s ease forwards;
//   }
//   .hero-divider {
//     margin: 40px 0;
//     width: 60px; height: 2px;
//     background: linear-gradient(to right, var(--gold), transparent);
//     opacity: 0; animation: fadeRight 0.8s 0.8s ease forwards;
//   }
//   .hero-desc {
//     font-size: 1.0rem; line-height: 1.75;
//     color: rgba(200,222,201,0.75);
//     max-width: 420px;
//     opacity: 0; animation: fadeUp 0.9s 0.9s ease forwards;
//   }
//   .hero-stats {
//     display: flex; gap: 48px; margin-top: 56px;
//     opacity: 0; animation: fadeUp 0.9s 1.1s ease forwards;
//   }
//   .hero-stat-num {
//     font-family: 'Playfair Display', serif;
//     font-size: 2.4rem; font-weight: 700; color: var(--gold-light);
//     line-height: 1;
//   }
//   .hero-stat-label {
//     font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
//     color: var(--sage); margin-top: 6px;
//   }

//   .hero-visual {
//     position: relative; width: 100%; height: 100%;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .tea-circle-outer {
//     width: min(480px, 85%); aspect-ratio: 1;
//     border-radius: 50%;
//     border: 1px solid rgba(200,146,42,0.25);
//     position: relative;
//     display: flex; align-items: center; justify-content: center;
//     animation: slowSpin 30s linear infinite;
//   }
//   .tea-circle-inner {
//     width: 75%; aspect-ratio: 1;
//     border-radius: 50%;
//     background: radial-gradient(circle at 40% 35%, rgba(74,140,79,0.35), rgba(28,58,30,0.8));
//     border: 1px solid rgba(138,184,142,0.3);
//     display: flex; align-items: center; justify-content: center;
//     flex-direction: column;
//     animation: slowSpin 30s linear infinite reverse;
//   }
//   .tea-year {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.0rem; color: var(--gold-light);
//     letter-spacing: 0.12em; text-transform: uppercase;
//     margin-bottom: 4px;
//   }
//   .tea-est {
//     font-family: 'Playfair Display', serif;
//     font-size: 3.8rem; font-weight: 900; color: var(--cream);
//     line-height: 1;
//   }
//   .tea-location {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.1rem; font-style: italic; color: var(--sage);
//     margin-top: 8px;
//   }
//   .orbit-dot {
//     position: absolute;
//     width: 8px; height: 8px; border-radius: 50%;
//     background: var(--gold);
//   }
//   .orbit-dot:nth-child(1) { top: -4px; left: 50%; transform: translateX(-50%); }
//   .orbit-dot:nth-child(2) { bottom: -4px; left: 50%; transform: translateX(-50%); opacity: 0.5; }
//   .orbit-dot:nth-child(3) { left: -4px; top: 50%; transform: translateY(-50%); opacity: 0.3; }
//   .orbit-dot:nth-child(4) { right: -4px; top: 50%; transform: translateY(-50%); opacity: 0.7; }

//   /* ── SECTION BASE ── */
//   .section { padding: 120px 80px; }
//   .section-tag {
//     font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
//     color: var(--gold); font-weight: 500; margin-bottom: 20px;
//     display: flex; align-items: center; gap: 12px;
//   }
//   .section-tag::before { content: ''; display: inline-block; width: 24px; height: 1px; background: var(--gold); }

//   /* ── STORY ── */
//   .story-section {
//     background: var(--cream);
//     display: grid; grid-template-columns: 1fr 1fr; gap: 100px;
//     align-items: center;
//   }
//   .story-left { position: relative; }
//   .story-h2 {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2.4rem, 4vw, 4rem); font-weight: 700;
//     color: var(--forest); line-height: 1.15;
//   }
//   .story-h2 span { color: var(--gold); font-style: italic; }
//   .story-body {
//     font-size: 1.05rem; line-height: 1.9;
//     color: var(--text-body); margin-top: 28px; opacity: 0.85;
//   }
//   .story-body + .story-body { margin-top: 20px; }
//   .story-pull {
//     margin: 48px 0;
//     padding: 28px 36px;
//     border-left: 3px solid var(--gold);
//     background: rgba(200,146,42,0.06);
//     border-radius: 0 8px 8px 0;
//   }
//   .story-pull p {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.55rem; font-style: italic;
//     color: var(--forest); line-height: 1.5;
//   }
//   .story-right { position: relative; }
//   .story-card-stack { position: relative; height: 520px; }
//   .story-card {
//     position: absolute;
//     background: var(--forest);
//     border-radius: 20px;
//     overflow: hidden;
//     display: flex; flex-direction: column; justify-content: flex-end;
//     padding: 36px;
//   }
//   .story-card-back {
//     width: 85%; height: 90%; top: 5%; right: 0;
//     background: var(--forest-mid);
//     transform: rotate(3deg);
//   }
//   .story-card-front {
//     width: 90%; height: 88%; bottom: 0; left: 0;
//   }
//   .story-card-label {
//     font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
//     color: var(--sage); margin-bottom: 12px;
//   }
//   .story-card-title {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.6rem; font-weight: 700; color: var(--cream); line-height: 1.3;
//   }
//   .story-card-sub {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.1rem; font-style: italic; color: var(--sage); margin-top: 8px;
//   }
//   .card-badge {
//     position: absolute; top: 32px; right: 32px;
//     width: 72px; height: 72px; border-radius: 50%;
//     background: rgba(200,146,42,0.15); border: 1px solid rgba(200,146,42,0.4);
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//   }
//   .card-badge-num {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.5rem; font-weight: 700; color: var(--gold-light);
//     line-height: 1;
//   }
//   .card-badge-text {
//     font-size: 8px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--sage);
//   }

//   /* ── JOURNEY ── */
//   .journey-section {
//     background: var(--forest);
//     position: relative; overflow: hidden;
//   }
//   .journey-section::before {
//     content: '';
//     position: absolute; top: 0; left: 0; right: 0; height: 1px;
//     background: linear-gradient(to right, transparent, var(--gold), transparent);
//   }
//   .journey-title-block { text-align: center; margin-bottom: 80px; }
//   .journey-h2 {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2.4rem, 4vw, 3.8rem); font-weight: 700;
//     color: var(--cream); line-height: 1.2;
//   }
//   .journey-h2 em { color: var(--gold-light); font-style: italic; }
//   .journey-sub {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.2rem; font-style: italic; color: var(--sage);
//     margin-top: 16px;
//   }

//   .milestones { position: relative; }
//   .milestones-line {
//     position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
//     background: linear-gradient(to bottom, transparent, rgba(200,146,42,0.4) 10%, rgba(200,146,42,0.4) 90%, transparent);
//     transform: translateX(-50%);
//   }
//   .milestone {
//     display: grid; grid-template-columns: 1fr auto 1fr;
//     gap: 0; align-items: center; margin-bottom: 64px;
//   }
//   .milestone-content {
//     padding: 36px 40px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(138,184,142,0.15);
//     border-radius: 16px;
//     transition: border-color 0.3s;
//   }
//   .milestone-content:hover { border-color: rgba(200,146,42,0.35); }
//   .milestone-left { padding-right: 48px; }
//   .milestone-right { padding-left: 48px; }
//   .milestone-empty { visibility: hidden; }
//   .milestone-dot-wrap {
//     display: flex; align-items: center; justify-content: center;
//     flex-direction: column; gap: 8px; z-index: 2;
//   }
//   .milestone-dot {
//     width: 14px; height: 14px; border-radius: 50%;
//     background: var(--gold); border: 3px solid var(--forest);
//     box-shadow: 0 0 0 1px var(--gold);
//   }
//   .milestone-year {
//     font-size: 10px; letter-spacing: 0.15em; color: var(--gold-light);
//     white-space: nowrap;
//   }
//   .milestone-icon {
//     font-size: 1.5rem; margin-bottom: 12px;
//   }
//   .milestone-title {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.25rem; font-weight: 600; color: var(--cream); margin-bottom: 10px;
//   }
//   .milestone-text {
//     font-size: 0.9rem; line-height: 1.7; color: rgba(200,222,201,0.65);
//   }

//   /* ── QUALITY ── */
//   .quality-section {
//     background: var(--parchment);
//     position: relative;
//   }
//   .quality-grid {
//     display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
//     margin-top: 64px;
//   }
//   .quality-card {
//     background: var(--cream); padding: 48px 36px;
//     position: relative; overflow: hidden;
//     transition: background 0.4s;
//   }
//   .quality-card:hover { background: var(--forest); }
//   .quality-card:hover .q-title { color: var(--cream); }
//   .quality-card:hover .q-text { color: var(--sage); }
//   .quality-card:hover .q-num { color: var(--gold-light); }
//   .quality-card:hover .q-line { background: var(--gold); }
//   .q-num {
//     font-family: 'Playfair Display', serif;
//     font-size: 5rem; font-weight: 900;
//     color: rgba(200,146,42,0.15); line-height: 1;
//     position: absolute; top: 20px; right: 24px;
//     transition: color 0.4s;
//   }
//   .q-line {
//     width: 32px; height: 2px; background: var(--gold);
//     margin-bottom: 24px; transition: background 0.4s;
//   }
//   .q-title {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.3rem; font-weight: 700; color: var(--forest);
//     margin-bottom: 16px; transition: color 0.4s;
//   }
//   .q-text {
//     font-size: 0.92rem; line-height: 1.75; color: rgba(44,24,16,0.7);
//     transition: color 0.4s;
//   }

//   /* ── GEOGRAPHY ── */
//   .geo-section { background: var(--cream); }
//   .geo-grid {
//     display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center;
//     margin-top: 60px;
//   }
//   .geo-lead {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 700;
//     color: var(--forest); line-height: 1.2;
//   }
//   .geo-lead em { color: var(--gold); font-style: italic; }
//   .geo-body {
//     font-size: 1.0rem; line-height: 1.85; color: var(--text-body);
//     opacity: 0.8; margin-top: 24px;
//   }
//   .geo-states {
//     display: flex; flex-wrap: wrap; gap: 10px; margin-top: 36px;
//   }
//   .geo-state {
//     padding: 8px 18px;
//     border: 1px solid rgba(28,58,30,0.25);
//     border-radius: 100px;
//     font-size: 0.82rem; color: var(--forest); font-weight: 500;
//     background: transparent;
//     transition: all 0.25s;
//     cursor: default;
//   }
//   .geo-state:hover {
//     background: var(--forest); color: var(--cream);
//     border-color: var(--forest);
//   }
//   .geo-visual {
//     background: var(--forest);
//     border-radius: 24px; padding: 56px 48px;
//     position: relative; overflow: hidden;
//   }
//   .geo-visual::before {
//     content: '';
//     position: absolute; top: -40px; right: -40px;
//     width: 200px; height: 200px; border-radius: 50%;
//     background: rgba(74,140,79,0.2);
//   }
//   .geo-visual-title {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.1rem; color: var(--sage); font-style: italic;
//     margin-bottom: 32px;
//   }
//   .geo-source {
//     display: flex; align-items: center; gap: 20px;
//     padding: 20px 0;
//     border-bottom: 1px solid rgba(138,184,142,0.15);
//   }
//   .geo-source:last-child { border-bottom: none; }
//   .geo-source-icon {
//     width: 48px; height: 48px; border-radius: 50%;
//     background: rgba(200,146,42,0.15); border: 1px solid rgba(200,146,42,0.3);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 1.3rem; flex-shrink: 0;
//   }
//   .geo-source-name {
//     font-family: 'Playfair Display', serif;
//     font-size: 1.1rem; font-weight: 600; color: var(--cream);
//   }
//   .geo-source-desc {
//     font-size: 0.82rem; color: var(--sage); margin-top: 3px;
//   }

//   /* ── PROMISE ── */
//   .promise-section {
//     background: var(--forest);
//     text-align: center; position: relative; overflow: hidden;
//   }
//   .promise-glow {
//     position: absolute; inset: 0;
//     background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,146,42,0.1) 0%, transparent 70%);
//     pointer-events: none;
//   }
//   .promise-tagline {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(3rem, 6vw, 6rem); font-weight: 900;
//     color: var(--cream); line-height: 1.05;
//     position: relative; z-index: 1;
//   }
//   .promise-tagline em {
//     display: block; font-style: italic;
//     color: var(--gold-light);
//   }
//   .promise-meaning {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 1.35rem; font-style: italic; color: var(--sage);
//     margin-top: 16px; position: relative; z-index: 1;
//   }
//   .promise-line {
//     width: 80px; height: 1px;
//     background: linear-gradient(to right, transparent, var(--gold), transparent);
//     margin: 40px auto; position: relative; z-index: 1;
//   }
//   .promise-body {
//     max-width: 680px; margin: 0 auto;
//     font-size: 1.1rem; line-height: 1.85; color: rgba(200,222,201,0.75);
//     position: relative; z-index: 1;
//   }

//   /* ── METRICS ── */
//   .metrics-band {
//     background: var(--gold);
//     padding: 64px 80px;
//     display: flex; justify-content: center; gap: 0;
//   }
//   .metric-item {
//     flex: 1; max-width: 240px; text-align: center;
//     padding: 0 40px;
//     border-right: 1px solid rgba(28,58,30,0.25);
//   }
//   .metric-item:last-child { border-right: none; }
//   .metric-num {
//     font-family: 'Playfair Display', serif;
//     font-size: 3.5rem; font-weight: 900; color: var(--forest);
//     line-height: 1;
//   }
//   .metric-label {
//     font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase;
//     color: var(--forest-mid); font-weight: 500; margin-top: 10px;
//     opacity: 0.8;
//   }

//   /* ── SCROLL ANIMATIONS ── */
//   .fade-up { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
//   .fade-up.visible { opacity: 1; transform: translateY(0); }
//   .fade-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.8s ease, transform 0.8s ease; }
//   .fade-left.visible { opacity: 1; transform: translateX(0); }
//   .fade-right { opacity: 0; transform: translateX(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
//   .fade-right.visible { opacity: 1; transform: translateX(0); }
//   .delay-1 { transition-delay: 0.1s; }
//   .delay-2 { transition-delay: 0.2s; }
//   .delay-3 { transition-delay: 0.3s; }
//   .delay-4 { transition-delay: 0.4s; }
//   .delay-5 { transition-delay: 0.5s; }

//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(30px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeRight {
//     from { opacity: 0; transform: translateX(-20px); }
//     to { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes slowSpin {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }
//   @keyframes float {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-12px); }
//   }
//   @keyframes pulse-ring {
//     0% { box-shadow: 0 0 0 0 rgba(200,146,42,0.4); }
//     70% { box-shadow: 0 0 0 16px rgba(200,146,42,0); }
//     100% { box-shadow: 0 0 0 0 rgba(200,146,42,0); }
//   }
//   .float-anim { animation: float 4s ease-in-out infinite; }
//   .pulse-anim { animation: pulse-ring 2.5s ease-out infinite; }

//   /* ── RESPONSIVE ── */
//   @media (max-width: 1024px) {
//     .hero-content { grid-template-columns: 1fr; min-height: auto; }
//     .hero-right { min-height: 400px; }
//     .hero-left { padding: 80px 40px 40px; }
//     .story-section { grid-template-columns: 1fr; gap: 60px; }
//     .story-card-stack { height: 380px; }
//     .quality-grid { grid-template-columns: 1fr 1fr; }
//     .geo-grid { grid-template-columns: 1fr; gap: 48px; }
//     .section { padding: 80px 40px; }
//     .metrics-band { padding: 48px 40px; flex-wrap: wrap; gap: 32px; }
//     .metric-item { border-right: none; border-bottom: 1px solid rgba(28,58,30,0.2); padding: 0 0 24px; }
//     .metric-item:last-child { border-bottom: none; }
//     .milestones-line { display: none; }
//     .milestone { grid-template-columns: 1fr; }
//     .milestone-dot-wrap { display: none; }
//     .milestone-left, .milestone-right { padding: 0; }
//   }
//   @media (max-width: 640px) {
//     .hero-left { padding: 60px 24px 40px; }
//     .hero-stats { gap: 32px; flex-wrap: wrap; }
//     .quality-grid { grid-template-columns: 1fr; gap: 2px; }
//     .section { padding: 64px 24px; }
//     .geo-visual { padding: 36px 28px; }
//   }
// `;

// const FadeSection = ({ children, className = "", dir = "up", delay = "" }) => {
//   const [ref, inView] = useInView();
//   return (
//     <div ref={ref} className={`fade-${dir} ${inView ? "visible" : ""} ${delay} ${className}`}>
//       {children}
//     </div>
//   );
// };

// const MetricCounter = ({ target, suffix = "", start }) => {
//   const count = useCountUp(target, 2200, start);
//   return <span>{count}{suffix}</span>;
// };

// const milestones = [
//   {
//     year: "2001",
//     side: "left",
//     icon: "🌱",
//     title: "The Humble Beginning",
//     text: "Established in Bathinda district, Pure Leaf Tea Co. was founded with a vision to deliver authentic Indian tea with purity, consistency, and rich flavour in every cup."
//   },
//   {
//     year: "2001–Present",
//     side: "right",
//     icon: "🍃",
//     title: "Sourcing the Finest",
//     text: "Serving tea lovers with the original richness and flavour of teas sourced from the renowned gardens of Assam, Darjeeling, and Dooars."
//   },
//   {
//     year: "Growing",
//     side: "left",
//     icon: "🏭",
//     title: "Modern Infrastructure",
//     text: "Advanced infrastructure equipped with modern machinery and quality-focused systems — delivering premium tea blends with freshness, rich colour, strong flavour, and refreshing aroma in every pack."
//   },
//   {
//     year: "Today",
//     side: "right",
//     icon: "🌏",
//     title: "Pan-North India Reach",
//     text: "Proudly catering to customers across Punjab, Haryana, Himachal Pradesh, Rajasthan, Uttarakhand, Uttar Pradesh, Bihar, Jharkhand, along with the Union Territories of Jammu & Kashmir and Chandigarh."
//   },
//   {
//     year: "Legacy",
//     side: "left",
//     icon: "👑",
//     title: "Second Generation, Same Values",
//     text: "Proudly carried forward by the second generation — combining traditional tea expertise with modern technology, guided by ethical business practices, superior quality, and long-term customer trust."
//   }
// ];

// export default function PureLeafAboutPage() {
//   const [metricsRef, metricsInView] = useInView(0.3);

//   const states = [
//     "Punjab", "Haryana", "Himachal Pradesh", "Rajasthan",
//     "Uttarakhand", "Uttar Pradesh", "Bihar", "Jharkhand",
//     "Jammu & Kashmir", "Chandigarh"
//   ];

//   return (
//     <div className="page">
//       <style>{styles}</style>

//       {/* ── HERO ── */}
//       <section className="hero">
//         <div className="hero-bg-pattern" />
//         <div className="hero-lines" />
//         <div className="hero-content">
//           <div className="hero-left">
//             <div className="hero-tag">Since 2001 · Bathinda, Punjab</div>
//             <h1 className="hero-h1">
//               Pure Leaf<br />
//               <em>Tea Co.</em>
//             </h1>
//             <p className="hero-tagline">"Har Cup Mein Swaad!"</p>
//             <div className="hero-divider" />
//             <p className="hero-desc">
//               Founded with a vision to deliver authentic Indian tea with purity, consistency, and rich flavour in every cup. What began as a humble family initiative has today grown into a trusted tea brand, proudly carried forward by the second generation.
//             </p>
//             <div className="hero-stats">
//               <div>
//                 <div className="hero-stat-num">25+</div>
//                 <div className="hero-stat-label">Years of Craft</div>
//               </div>
//               <div>
//                 <div className="hero-stat-num">10+</div>
//                 <div className="hero-stat-label">States Served</div>
//               </div>
//               <div>
//                 <div className="hero-stat-num">3</div>
//                 <div className="hero-stat-label">Iconic Origins</div>
//               </div>
//             </div>
//           </div>

//           <div className="hero-right">
//             <div className="hero-visual">
//               <div className="tea-circle-outer float-anim">
//                 <div className="orbit-dot" />
//                 <div className="orbit-dot" />
//                 <div className="orbit-dot" />
//                 <div className="orbit-dot" />
//                 <div className="tea-circle-inner pulse-anim">
//                   <div className="tea-year">Established</div>
//                   <div className="tea-est">2001</div>
//                   <div className="tea-location">Bathinda, India</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── STORY ── */}
//       <section className="section story-section">
//         <div className="story-left">
//           <FadeSection dir="left">
//             <div className="section-tag">Our Story</div>
//           </FadeSection>
//           <FadeSection dir="left" delay="delay-1">
//             <h2 className="story-h2">
//               Established in 2001,<br />
//               <span>Trusted for Generations</span>
//             </h2>
//           </FadeSection>
//           <FadeSection dir="up" delay="delay-2">
//             <p className="story-body">
//               Established in 2001 in Bathinda district, Pure Leaf Tea Co. was founded with a vision to deliver authentic Indian tea with purity, consistency, and rich flavour in every cup. What began as a humble family initiative has today grown into a trusted tea brand, proudly carried forward by the second generation.
//             </p>
//             <p className="story-body">
//               For more than two decades, we have been serving tea lovers with the original richness and flavour of teas sourced from the renowned gardens of Assam, Darjeeling, and Dooars. Our journey has always been guided by ethical business practices, superior quality, and long-term customer trust.
//             </p>
//             <div className="story-pull">
//               <p>"For us, tea is more than just a beverage — it is a daily ritual that brings people together."</p>
//             </div>
//             <p className="story-body">
//               At Pure Leaf Tea Co., we combine traditional tea expertise with modern technology to maintain superior tea quality standards. Our consistent taste and dependable quality have made us a preferred choice among consumers and trade partners alike.
//             </p>
//           </FadeSection>
//         </div>

//         <div className="story-right">
//           <FadeSection dir="right" delay="delay-2">
//             <div className="story-card-stack">
//               <div className="story-card story-card-back" />
//               <div className="story-card story-card-front">
//                 <div className="card-badge">
//                   <div className="card-badge-num">25</div>
//                   <div className="card-badge-text">Years</div>
//                 </div>
//                 <div className="story-card-label">Family Heritage</div>
//                 <div className="story-card-title">
//                   Rooted in Tradition,<br />Growing with Trust
//                 </div>
//                 <div className="story-card-sub">
//                   From Bathinda to Bihar — one cup at a time.
//                 </div>
//               </div>
//             </div>
//           </FadeSection>
//         </div>
//       </section>

//       {/* ── METRICS BAND ── */}
//       <div className="metrics-band" ref={metricsRef}>
//         {[
//           { target: 25, suffix: "+", label: "Years of Excellence" },
//           { target: 10, suffix: "+", label: "States & UTs Served" },
//           { target: 3, suffix: "", label: "Premium Tea Origins" },
//           { target: 100, suffix: "%", label: "Quality Tested" },
//         ].map((m, i) => (
//           <div className="metric-item" key={i}>
//             <div className="metric-num">
//               <MetricCounter target={m.target} suffix={m.suffix} start={metricsInView} />
//             </div>
//             <div className="metric-label">{m.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* ── JOURNEY ── */}
//       <section className="section journey-section">
//         <FadeSection>
//           <div className="journey-title-block">
//             <div className="section-tag" style={{ justifyContent: "center", color: "var(--gold-light)" }}>
//               Our Journey
//             </div>
//             <h2 className="journey-h2">
//               Two Decades of<br />
//               <em>Crafting Excellence</em>
//             </h2>
//             <p className="journey-sub">From a single family dream to a pan-India legacy</p>
//           </div>
//         </FadeSection>

//         <div className="milestones">
//           <div className="milestones-line" />
//           {milestones.map((m, i) => (
//             <FadeSection key={i} delay={`delay-${(i % 3) + 1}`}>
//               <div className="milestone">
//                 {m.side === "left" ? (
//                   <>
//                     <div className="milestone-content milestone-left">
//                       <div className="milestone-icon">{m.icon}</div>
//                       <div className="milestone-title">{m.title}</div>
//                       <div className="milestone-text">{m.text}</div>
//                     </div>
//                     <div className="milestone-dot-wrap">
//                       <div className="milestone-dot" />
//                       <div className="milestone-year">{m.year}</div>
//                     </div>
//                     <div className="milestone-empty" />
//                   </>
//                 ) : (
//                   <>
//                     <div className="milestone-empty" />
//                     <div className="milestone-dot-wrap">
//                       <div className="milestone-dot" />
//                       <div className="milestone-year">{m.year}</div>
//                     </div>
//                     <div className="milestone-content milestone-right">
//                       <div className="milestone-icon">{m.icon}</div>
//                       <div className="milestone-title">{m.title}</div>
//                       <div className="milestone-text">{m.text}</div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </FadeSection>
//           ))}
//         </div>
//       </section>

//       {/* ── QUALITY ── */}
//       <section className="section quality-section">
//         <FadeSection>
//           <div className="section-tag">Our Excellence</div>
//           <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", fontWeight: 700, color: "var(--forest)", lineHeight: 1.2 }}>
//             Quality in Every<br />
//             <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Detail</span>
//           </h2>
//         </FadeSection>
//         <div className="quality-grid">
//           {[
//             { num: "01", title: "Superior Quality Standards", text: "We combine traditional tea expertise with modern technology to maintain superior tea quality standards — freshness, rich colour, strong flavour, and refreshing aroma in every pack." },
//             { num: "02", title: "In-House Quality Testing", text: "Every product undergoes multiple quality checks through our in-house quality testing system — ensuring purity, hygiene, and excellence before it reaches you." },
//             { num: "03", title: "Skilled Professional Team", text: "Supported by a dedicated team of skilled professionals committed to maintaining the highest operational standards across all specialised departments." },
//             { num: "04", title: "Specialised Departments", text: "Our infrastructure is systematically divided into production, quality testing, research & development, and warehousing & packaging — each focused on excellence." },
//             { num: "05", title: "Research & Development", text: "An active R&D department ensures our blends continue to evolve with the finest sourcing practices while retaining the authentic taste our customers trust." },
//             { num: "06", title: "Purity & Ethical Practices", text: "Our journey has always been guided by ethical business practices, sourcing from the renowned gardens of Assam, Darjeeling, and Dooars — pure by nature." },
//           ].map((q, i) => (
//             <FadeSection key={i} delay={`delay-${(i % 3) + 1}`}>
//               <div className="quality-card">
//                 <div className="q-num">{q.num}</div>
//                 <div className="q-line" />
//                 <div className="q-title">{q.title}</div>
//                 <div className="q-text">{q.text}</div>
//               </div>
//             </FadeSection>
//           ))}
//         </div>
//       </section>

//       {/* ── GEOGRAPHY ── */}
//       <section className="section geo-section">
//         <FadeSection>
//           <div className="section-tag">Our Reach</div>
//         </FadeSection>
//         <div className="geo-grid">
//           <FadeSection dir="left" delay="delay-1">
//             <h2 className="geo-lead">
//               Proudly Serving<br />
//               <em>Across the Region</em>
//             </h2>
//             <p className="geo-body">
//               Pure Leaf Tea Co. proudly caters to customers across Punjab, Haryana, Himachal Pradesh, Rajasthan, Uttarakhand, Uttar Pradesh, Bihar, Jharkhand, along with the Union Territories of Jammu & Kashmir and Chandigarh. Over the years, our consistent taste and dependable quality have made us a preferred choice among consumers and trade partners alike.
//             </p>
//             <div className="geo-states">
//               {states.map((s, i) => (
//                 <div className="geo-state" key={i}>{s}</div>
//               ))}
//             </div>
//           </FadeSection>
//           <FadeSection dir="right" delay="delay-2">
//             <div className="geo-visual">
//               <div className="geo-visual-title">Our Tea Origins</div>
//               {[
//                 { icon: "🍃", name: "Assam", desc: "Renowned gardens delivering original richness and bold flavour" },
//                 { icon: "🌿", name: "Darjeeling", desc: "Iconic gardens known for authentic taste and refreshing aroma" },
//                 { icon: "🌱", name: "Dooars", desc: "Celebrated growing region prized for rich colour and strong flavour" },
//               ].map((s, i) => (
//                 <div className="geo-source" key={i}>
//                   <div className="geo-source-icon">{s.icon}</div>
//                   <div>
//                     <div className="geo-source-name">{s.name}</div>
//                     <div className="geo-source-desc">{s.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </FadeSection>
//         </div>
//       </section>

//       {/* ── PROMISE ── */}
//       <section className="section promise-section">
//         <div className="promise-glow" />
//         <FadeSection>
//           <div className="promise-tagline">
//             Har Cup Mein<br />
//             <em>Swaad!</em>
//           </div>
//           <p className="promise-meaning">"Taste in Every Cup"</p>
//           <div className="promise-line" />
//           <p className="promise-body">
//             At the heart of our identity lies our tagline — "Har Cup Mein Swaad!" — meaning "Taste in Every Cup." This original expression reflects our promise that every sip of Pure Leaf Tea Co. delivers satisfaction, authentic flavour, and the warmth of traditional Indian tea culture. For us, tea is more than just a beverage — it is a daily ritual that brings people together. With every cup served, Pure Leaf Tea Co. continues its journey of delivering purity, trust, and authentic taste to tea lovers across India.
//           </p>
//         </FadeSection>
//       </section>

//       {/* ── FOOTER NOTE ── */}
//       <div style={{
//         background: "var(--dark)", padding: "40px 80px",
//         display: "flex", justifyContent: "space-between", alignItems: "center",
//         flexWrap: "wrap", gap: "20px"
//       }}>
//         <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--cream)" }}>
//           Pure Leaf Tea Co.
//         </div>
//         <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--sage)", fontSize: "1.0rem" }}>
//           Est. 2001 · Bathinda, Punjab · Har Cup Mein Swaad!
//         </div>
//         <div style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(138,184,142,0.4)" }}>
//           pureleaftea.co
//         </div>
//       </div>
//     </div>
//   );
// }