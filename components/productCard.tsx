import { useLanguage } from "@/pages/languageContext";
import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  Id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  Id,
}) => {
  const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage

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
        <h3 className="text-center font-bold text-xl ">Code : {Id}</h3>
        <p className="text-center font-bold text-xl">
          {translations.price} :{" "}
          {price + (direction === "rtl" ? " جم" : " L.E")}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
