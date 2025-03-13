"use client";
import React, { useState, useEffect } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
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
          className={`md:hidden bg-neutral-800 mt-2 rounded-lg animate__animated ${
            isMobileMenuOpen
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
              duration={500}
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
              duration={500}
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
              duration={500}
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
              duration={500}
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
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
