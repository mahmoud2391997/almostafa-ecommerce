import React, { useState } from "react";
import Link from "next/link";
import LanguageDropdown from "./language";
import { useLanguage } from "../pages/languageContext";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../pages/cartContext"; // Import the cart context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, direction } = useLanguage();
  const router = useRouter();
  const { cart } = useCart(); // Get cart items from context
  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
  
  function navigateToLanding() {
    router.push('/');
  }
  
  const isHomePage = router.pathname === '/';
  
  return (
    <div className="w-full z-50">
      <nav
        className={`${isHomePage ? `bg-gradient-to-b from-white to-[var(--foreground)]` : `bg-gradient-to-b from-[var(--foreground)] to-white`} relative flex justify-around items-center p-4 ${
          direction === "rtl" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex w-3/6 sm:w-1/3 md:w-1/6 min-w-[150px] max-w-[220px] items-center cursor-pointer" onClick={navigateToLanding}>
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
                direction === "rtl" ? "text-right left-0" : "text-left right-0"
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
                <li className="mt-2 md:mt-0 relative">
                  <Link href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
              <LanguageDropdown />
            </div>
          </div>
        </div>
        <div
          className={`md:p-0 p-4 px-10 md:bg-transparent w-3/6 flex-col justify-start md:justify-evenly md:flex-row md:flex hidden ${
            direction === "rtl"
              ? "flex-row-reverse text-right"
              : "flex-row text-left"
          }`}
        >
          <ul
            className={`list-none md:justify-between w-full md:items-center text-white font-bold text-base lg:text-lg xl:text-2xl ${
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
        <div className="hidden w-1/6 md:flex justify-center items-center gap-4">
          <LanguageDropdown />
          <Link href="/cart" className="text-white ml-2 hover:text-gray-200 flex items-center relative">
            <FontAwesomeIcon icon={faShoppingCart} size="xl" className="ml-1" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;