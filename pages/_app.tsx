import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import LanguageProvider from "./languageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <div className="w-full min-h-screen pb-[189px] bg-[var(--foreground)] relative flex flex-col">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </LanguageProvider>
    </Provider>
  );
}
