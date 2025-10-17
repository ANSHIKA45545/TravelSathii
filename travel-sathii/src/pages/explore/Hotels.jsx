import React, { useState } from "react";

const hotels = [
  {
    name: "Taj Palace",
    location: "New Delhi",
    price: "₹12,000/night",
    rating: 4.8,
    phone: "+91 9876543210",
    reviews: [5, 4, 5, 4, 5],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    name: "The Leela",
    location: "Goa",
    price: "₹9,000/night",
    rating: 4.6,
    phone: "+91 9123456789",
    reviews: [5, 4, 4, 5, 4],
    image: "https://images.unsplash.com/photo-1576671081837-49000212a66d",
  },
  {
    name: "Radisson Blu",
    location: "Jaipur",
    price: "₹7,500/night",
    rating: 4.4,
    phone: "+91 9988776655",
    reviews: [4, 4, 5, 4, 3],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    name: "Marriott Resort",
    location: "Kerala",
    price: "₹8,200/night",
    rating: 4.7,
    phone: "+91 9871122334",
    reviews: [5, 5, 4, 4, 5],
    image: "https://images.unsplash.com/photo-1559599189-95f32d0b04fa",
  },
];

const Hotels = () => {
  const [plan, setPlan] = useState([]);

  const addToPlan = (hotel) => {
    if (!plan.find((p) => p.name === hotel.name)) {
      setPlan([...plan, hotel]);
      alert(`${hotel.name} added to your plan!`);
    }
  };

  const removeFromPlan = (hotel) => {
    setPlan(plan.filter((p) => p.name !== hotel.name));
    alert(`${hotel.name} removed from your plan.`);
  };

  const avgRating = (reviews) => (
    reviews.reduce((a, b) => a + b, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />

          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
            <p className="text-gray-600 mt-1">📍 {hotel.location}</p>
            <p className="text-gray-700 mt-2 font-medium">{hotel.price}</p>
            <p className="text-yellow-500 mt-2 font-semibold">
              ⭐ {avgRating(hotel.reviews)} ({hotel.reviews.length} reviews)
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <a href={`tel:${hotel.phone}`} className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition">
                Contact
              </a>
              <button onClick={() => addToPlan(hotel)} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                Add to Plan
              </button>
              <button onClick={() => removeFromPlan(hotel)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
