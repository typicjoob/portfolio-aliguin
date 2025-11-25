"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { title: "About Me", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black/70">
      <div className="flex flex-wrap items-center justify-between mx-auto h-full py-5">
        <span
          className="text-2xl md:text-5xl ml-8 text-white font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio Project
        </span>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto lg:pr-5" id="navbar">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-white hover:text-amber-500 font-semibold"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden mt-2 bg-black/15 py-2">
          <ul className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-white hover:text-amber-500 font-semibold w-full text-left"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
