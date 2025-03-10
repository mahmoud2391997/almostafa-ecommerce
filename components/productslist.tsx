import React from "react";
import ProductCard from "@/components/productCard";

function productslist() {
  interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  const dairyProducts = [
    { id: 2, name: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },

    { id: 5, name: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 8, name: "Cheddar", price: 5.0, image: "cheddar.jpg" },
  ];
  
  console.log(dairyProducts);
  
  return (
    <div className="w-full">
      <section className="w-full h-[85vh] flex flex-row-reverse">
        <div className="w-3/4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-10">
            {dairyProducts.map((product: ProductCardProps) => (
              <ProductCard
                key={product.id}
                title={product.name}
                imageUrl={product.image}
              />
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center space-x-4 p-4 bg-blue rounded-lg mb-4">
            <input
              type="text"
              placeholder="Search What To Watch..."
              className="p-2 border border-gray-300 rounded-md flex-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default productslist;
