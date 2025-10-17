import React, { useState } from "react";

const monuments = [
  {
    name: "Taj Mahal",
    city: "Agra",
    description: "A symbol of love built by Mughal Emperor Shah Jahan.",
    hours: "6:00 AM – 7:00 PM",
    entryFee: "₹250",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal",
  },
  {
    name: "Hawa Mahal",
    city: "Jaipur",
    description: "Known as the Palace of Winds with 953 windows.",
    hours: "9:00 AM – 5:30 PM",
    entryFee: "₹50",
    image: "https://images.unsplash.com/photo-1583245091661-1b1b3e92c016",
    link: "https://en.wikipedia.org/wiki/Hawa_Mahal",
  },
  {
    name: "Qutub Minar",
    city: "Delhi",
    description: "A 73-meter tall victory tower built in 1193.",
    hours: "7:00 AM – 5:00 PM",
    entryFee: "₹40",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    link: "https://en.wikipedia.org/wiki/Qutb_Minar",
  },
];

const Monuments = () => {
  const [plan, setPlan] = useState([]);

  const addToPlan = (monument) => {
    if (!plan.find((p) => p.name === monument.name)) {
      setPlan([...plan, monument]);
      alert(`${monument.name} added to your plan!`);
    }
  };

  const removeFromPlan = (monument) => {
    setPlan(plan.filter((p) => p.name !== monument.name));
    alert(`${monument.name} removed from your plan.`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {monuments.map((monument, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src={monument.image} alt={monument.name} className="w-full h-48 object-cover" />

          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{monument.name}</h3>
            <p className="text-gray-600">📍 {monument.city}</p>
            <p className="text-gray-700 mt-2 line-clamp-2">{monument.description}</p>
            <p className="text-sm text-gray-500 mt-2">🕒 {monument.hours}</p>
            <p className="text-blue-600 font-semibold mt-1">🎟️ Entry Fee: {monument.entryFee}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              <a href={monument.link} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition">
                Learn More
              </a>
              <button onClick={() => addToPlan(monument)} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                Add to Plan
              </button>
              <button onClick={() => removeFromPlan(monument)} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Monuments;
