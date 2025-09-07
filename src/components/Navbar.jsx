import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // ✅ heroicons

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full bg-gray-900 text-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#hero" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-6 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-800 px-6 pt-4 pb-6 space-y-4">
          <a
            href="#hero"
            className="block hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="w-full bg-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
