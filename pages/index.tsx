import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/productslist";
import Categories from "@/components/categories";
import ContactInfo from "@/components/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const categories = [
  {
    name: "Category1",
    genres: [
      { name: "Genre1", image: "/path/to/image1.jpg" },
      { name: "Genre2", image: "/path/to/image2.jpg" },
      { name: "Genre2", image: "/path/to/image2.jpg" },
    ],
  },
  {
    name: "Category2",
    genres: [
      { name: "Genre3", image: "/path/to/image3.jpg" },
      { name: "Genre4", image: "/path/to/image4.jpg" },
      { name: "Genre4", image: "/path/to/image4.jpg" },
    ],
  },
];

export default function Home() {
  return (
    <div className="w-full flex pt-[157.61px] flex-col relative">
      <section className="w-full  bg-gradient-to-b from-[var(--foreground)] to-white flex flex-col items-center justify-evenly pb-[15%] text-white  rounded-b-full" style={{ backgroundColor: "var(--foreground)" , height: "calc(100vh - 157.61px)"}}>
       <div className="w-auto h-[10vh] flex flex-col items-center justify-center">
        <h1 className="text-center text-white font-extrabold text-7xl">Overview</h1>
<img src="/title.png" className="w-[300px]" />
       </div>
        <p className="text-center text-4xl font-bold w-2/5">
          At One Source, we are committed to revolutionizing the Food and
          Beverage industry by delivering cutting-edge solutions, innovative
          products, and unmatched service. We strive to exceed our customers'
          expectations while promoting sustainability and quality in every
          aspect of our business.
        </p>
      </section>
      <section className="w-full">

      <div className="w-auto h-[10vh] flex flex-col items-center justify-center mb-6  mt-20">
        <h1 className="text-center text-[var(--foreground)] font-extrabold text-7xl  mb-2">Categories</h1>
<img src="/title.png" className="w-[360px]" />
       </div>
      <Categories />
      </section>
    </div>
  );
}
