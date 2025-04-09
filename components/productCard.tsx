import React from "react";
import {useCart} from "../pages/cartContext"
interface ProductCardProps {
  title: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl }) => {
  const {addToCart} = useCart() 

  return (
    <div className="bg-white w-full rounded-xl shadow-lg border m-auto flex flex-col justify-between border-[var(--foreground)]">
      <div className="h-auto w-full flex justify-center items-center p-1">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain h-full max-h-[300px] w-full"
        />
      </div>
      <div className="h-auto text-[var(--foreground)] bg-transparent rounded-xl flex flex-col justify-evenly items-center border-t border-[var(--foreground)] p-3">
        <h3 className="text-center font-bold text-base md:text-xl">{title}</h3>
        <h3 className="text-center font-semibold text-base md:text-lg">Code: 5555</h3>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => addToCart({title, imageUrl})}> 
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
