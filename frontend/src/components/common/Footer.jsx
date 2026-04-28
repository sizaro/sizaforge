import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-cyan-100 border-t border-cyan-900/40 py-14 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold text-cyan-300">
            Siza<span className="text-cyan-400">Forge</span>
          </h2>

          <p className="mt-4 text-cyan-100/70 text-sm leading-relaxed">
            Forging intelligent systems for human progress.
            Technology built to empower people through clarity and simplicity.
          </p>

          <p className="mt-3 text-xs text-cyan-400 font-medium">
            Bridging humans and technology with balance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300">Navigation</h3>

          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"]
            ].map(([name, path]) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="hover:text-cyan-300 transition"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300">What We Build</h3>

          <ul className="mt-4 space-y-2 text-sm text-cyan-100/70">
            {[
              "Education Tools",
              "Business Systems",
              "Automation Platforms",
              "Mobile Applications",
              "Research Tools",
              "Organizational Systems"
            ].map((item) => (
              <li key={item} className="hover:text-cyan-300 transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300">Contact</h3>

          <ul className="mt-4 space-y-2 text-sm text-cyan-100/70">
            <li>
              Email:{" "}
              <a href="mailto:sizaforge@gmail.com" className="hover:text-cyan-300">
                sizaforge@gmail.com
              </a>
            </li>

            <li>
              Phone:{" "}
              <a href="tel:+256726514609" className="hover:text-cyan-300">
                +256 726 514 609
              </a>
            </li>

            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/256726514609"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                Chat now
              </a>
            </li>

            <li>Location: Jinja, Uganda</li>
          </ul>

          {/* SOCIAL */}
          <div className="mt-5">
            <h4 className="text-sm font-medium text-cyan-300">Follow Us</h4>

            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              {["WhatsApp", "Facebook", "Instagram", "LinkedIn", "GitHub"].map(
                (s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-cyan-100/70 hover:text-cyan-300 transition"
                  >
                    {s}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-cyan-100/50 text-xs mt-12 border-t border-cyan-900/40 pt-6">
        &copy; {new Date().getFullYear()} SizaForge — Built with clarity, purpose, and precision.
      </div>
    </footer>
  );
}