import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "./languageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="w-full flex lg:pt-[159.61px] sm:pt-[143.09px] pt-[179.82px] flex-col relative">
        <Navbar />

        <Component {...pageProps} />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
