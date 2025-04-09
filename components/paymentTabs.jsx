import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutComp from "../pages/payment/checkout/index";
import PaymentMethod from "./paymentMethod";
const tabs = [
  { name: "Vodafone Cash Or Instapay", key: "marketing" },
    { name: "Other Payment Method", key: "customer" },
];

export default function Tabs({packageDetails,offerIndex}) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className="sm:p-6 min-h-screen mt-10">

      {/* Tab Navigation */}
      <div className="relative flex w-full justify-center flex-row px-3 gap-x-4 md:space-x-6 mb-6 overflow-x-auto">
  {tabs.map((tab) => (
    <button
      key={tab.key}
      className={`relative py-2 px-1 md:px-2 lg:px-2 text-base sm:text-2xl md:text-3xl lg:text-4xl md:font-medium transition-all duration-300 
        ${activeTab === tab.key ? "text-black font-semibold" : "text-gray-600 hover:text-gray-900"}
      `}
      onClick={() => setActiveTab(tab.key)}
    >
      {tab.name}
      {activeTab === tab.key && (
        <motion.div
          layoutId="active-tab"
          className="absolute left-0 right-0 bottom-0 h-1 bg-black rounded-full"
        />
      )}
    </button>
  ))}
</div>


      {/* Tab Content with animation */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {activeTab === "marketing" && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
  <main className="w-full grid my-5 gap-5  lg:grid-cols-2 grid-cols-1 ">
            <PaymentMethod type="vodafone" />
            <PaymentMethod type="instapay" />
          </main>
            </motion.div>
          )}

          {activeTab === "customer" && (
            <motion.div
              key="customer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
         <CheckoutComp packageDetails={packageDetails} offerIndex={offerIndex}/>

            </motion.div>
          )}

          
        </AnimatePresence>
      </div>
    </div>
  );
}
