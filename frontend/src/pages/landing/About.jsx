// frontend/src/pages/About.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* HERO */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />
        <div className="absolute -right-20 top-0 w-[50rem] h-[50rem] rounded-full bg-[#6BE6A8]/30 mix-blend-overlay opacity-20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E0FBFC] drop-shadow-lg">
            About SizaForge
          </h1>
          <p className="mt-4 md:text-lg text-[#E0FBFC]/90 max-w-2xl leading-relaxed">
            At <strong>SizaForge</strong>, we create technology that elevates human potential. Our journey started with a simple belief: technology should serve humanity, not replace it.
          </p>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2D2F36]">Our Story</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Founded in Uganda, SizaForge began as a vision to bridge human creativity with intelligent systems. We observed how traditional tools often disconnected people from their own abilities, so we set out to build solutions that empower rather than replace. From small businesses to large organizations, from schools to personal assistants, every system we build carries our dedication to human-centered technology.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-6 bg-white/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2D2F36]">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              To forge intelligent systems that amplify human potential, respect ethical boundaries, and nurture sustainable growth. Every project is crafted to connect humans with technology in a meaningful way.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2D2F36]">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              A world where technology complements human life, preserves dignity, and encourages growth—where people and machines collaborate harmoniously to solve challenges creatively and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D2F36] text-center">Our Core Values</h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Principles that guide every solution we craft.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow transform transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#2D2F36]">Human-Centered</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Every solution starts with understanding people’s needs and aspirations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow transform transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#2D2F36]">Sustainable & Ethical</h3>
            <p className="mt-2 text-gray-600 text-sm">
              We prioritize solutions that respect society, nature, and ethical boundaries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow transform transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#2D2F36]">Innovative Technology</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Cutting-edge tools that enhance abilities without replacing them.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM / PHILOSOPHY */}
      <section className="py-16 px-6 bg-[#E0FBFC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2F36]">Our Philosophy</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We believe in forging connections—between humans and machines, nature and technology, creativity and practicality. Every system we design is crafted to support human insight, nurture curiosity, and promote ethical growth.
          </p>

          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <img
              src="/images/team1.jpg"
              alt="Team member"
              className="w-40 h-40 rounded-xl object-cover shadow-lg"
            />
            <img
              src="/images/team2.jpg"
              alt="Team member"
              className="w-40 h-40 rounded-xl object-cover shadow-lg"
            />
            <img
              src="/images/team3.jpg"
              alt="Team member"
              className="w-40 h-40 rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#52D298]/10 to-white">
        <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">Want to collaborate?</h3>
          <p className="mt-3 text-gray-600">
            Share your vision with us and let’s create human-centered technology together.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6BE6A8] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
