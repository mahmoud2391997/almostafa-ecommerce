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
      className="  sm:h-[40vh] rounded-xl  border m-auto flex flex-col justify-between
     border-[var(--foreground)] "
    >
      <div className="h-3/4 flex justify-center items-center p-1">
               <img
          src={"/image copy.png"}
          alt={title}
          className="object-contain"
          />
          </div> 
        <div className=" h-1/4 text-[var(--foreground)] bg-transparent   rounded-xl flex flex-col justify-evenly items-center border-t border-[var(--foreground)]">   

                <h3 className="text-center font-bold text-xl ">{title}</h3>
        <h3 className="text-center font-bold text-xl ">Code : {Id}</h3>
        <p className="text-center font-bold text-xl">price : {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
