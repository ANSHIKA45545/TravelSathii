import React from "react";
import { FilterSidebar } from "./FilterSection";

const HotelsPage = () => {
  const hotels = [
    { name: "The Taj Mahal Palace", rating: 5, price: "₹12,000/night", location: "Mumbai" },
    { name: "The Oberoi", rating: 4, price: "₹9,000/night", location: "Delhi" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">🏨 Hotels</h1>
      <FilterSidebar />

      <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {hotels.map((hotel, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h2>
            <p className="text-gray-600">⭐ {hotel.rating} stars</p>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="font-bold text-blue-700 mt-2">{hotel.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
