"use client";
import ProductCard from "@/components/productCard";
import { useState, useEffect } from "react";

export default function DairyDerivatives() {
  const [searchItem, setSearchItem] = useState("");
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState<string[]>([]);

  const categories = [
    {
      name: "Milk-Based",
      types: ["Whole Milk", "Skim Milk", "Flavored Milk"],
    },
    {
      name: "Cheese",
      types: ["Cheddar", "Mozzarella", "Swiss"],
    },
    {
      name: "Yogurt",
      types: ["Greek", "Regular", "Flavored"],
    },
  ];

  const dairyProducts = [
    { id: 1, name: "Milk", type: "Whole Milk", price: 2.0, image: "milk.jpg" },
    { id: 2, name: "Cheese", type: "Cheddar", price: 5.0, image: "cheese.jpg" },
    { id: 3, name: "Yogurt", type: "Greek", price: 3.0, image: "yogurt.jpg" },
    { id: 4, name: "Milk", type: "Skim Milk", price: 2.0, image: "milk.jpg" },
    { id: 5, name: "Cheese", type: "Mozzarella", price: 5.0, image: "cheese.jpg" },
    { id: 6, name: "Yogurt", type: "Regular", price: 3.0, image: "yogurt.jpg" },
    { id: 7, name: "Milk", type: "Flavored Milk", price: 2.0, image: "milk.jpg" },
    { id: 8, name: "Cheese", type: "Swiss", price: 5.0, image: "cheese.jpg" },
    { id: 9, name: "Yogurt", type: "Flavored", price: 3.0, image: "yogurt.jpg" },
    { id: 10, name: "Cheese", type: "Mozzarella", price: 5.0, image: "cheese.jpg" },
    { id: 11, name: "Yogurt", type: "Regular", price: 3.0, image: "yogurt.jpg" },
    { id: 12, name: "Milk", type: "Flavored Milk", price: 2.0, image: "milk.jpg" },
    { id: 13, name: "Cheese", type: "Swiss", price: 5.0, image: "cheese.jpg" },
    { id: 14, name: "Yogurt", type: "Flavored", price: 3.0, image: "yogurt.jpg" },
  ];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentPage(1);
    if (e.target.checked) {
      setFilteredCategory((prev) => [...prev, value]);
    } else {
      setFilteredCategory((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const style = isLargeScreen ? { width: "calc(100% - 320px)" } : {};

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
  const startPage = Math.max(
    1,
    currentPage - Math.floor(pageNumbersToShow / 2)
  );
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="pt-[187.61px] px-[2.5%]  ">
      <div className="w-auto h-[10vh] flex flex-col items-center justify-center my-6 mt-0">
        <h1 className="text-center text-[var(--foreground)] font-extrabold text-6xl mb-2">
          Products List
        </h1>
        <img src="/title.png" className="w-[360px]" />
      </div>
      <main className="w-full  relative max-h-[65vh] flex gap-7 flex-col-reverse lg:flex-row">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 gap-[30px] overflow-y-scroll">
          {currentItems.map((product) => (
            <ProductCard
              key={product.id}
              Id={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.image}
            />
          ))}
        </div>
        <div className="static w-1/5 right-0 flex flex-col justify-start h-auto lg:items-end items-center">
          <div className="flex items-center w-full space-x-4 p-4 bg-[var(--foreground)] rounded-lg mb-4">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              type="text"
              placeholder="Search Dairy Derivatives..."
              className="p-2 border border-gray-300 rounded-md flex-1"
            />
          </div>
          <section className="w-full min-h-10 bg-[var(--foreground)] h-auto rounded-lg py-3">
            <h2 className="text-white text-left ml-5 font-bold text-2xl">TYPES</h2>
            <div className="flex flex-col text-white items-start ml-5 my-2">
              {categories.map((category) =>
                category.types.map((type) => (
                  <label
                    className="text-white font-bold text-xl w-full text-left"
                    key={type}
                  >
                    <input
                      type="checkbox"
                      value={type}
                      className="mr-2"
                      checked={filteredCategory.includes(type)}
                      onChange={handleCheckboxChange}
                    />
                    {category.name} - {type}
                  </label>
                ))
              )}
            </div>
          </section>
          <div className="justify-center mt-6 hidden m-auto w-full lg:flex">
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
                Previous
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
                Next
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
