import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal.jsx";
import LoginForm from "../../components/auth/login.jsx";
import { useData } from "../../context/DataContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [accountOptions, setAccountOptions] = useState(false);

  const { loginUser, createUser, checkAuth } = useData();
  const navigate = useNavigate();
  const accountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (loginOpen || registerOpen) setAccountOptions(false);
  }, [loginOpen, registerOpen]);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setLoginError(null);
    try {
      const res = await loginUser({ email, password });
      await checkAuth();
      setLoginOpen(false);

      if (res.role === "owner") navigate("/owner");
      else if (res.role === "manager") navigate("/manager");
      else if (res.role === "employee") navigate("/employee");
      else if (res.role === "customer") navigate("/customer");
      else navigate("/");
    } catch (err) {
      setLoginError(err?.response?.data?.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomerRegister = async (formData) => {
    try {
      await createUser(formData);
      setRegisterOpen(false);
      setLoginOpen(true);
    } catch (err) {
      alert("Account creation failed");
    }
  };

  return (
    <nav className="bg-[#0F172A]/90 backdrop-blur-md border-b border-cyan-900/40 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-cyan-300"
        >
          <span className="text-cyan-400 font-extrabold">Siza</span>
          Forge Technologies
        </NavLink>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-cyan-200 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* LINKS */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[#0F172A] md:bg-transparent md:flex md:space-x-6 px-4 md:px-0`}
        >
          {["/", "/about", "/services", "/pricing", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Services", "Pricing", "Contact"];

            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-cyan-300 border-cyan-400 bg-cyan-900/30"
                      : "text-cyan-100 border-transparent hover:text-cyan-300 hover:border-cyan-400"
                  }`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}

          {/* ACCOUNT */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOptions(!accountOptions)}
              className="ml-4 my-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 hover:bg-cyan-500/30 transition backdrop-blur-md"
            >
              Account
            </button>

            {accountOptions && (
              <div className="absolute left-0 mt-2 w-44 bg-[#0F172A] border border-cyan-800/40 shadow-xl rounded-lg py-2 z-50 backdrop-blur-md">

                <button
                  className="block w-full text-left px-4 py-2 text-cyan-100 hover:bg-cyan-900/40"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>

                <button
                  className="block w-full text-left px-4 py-2 text-cyan-100 hover:bg-cyan-900/40"
                  onClick={() => setRegisterOpen(true)}
                >
                  Create Account
                </button>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginForm
          onSubmit={handleLogin}
          onCancel={() => setLoginOpen(false)}
          loading={loading}
          error={loginError}
        />
      </Modal>

    </nav>
  );
}