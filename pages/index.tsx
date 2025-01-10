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
    <div className="w-full flex  flex-col relative ">
      <section className="w-full border border-[#562b2c] border-t-0 bg-white flex flex-col items-center justify-evenly h-[78vh] pb-[10%] text-[var(--foreground)] responsive-height rounded-b-full">
       <div className="w-auto flex flex-col items-center justify-center">
        <h1 className="text-center  font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Overview</h1>
<img src="/title.png" className="md:w-full sm:w-3/4 w-1/2 " />
       </div>
        <p className="text-center md:text-2xl sm:text-xl text-lg lg:text-3xl xl:text-4xl font-bold w-2/4">
          At One Source, we are committed to revolutionizing the Food and
          Beverage industry by delivering cutting-edge solutions, innovative
          products, and unmatched service. We strive to exceed our customers'
          expectations while promoting sustainability and quality in every
          aspect of our business.
        </p>
      </section>
      <section className="w-full">

      <div className="w-auto  flex flex-col items-center justify-center mb-6  mt-20">
        <h1 className="text-center text-[var(--foreground)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl   font-extrabold   mb-2">Categories</h1>
<img src="/title.png" className="w-auto " />
       </div>
      <Categories />
      </section>
    </div>
  );
}
