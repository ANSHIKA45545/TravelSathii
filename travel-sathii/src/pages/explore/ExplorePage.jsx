import React, { useState } from "react";
import Hotels from "./Hotels";
import Guides from "./Guides";
import Flights from "./Flights";
import Monuments from "./Monuments";
import { FilterSidebar } from "./FilterSection";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("hotels");
  const [filters, setFilters] = useState({
    rating: "",
    price: "",
    location: "",
    sort: "recommended",
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 px-4 md:px-12 py-10">
      {/* Sidebar */}
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <main className="flex-1 md:ml-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {["hotels", "flights", "guides", "monuments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === "hotels" && <Hotels filters={filters} />}
          {activeTab === "flights" && <Flights filters={filters} />}
          {activeTab === "guides" && <Guides filters={filters} />}
          {activeTab === "monuments" && <Monuments filters={filters} />}
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
