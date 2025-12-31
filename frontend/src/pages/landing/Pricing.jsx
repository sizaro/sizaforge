import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E0FBFC] text-gray-800">
      <Navbar />

      {/* HERO */}
      <header className="bg-[#2D2F36] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3B66] via-[#2D2F36] to-[#6BE6A8]/20 opacity-95" />
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E0FBFC]">
            Pricing Built on Value & Trust
          </h1>
          <p className="mt-4 text-[#E0FBFC]/90 max-w-2xl mx-auto">
            Whether for business or personal growth, our systems are priced to
            remain sustainable, ethical, and reliable.
          </p>
        </div>
      </header>

      {/* WHAT SOFTWARE MEANS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#2D2F36] text-center">
          What We Mean by “Software”
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg">Frontend</h3>
            <p className="mt-2 text-sm text-gray-600">
              What users see and interact with — pages, forms, dashboards,
              bookings, and reports.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg">Backend</h3>
            <p className="mt-2 text-sm text-gray-600">
              The engine — data storage, security, automation, logic, and system
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS SOFTWARE */}
      <section className="py-16 px-6 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2D2F36]">
            Business Management Software
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
            One foundation, adapted for many businesses — salons, hotels,
            clinics, studios, service providers, and more.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic */}
            <div className="bg-white rounded-2xl p-6 shadow hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Business Starter</h3>
              <p className="text-sm text-gray-600 mt-2">
                For small teams and growing businesses.
              </p>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                60,000 UGX / month
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Bookings / reservations</li>
                <li>• Services & pricing</li>
                <li>• Staff accounts</li>
                <li>• Customer records</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Setup: 250,000 UGX (one-time)
              </p>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#52D298] hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Business Growth</h3>
              <p className="text-sm text-gray-600 mt-2">
                For businesses managing daily operations seriously.
              </p>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                100,000 UGX / month
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Reports & analytics</li>
                <li>• Staff attendance</li>
                <li>• Data export</li>
                <li>• Priority support</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Setup: 350,000 UGX
              </p>
            </div>

            {/* Dedicated */}
            <div className="bg-white rounded-2xl p-6 shadow hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">Dedicated Business</h3>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                Custom Pricing
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Dedicated database</li>
                <li>• Custom workflows</li>
                <li>• Advanced backups</li>
                <li>• Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL SOFTWARE */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2D2F36]">
            Personal & Community Software
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            Tools designed for individuals, families, churches, and small
            groups.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold">Personal Website</h3>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                From 250,000 UGX
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Single-page or small site</li>
                <li>• Mobile friendly</li>
                <li>• Contact integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border-2 border-[#52D298]">
              <h3 className="text-xl font-semibold">Reminder System</h3>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                From 30,000 UGX / month
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• SMS / Email reminders</li>
                <li>• Scheduling</li>
                <li>• Group or individual use</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold">Custom Personal Tool</h3>
              <p className="mt-4 text-2xl font-bold text-[#52D298]">
                Custom Pricing
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Habit trackers</li>
                <li>• Study tools</li>
                <li>• Community utilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#E0FBFC] to-white">
        <div className="max-w-4xl mx-auto text-center bg-white/80 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-[#2D2F36]">
            Not sure which path fits your idea?
          </h3>
          <p className="mt-3 text-gray-600">
            We help you choose wisely — no pressure.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-[#52D298] text-black px-6 py-3 rounded-lg font-semibold shadow hover:brightness-95 transition"
          >
            Talk to SizaForge
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
