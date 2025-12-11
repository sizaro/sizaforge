// frontend/src/pages/Contact.jsx
import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* HERO */}
      <header className="relative w-full overflow-hidden bg-[#2D2F36]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E0FBFC] drop-shadow-lg">
            Connect with SizaForge
          </h1>
          <p className="mt-4 text-[#E0FBFC]/90 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an idea, challenge, or project? We’re here to listen, collaborate, and help you forge intelligent solutions that empower people.
          </p>
        </div>
      </header>

      {/* CONTACT INFO */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#2D2F36]">Our Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re a business, organization, or individual, we welcome your ideas and questions. Let’s explore how technology can enhance human potential together.
          </p>
          <div className="space-y-4 text-gray-700 text-sm">
            <p>Email: <span className="font-medium text-[#52D298]">sizaforge@gmail.com</span></p>
            <p>Phone: <span className="font-medium text-[#52D298]">+256 758 116 304</span></p>
            <p>Location: <span className="font-medium text-[#52D298]">Jinja, Uganda</span></p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white/80 p-8 rounded-xl shadow-md">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-[#2D2F36]">Thank you!</h3>
              <p className="mt-2 text-gray-700">Your message has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52D298]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52D298]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52D298]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#52D298] text-black font-semibold px-4 py-3 rounded-lg shadow hover:bg-[#6BE6A8] transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* STORY CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#52D298]/10 to-white">
        <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">Let's forge solutions together</h3>
          <p className="mt-3 text-gray-700">
            Every conversation is the start of a story. Share yours with us and watch it turn into intelligent tools that empower people.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
