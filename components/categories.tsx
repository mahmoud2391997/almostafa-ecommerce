import { useLanguage } from "@/pages/languageContext";
import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    name: "جبن ابيض و فيتا",
    image:
      "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/175013B4-A2A0-48D6-8F88-4D76A58B5AD5_1_201_a.jpeg?alt=media&token=46863e57-87f7-4dcc-a84c-016bccb167c8",
  },
  {
    id: 2,
    name: "جبن كريمي",
    image:
      "https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/469126323_122128603778477280_4571148668253336535_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6HKkAq0KVIkQ7kNvgEqjEzN&_nc_oc=AdjoVLNCFnyHKDkMZ_XVK0QqidLVtwTYLU4aJyW3KYqrrj1PRJ7iZdCBCyu5AUPLLQk&_nc_zt=23&_nc_ht=scontent.fcai19-1.fna&_nc_gid=AHR5QX-QvB6Lzm1OOgigk01&oh=00_AYDcIpM-qi83eUmL8aEkbZB4zL1hE3PvejGN6PGQw7edAw&oe=6797CF90",
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

  return (
    <div className="categories p-6 w-full">
      <div className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <div
            key={category.name}
            className="w-full  sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 min-h-[40vh]"
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
                <Link href={`/productsList/?category=${category.name}`}>
                  <button
                    onClick={() => {}}
                    className=" text-white mb-1 bg-[var(--foreground)] py-1 px-4 rounded"
                  >
                    {translations.viewProducts}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
