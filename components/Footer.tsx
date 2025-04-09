import { useLanguage } from "@/pages/languageContext";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage
  return (<div className="absolute bottom-0 w-full">
    <footer className=" text-[var(--foreground)] pt-6  bg-gradient-to-b from-white to-[var(--foreground)] ">
    <div className="container mx-auto text-center flex flex-col  justify-between">
      
      <div className={`flex flex-col justify-center items-center mb-4 ${direction  == "rtl" ? "sm:flex-row-reverse " : "sm:flex-row "}`}>
        <img src="/image.png" alt="Almostafa Logo" className="h-14 m-3" />
        <div>
          <h1 className="text-md sm:text-xl text-white font-bold">{translations.footer}</h1>
        </div>
      </div>
      <div>
      <p className="text-white">&copy; 2025 Almostafa e-commerce For Dairy Products. All rights reserved.</p>
      
      </div>
    </div>
    
  </footer>
  <div className="w-full h-auto sm:h-[45px] flex justify-center items-center bg-[var(--foreground)] text-white relative">
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
      </div>
  </div>
  );
};

export default Footer;