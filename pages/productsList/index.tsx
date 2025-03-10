"use client";
import ProductCard from "@/components/productCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material"; // Import CircularProgress
import { useLanguage } from "../languageContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store"; // Adjust the path to your store file

export default function DairyDerivatives() {
  const router = useRouter();
  const { query } = router;
  const { translations, direction } = useLanguage();

  const [searchItem, setSearchItem] = useState("");
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);
  const { products, loading: productsLoading } = useSelector((state: RootState) => state.products);
  const { categories, loading: categoriesLoading } = useSelector((state: RootState) => state.categories);

  const handleCheckboxChange = (type: string) => {
    setFilteredCategory((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  useEffect(() => {
    if (query?.category && categories.some((cat) => cat._id === query.category)) {
      setFilteredCategory([query.category as string]);
    } else {
      setFilteredCategory([]);
    }
  }, [query, categories]);

  const filteredItems = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase()) &&
      (filteredCategory.length === 0 || filteredCategory.includes(item.categoryId))
  );

  // **Loading Indicator**
  if (productsLoading || categoriesLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <CircularProgress size={80} thickness={4} className="text-[var(--foreground)]" />
      </div>
    );
  }

  return (
    <div className="px-[1%] responsive-height xl:px-[2.5%]">
      <div className="w-auto h-[15vh] flex flex-col items-center justify-center my-3 md:my-6 mt-0">
        <h1 className="text-center text-white flex items-center font-extrabold text-4xl md:text-6xl mb-2">
          <div className="h-1 bg-white w-[65px] mr-3"></div>  
          {translations.productsList}
          <div className="h-1 bg-white w-[65px] ml-3"></div>
        </h1>
      </div>
      <main className="w-full relative h-auto flex gap-7 flex-col-reverse md:flex-row">
        {/* Products Grid */}
        <div className="grid p-3 border rounded-lg bg-white border-[var(--foreground)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-5/6 lg:w-3/4 md:w-2/3 h-auto w-full gap-[30px]">
          {filteredItems.map((product, index) => (
            <ProductCard key={index} title={product.name} imageUrl={product.image} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="xl:w-1/6 lg:w-1/4 md:w-1/3 w-full right-0 flex flex-col justify-start h-auto lg:items-end items-center">
          <div className="flex items-center border-2 border-[var(--foreground)] w-full space-x-4 p-4 bg-white rounded-lg mb-4">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
              placeholder={translations.search}
              className={`p-2 border border-[var(--foreground)] ${
                direction === "rtl" ? "placeholder:text-right" : "placeholder:text-left"
              } rounded-md flex-1`}
            />
          </div>
          {/* Categories Filter */}
          <section className="w-full min-h-10 bg-white h-auto rounded-lg py-3 border border-[var(--foreground)]">
            <h2 className={`text-[var(--foreground)] mx-5 font-bold text-3xl ${direction === "rtl" ? "text-right" : "text-left"}`}>
              {translations.categories}
            </h2>
            <div className="flex flex-col text-[var(--foreground)] items-start mt-4 my-2 px-3">
              {categories.map((category) => (
                <div key={category._id} className="mb-4 text-2xl w-full">
                  <label className={`flex items-center justify-start ${direction === "rtl" ? "flex-row-reverse " : ""}`}>
                    <input
                      type="checkbox"
                      className="mx-2"
                      checked={filteredCategory.includes(category._id)}
                      onChange={() => handleCheckboxChange(category._id)}
                    />
                    <span className="text-[var(--foreground)] font-bold text-xl">{category.name}</span>
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
