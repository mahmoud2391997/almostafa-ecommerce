import React from "react";  
import ProductCard from "./productCard";

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
  products: Product[];
}

const Category: React.FC<CategoriesProps> = ({ products }) => {

  return (
    <div className="h-auto w-full ">
     
     

          <div  className="mb-10 ">
            <h3 className="text-4xl font-semibold justify-center  flex items-center text-white text-center mb-5 mt-2">
              
            </h3>
            {/* Swiper Container */}
            <div className="relative mx-4">
            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">  
                {products.map((product,index) => (
                    <ProductCard
                    key={index}
                      title={product.name}
                      imageUrl={product.image}
                    />
                ))}
              </div>
              </div>
          </div>
            
      
    </div>
  );
};

export default Category;
