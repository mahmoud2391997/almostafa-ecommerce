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
  return (
    <div
      className=" w-full h-full border-2 m-auto
     border-blue "
    >
      <div className="w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-3/5 border-b-2 border-blue"
        />
        <h3 className="text-center font-bold text-2xl my-4">{title}</h3>
        <h3 className="text-center font-bold text-2xl my-4">{Id}</h3>
        <p className="text-center text-xl">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
