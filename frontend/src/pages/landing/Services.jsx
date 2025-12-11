// frontend/src/pages/Services.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* HERO */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />
        <div className="absolute -right-20 top-0 w-[50rem] h-[50rem] rounded-full bg-[#6BE6A8]/30 mix-blend-overlay opacity-20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E0FBFC] drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-4 md:text-lg text-[#E0FBFC]/90 max-w-2xl leading-relaxed">
            At <strong>SizaForge</strong>, we don’t just build tools—we craft solutions that connect humans, technology, and the world around them. Every service is designed to empower people and organizations to thrive sustainably and ethically.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6BE6A8] transition"
            >
              Let’s Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* STORY / INTRO */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2D2F36]">How We Build</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Every solution begins with understanding people first. We observe workflows, challenges, and opportunities, then forge intelligent systems that complement human creativity and insight. Our services span education, business, health, personal growth, research, and spirituality—always keeping humanity at the core.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D2F36] text-center">Our Service Categories</h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Explore the areas where we create impact and enable progress.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Education */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/education.jpg"
                alt="Education tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Education Tools</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Platforms that help learners and educators grow together—adaptive learning, interactive exercises, and progress tracking designed to foster understanding and curiosity.
              </p>
            </div>
          </div>

          {/* Business */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/business.jpg"
                alt="Business tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Business Systems</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Productivity solutions, dashboards, automations, and workflow systems that enhance decision-making while keeping humans in control.
              </p>
            </div>
          </div>

          {/* Health */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/health.jpg"
                alt="Health tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Health & Wellness</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Intelligent monitoring, tracking, and wellness tools that respect privacy and empower healthier lifestyles.
              </p>
            </div>
          </div>

          {/* Spiritual */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/spiritual.jpg"
                alt="Spiritual tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Spiritual Tools</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Apps for personal growth, habit tracking, and spiritual study—designed to help people stay connected to purpose and faith.
              </p>
            </div>
          </div>

          {/* Personal */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/personal.jpg"
                alt="Personal tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Personal Tools</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Assistive and smart solutions for individuals and families—enhancing daily life without replacing human abilities.
              </p>
            </div>
          </div>

          {/* Organizational */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/organizations.jpg"
                alt="Organizational tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Organizational Tools</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Solutions for NGOs, schools, and companies—resource management, reporting, and field data tools built for impact.
              </p>
            </div>
          </div>

          {/* Research */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/research.jpg"
                alt="Research tools"
                className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#52D298]/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2D2F36]">Research & Analytics</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Data collection, dashboards, and AI-assisted research helpers designed to accelerate discoveries and insights.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6BE6A8] transition"
          >
            Request a Custom Solution
          </Link>
        </div>
      </section>

      {/* PHILOSOPHY CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#E0FBFC] to-white text-center">
        <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">Our Approach</h3>
          <p className="mt-4 text-gray-600">
            Each project is unique. We combine human-centered design, sustainable thinking, and cutting-edge technology to deliver solutions that respect people and nature.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6BE6A8] transition"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
