import ContactInfo from "@/components/contact";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="w-full flex  flex-col relative">
      <Navbar />
  
  <Component {...pageProps} />
  </div>
}
