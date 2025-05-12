import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/store/slices/categoriesSlice";
import { fetchProducts } from "../redux/store/slices/productsSlice";
import { RootState, AppDispatch } from "../redux/store/store";
import Categories from "@/components/categories";
import Category from "../components/category"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CircularProgress } from "@mui/material";
import { useLanguage } from "./languageContext";

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
  const { translations, direction } = useLanguage();

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

     

      <section className="w-full">
         <div className="w-auto flex flex-col items-center justify-center my-3 mb-2">
           <h1 className="text-center text-white text-xl sm:text-2xl md:text-3xl flex items-center lg:text-4xl xl:text-6xl font-extrabold mb-2">
           <div className="h-1 bg-white w-[65px] mr-3"></div>  {translations.categories}<div className="h-1 bg-white w-[65px] ml-3"></div>
           </h1>
         </div>
         {categoriesLoading ? <p>Loading Categories...</p> : <Categories categories={categories}/>}
       </section>
       <section className="w-full">
       
 
       {/* Pass filtered products to Category component */}
       <Category categories={categories} products={products} />
    
 
 </section>    
 
     </div>
   );
 }
  