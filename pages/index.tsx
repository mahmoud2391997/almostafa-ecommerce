import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/store/slices/categoriesSlice";
import { fetchProducts } from "../redux/store/slices/productsSlice";
import { RootState, AppDispatch } from "../redux/store/store";

import Categories from "@/components/categories";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CircularProgress } from "@mui/material";

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
  const [, setActiveIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { categories, loading: categoriesLoading } = useSelector((state: RootState) => state.categories);
  const { products, loading: productsLoaing } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  function navigateToProducts() {
    router.push("/productsList");
  }

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="w-full relative flex bg-gradient-to-b from-white to-[var(--foreground)] z-0 rounded-b-full">
        <img src="/bg.jpeg" className="w-full" />
        <div className="absolute top-[5%] text-right w-[55%] right-[5%]">
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold">
            مرحباً بك في متجر المصطفى الإلكتروني
          </h1>
          <button
            onClick={navigateToProducts}
            className="text-[var(--foreground)] mt-4 md:mt-8 lg:mt-12 w-[75px] sm:w-[150px] md:w-[200px] lg:w-[300px] bg-white font-bold py-1 sm:py-2 md:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg text-sm sm:text-base md:text-lg lg:text-2xl"
          >
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
              return `<span class="${className} w-6 h-1 bg-gray-500 rounded-md mx-1 inline-block"></span>`;
            },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full relative rounded-lg"
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {adImages.map((src, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center h-full justify-between mb-10">
              <img src={src} alt={`Ad ${index + 1}`} className="w-full object-cover rounded-lg" />
              <div className="w-full flex justify-center mt-4">
              <button
            onClick={navigateToProducts}
            className="bg-[var(--foreground)]  w-[150px] md:w-[200px] lg:w-[300px] text-white font-bold py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg text-sm sm:text-base md:text-lg lg:text-2xl"
          >
            عرض المنتجات
          </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

  <div className="w-full bg-white flex flex-col">
    {/* Loader for categories */}
    {categoriesLoading || productsLoaing ? (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress size={80} thickness={5} color="primary" />
      </div>
    ) : (
      <>
        {/* Main content when data is loaded */}
      

        <section className="w-full">
          <Categories categories={categories} products={products} />
        </section>
      </>
    )}
  </div>
  </div>
  );
}
