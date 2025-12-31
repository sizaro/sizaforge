// src/components/common/Navbar.jsx
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

  // Click outside => close dropdown
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

  // LOGIN
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

  // REGISTER
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
    <nav className="bg-[#2D2F36] border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-[#6BE6A8]"
        >
          <span className="font-extrabold text-[#52D298]">Siza</span>Forge
        </NavLink>

        {/* Hamburger (Mobile) */}
        <button
          className="sm:hidden text-gray-200 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* LINKS */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#2D2F36] sm:bg-transparent sm:flex sm:space-x-6 shadow sm:shadow-none`}
        >
          {["/", "/about", "/services", "/pricing", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Services", "Pricing", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium transition border-b-2 ${
                    isActive
                      ? "text-[#6BE6A8] bg-[#0D3B66]/40 border-[#6BE6A8]"
                      : "text-gray-200 border-transparent hover:border-[#6BE6A8]"
                  }`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}

          {/* ACCOUNT BUTTON */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOptions(!accountOptions)}
              className="block bg-[#52D298] text-black mx-4 my-2 px-4 py-2 rounded-lg shadow hover:bg-[#6BE6A8] transition"
            >
              Account
            </button>

            {accountOptions && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-50">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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
