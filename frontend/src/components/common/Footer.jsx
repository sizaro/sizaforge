// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0E] text-gray-300 py-14 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
            SizaForge
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Forging intelligent systems for human progress.  
            Technology crafted to empower humans, not replace them.
          </p>

          <p className="mt-3 text-xs text-emerald-400 font-medium">
            Bridging humans and technology — with balance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-purple-300 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-purple-300 transition">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-purple-300 transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-purple-300 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300">What We Build</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li className="hover:text-emerald-400 transition">Education Tools</li>
            <li className="hover:text-emerald-400 transition">Business Systems</li>
            <li className="hover:text-emerald-400 transition">Health & Wellness Tools</li>
            <li className="hover:text-emerald-400 transition">Spiritual & Gospel Apps</li>
            <li className="hover:text-emerald-400 transition">Personal Tools & Assistants</li>
            <li className="hover:text-emerald-400 transition">NGO & Organizational Tools</li>
            <li className="hover:text-emerald-400 transition">Research & Analytics Tools</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Email:{" "}
              <span className="text-gray-400">sizaforge@gmail.com</span>
            </li>
            <li>
              Phone:{" "}
              <span className="text-gray-400">+256758116304</span>
            </li>
            <li>
              Location:{" "}
              <span className="text-gray-400">Jinja, Uganda</span>
            </li>
          </ul>

          <div className="mt-5">
            <h4 className="text-sm font-medium text-purple-300">Follow Us</h4>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <a href="#" className="hover:text-teal-300 transition">WhatsApp</a>
              <a href="#" className="hover:text-teal-300 transition">Facebook</a>
              <a href="#" className="hover:text-teal-300 transition">Instagram</a>
              <a href="#" className="hover:text-teal-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-teal-300 transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} SizaForge — Forging intelligent systems for human progress.
      </div>
    </footer>
  );
}
