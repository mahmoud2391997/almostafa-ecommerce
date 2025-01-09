import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Cheese",
    image:
      "https://www.bobbos.uk/cdn/shop/products/RoomiCheese_300x@2x.jpg?v=1617973600",
  },
  { id: 2, name: "Butter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9tV69g9FFoJXwGK7Gc_8WMP4dfYa72iRPg&s" },
  {
    id: 3,
    name: "Cheese",
    image:
      "https://www.bobbos.uk/cdn/shop/products/RoomiCheese_300x@2x.jpg?v=1617973600",
  },
  { id: 4, name: "Butter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9tV69g9FFoJXwGK7Gc_8WMP4dfYa72iRPg&s" },
];

const Categories: React.FC = () => {
  return (
    <div className="categories p-6 w-full">
      <div className="flex flex-wrap justify-between">
        {categories.map((category) => (
     
            <div className="w-full  sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 min-h-[40vh]"><div className=" h-full flex flex-col justify-between border-blue pt-4 rounded-2xl border border-[var(--foreground)]">
            <div className="w-full flex justify-center items-center h-3/4 mb-4">
            <img
              src={category.image}
              alt={category.name}
              className="  object-cover  " />

            </div>

          <div className="w-full flex flex-col bg-[var(--foreground)] h-1/5 rounded-xl  justify-evenly items-center">
            <h3 className="text-center  text-white h-10 my-auto pt-1   font-bold text-2xl">
              {category.name}

            </h3>

              <button onClick={()=>{}} className=" bg-white mb-1 text-[var(--foreground)] py-1 px-4 rounded">
                View Products
              </button>
          </div>
           </div>
           </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
