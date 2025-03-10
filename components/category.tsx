import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./productCard";
import { useRouter } from "next/router";

interface Product {
  _id: string;
  name: string;
  image: string;
  categoryId: string;
}

interface Category {
  _id: string;
  name: string;
}

interface CategoriesProps {
  categories: Category[];
  products: Product[];
}

const Categories: React.FC<CategoriesProps> = ({ categories, products }) => {
  const router = useRouter();

  return (
    <div className="h-auto w-full ">
      {categories.map((category) => {
        // Filter products by category
        const filteredProducts = products.filter(
          (product) => product.categoryId === category._id
        );

        // Generate unique navigation class names
        const prevBtnClass = `custom-prev-${category._id}`;
        const nextBtnClass = `custom-next-${category._id}`;

        return (
          <div key={category._id} className="mb-10 ">
            <h3 className="text-4xl font-semibold justify-center  flex items-center text-white text-center mb-5 mt-2">
              
          <div className="h-1 bg-white w-[50px] mr-3"></div>  {category.name}<div className="h-1 bg-white w-[50px] ml-3"></div>
            </h3>
            {/* Swiper Container */}
            <div className="relative mx-4">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: `.${nextBtnClass}`,
                  prevEl: `.${prevBtnClass}`,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
        
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {filteredProducts.map((product) => (
                  <SwiperSlide key={product._id}>
                    <ProductCard
                      title={product.name}
                      imageUrl={product.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Unique Navigation Buttons */}
              <button
                className={`${prevBtnClass} absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10`}
              >
                <FaArrowLeft className="text-black text-xl" />
              </button>

              <button
                className={`${nextBtnClass} absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10`}
              >
                <FaArrowRight className="text-black text-xl" />
              </button>
            </div>
          <div className="flex justify-center w-full mt-5">
            <button
            onClick={() => router.push(`/productsList/?category=${category._id}`)}
            className="text-[var(--foreground)] m-auto w-[200px] lg:w-[300px] bg-white font-bold py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg text-sm sm:text-base md:text-lg lg:text-2xl"
          >
            عرض جميع المنتجات
          </button>
          </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Categories;
