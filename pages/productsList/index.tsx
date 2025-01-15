"use client";
import ProductCard from "@/components/productCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from "../languageContext";

export default function DairyDerivatives() {
  const router = useRouter();
  const { query } = router;
    const { translations ,direction} = useLanguage(); // Ensure direction is provided by useLanguage

  const [searchItem, setSearchItem] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default to 4 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);

  const categories = ["Cheddar", "Mozzarella", "Rumi", "Bufflo Cheese"];
   const dairyProducts = 
  [
    { id: 2, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 5, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 8, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 3, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 6, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 9, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 4, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 7, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 20, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 21, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 51, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 81, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 31, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 61, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 91, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 41, name: "Cheese", type: "Mozzarella", price: 5.0, image: "mozzarella.jpg" },
    { id: 17, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 22, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheddar.jpg" },
    { id: 42, name: "Cheese", type: "Rumi", price: 5.0, image: "rumi.jpg" },
    { id: 222, name: "Cheese", type: "Bufflo Cheese", price: 5.0, image: "cheddar.jpg" },
    { id: 234, name: "Cheese", type: "Bufflo Cheese", price: 5.0, image: "mozzarella.jpg" },
    { id: 90, name: "Cheese", type: "Bufflo Cheese", price: 5.0, image: "rumi.jpg" },
    { id: 28, name: "Cheese", type: "Bufflo Cheese", price: 5.0, image: "cheddar.jpg" },
  ]
  

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setItemsPerPage(8); // XL screens
      } else if (width >= 640) {
        setItemsPerPage(6); // LG screens
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);




  const handleCheckboxChange = (type: string) => {
    setFilteredCategory((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setCurrentPage(1)
  };

  
  useEffect(() => {
    if (query && query.category && categories.includes(query.category as string)) {
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
  
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbersToShow = 3;
  const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
    {currentItems.map((product) => (
      <ProductCard
        key={product.id}
        Id={product.id}
        title={product.name}
        price={product.price}
        imageUrl={"/image copy.png"}
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
        className={`p-2 border border-[var(--foreground)] ${direction === "rtl" ? "placeholder:text-right" : "placeholder:text-left"} rounded-md flex-1`}
      />
    </div>
    <section className="w-full min-h-10 bg-transparent h-auto rounded-lg py-3 border border-[var(--foreground)]">
      <h2 className={`text-[var(--foreground)]   mx-5 font-bold text-3xl  ${direction === "rtl" ? "text-right" : "text-left"}` }>{translations.categories}</h2>
      <div className="flex flex-col text-[var(--foreground)] items-start mt-4 my-2 px-3">
        {categories.map((category) => (
          <div key={category} className={`mb-4 text-2xl w-full`}>
            <label className={`flex items-center justify-start ${direction === "rtl" ? "flex-row-reverse " :null }`}>
              <input
                type="checkbox"
                className="mx-2"
                checked={filteredCategory.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <span className="text-[var(--foreground)] font-bold text-xl">{category}</span>
            </label>
          </div>
        ))}
      </div>
    </section>
    <div className="justify-center mt-6 mx-auto w-full lg:flex">
      <ul className="flex space-x-3 items-center">
        <li
          onClick={prevPage}
          className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
          ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[var(--foreground)] hover:bg-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </li>
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => paginate(page)}
            className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
          ${
            currentPage === page
              ? "bg-gray-600"
              : "bg-[var(--foreground)] hover:bg-gray-700"
          }`}
          >
            {page}
          </li>
        ))}
        <li
          onClick={nextPage}
          className={`cursor-pointer text-white py-2 px-4 rounded-lg transition-colors 
          ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[var(--foreground)] hover:bg-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    </div>
  </div>
</main>
  </div>
  );
}

