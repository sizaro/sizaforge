// frontend/src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* ================= HERO ================= */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95 " />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          {/* TEXT */}
          <div className="md:w-1/2 text-center md:text-left md:order-1 order-2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#E0FBFC]">
              Building intelligent systems for real-world needs
            </h1>

            <p className="mt-4 text-[#E0FBFC]/90 md:text-lg max-w-xl">
              <strong>SizaForge</strong> designs and builds software systems that help
              people, organizations, and institutions work better — responsibly,
              reliably, and with humans at the center.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/contact"
                className="rounded-md bg-[#52D298] text-black px-6 py-3 font-semibold shadow hover:brightness-95 transition"
              >
                Start a Project
              </Link>

              <Link
                to="/services"
                className="rounded-md border border-[#6BE6A8] text-[#E0FBFC] px-6 py-3 font-semibold hover:bg-[#6BE6A8]/20 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <div className="w-full md:max-w-lg rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#6BE6A8]/30">
              <img
                src="/images/siza forge office.jpg"
                alt="SizaForge workspace"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2D2F36]">
          Why SizaForge exists
        </h2>

        <p className="mt-4 text-gray-600">
          Technology can either empower people or quietly work against them.
          We exist to build systems that respect human judgment, protect dignity,
          and solve real problems without creating new ones.
        </p>

        <img
          src="/images/technology and nature.jpg"
          alt="Technology and humanity balance"
          className="mt-8 mx-auto rounded-xl shadow-md h-56 object-cover"
        />
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#2D2F36]">
          What we build
        </h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Practical systems designed for growth, clarity, and long-term use.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Education Systems",
              img: "/images/education.jpg",
              desc: "Learning platforms, assessment tools, and systems that support understanding — not dependency."
            },
            {
              title: "Business Systems",
              img: "/images/business.jpg",
              desc: "Dashboards, workflows, and internal tools that improve operations and decision-making."
            },
            {
              title: "Health & Wellness Tools",
              img: "/images/health.jpg",
              desc: "Tracking and monitoring systems built with privacy, clarity, and reliability in mind."
            },
            {
              title: "Organizational Platforms",
              img: "/images/organizations.jpg",
              desc: "Solutions for NGOs and institutions — reporting, field data collection, and coordination."
            },
            {
              title: "Research & Data Tools",
              img: "/images/research.jpg",
              desc: "Data pipelines, dashboards, and research-support systems for structured inquiry."
            }
          ].map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-1 transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-[#F0FCF9] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2F36]">
            How we work
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-gray-700">
            <div>Understand the problem</div>
            <div>Design the system</div>
            <div>Build incrementally</div>
            <div>Deploy & test</div>
            <div>Support & evolve</div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Capabilities — Today</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>React + Vite frontends</li>
              <li>Node.js & Express backends</li>
              <li>PostgreSQL databases</li>
              <li>APIs, dashboards, portals</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Growing Into — Tomorrow</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li>Mobile applications</li>
              <li>Embedded & IoT systems</li>
              <li>On-device AI</li>
              <li>Ethics-first automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Our work so far</h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/images/project1.jpg",
                title: "School Management System",
                desc: "Administrative platform for schools and teachers."
              },
              {
                img: "/images/project2.jpg",
                title: "Service Business Platform",
                desc: "Frontend design and booking workflows."
              },
              {
                img: "/images/project3.jpg",
                title: "Research Dashboard",
                desc: "Prototype data visualization and collection system."
              }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#F0FCF9] rounded-xl overflow-hidden shadow"
              >
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#E0FBFC] to-white">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">
            Let’s build something useful
          </h3>
          <p className="mt-3 text-gray-600">
            If you have a problem worth solving, we’re ready to help.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-[#52D298] px-6 py-3 rounded-lg font-semibold text-black"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border border-[#52D298] px-6 py-3 rounded-lg font-semibold text-[#52D298]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
