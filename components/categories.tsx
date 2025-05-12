import { useRouter } from "next/router";
 import React from "react";
 
 import { useLanguage } from "@/pages/languageContext";
 interface Category {
   _id: string;
   name: string;
   image: string;
 }
 
 interface CategoriesProps {
   categories: Category[];
 }
 
 const Categories: React.FC<CategoriesProps> = ({ categories }) => {
   const { translations } = useLanguage(); // Ensure direction is provided by useLanguage
   const router = useRouter();
 function navigateToProducts(category : string) { 
   router.push(`/productsList/?category=${category}`);
 }
   return (
     <div className="categories p-6 w-full">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
         {categories.map((category) => (
           <div
             key={category.name}
            
             className="w-full   p-4 min-h-[40vh] cursor-pointer "
             onClick={() => navigateToProducts(category._id)}
           >
             <div className="bg-white h-full flex flex-col justify-between border-blue rounded-2xl border border-[white] overflow-y-hidden">
               <div className="flex justify-center items-center h-4/5 w-full border rounded-2xl border-[var(--foreground)]">
                 <img
                   src={category.image}
                   alt={category.name}
                   className="  object-cover rounded-2xl "
                 />
               </div>
 
               <div className="w-full flex flex-col bg-transparent  h-1/5 rounded-xl  justify-evenly items-center min-h-[78px]">
                 <h3 className="text-center  text-[var(--foreground)]  h-10 my-auto pt-1   font-bold text-2xl">
                   {category.name}
                 </h3>
                   <button
                     className=" text-white mb-1 bg-[var(--foreground)] py-1 px-4 rounded"
                   >
                     {translations.viewProducts}
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