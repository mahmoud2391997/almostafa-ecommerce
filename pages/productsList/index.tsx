"use client";
import ProductCard from "@/components/productCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useLanguage } from "../languageContext";

export default function DairyDerivatives() {
  const router = useRouter();
  const { query } = router;
  const { translations, direction } = useLanguage(); // Ensure direction is provided by useLanguage

  const [searchItem, setSearchItem] = useState("");
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);

  const categories = ["مسلي طبيعي", "جبن مستورد", "جبن طبيعي"];
  const dairyProducts = [
    {
      id: 2,
      name: "كريمي شيدر",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.15%20Background%20Removed.22.png?alt=media&token=8d330e2b-e3f7-40e4-bc59-ebc900325e8f",
    },
    {
      id: 1,
      name: "كريمي رومي",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26%20Background%20Removed.51.png?alt=media&token=6699d89e-659e-4170-959b-fc299640c783",
    },

    {
      id: 9,
      name: "كريمي قشطة",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26.51%20(1)%20Background%20Removed.png?alt=media&token=d7d4ecbd-d390-406b-bb55-92366ec80a59",
    },
    {
      id: 4,
      name: "جبنة بالقشطة",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26.51%20(2)%20Background%20Removed.png?alt=media&token=db855ccb-d67c-4788-80cc-58daaaaa18a5",
    },
    {
      id: 22,
      name: "جبنة شيدر مطبوخ",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/cheeder.png?alt=media&token=a8d2cf87-e18a-41d8-85e5-862b355ef5f2",
    },
    {
      id: 3,
      name: "جبنة فيتا",
      type: "جبن طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26%20Background%20Removed.52.png?alt=media&token=b376df24-e872-4429-ba40-10e9d9194229",
    },
    {
      id: 20,
      name: "جبنة ملح خفيف",
      type: "جبن طبيعي",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26.51%20(3)%20Background%20Removed.png?alt=media&token=7a92616a-9612-44b1-8b2a-15993ff62ea7",
    },
    {
      id: 29,
      name: "جبنة براميلي",
      type: "جبن طبيعي",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26.52%20(1)%20Background%20Removed.png?alt=media&token=09922861-ad4e-48e0-9fa7-0df23707bdc9",
    },
    {
      id: 21,
      name: "جبنة براميلي فلفل",
      type: "جبن طبيعي",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.26.52%20(2)%20Background%20Removed.png?alt=media&token=8e99e23a-2674-415c-badd-1a05250a99dc",
    },

    {
      id: 91,
      name: "جبنة فلمنك هولندي",
      type: "جبن مستورد",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2013.57%20Background%20Removed.55.png?alt=media&token=487e9c82-7320-4fad-95e4-6895041555cf",
    },
    {
      id: 61,
      name: "جبن جودة هولندي",
      type: "جبن مستورد",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/falmang.png?alt=media&token=ed372c3d-e724-45c7-927c-dad4ef4b5e25",
    },
    {
      id: 331,
      name: "جبن شيدر ايرلندي",
      type: "جبن مستورد",

      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2014.05%20Background%20Removed.24.png?alt=media&token=1549a0c1-fa97-4874-8ee1-0d189767a807",
    },
    {
      id: 27,
      name: "مسلي بقري بلدي نقي",
      type: "مسلي طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/WhatsApp%20Image%202025-01-23%20at%2001.59.31.jpeg?alt=media&token=d02765b1-26cb-4fc0-9c11-1445b71b29b5",
    },
    {
      id: 36,
      name: "مسلي جاموسي بلدي نقي",
      type: "مسلي طبيعي",
      price: 5.0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/canteen-e3751.appspot.com/o/052E7352-F676-4669-845F-1937582E3996_1_201_a.jpeg?alt=media&token=8b8ff391-d9d8-4bee-877f-96beeb90fb6e",
    },
  ];

  const handleCheckboxChange = (type: string) => {
    setFilteredCategory((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  useEffect(() => {
    if (
      query &&
      query.category &&
      categories.includes(query.category as string)
    ) {
      setFilteredCategory([query.category as string]);
    } else {
      setFilteredCategory([]); // Show all categories if query is not valid
    }
  }, [query]);

  const filteredItems = dairyProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase()) &&
      (filteredCategory.length === 0 || filteredCategory.includes(item.type))
  );

  return (
    <div className=" px-[1%] responsive-height  xl:px-[2.5%]">
      <div className="w-auto h-[15vh] flex flex-col items-center justify-center my-3 md:my-6 mt-0 ">
        <h1 className="text-center text-[var(--foreground)] font-extrabold text-4xl md:text-6xl mb-2">
          {translations.productsList}
        </h1>
        <img src="/title.png" className="w-[360px]" />
      </div>
      <main className="w-full relative h-auto flex gap-7 flex-col-reverse md:flex-row">
        <div className="grid p-3 border rounded-lg border-[var(--foreground)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-5/6 lg:w-3/4 md:w-2/3 h-auto w-full gap-[30px]">
          {filteredItems.map((product) => (
            <ProductCard
              key={product.id}
              Id={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.image}
            />
          ))}
        </div>
        <div className=" xl:w-1/6 lg:w-1/4 md:w-1/3 w-full right-0 flex flex-col justify-start h-auto lg:items-end items-center">
          <div className="flex items-center border-2 border-[var(--foreground)] w-full space-x-4 p-4 bg-transparent rounded-lg mb-4">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
              placeholder={translations.search}
              className={`p-2 border border-[var(--foreground)] ${
                direction === "rtl"
                  ? "placeholder:text-right"
                  : "placeholder:text-left"
              } rounded-md flex-1`}
            />
          </div>
          <section className="w-full min-h-10 bg-transparent h-auto rounded-lg py-3 border border-[var(--foreground)]">
            <h2
              className={`text-[var(--foreground)]   mx-5 font-bold text-3xl  ${
                direction === "rtl" ? "text-right" : "text-left"
              }`}
            >
              {translations.categories}
            </h2>
            <div className="flex flex-col text-[var(--foreground)] items-start mt-4 my-2 px-3">
              {categories.map((category) => (
                <div key={category} className={`mb-4 text-2xl w-full`}>
                  <label
                    className={`flex items-center justify-start ${
                      direction === "rtl" ? "flex-row-reverse " : null
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mx-2"
                      checked={filteredCategory.includes(category)}
                      onChange={() => handleCheckboxChange(category)}
                    />
                    <span className="text-[var(--foreground)] font-bold text-xl">
                      {category}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
