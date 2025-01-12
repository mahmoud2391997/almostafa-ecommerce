import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "./language";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 ">
      <div className="w-full h-auto sm:h-[45px]  flex justify-center items-center text-white bg-[var(--foreground)]  relative">
        <div className="sm:w-full flex justify-center items-center m-0">
          <div className="flex justify-evenly items-center w-full flex-col sm:flex-row h-auto">
            <div
              className="flex justify-center items-center"
              style={{ width: 250, height: 30 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <a className="email ml-3 mr-3 inline-block" role="button">
                contact@example.com
              </a>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: 200, height: 30 }}
            >
              <FontAwesomeIcon icon={faMobile} />
              <p className="ml-3 inline-block">+1 5589 55488 55</p>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: 200, height: 30 }}
            >
              <span className="inline-block w-[80px]">Follow Us:</span>
              <span className="ml-1">
                <a href="">Facebook</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-gradient-to-b to-white from-[var(--foreground)] relative flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/image.png" alt="Logo" className="w-28 ml-[5vw] sm:w-32 lg:w-40" />
        </div>
        <div className="flex justify-between items-center">
        <div className="md:hidden relative mt-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          <div className={`w-[200px] right-0 top-12 absolute m-auto md:p-0 p-4 bg-white md:bg-transparent 
            md:hidden   md:w-3/4 flex-col justify-start ${
          isOpen ? "block" : "hidden"
        }`}>

      <ul
        className={`list-none md:flex md:justify-between md:items-center md:w-3/4 text-[var(--foreground)] font-bold text-base lg:text-lg xl:text-2xl `}
        >
        <li className="mt-2 md:mt-0">
          <Link href="/">Home</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/productsList">Products</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/services">About</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
        <LanguageDropdown />
        {/* <select className="bg-gray-800 block md:hidden hover:text-white border-none">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select> */}
        </div>
        </div>
      </div>
      <div className={`w-2/3 md:p-0 p-4 bg-white md:bg-transparent   md:w-3/4 flex-col justify-start md:justify-between md:flex-row md:flex
            hidden
        `}>

      <ul
        className={`list-none md:flex md:justify-between md:items-center md:w-3/4 text-[var(--foreground)] md:text-white font-bold text-base lg:text-lg xl:text-2xl `}
        >
        <li className="mt-2 md:mt-0">
          <Link href="/">Home</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/productsList">Products</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/services">About</Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
        <LanguageDropdown />
        {/* <select className="bg-gray-800 block md:hidden hover:text-white border-none">
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select> */}
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
