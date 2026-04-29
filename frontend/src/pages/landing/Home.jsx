import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

/* ================= MAIN ================= */
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4FEFF] text-slate-900 overflow-hidden">

      <Navbar />

      {/* FLOATING BACKGROUND */}
      <FloatingBackground />

      <Hero />
      <Why />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Stats />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <CTA />
      <Contact />

      <Footer />
    </div>
  );
}

/* ================= FLOATING BACKGROUND ================= */
function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-cyan-600/20 blur-3xl rounded-full animate-pulse top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-600/10 blur-3xl rounded-full animate-pulse bottom-[-200px] right-[-200px]" />

      {/* SVG wave layer */}
      <svg className="absolute bottom-0 w-full h-full opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          fill="#22d3ee" 
          d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden bg-cyan-950 text-white">

      {/* 🌊 BACKGROUND GRADIENT LAYERS */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-300/10 blur-3xl rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
      </div>

      {/* soft overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-cyan-900/80 to-cyan-950/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6" data-aos="fade-up">

        {/* small badge */}
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-200 text-sm backdrop-blur-md bg-white/5">
          Intelligent Systems • Clean Design • Real Impact
        </div>

        {/* MAIN TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Building systems that
          <span className="text-cyan-300"> actually work</span> in the real world
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-cyan-100/80 text-lg max-w-2xl mx-auto">
          We design and build digital systems that are clean, scalable, and focused on solving real human problems.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* primary button */}
          <button className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300">
            Start a Project
          </button>

          {/* secondary glass button */}
          <button className="px-6 py-3 rounded-xl border border-cyan-300/40 bg-white/5 backdrop-blur-md text-cyan-100 hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Explore Work
          </button>

        </div>
      </div>

      {/* 🌊 SVG WAVE CUT */}
      <div className="absolute bottom-0 w-full">
      <Wave/>
      </div>

    </header>
  );
}

/* ================= WHY ================= */
function Why() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  const items = [
    "Reliable Systems",
    "Fast Delivery",
    "Clean Architecture",
    "User Focused Design",
    "Secure Development",
    "Scalable Solutions"
  ];

  // 👇 trigger once when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSequence();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 👇 sequential reveal logic
  const startSequence = () => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);

      if (i >= items.length) {
        clearInterval(interval);
      }
    }, 800);
  };

  return (
    <section ref={ref} className="py-28 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Why choose us
      </h2>

      <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
        Systems designed to be stable, scalable, and human-friendly.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {items.slice(0, visibleCount).map((text, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-md border border-cyan-100 rounded-2xl p-6 shadow-sm
                       animate-popIn"
          >
            <div className="w-10 h-10 mx-auto mb-4 bg-cyan-100 rounded-full" />
            <h3 className="font-semibold text-cyan-800">{text}</h3>
          </div>
        ))}

      </div>

      {/* 🔥 POP ANIMATION */}
      <style>
        {`
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            60% {
              opacity: 1;
              transform: translateY(-6px) scale(1.04);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-popIn {
            animation: popIn 0.100s cubic-bezier(0.22, 1, 0.36, 1);
          }

          /* 📱 mobile stronger movement */
          @media (max-width: 640px) {
            @keyframes popIn {
              0% {
                opacity: 0;
                transform: translateY(70px) scale(0.95);
              }
              60% {
                opacity: 1;
                transform: translateY(-4px) scale(1.02);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          }
        `}
      </style>

    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="py-24 bg-cyan-700 text-white text-center">
      <h2 className="text-3xl font-bold">Services</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {["Web Systems", "Automation", "Business Tools"].map((s, i) => (
          <div
            key={i}
            className="bg-cyan-800/80 backdrop-blur-md p-6 rounded-xl border border-cyan-500/30 hover:-translate-y-2 hover:shadow-xl transition"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-3xl font-bold text-cyan-700">About Us</h2>

      <p className="mt-6 max-w-3xl mx-auto text-slate-600">
        We build systems that solve real problems with clarity, structure, and purpose.
      </p>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-3xl font-bold text-cyan-700">How we work</h2>

      <div className="mt-12 grid md:grid-cols-5 gap-4 text-sm text-slate-600 max-w-5xl mx-auto">
        {["Understand", "Plan", "Design", "Build", "Improve"].map((p, i) => (
          <div key={i} className="hover:text-cyan-600 transition">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= GALLERY ================= */
function Gallery() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold text-cyan-700">Gallery</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-44 bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}

/* ================= STATS (ANIMATED STYLE) ================= */
function Stats() {
  return (
    <section className="py-24 bg-cyan-700 text-white text-center">
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          ["10+", "Systems"],
          ["50+", "Clients"],
          ["5+", "Years"],
          ["100%", "Commitment"]
        ].map((s, i) => (
          <div
            key={i}
            className="bg-cyan-800/80 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">{s[0]}</h3>
            <p>{s[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold text-cyan-700">Testimonials</h2>

      <div className="mt-12 flex gap-6 overflow-x-auto px-6">
        {["Amazing system!", "Very clean work!", "Highly professional!"].map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white p-6 rounded-xl shadow"
          >
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= PRICING ================= */
function Pricing() {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-3xl font-bold text-cyan-700">Pricing</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {["Basic", "Pro", "Enterprise"].map((p, i) => (
          <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= TEAM (VISUAL FIXED) ================= */
function Team() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold text-cyan-700">Team</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {[
          ["John Doe", "Frontend Engineer"],
          ["Jane Smith", "Backend Engineer"],
          ["Alex Kim", "UI/UX Designer"]
        ].map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 hover:-translate-y-2 transition"
          >
            <div className="h-20 w-20 mx-auto bg-cyan-200 rounded-full mb-4" />
            <h3 className="font-semibold">{m[0]}</h3>
            <p className="text-sm text-slate-500">{m[1]}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

/* ================= FAQ ================= */
function FAQ() {
  const [open, setOpen] = useState(null);

  const data = [
    { q: "What do you build?", a: "We build custom digital systems." },
    { q: "How long does it take?", a: "Depends on project size." }
  ];

  return (
    <section className="py-24 text-center bg-[#F4FEFF]">
      <h2 className="text-3xl font-bold text-cyan-700">FAQ</h2>

      <div className="mt-10 max-w-3xl mx-auto space-y-4 px-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="font-medium">{item.q}</div>
            {open === i && (
              <div className="mt-2 text-slate-600">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="py-24 text-center bg-cyan-950 text-white">
      <h2 className="text-3xl font-bold text-cyan-300">
        Let’s build something powerful
      </h2>

      <Link className="mt-6 inline-block bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold">
        Contact Us
      </Link>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold text-cyan-700">Contact</h2>
      <p className="mt-4 text-slate-600">Email, phone, WhatsApp</p>
    </section>
  );
}

/* ================= WAVE ================= */
function Wave() {
  return (
    <svg viewBox="0 0 1200 100" className="w-full h-20" preserveAspectRatio="none">
      <path
        d="M0,60 C300,0 900,100 1200,40 L1200,100 L0,100 Z"
        fill="#F4FEFF"
      />
    </svg>
  );
}