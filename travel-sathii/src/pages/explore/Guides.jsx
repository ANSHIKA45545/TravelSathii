import React, { useState } from "react";

const guides = [
  { 
    name: "Amit Sharma", 
    location: "Jaipur", 
    experience: "5 years", 
    language: "Hindi, English", 
    rating: 4.6, 
    phone: "+91 9876543210", 
    reviews: [5, 4, 5, 5, 4] // individual review stars
  },
  { 
    name: "Riya Patel", 
    location: "Goa", 
    experience: "3 years", 
    language: "English", 
    rating: 4.4, 
    phone: "+91 9123456780", 
    reviews: [4, 4, 5, 3, 5] 
  },
  { 
    name: "Sanjay Mehta", 
    location: "Agra", 
    experience: "7 years", 
    language: "Hindi, Spanish", 
    rating: 4.8, 
    phone: "+91 9988776655", 
    reviews: [5, 5, 5, 4, 5] 
  },
  { 
    name: "Priya Nair", 
    location: "Kerala", 
    experience: "4 years", 
    language: "English, Malayalam", 
    rating: 4.5, 
    phone: "+91 9871122334", 
    reviews: [5, 4, 4, 5, 4] 
  },
];

const Guides = () => {
  const [plan, setPlan] = useState([]);

  const addToPlan = (guide) => {
    if (!plan.find((p) => p.name === guide.name)) {
      setPlan([...plan, guide]);
      alert(`${guide.name} added to your plan!`);
    }
  };

  const removeFromPlan = (guide) => {
    setPlan(plan.filter((p) => p.name !== guide.name));
    alert(`${guide.name} removed from your plan.`);
  };

  // function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="text-yellow-400">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  // calculate average review stars
  const avgRating = (reviews) => {
    const sum = reviews.reduce((a, b) => a + b, 0);
    return sum / reviews.length;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map((guide, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          {/* Guide Photo */}
          <div className="h-52 bg-gray-300 flex items-center justify-center">
            <img 
              src={`https://i.pravatar.cc/150?img=${idx + 1}`} 
              alt={guide.name} 
              className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Guide Info */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{guide.name}</h3>
            <p className="text-gray-600 mt-1">📍 {guide.location}</p>
            <p className="text-gray-700 mt-2 font-medium">Experience: {guide.experience}</p>
            <p className="text-gray-600 mt-1">Languages: {guide.language}</p>
            
            {/* Rating */}
            <div className="flex items-center mt-2">
              {renderStars(avgRating(guide.reviews))}
              <span className="text-gray-600 ml-2 text-sm">({guide.reviews.length} reviews)</span>
            </div>

            {/* Contact Number */}
            <p className="text-green-600 font-semibold mt-2">📞 {guide.phone}</p>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() => alert(`Reviews:\n${guide.reviews.join("\n")}`)}
                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                See Reviews
              </button>
              <button
                onClick={() => addToPlan(guide)}
                className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition"
              >
                Add to Plan
              </button>
              <button
                onClick={() => removeFromPlan(guide)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guides;
