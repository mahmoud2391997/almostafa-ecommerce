import { useLanguage } from "@/pages/languageContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { use } from "react";

const categories = [
  {
    id: 1,
    name: "جبن طبيعي",
    image:
      "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/175013B4-A2A0-48D6-8F88-4D76A58B5AD5_1_201_a.jpeg?alt=media&token=46863e57-87f7-4dcc-a84c-016bccb167c8",
  },
  {
    id: 2,
    name: "جبن مستورد",
    image:
      "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2013.57%20Background%20Removed.55.png?alt=media&token=487e9c82-7320-4fad-95e4-6895041555cf",
  },
  {
    id: 3,
    name: "مسلي طبيعي",
    image:
      "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/82E22F7E-8750-4095-ABCE-88A8B3D66413_1_201_a.jpeg?alt=media&token=b7a761d8-2153-42a7-86ba-a2f78877e5c6",
  },
];

const Categories: React.FC = () => {
  const { translations } = useLanguage(); // Ensure direction is provided by useLanguage
  const router = useRouter();
function navigateToProducts(category : string) { 
  router.push(`/productsList/?category=${category}`);
}
  return (
    <div className="categories p-6 w-full">
      <div className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <div
            key={category.name}
            className="w-full  sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 min-h-[40vh] cursor-pointer"
            onClick={() => navigateToProducts(category.name)}
          >
            <div className=" h-full flex flex-col justify-between border-blue rounded-2xl border border-[var(--foreground)] overflow-y-hidden">
              <div className="flex justify-center items-center h-4/5 w-full border-b rounded-2xl border-[var(--foreground)]">
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
