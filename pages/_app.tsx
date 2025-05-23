import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import LanguageProvider from "./languageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartProvider from "./cartContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CartProvider>

      <LanguageProvider>
        <div className="w-full min-h-screen pb-[282px] md:pb-[189px] bg-white relative flex flex-col">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </LanguageProvider>
      </CartProvider>
    </Provider>
  );
}
