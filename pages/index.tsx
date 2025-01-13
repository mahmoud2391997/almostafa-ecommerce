
import Categories from "@/components/categories";


export default function Home() {
  return (
    <div className="w-full flex  flex-col relative ">
      <section className="w-full border border-[#562b2c] border-t-0 bg-white flex flex-col items-center justify-evenly h-[81.8vh] pb-[10%] text-[var(--foreground)] responsive-height rounded-b-full">
       <div className="w-auto flex flex-col items-center justify-center">
        <h1 className="text-center  font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Overview</h1>
<img src="/title.png" className="md:w-full sm:w-3/4 w-1/2 " />
       </div>
        <p className="text-center md:text-2xl sm:text-xl text-md lg:text-3xl xl:text-4xl font-bold w-2/4">
          At One Source, we are committed to revolutionizing the Food and
          Beverage industry by delivering cutting-edge solutions, innovative
          products, and unmatched service. We strive to exceed our customers&apos;
          expectations while promoting sustainability and quality in every
          aspect of our business.
        </p>
      </section>
      <section className="w-full">

      <div className="w-auto  flex flex-col items-center justify-center mb-6  mt-20">
        <h1 className="text-center text-[var(--foreground)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl   font-extrabold   mb-2">Categories</h1>
<img src="/title.png" className="w-auto " />
       </div>
      <Categories />
      </section>
    </div>
  );
}
