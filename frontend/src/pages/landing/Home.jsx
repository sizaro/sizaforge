// frontend/src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* HERO */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        {/* background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />
        <div className="absolute -right-20 top-0 w-[55rem] h-[55rem] rounded-full bg-[#6BE6A8]/30 mix-blend-overlay opacity-20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#E0FBFC] drop-shadow-lg">
              Building intelligent tools for human progress
            </h1>
            <p className="mt-4 text-[#E0FBFC]/90 md:text-lg leading-relaxed max-w-xl">
              At <strong>SizaForge</strong> we forge software and hardware systems
              that simplify life, empower people, and preserve human dignity.
              Tell us your challenge — we will build the tool that helps you thrive.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#52D298] text-black px-5 py-3 font-semibold shadow-lg transform transition hover:-translate-y-0.5 hover:scale-101 active:translate-y-0"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#6BE6A8] text-[#E0FBFC] px-5 py-3 font-semibold hover:bg-[#6BE6A8]/20 transition"
              >
                See Our Services
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#E0FBFC]/70 max-w-md">
              Forging intelligent systems — crafted for education, business,
              health, research, faith, organizations and everyday people.
            </p>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#6BE6A8]/30">
              <img
                src="/images/hero.jpg"
                alt="A digital forge creating intelligent tools"
                loading="lazy"
                className="w-full h-64 md:h-96 object-cover transform transition duration-700 hover:scale-105"
              />
              <div className="p-4 bg-gradient-to-t from-black/30 text-[#E0FBFC] text-sm">
                <span className="font-medium">SizaForge</span> — Forging intelligent systems
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* TECHNOLOGY: Risks vs Opportunities */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D2F36] text-center">The Dual Face of Technology</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
          Technology can uplift humanity or disrupt it. From AI misuse to privacy risks, unchecked tools can harm. But when forged with intention, ethics, and care, technology becomes a force for good.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
          <article className="bg-white rounded-2xl p-6 shadow transform transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#2D2F36]">Where Tech Can Harm</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Poorly designed systems can strip human agency, invade privacy, or create dependencies. Awareness is the first step in crafting tools that respect human values.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow transform transition hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#2D2F36]">Where Tech Can Help</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Thoughtful, human-centric technology can enhance learning, productivity, creativity, and spiritual life. At SizaForge, we ensure the benefits outweigh risks.
            </p>
          </article>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="bg-[#F0FCF9]/60 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#2D2F36]">Forging the Good</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From 2025 into the distant future, we walk with humanity. Change is accelerating, and we build tools that help humans adapt, preserve values, and thrive in an ever-evolving world.
          </p>
          <img
            src="/images/forge-philosophy.jpg"
            alt="Forge visual symbolizing thoughtful technology"
            loading="lazy"
            className="mx-auto rounded-xl object-cover h-48 w-full max-w-3xl shadow-md"
          />
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our offices are spaces for pondering, exploring, and discovering ways technology can serve humanity. The past, present, and future are on your shoulders; we ask to be part of your present continuous as you reach into your future.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD (Cards) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D2F36] text-center">What we build</h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Intelligent systems tailored for people, organizations, and communities.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Education Tools", img: "/images/education.jpg", desc: "Systems that help learners grow, not rely blindly on AI — adaptive learning, practice platforms, and skills-tracking designed to amplify understanding." },
            { title: "Business Tools", img: "/images/business.jpg", desc: "Software that increases productivity while keeping humans in control — dashboards, automations, and workflow systems that respect human judgement." },
            { title: "Health Tools", img: "/images/health.jpg", desc: "Intelligent systems for monitoring, tracking, and wellness — privacy-aware, reliable, and built to support better outcomes." },
            { title: "Spiritual Tools", img: "/images/spiritual.jpg", desc: "Apps and solutions that help people stay close to God — scripture study aids, habit trackers, and tools for organizations and individuals." },
            { title: "Personal Tools", img: "/images/personal.jpg", desc: "Custom solutions for individuals and families — from location safety to smart assistants that enhance abilities rather than replace them." },
            { title: "Organizational Tools", img: "/images/organizations.jpg", desc: "Solutions for NGOs and organizations — reporting, field data collection, resource management, and tools designed for impact at scale." },
            { title: "Research Tools", img: "/images/research.jpg", desc: "Data collection, analysis pipelines, reproducible experiment dashboards, and AI-assisted research helpers tailored to researchers' workflows." },
          ].map((card, i) => (
            <article key={i} className="bg-white rounded-2xl p-0 shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={card.img}
                  alt={`${card.title} visual`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2D2F36]">{card.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6BE6A8] transition"
          >
            Explore all solutions
          </Link>
        </div>
      </section>

      {/* WHY SIZA - Philosophy */}
      <section className="bg-white/60 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2D2F36]">Why SizaForge exists</h2>
          <p className="mt-4 text-gray-600">
            Technology must serve humanity, not replace it. We build tools that preserve human creativity,
            spiritual life, and intellect while helping people keep pace with change. From 2025 and beyond,
            we move with you.
          </p>
          <div className="mt-6">
            <img
              src="/images/why-siza.jpg"
              alt="Philosophy visual connection between human and tech"
              loading="lazy"
              className="mx-auto rounded-xl object-cover h-48 w-full max-w-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES: Now vs Future */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-r from-white to-[#E0FBFC] p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-[#2D2F36]">Capabilities — Today</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• React + Vite frontends</li>
              <li>• Node.js backends (Express)</li>
              <li>• PostgreSQL databases</li>
              <li>• Web apps, dashboards, portals</li>
              <li>• Custom integrations & APIs</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-white to-[#6BE6A8]/10 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-[#2D2F36]">Growing Into — Tomorrow</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Installable embedded systems & IoT</li>
              <li>• Mobile apps (Play Store / App Store)</li>
              <li>• On-device AI and home automation systems</li>
              <li>• Ethics-first AI for organizations and homes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio / Work So Far */}
      <section className="bg-[#E0FBFC] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2F36] text-center">Our Work So Far</h2>
          <p className="text-gray-600 text-center mt-2">A sample of projects and demos.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-0 overflow-hidden shadow transform transition hover:-translate-y-2">
              <img
                src="/images/project1.jpg"
                alt="School management project"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="mt-1 font-semibold">School Management System</h4>
                <p className="text-sm text-gray-600 mt-1">A React + Node system for administering schools and teachers.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-0 overflow-hidden shadow transform transition hover:-translate-y-2">
              <img
                src="/images/project2.jpg"
                alt="Bridal services project"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="mt-1 font-semibold">Bridal Services Site</h4>
                <p className="text-sm text-gray-600 mt-1">Frontend design, booking flow and admin panel.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-0 overflow-hidden shadow transform transition hover:-translate-y-2">
              <img
                src="/images/project3.jpg"
                alt="Research dashboard project"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="mt-1 font-semibold">Prototype: Research Dashboard</h4>
                <p className="text-sm text-gray-600 mt-1">Data collection + visualization demo for researchers.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/portfolio" className="text-[#52D298] font-semibold hover:underline">
              View more →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#E0FBFC] to-white">
        <div className="max-w-4xl mx-auto text-center bg-white/80 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">Let's build something together</h3>
          <p className="mt-3 text-gray-600">Tell us your idea and we'll forge a tailored solution for you.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:brightness-95 transition">
              Contact Us
            </Link>
            <Link to="/services" className="inline-block border border-[#52D298] text-[#52D298] px-6 py-3 rounded-lg font-semibold">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* FUN / JOKE STRIP */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>Tech joke: “We build tools that work hard so you don’t have to — but not so hard that you forget how to think.”</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
