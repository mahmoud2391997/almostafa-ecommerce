import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Categoryy from "./category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

interface Category {
  _id: string;
  name: string;
  image: string;
}

interface Product {
  _id: string;
  name: string;
  image: string;
  categoryId: string;
}

interface CategoriesProps {
  categories: Category[];
  products: Product[];
}

const Categories: React.FC<CategoriesProps> = ({ categories, products }) => {
  const [activeTab, setActiveTab] = useState(categories[0]?._id || "");
  const swiperRef = useRef<SwiperType | null>(null); // Correct Swiper instance type

  const filteredProducts = (categoryId: string) =>
    products.filter((product) => product.categoryId === categoryId);

  return (
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <div className="relative !overflow-visible flex w-full justify-center flex-row gap-x-4 md:space-x-6 mb-6 overflow-x-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="flex md:hidden items-center justify-center text-[var(--foreground)] hover:text-black transition-colors"
          aria-label="Previous categories"
        >
          <FaChevronLeft size={24} />
        </button>
        
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Navigation]} // Add Navigation module
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-6 h-1 bg-gray-500 rounded-md mx-1 inline-block"></span>`;
            },
          }}
          className="w-full relative rounded-lg"
          
          dir={"rtl"}
        >
          {categories.map((category) => (
            <SwiperSlide 
              key={category._id} 
              className="!w-auto flex justify-center items-center"
            >
              <div className="relative flex justify-center items-center px-5">
                <button
                  className={clsx(
                    "relative py-2 px-3 md:px-4 lg:px-4 text-base sm:text-lg md:text-xl lg:text-xl font-medium transition-colors duration-200 whitespace-nowrap",
                    activeTab === category._id 
                      ? "text-black font-semibold underline underline-offset-8 decoration-[var(--foreground)] decoration-2" 
                      : "text-[var(--foreground)] hover:text-black"
                  )}
                  onClick={() => setActiveTab(category._id)}
                  aria-selected={activeTab === category._id}
                >
                  {category.name}

                  {activeTab === category._id && (
                    <motion.div
                      layoutId={`active-tab-${category._id}`}
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-black"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex md:hidden items-center justify-center text-[var(--foreground)] hover:text-black transition-colors"
          aria-label="Next categories"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Tab Content with animation */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {categories.map((category) =>
            activeTab === category._id ? (
              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Categoryy products={filteredProducts(category._id)} />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Categories;