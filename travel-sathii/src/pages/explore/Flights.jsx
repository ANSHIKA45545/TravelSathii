import React, { useState } from "react";

const flights = [
  {
    airline: "IndiGo",
    flightNo: "6E-542",
    from: "Delhi",
    to: "Mumbai",
    time: "10:00 AM - 12:15 PM",
    duration: "2h 15m",
    price: "₹5,200",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    airline: "Air India",
    flightNo: "AI-201",
    from: "Mumbai",
    to: "Goa",
    time: "2:30 PM - 3:50 PM",
    duration: "1h 20m",
    price: "₹4,000",
    image: "https://images.unsplash.com/photo-1516442719524-a603408c90cb",
  },
  {
    airline: "Vistara",
    flightNo: "UK-879",
    from: "Delhi",
    to: "Bangalore",
    time: "6:00 AM - 8:40 AM",
    duration: "2h 40m",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
  },
];

const Flights = () => {
  const [plan, setPlan] = useState([]);

  const addToPlan = (flight) => {
    if (!plan.find((p) => p.flightNo === flight.flightNo)) {
      setPlan([...plan, flight]);
      alert(`${flight.airline} ${flight.flightNo} added to your plan!`);
    }
  };

  const removeFromPlan = (flight) => {
    setPlan(plan.filter((p) => p.flightNo !== flight.flightNo));
    alert(`${flight.airline} ${flight.flightNo} removed from your plan.`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {flights.map((flight, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src={flight.image} alt={flight.airline} className="w-full h-48 object-cover" />

          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{flight.airline}</h3>
            <p className="text-gray-600">✈️ {flight.flightNo}</p>
            <p className="mt-2 text-gray-700 font-medium">{flight.from} → {flight.to}</p>
            <p className="text-sm text-gray-500">{flight.time}</p>
            <p className="text-sm text-gray-500 mb-1">Duration: {flight.duration}</p>
            <p className="text-blue-600 font-semibold">{flight.price}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              <button onClick={() => addToPlan(flight)} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                Add to Plan
              </button>
              <button onClick={() => removeFromPlan(flight)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flights;
