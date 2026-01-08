// frontend/src/pages/Contact.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* ================= HERO ================= */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        <div className="absolute bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E0FBFC]">
            Get in Touch
          </h1>
          <p className="mt-4 text-[#E0FBFC]/90 md:text-lg max-w-2xl mx-auto">
            Have a question, project idea, or system you want to build?
            Reach out — we’re ready to listen and collaborate.
          </p>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 px-6 py-16 max-w-7xl mx-auto space-y-16">

        {/* HOW TO REACH US */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D2F36] mb-6">
            How to Reach SizaForge
          </h2>

          <p className="text-gray-700 mb-6">
            We believe meaningful systems begin with meaningful conversations.
            Whether you're an organization, business, school, or individual,
            we’re open to discussing how technology can serve your goals.
          </p>

          <img
            src="/images/contact us (2).jpg"
            alt="Contact SizaForge"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mx-auto mb-8"
          />

          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Choose the method that works best for you. All links below will take
            you directly to the appropriate platform.
          </p>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-center">
          <a
            href="https://wa.me/256726514609"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:sizaforge@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Email
          </a>

          <a
            href="tel:+256726514609"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Call Us
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 text-white px-6 py-3 rounded-lg shadow hover:bg-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-900 transition"
          >
            LinkedIn
          </a>
        </section>

        {/* LOCATION */}
        <section className="bg-white rounded-xl shadow-md p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#2D2F36] mb-3">
            Our Location
          </h3>
          <p className="text-gray-700">
            Jinja, Uganda
          </p>
          <p className="mt-3 text-gray-600 text-sm">
            We work locally and remotely, collaborating with clients wherever they are.
          </p>
        </section>

        {/* RESPONSE ASSURANCE */}
        <section className="bg-white/80 rounded-xl shadow-md p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#2D2F36] mb-4">
            Prompt & Thoughtful Responses
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Every message is read carefully. Whether your inquiry is simple or complex,
            you can expect a professional and honest response.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
