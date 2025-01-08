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
    { id: 1, name: "Milk", price: 2.0, image: "milk.jpg" },
    { id: 2, name: "Cheese", price: 5.0, image: "cheese.jpg" },
    { id: 3, name: "Yogurt", price: 3.0, image: "yogurt.jpg" },
    { id: 4, name: "Milk", price: 2.0, image: "milk.jpg" },
    { id: 5, name: "Cheese", price: 5.0, image: "cheese.jpg" },
    { id: 6, name: "Yogurt", price: 3.0, image: "yogurt.jpg" },
    { id: 7, name: "Milk", price: 2.0, image: "milk.jpg" },
    { id: 8, name: "Cheese", price: 5.0, image: "cheese.jpg" },
    { id: 9, name: "Yogurt", price: 3.0, image: "yogurt.jpg" },
  ];
  return (
    <div className="w-full">
      <section className="w-full h-[85vh] flex flex-row-reverse">
        <div className="w-3/4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full gap-10">
            {dairyProducts.map((product: ProductCardProps) => (
              <ProductCard
                key={product.id}
                Id={product.id}
                title={product.name}
                price={product.price}
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
