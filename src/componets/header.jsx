'use client'
import React, { useState, useEffect } from 'react';
import Logo from './logo';

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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header id="header" className="bg-neutral-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
        <Logo/>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-accent transition duration-300">
              Home
            </a>
            <a href="#demo" className="hover:text-accent transition duration-300">
              Demo
            </a>
            <a href="#pricing" className="hover:text-accent transition duration-300">
              Pricing
            </a>
           
            <a href="#faq" className="hover:text-accent transition duration-300">
              FAQ
            </a>
            <a href="#contact" className="hover:text-accent transition duration-300">
              Contact
            </a>
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
              ? 'block animate__fadeIn'
              : 'hidden animate__fadeOut'
          }`}
        >
          <div className="flex flex-col space-y-3 p-4">
            <a href="#hero" className="hover:text-accent transition duration-300">
              Home
            </a>
            <a href="#demo" className="hover:text-accent transition duration-300">
              Demo
            </a>
            
            <a href="#readymade" className="hover:text-accent transition duration-300">
              Ready-Made
            </a>
            
            <a href="#pricing" className="hover:text-accent transition duration-300">
              Pricing
            </a>
            <a href="#faq" className="hover:text-accent transition duration-300">
              FAQ
            </a>
            <a href="#contact" className="hover:text-accent transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;