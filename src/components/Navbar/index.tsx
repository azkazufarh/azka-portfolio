'use client';

import Link from "next/link";

export const Navbar = () => {
  const handleMenuToggle = () => {
    const menu = document.getElementById("mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl flex items-center justify-between mx-auto py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          azka.dev
        </Link>
        <div
          className="flex md:hidden items-center"
          onClick={() => handleMenuToggle()}
        >
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center gap-4">
          <a
            href="#home"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-gray-900"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6282214984819&text&type=phone_number&app_absent=0"
            target="_blank"
            className="bg-blue-800 text-white px-4 py-2 rounded"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      <div
        className="hidden absolute top-16 left-0 w-full bg-white z-50 p-4 shadow-md md:hidden"
        id="mobile-menu"
      >
        <a
          href="#home"
          className="block mb-2 text-gray-600 hover:text-gray-900"
          onClick={() => handleMenuToggle()}
        >
          Home
        </a>
        <a
          href="#about"
          className="block mb-2 text-gray-600 hover:text-gray-900"
          onClick={() => handleMenuToggle()}
        >
          About
        </a>
        <a
          href="#portfolio"
          className="block mb-2 text-gray-600 hover:text-gray-900"
          onClick={() => handleMenuToggle()}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="block mb-2 text-gray-600 hover:text-gray-900"
          onClick={() => handleMenuToggle()}
        >
          Contact
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=6282214984819&text&type=phone_number&app_absent=0"
          target="_blank"
          className="block bg-blue-800 text-white px-4 py-2 rounded"
        >
          Let’s Talk
        </a>
      </div>
    </nav>
  );
};
