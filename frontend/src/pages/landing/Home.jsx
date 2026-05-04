import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

/* ================= MAIN ================= */
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4FEFF] text-slate-900 overflow-hidden">

      <Navbar />

      {/* FLOATING BACKGROUND */}
      <FloatingBackground />

      <Hero />
      <About />
      <Why />
      <Services />
      <Process />
      <Gallery />
      <Stats />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <CTA />
      <Contact />

      <Footer />
    </div>
  );
}

/* ================= FLOATING BACKGROUND ================= */
function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-cyan-600/20 blur-3xl rounded-full animate-pulse top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-600/10 blur-3xl rounded-full animate-pulse bottom-[-200px] right-[-200px]" />

      {/* SVG wave layer */}
      <svg className="absolute bottom-0 w-full h-full opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          fill="#22d3ee" 
          d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden bg-cyan-950 text-white">

      {/* 🌊 BACKGROUND GRADIENT LAYERS */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-300/10 blur-3xl rounded-full bottom-[-150px] right-[-150px] animate-pulse" />
      </div>

      {/* soft overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-cyan-900/80 to-cyan-950/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6" data-aos="fade-up">

        {/* small badge */}
        <div className="mb-6 inline-block px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-200 text-sm backdrop-blur-md bg-white/5">
          Intelligent Systems • Clean Design • Real Impact
        </div>

        {/* MAIN TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Building systems that
          <span className="text-cyan-300"> actually work</span> in the real world
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-cyan-100/80 text-lg max-w-2xl mx-auto">
          We design and build digital systems that are clean, scalable, and focused on solving real human problems.
        </p>

        {/* BUTTONS */}
          {/* primary button */}
          <a
  href="https://wa.me/256726514609"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 mt-2 inline-block rounded-xl bg-cyan-400 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
>
  Start a Project
</a>
      </div>

      {/* 🌊 SVG WAVE CUT */}
      <div className="absolute bottom-0 w-full">
      <Wave/>
      </div>

    </header>
  );
}


function Why() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  const items = [
    {
      title: "Reliable Systems",
      desc: "We build systems that remain stable and dependable under real-world pressure."
    },
    {
      title: "Fast Delivery",
      desc: "Speed matters. We deliver quickly without compromising quality."
    },
    {
      title: "Clean Architecture",
      desc: "Structured systems that are easy to maintain, scale, and improve."
    },
    {
      title: "User Focused Design",
      desc: "Every decision is built around real user needs and experience."
    },
    {
      title: "Secure Development",
      desc: "Security is part of the foundation, not an afterthought."
    },
    {
      title: "Scalable Solutions",
      desc: "Your system grows as your business grows, without breaking."
    }
  ];

  // 👇 trigger when visible
   const hasAnimated = useRef(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        startSequence();
      }
    },
    { threshold: 0.3 }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  // 👇 sequential reveal
  const startSequence = () => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= items.length) clearInterval(interval);
    }, 220);
  };

  return (
    <section ref={ref} className="py-28 text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
        Why choose us
      </h2>

      <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto">
        We design systems that are not just functional — but reliable, scalable, and built for real life.
      </p>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {items.slice(0, visibleCount).map((item, i) => (
          <div
            key={i}
            className="
              group
              bg-[var(--glass-bg)] backdrop-blur-xl
              border border-[var(--glass-border)]
              rounded-2xl p-6
              shadow-[var(--shadow-soft)]

              transition-all duration-300

              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[var(--color-primary-light)]
              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]

              animate-slideIn
            "
            style={{
              animationDelay: `${i * 100}ms`,
              animationFillMode: "forwards"
            }}
          >
            {/* ICON */}
            <div
              className="
                w-12 h-12 mx-auto mb-4 rounded-full
                bg-[rgba(34,211,238,0.15)]
                border border-[rgba(34,211,238,0.3)]

                transition-all duration-300
                group-hover:scale-110
                group-hover:bg-[rgba(34,211,238,0.25)]
              "
            />

            <h3 className="
              font-semibold
              text-[var(--color-primary)]
              transition
              group-hover:text-[var(--color-primary-light)]
            ">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* 🔥 ANIMATION */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-40px) scale(0.95);
            }
            60% {
              opacity: 1;
              transform: translateX(6px) scale(1.03);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          .animate-slideIn {
            animation: slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          }

          /* 📱 MOBILE */
          @media (max-width: 640px) {
            @keyframes slideIn {
              0% {
                opacity: 0;
                transform: translateY(60px) scale(0.95);
              }
              60% {
                opacity: 1;
                transform: translateY(-4px) scale(1.02);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          }
        `}
      </style>

    </section>
  );
}
/* ================= SERVICES ================= */


function Services() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  const services = [
    {
      title: "Business Software Systems",
      desc: "We build full systems for businesses, NGOs, schools, and organizations.",
      icon: "🖥️"
    },
    {
      title: "Mobile App Development",
      desc: "Custom Android & iOS apps for individuals, startups, and enterprises.",
      icon: "📱"
    },
    {
      title: "Software Repair & Troubleshooting",
      desc: "Fix system errors, bugs, crashes, and performance issues on computers.",
      icon: "🛠️"
    },
    {
      title: "Software Installation & Updates",
      desc: "Install, configure, and keep systems updated and running smoothly.",
      icon: "⚙️"
    },
    {
      title: "System Integration & Automation",
      desc: "Connect apps, APIs, and workflows for smarter automated systems.",
      icon: "🔗"
    },
    {
      title: "Social Media & Content Integration",
      desc: "Connect apps with social media and manage digital content systems.",
      icon: "🌐"
    }
  ];

  // scroll trigger
 const hasAnimated = useRef(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        startReveal();
      }
    },
    { threshold: 0.3 }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);

  const startReveal = () => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= services.length) clearInterval(interval);
    }, 180);
  };

  return (
    <section ref={ref} className="py-28 bg-cyan-700 text-white">

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Services we provide
        </h2>

        <p className="mt-3 text-cyan-100 max-w-2xl mx-auto">
          We build, fix, and scale digital systems for real-world use cases.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {services.slice(0, visibleCount).map((s, i) => (
          <div
            key={i}
            className="
              group
              bg-cyan-800/60 backdrop-blur-xl
              border border-cyan-500/30
              rounded-2xl p-6

              transition-all duration-300

              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_20px_40px_rgba(34,211,238,0.25)]
              hover:border-cyan-300
            "
            style={{
              animationDelay: `${i * 120}ms`,
              animationFillMode: "forwards"
            }}
          >
            {/* ICON */}
            <div className="text-3xl mb-4 transition group-hover:scale-110">
              {s.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-cyan-100 group-hover:text-white transition">
              {s.title}
            </h3>

            {/* DESC */}
            <p className="mt-2 text-sm text-cyan-200">
              {s.desc}
            </p>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <Link
          to="/services"
          className="
            inline-block
            bg-cyan-400 text-black
            px-6 py-3 rounded-md
            font-semibold

            hover:bg-cyan-300
            hover:scale-105
            transition
          "
        >
          View All Services →
        </Link>
      </div>

    </section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="py-28 px-6 text-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-600/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* GLASS CARD */}
      <div className="mt-10 max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-cyan-100 rounded-2xl p-10 shadow-lg">

        {/* IDENTITY */}
        <p className="text-lg text-slate-700 leading-relaxed">
          We are a <span className="text-cyan-700 font-semibold">
          systems engineering team
          </span>{" "}
          focused on building reliable digital solutions that solve real-world problems.
        </p>

        {/* SPACE */}
        <div className="my-6 w-16 h-[2px] bg-cyan-300 mx-auto rounded-full" />

        {/* BELIEF */}
        <p className="text-slate-600 leading-relaxed">
          At SizaForge, we believe technology should simplify life — not make it harder.
          Every system we build is designed to be clear, scalable, and human-centered.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            to="/about"
            className="
              inline-block
              bg-cyan-500 text-black
              px-6 py-3 rounded-md
              font-semibold

              hover:bg-cyan-400
              hover:scale-105
              transition
              shadow-md
            "
          >
            Read Our Full Story →
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ================= PROCESS ================= */
function Process() {
  const steps = [
    {
      title: "Understand",
      desc: "We study your idea, your users, and the real problem you want to solve.",
      icon: "🔍"
    },
    {
      title: "Plan",
      desc: "We design a clear system structure, features, and technical roadmap.",
      icon: "🧠"
    },
    {
      title: "Design",
      desc: "We create user-friendly interfaces and system architecture before coding.",
      icon: "🎨"
    },
    {
      title: "Build",
      desc: "We develop clean, scalable, and secure systems step by step.",
      icon: "⚙️"
    },
    {
      title: "Improve",
      desc: "We test, refine, and continuously improve performance and usability.",
      icon: "🚀"
    },
  ];

  return (
    <section className="py-28 bg-white text-center relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-200/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        How we work
      </h2>

      <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
        A structured process that turns ideas into real, scalable systems.
      </p>

      {/* STEPS */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">

        {steps.map((step, i) => (
          <div
            key={i}
            className="
              relative group
              bg-white/70 backdrop-blur-md
              border border-cyan-100
              rounded-2xl p-6
              shadow-sm

              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]
              hover:-translate-y-2
              hover:scale-[1.02]
              transition-all duration-300
            "
          >
            {/* ICON */}
            <div className="text-3xl mb-4 group-hover:scale-110 transition">
              {step.icon}
            </div>

            {/* STEP NUMBER */}
            <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-cyan-100 text-cyan-700 font-bold flex items-center justify-center text-sm">
              {i + 1}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-cyan-800">
              {step.title}
            </h3>

            {/* DESC */}
            <p className="mt-2 text-sm text-slate-600">
              {step.desc}
            </p>

            {/* CONNECTOR LINE */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-12px] w-6 h-[2px] bg-cyan-200" />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}



function Gallery() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "School Management System",
      img: "/images/project1.jpg",
    },
    {
      title: "Business Automation Platform",
      img: "/images/project2.jpg",
    },
    {
      title: "Mobile App UI Design",
      img: "/images/project3.jpg",
    },
    {
      title: "NGO Management System",
      img: "/images/project4.jpg",
    },
    {
      title: "Social Media Integration Tool",
      img: "/images/project5.jpg",
    },
  ];

  return (
    <section className="py-28 text-center relative">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Gallery
      </h2>

      <p className="mt-3 text-slate-500">
        Real systems we have designed and built.
      </p>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid mt-12 grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {projects.slice(0, 3).map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="
              cursor-pointer
              rounded-xl overflow-hidden
              shadow-sm
              bg-white

              hover:scale-105
              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]
              transition-all duration-300
            "
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-3 text-sm text-cyan-800 font-medium">
              {p.title}
            </div>
          </div>
        ))}

      </div>

      {/* MOBILE CAROUSEL (SCROLL SNAP) */}
      <div
        className="
          md:hidden mt-10 px-6
          flex gap-4 overflow-x-auto
          scroll-smooth snap-x snap-mandatory
        "
      >
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="
              min-w-[260px]
              snap-center
              cursor-pointer

              rounded-xl overflow-hidden
              bg-white shadow-sm

              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-3 text-sm text-cyan-800 font-medium">
              {p.title}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHT ZOOM MODAL */}
      {selected && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70 backdrop-blur-md
            flex items-center justify-center
            px-6
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="
              max-w-3xl w-full
              bg-white rounded-xl overflow-hidden
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="text-cyan-800 font-semibold">
                {selected.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Click outside to close
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

function Stats() {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  const stats = [
    { label: "Systems Built", value: 38, icon: "🖥️" },
    { label: "Clients", value: 40, icon: "🤝" },
    { label: "Projects", value: 32, icon: "📦" },
    { label: "Success Rate", value: 40, icon: "🚀" },
  ];

  // trigger once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-cyan-700 text-white text-center">

      <h2 className="text-3xl md:text-4xl font-bold">
        Our Impact
      </h2>

      <p className="mt-3 text-cyan-100">
        Real results from real systems we’ve built.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

        {stats.map((s, i) => (
          <CounterCard
            key={i}
            icon={s.icon}
            label={s.label}
            value={s.value}
            start={start}
          />
        ))}

      </div>
    </section>
  );

}

function CounterCard({ icon, label, value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const target = Math.min(value, 40); // 🔥 LIMIT = 40

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div
      className="
        bg-cyan-800/60
        backdrop-blur-md
        border border-cyan-500/30
        rounded-2xl p-6

        hover:scale-[1.03]
        hover:shadow-[0_20px_40px_rgba(34,211,238,0.25)]
        transition-all duration-300
      "
    >
      <div className="text-3xl mb-3">{icon}</div>

      <h3 className="text-3xl font-bold text-white">
        {count}+
      </h3>

      <p className="text-cyan-100 text-sm mt-2">
        {label}
      </p>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "John K.",
      role: "Business Owner",
      text: "SizaForge built a system that completely changed how we manage our operations. Very reliable.",
    },
    {
      name: "Sarah M.",
      role: "School Administrator",
      text: "Our school system is now organized and easy to use. Everything works smoothly.",
    },
    {
      name: "David L.",
      role: "Startup Founder",
      text: "Fast delivery and clean architecture. They understand real system design.",
    },
    {
      name: "Emily R.",
      role: "NGO Manager",
      text: "They helped us build a management system that improved our reporting and tracking.",
    },
    {
      name: "Michael T.",
      role: "App Client",
      text: "The mobile app they built is clean, fast, and exactly what we needed.",
    },
    {
      name: "Grace W.",
      role: "Entrepreneur",
      text: "Very professional team. They care about quality and long-term stability.",
    },
  ];

  return (
    <section className="py-28 text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        What clients say
      </h2>

      <p className="mt-3 text-slate-500">
        Real feedback from people we’ve worked with.
      </p>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid mt-14 grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              bg-white/70 backdrop-blur-md
              border border-cyan-100
              rounded-2xl p-6
              shadow-sm

              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]
              hover:-translate-y-2
              hover:scale-[1.02]
              transition-all duration-300
            "
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              “{t.text}”
            </p>

            <div className="mt-5">
              <h4 className="font-semibold text-cyan-800">
                {t.name}
              </h4>
              <p className="text-xs text-slate-500">
                {t.role}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* MOBILE HORIZONTAL SCROLL */}
      <div
        className="
          md:hidden mt-10 px-6
          flex gap-4 overflow-x-auto
          scroll-smooth snap-x snap-mandatory
        "
      >

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              min-w-[280px]
              snap-center

              bg-white/70 backdrop-blur-md
              border border-cyan-100
              rounded-2xl p-6
              shadow-sm

              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            <p className="text-slate-600 text-sm">
              “{t.text}”
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-cyan-800">
                {t.name}
              </h4>
              <p className="text-xs text-slate-500">
                {t.role}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

/* ================= PRICING ================= */

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Starter",
      desc: "For small personal or simple projects",
      features: [
        "Simple website or system",
        "Basic support",
        "Standard design",
      ],
    },
    {
      name: "Pro",
      price: "Most Popular",
      desc: "For businesses and growing systems",
      features: [
        "Full business system",
        "Mobile app integration",
        "Automation features",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large organizations & complex systems",
      features: [
        "Advanced system architecture",
        "Full integration services",
        "Dedicated support",
        "Long-term maintenance",
      ],
    },
  ];

  return (
    <section className="py-28 bg-white text-center relative">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Pricing
      </h2>

      <p className="mt-3 text-slate-500">
        Simple pricing based on project size and complexity.
      </p>

      {/* CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`
              relative rounded-2xl p-8 text-left

              backdrop-blur-md
              border

              transition-all duration-300

              hover:-translate-y-2
              hover:scale-[1.02]
              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]

              ${
                plan.highlight
                  ? "bg-cyan-700 text-white border-cyan-300 shadow-lg"
                  : "bg-white/70 border-cyan-100"
              }
            `}
          >

            {/* BADGE */}
            {plan.highlight && (
              <div className="absolute top-4 right-4 text-xs bg-cyan-300 text-black px-3 py-1 rounded-full font-semibold">
                Recommended
              </div>
            )}

            {/* TITLE */}
            <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-cyan-800"}`}>
              {plan.name}
            </h3>

            <p className={`text-sm mt-1 ${plan.highlight ? "text-cyan-100" : "text-slate-500"}`}>
              {plan.desc}
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={plan.highlight ? "text-white" : "text-cyan-600"}>
                    ✔
                  </span>
                  <span className={plan.highlight ? "text-cyan-50" : "text-slate-600"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              className={`
                mt-8 w-full py-2 rounded-md font-semibold transition

                ${
                  plan.highlight
                    ? "bg-white text-cyan-700 hover:bg-cyan-100"
                    : "bg-cyan-500 text-white hover:bg-cyan-400"
                }
              `}
            >
              Choose Plan
            </button>

          </div>
        ))}

      </div>
       {/* CTA SECTION */}
      <div className="mt-1 flex flex-col items-center gap-4">

        <p className="text-slate-600">
          Ready to build your system?
        </p>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/256726514609"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2

            bg-green-500 text-white
            px-6 py-3 rounded-full

            font-semibold

            hover:bg-green-400
            hover:scale-105
            transition-all duration-300
          "
        >
          💬 Chat on WhatsApp
        </a>

      </div>
    </section>
  );
}


function Team() {
  const members = [
    {
      name: "Ronald",
      role: "Software Engineer",
      desc: "Builds core systems and software tools.",
      img: "/images/ronald.jpg",
    },
    {
      name: "Ruth",
      role: "Operations Manager",
      desc: "Oversees operations and system coordination.",
      img: "/images/ruth.jpeg",
    },
    {
      name: "Moses",
      role: "IT Specialist",
      desc: "Handles setup, support, and configuration.",
      img: "/images/moses.jpeg",
    },
    {
      name: "Mugume Marvin",
      role: "Software Developer",
      desc: "Designs and develops scalable applications.",
      img: "/images/marvin.jpeg", // add your image here
    },
  ];

  return (
    <section className="py-28 text-center bg-[#F4FEFF]">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Our Team
      </h2>

      <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
        A small but dedicated team building reliable and human-focused systems.
      </p>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

        {members.map((m, i) => (
          <div
            key={i}
            className="
              bg-white/70 backdrop-blur-md
              border border-cyan-100
              rounded-2xl p-5

              shadow-sm

              hover:-translate-y-2
              hover:scale-[1.03]
              hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]

              transition-all duration-300
            "
          >

            {/* IMAGE */}
            <img
              src={m.img}
              alt={m.name}
              className="
                w-40 h-auto mx-auto
                rounded-xl object-cover object-top
                shadow-md
              "
            />

            {/* NAME */}
            <h3 className="mt-4 font-semibold text-cyan-800">
              {m.name}
            </h3>

            {/* ROLE */}
            <p className="text-sm font-medium text-slate-600">
              {m.role}
            </p>

            {/* DESCRIPTION */}
            <p className="text-xs text-slate-500 mt-2">
              {m.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function FAQ() {
  const [open, setOpen] = React.useState(null);

  const data = [
    {
      q: "What kind of systems do you build?",
      a: "We build business systems, school platforms, NGO systems, dashboards, and custom digital tools tailored to your needs."
    },
    {
      q: "Do you also build mobile apps?",
      a: "Yes. We build Android and iOS apps for businesses, individuals, and organizations with full backend integration."
    },
    {
      q: "Can you fix or improve existing software?",
      a: "Yes. We troubleshoot bugs, improve performance, update systems, and modernize old applications."
    },
    {
      q: "Do you handle social media or integrations?",
      a: "We integrate social media systems into apps and websites, including login systems, sharing tools, and business automation features."
    },
    {
      q: "How do you decide pricing?",
      a: "We first understand your system requirements, then we analyze complexity and provide a custom quote for your project."
    },
    {
      q: "Do you offer long-term support?",
      a: "Yes. We provide maintenance, updates, and continuous system improvements after delivery."
    },
    {
  q: "Is SizaForge a registered company?",
  a: "Yes. We are officially registered with URSB (Uganda Registration Services Bureau) in Uganda, and we operate as a legally recognized software development company."
}
  ];

  return (
    <section className="py-28 bg-[#F4FEFF] text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Frequently Asked Questions
      </h2>

      <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
        Common questions from clients about our systems and services.
      </p>

      {/* FAQ LIST */}
      <div className="mt-12 max-w-3xl mx-auto px-6 space-y-4">

        {data.map((item, i) => (
          <div
            key={i}
            className="
              bg-white/70 backdrop-blur-md
              border border-cyan-100
              rounded-2xl p-5
              shadow-sm

              cursor-pointer

              hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]
              transition-all duration-300
            "
            onClick={() => setOpen(open === i ? null : i)}
          >

            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-cyan-800 text-left">
                {item.q}
              </h3>

              <span className="text-cyan-600 text-xl">
                {open === i ? "−" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {open === i && (
              <p className="mt-3 text-sm text-slate-600 text-left leading-relaxed">
                {item.a}
              </p>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

/* ================= CTA ================= */

function CTA() {
  return (
    <section className="relative py-28 text-center bg-cyan-950 text-white overflow-hidden">

      {/* 🌊 Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400 blur-3xl rounded-full animate-pulse top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-300 blur-3xl rounded-full animate-pulse bottom-[-200px] right-[-200px]" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 items-center flex flex-col">

        <h2 className="text-3xl font-bold text-cyan-300">
          Let’s build something powerful
        </h2>

        <p className="mt-4 text-cyan-100">
          We turn ideas into working systems that grow with your business.
        </p>

       <div className="z-10 max-w-3xl flex flex-col md:flex-row gap-10 items-center">
         {/* response time indicator */}

        <a
          href="https://wa.me/256726514609"
          className="md:mt-0 mt-6 inline-block bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition w-auto"
        >
          Contact Us on WhatsApp
        </a>
        <ResponseBadge/>

       </div>
      </div>
    </section>
  );
}

function ResponseBadge() {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-cyan-400/30 rounded-full text-cyan-200 text-sm backdrop-blur-md w-auto">
      ⚡ Response time: 10–30 min
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section className="py-28 bg-[#F4FEFF] text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-700">
        Contact Us
      </h2>

      <p className="mt-3 text-slate-500">
        Reach us through any of the channels below.
      </p>

      {/* CONTACT CARDS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">

        {/* EMAIL */}
        <div className="bg-white/70 backdrop-blur-md border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-cyan-800">Email</h3>
          <p className="mt-2 text-slate-600 text-sm">sizaforge@gmail.com</p>
        </div>

        {/* PHONE */}
        <div className="bg-white/70 backdrop-blur-md border border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="font-semibold text-cyan-800">Phone</h3>
          <p className="mt-2 text-slate-600 text-sm">+256 726 514 609</p>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/256726514609"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white/70 backdrop-blur-md
            border border-cyan-100
            rounded-2xl p-6 shadow-sm

            hover:shadow-[0_20px_40px_rgba(34,211,238,0.2)]
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <h3 className="font-semibold text-cyan-800">WhatsApp</h3>
          <p className="mt-2 text-slate-600 text-sm">Instant chat & support</p>
        </a>

      </div>
    </section>
  );
}

/* ================= WAVE ================= */
function Wave() {
  return (
    <svg viewBox="0 0 1200 100" className="w-full h-20" preserveAspectRatio="none">
      <path
        d="M0,60 C300,0 900,100 1200,40 L1200,100 L0,100 Z"
        fill="#F4FEFF"
      />
    </svg>
  );
}