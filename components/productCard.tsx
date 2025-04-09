import React from "react";
import {useCart} from "../pages/cartContext"
import { useLanguage } from "@/pages/languageContext";
interface ProductCardProps {
  title: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl }) => {
  const {addToCart} = useCart() 

   const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage
 const price = 10;
   return (
     <div
       className="  w-full rounded-xl  border m-auto flex flex-col justify-between
      border-[var(--foreground)] "
     >
       <div className="min-h-[300px] w-full flex justify-center items-center p-1">
         <img
           src={imageUrl}
           alt={title}
           className="object-contain h-full max-h-[300px] w-full"
         />
       </div>
       <div className=" h-1/4 text-[var(--foreground)] bg-transparent   rounded-xl flex flex-col justify-evenly items-center border-t border-[var(--foreground)]">
         <h3 className="text-center font-bold text-xl ">{title}</h3>
         <p className="text-center font-bold text-xl">
           {translations.price} :{" "}
           {price + (direction === "rtl" ? " جم" : " L.E")}{" "}
         </p>
         <button className="my-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => addToCart({title, imageUrl})}> 
          اضف الي السلة
        </button>
       </div>
     </div>
   );
 };
 
 export default ProductCard;