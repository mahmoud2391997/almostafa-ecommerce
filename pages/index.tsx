
import Categories from "@/components/categories";
import { useLanguage } from "./languageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import { useRouter } from 'next/router';

const adImages = [
  "/swiper2.jpg",
  "/swiper3.jpg",
  "/swiper4.jpg",
  "/swiper5.jpg",
  "/swiper6.jpg",
  "/swiper7.jpg",
  "/swiper8.jpg",
  "/swiper9.jpg",
];
export default function Home() {
    const { translations } = useLanguage(); // Ensure direction is provided by useLanguage
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
function navigateToProducts() {
  router.push('/productsList');
}
  return (
    <div className={`w-full flex  flex-col`}>
<div className="w-full relative flex  bg-gradient-to-b from-white to-[var(--foreground)] z-0 rounded-b-full">

         
          
      <img src="/bg.jpeg" className="w-full" />  
      <div className="absolute top-[5%] text-right w-[55%] right-[5%]">
        <h1 style={{ lineHeight: "1.5em" }} className="text-white text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold">
          مرحباً بك في متجر المصطفى الإلكتروني
        </h1>
        <button onClick={navigateToProducts} className="text-[var(--foreground)] mt-4 md:mt-8 lg:mt-12 w-[75px] sm:w-[150px] md:w-[200px] lg:w-[300px] bg-white font-bold py-1 sm:py-2 md:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg text-sm sm:text-base md:text-lg lg:text-2xl">
          عرض المنتجات
        </button>
      </div>
    

      </div>
    
      <section className="w-full px-4 sm:px-10 md:px-16 lg:px-20 py-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          
          renderBullet: (index, className) => {
            const isActive = index === activeIndex;
            return `<span class="${className} w-6 h-1  ${
              isActive ? "bg-blue-500 w-10" : "bg-gray-500"
            } rounded-md mx-1 inline-block"></span>`;
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full relative rounded-lg"
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {adImages.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center h-full justify-between transition-all duration-500 mb-10" onClick={navigateToProducts}
          >
            <img
              src={src}
              alt={`Ad ${index + 1}`}
              className="w-full object-cover rounded-lg"
            />
            <div className="w-full flex justify-center mt-4">
              <button  className="w-[80%] max-w-[200px] h-[60px] text-white border border-[var(--foreground)] bg-[var(--foreground)] font-bold py-2 px-4 rounded-lg text-xl sm:text-2xl">
                عرض المنتجات
              </button>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Pagination Positioning */}
        <div className="swiper-pagination !absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center"></div>
      </Swiper>
    </section>
      {/* <section className="w-full border border-[#562b2c] border-t-0 bg-white flex flex-col items-center justify-evenly h-[81.8vh] pb-[10%] text-[var(--foreground)] responsive-height rounded-b-full">
       <div className="w-auto flex flex-col items-center justify-center">
        <h1 className="text-center  font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{translations.overview}</h1>
<img src="/title.png" className="md:w-full sm:w-3/4 w-1/2 " />
       </div>
        <p className="text-center md:text-2xl sm:text-xl text-md lg:text-3xl xl:text-4xl font-bold w-2/4">
          {translations.overviewContent}
        </p>
        <button onClick={navigateToProducts} className="mt-6 text-white w-[200px] lg:w-[300px] bg-[var(--foreground)] font-bold py-3 px-6 rounded-lg text-2xl transition-all">
      عرض المنتجات
    </button>
      </section> */}
      <section className="w-full">

      <div className="w-auto  flex flex-col items-center justify-center mb-6  mt-20">
        <h1 className="text-center text-[var(--foreground)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl   font-extrabold   mb-2">{translations.categories}</h1>
<img src="/title.png" className="w-auto " />
       </div>
      <Categories />
      </section>
    </div>
  );
}
