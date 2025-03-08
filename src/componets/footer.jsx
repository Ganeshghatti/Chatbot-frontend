import React from "react";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate__animated animate__fadeIn">
            <Logo />
            <p className="text-gray-400 mb-4">
              Empowering businesses with smart chatbot solutions since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/the-squirrel-site"
                className="bg-neutral-700 p-2 rounded-full hover:bg-accent transition duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/thesquirrel_org"
                className="bg-neutral-700 p-2 rounded-full hover:bg-accent transition duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate__animated animate__fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#hero", text: "Home" },
                { href: "#pricing", text: "Pricing" },
                { href: "#faq", text: "FAQ" },
                { href: "#contact", text: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="animate__animated animate__fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent mr-2 mt-1" />
                <div>
                  <a
                    href="mailto:info@thesquirrel.site"
                    className="text-gray-400 hover:text-accent transition duration-300 block"
                  >
                    info@thesquirrel.site
                  </a>
                  <a
                    href="mailto:hello@ganeshghatti.in"
                    className="text-gray-400 hover:text-accent transition duration-300 block"
                  >
                    hello@ganeshghatti.in
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent mr-2 mt-1" />
                <a
                  href="tel:+919449610077"
                  className="text-gray-400 hover:text-accent transition duration-300"
                >
                  +91 94496 10077
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-gray-400 animate__animated animate__fadeIn">
          <p>© {new Date().getFullYear()} the squirrel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
