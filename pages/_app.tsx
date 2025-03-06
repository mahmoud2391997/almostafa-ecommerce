import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import  LanguageProvider  from "./languageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="w-full flex  flex-col ">
        <Navbar />

        <Component {...pageProps} />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
