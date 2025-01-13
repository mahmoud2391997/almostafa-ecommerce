import React from "react";

const Footer = () => {
  return (
    <footer className=" text-[var(--foreground)] py-6 mt-10 bg-gradient-to-b from-white to-[var(--foreground)] ">
    <div className="container mx-auto text-center flex flex-col  justify-between">
      
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4 ">
        <img src="/image.png" alt="Almostafa Logo" className="h-14 mr-3" />
        <div>
          <h1 className="text-md sm:text-xl font-bold">Almostafa For Dairy Products</h1>
          <p className="text-sm ">Since 1988</p>
        </div>
      </div>
      <div>
      <p className="text-white">&copy; 2025 Almostafa For Dairy Products. All rights reserved.</p>
      <div className="mt-2">
        <a href="/privacy-policy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
        <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
      </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;