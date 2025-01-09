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
      className=" h-[50vh] rounded-xl  border m-auto flex flex-col justify-between
     border-[var(--foreground)] "
    >
      <div className="h-4/5 flex justify-center items-center">
               <img
          src={"/image copy.png"}
          alt={title}
          />
          </div> 
        <div className="h-1/5 text-white bg-[var(--foreground)] rounded-b-xl flex flex-col justify-evenly items-center border-t-2 border-blue">   

                <h3 className="text-center font-bold text-xl ">{title}</h3>
        <h3 className="text-center font-bold text-xl ">Code : {Id}</h3>
        <p className="text-center font-bold text-xl">price : {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
