import React, { useState } from "react";
import Link from "next/link";

import LanguageDropdown from "./language";
import { useLanguage } from "../pages/languageContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage
  const router = useRouter();
function navigateToLanding() {
  router.push('/');
}
  return (
    <div className=" w-full z-50">
      {/* <div className="w-full h-auto sm:h-[45px] flex justify-center items-center bg-white text-[var(--foreground)] relative">
        <div className="sm:w-full flex justify-center items-center m-0">
          <div
            className={`flex justify-around items-center w-full flex-col sm:flex-row h-auto ${
              direction === "rtl" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className="flex justify-center items-center"
              style={{ width: 250, height: 30 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <a className="email ml-3 mr-3 inline-block" role="button">
                {translations.contact}
              </a>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: 200, height: 30 }}
            >
              <FontAwesomeIcon icon={faMobile} />
              <p className="ml-3 inline-block">{translations.phone}</p>
            </div>
            <div
              className={`flex justify-center items-center + ${
                direction == "rtl" ? "flex-row-reverse" : "flex-row"
              }`}
              style={{ width: 200, height: 30 }}
            >
              <span className="inline-block w-[80px] ml-1">
                {translations.followUs}
              </span>
              <span>
                <a href="https://www.facebook.com/Mustafa.cheese">
                  {translations.facebook}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <nav
        className={`bg-gradient-to-b from-white to-[var(--foreground)]   relative flex justify-around items-center p-4 ${
          direction === "rtl" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex w-3/6  sm:w-1/3 md:w-1/6 min-w-[150px] max-w-[220px] items-center cursor-pointer" onClick={navigateToLanding}>
          <img src="/image.png" alt="Logo" />
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
            <div
              className={`w-[200px] top-12 absolute m-auto md:p-0 p-4 bg-white md:bg-transparent md:hidden md:w-3/4 flex-col justify-start ${
                isOpen ? "block" : "hidden"
              } ${
                direction === "rtl" ? "text-right left-0" : "text-left right-0 "
              }`}
            >
              <ul className="list-none md:flex md:justify-between md:items-center md:w-3/4 text-[var(--foreground)] font-bold text-base lg:text-lg xl:text-2xl">
                <li className="mt-2 md:mt-0">
                  <Link href="/">{translations.home}</Link>
                </li>
                <li className="mt-2 md:mt-0">
                  <Link href="/productsList">{translations.products}</Link>
                </li>
                <li className="mt-2 md:mt-0">
                  <Link href="/services">{translations.about}</Link>
                </li>
                <li className="mt-2 md:mt-0">
                  <Link href="/contact">{translations.contactPage}</Link>
                </li>
              </ul>
              <LanguageDropdown />
            </div>
          </div>
        </div>
        <div
          className={` md:p-0 p-4  px-10 md:bg-transparent w-3/6 flex-col justify-start md:justify-evenly md:flex-row md:flex hidden ${
            direction === "rtl"
              ? "flex-row-reverse text-right"
              : "flex-row text-left"
          }`}
        >
          <ul
            className={`list-none  md:justify-between w-full md:items-center   text-white  font-bold text-base lg:text-lg xl:text-2xl  ${
              direction === "rtl" ? "flex flex-row-reverse" : "flex flex-row"
            }`}
          >
            <li className="mt-2 md:mt-0">
              <Link href="/">{translations.home}</Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/productsList">{translations.products}</Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/services">{translations.about}</Link>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/contact">{translations.contactPage}</Link>
            </li>
          </ul>
        </div>
        <div className="hidden  w-1/6  md:flex justify-center items-center">
          <LanguageDropdown />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
