"use client";
import React, { useState, useEffect } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    otp: "",
  });

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: phoneValue }));
      return;
    }
    if (name === "otp") {
      const otpValue = value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({ ...prev, [name]: otpValue }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowAuthPopup(false);
  };

  return (
    <>
      <header id="header" className="bg-neutral-900 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="demo"
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Demo
              </ScrollLink>
              <ScrollLink
                to="pricing"
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Pricing
              </ScrollLink>
              <ScrollLink
                to="faq"
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                FAQ
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Contact
              </ScrollLink>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setShowAuthPopup(true);
                    setIsLogin(false);
                  }}
                  className="bg-accent text-black font-bold px-6 py-2 rounded-lg hover:bg-[#e05a00] transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-toggle"
                aria-label="Toggle menu"
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden bg-neutral-800 mt-2 rounded-lg animate__animated ${isMobileMenuOpen
              ? "block animate__fadeIn"
              : "hidden animate__fadeOut"
              }`}
          >
            <div className="flex flex-col space-y-3 p-4">
              <ScrollLink
                to="hero"
                smooth={true}
                spy={true}
                offset={-280}
                duration={1000}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="demo"
                smooth={true}
                spy={true}
                offset={-280}
                duration={1000}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Demo
              </ScrollLink>
              <ScrollLink
                to="pricing"
                smooth={true}
                spy={true}
                offset={-280}
                duration={1000}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Pricing
              </ScrollLink>
              <ScrollLink
                to="faq"
                smooth={true}
                spy={true}
                offset={-280}
                duration={1000}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                FAQ
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                spy={true}
                offset={-280}
                duration={1000}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition duration-300 cursor-pointer"
              >
                Contact
              </ScrollLink>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setShowAuthPopup(true);
                    setIsLogin(false);
                  }}
                  className="bg-accent text-black font-bold px-6 py-2 rounded-lg hover:bg-[#e05a00] transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Popup */}
      {showAuthPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowAuthPopup(false)}
          ></div>

          <div className="relative z-50 bg-black text-accent p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto animate__animated animate__fadeInUp animate__faster">
            <button
              onClick={() => setShowAuthPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className="flex gap-4">
                  <div className="flex-1 space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                      placeholder="0000000000"
                      required
                      minLength={10}
                      maxLength={10}
                    />
                  </div>

                  <div className="w-32 space-y-2">
                    <label htmlFor="otp" className="block text-sm font-medium">
                      OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                      placeholder="0000"
                      required
                      minLength={4}
                      maxLength={4}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-[#e05a00] transition duration-300 mt-6"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-accent hover:underline"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
