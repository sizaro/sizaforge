import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FEFF] text-slate-900 overflow-hidden">

      <Navbar />

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-600/10 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* ================= HERO (60% BASE) ================= */}
      <header className="relative overflow-hidden bg-cyan-950 text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-800 opacity-95" />

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10">

          <div className="md:w-1/2" data-aos="fade-right">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-cyan-300">Building intelligent systems</span>{" "}
              for real-world needs
            </h1>

            <p className="mt-5 text-cyan-100 md:text-lg max-w-xl">
              <strong className="text-cyan-300">SizaForge</strong> builds systems that help people and organizations work better — clearly and reliably.
            </p>

            <div className="mt-7 flex gap-3 flex-wrap">

              <Link className="bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-cyan-300 transition">
                Start a Project
              </Link>

              <Link className="border border-cyan-300 text-cyan-200 px-6 py-3 rounded-md hover:bg-cyan-400/10 transition">
                View Services
              </Link>

            </div>

          </div>

        </div>

        <Wave color="fill-[#F4FEFF]" />
      </header>

      {/* ================= WHY (NEUTRAL) ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center bg-white rounded-2xl shadow" data-aos="fade-up">

        <h2 className="text-3xl font-bold text-cyan-700">Why SizaForge exists</h2>

        <p className="mt-4 text-slate-600">
          We build systems that empower people, not overwhelm them.
        </p>

        <div className="mt-10 relative">
          <div className="absolute inset-0 bg-cyan-200/30 blur-2xl rounded-xl" />
          <img
            src="/images/technology and nature.jpg"
            className="relative mx-auto rounded-xl h-60 object-cover"
          />
        </div>

      </section>

      <Wave color="fill-cyan-700" />

      {/* ================= WHAT WE BUILD (30% SURFACE) ================= */}
      <section className="py-20 px-6 bg-cyan-700 text-white">

        <h2 className="text-center text-3xl font-bold" data-aos="fade-up">
          What we build
        </h2>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {[1,2,3,4,5].map((i) => (
            <div
              key={i}
              className="bg-cyan-800 rounded-xl p-5 hover:bg-cyan-600 transition"
              data-aos="zoom-in"
            >
              <div className="h-32 bg-cyan-900/40 rounded-lg mb-4" />
              <h3 className="text-cyan-200 font-semibold">System {i}</h3>
              <p className="text-cyan-100 text-sm mt-2">
                Modular, scalable, real-world system design.
              </p>
            </div>
          ))}

        </div>

      </section>

      <Wave color="fill-[#F4FEFF]" />

      {/* ================= HOW WE WORK (NEUTRAL LIGHT) ================= */}
      <section className="py-20 text-center bg-[#F4FEFF]" data-aos="fade-up">

        <h2 className="text-3xl font-bold text-cyan-700">How we work</h2>

        <div className="mt-10 grid md:grid-cols-5 gap-6 text-slate-600 text-sm">
          <div>Understand</div>
          <div>Design</div>
          <div>Build</div>
          <div>Test</div>
          <div>Improve</div>
        </div>

      </section>

      <Wave color="fill-cyan-950" />

      {/* ================= CTA (BASE + ACCENT) ================= */}
      <section className="py-24 text-center bg-cyan-950 text-white" data-aos="zoom-in">

        <div className="max-w-3xl mx-auto bg-cyan-900 p-10 rounded-xl shadow">

          <h2 className="text-2xl font-bold text-cyan-300">
            Let’s build something useful
          </h2>

          <p className="text-cyan-100 mt-3">
            Turn your idea into a real system.
          </p>

          <div className="mt-6 flex justify-center gap-3">

            <Link className="bg-cyan-400 text-black px-6 py-3 rounded-md font-semibold">
              Contact
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

/* ================= WAVE COMPONENT ================= */
function Wave({ color }) {
  return (
    <svg viewBox="0 0 1200 100" className="w-full h-20">
      <path
        d="M0,60 C300,0 900,100 1200,40 L1200,100 L0,100 Z"
        className={color}
      />
    </svg>
  );
}