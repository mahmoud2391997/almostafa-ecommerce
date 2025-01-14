import { useLanguage } from "@/pages/languageContext";
import React from "react";

const Footer = () => {
  const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage
  return (
    <footer className=" text-[var(--foreground)] py-6 mt-10 bg-gradient-to-b from-white to-[var(--foreground)] ">
    <div className="container mx-auto text-center flex flex-col  justify-between">
      
      <div className={`flex flex-col justify-center items-center mb-4 ${direction  == "rtl" ? "sm:flex-row-reverse " : "sm:flex-row "}`}>
        <img src="/image.png" alt="Almostafa Logo" className="h-14 m-3" />
        <div>
          <h1 className="text-md sm:text-xl font-bold">{translations.footer}</h1>
        </div>
      </div>
      <div>
      <p className="text-white">&copy; 2025 Almostafa e-commerce For Dairy Products. All rights reserved.</p>
      
      </div>
    </div>
  </footer>
  );
};

export default Footer;