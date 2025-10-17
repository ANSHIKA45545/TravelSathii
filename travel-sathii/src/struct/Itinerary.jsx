import { useLocation } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";

const ItineraryPage = () => {
  const { state } = useLocation();
  const { destination, duration, budget, people } = state || {};
  const [schedule, setSchedule] = useState([
    { time: "5:00 AM", activity: "Watch sunrise 🌅" },
    { time: "9:00 AM", activity: "Breakfast at hotel 🍳" },
    { time: "11:00 AM", activity: "Explore monuments 🏰" },
    { time: "6:00 PM", activity: "Evening shopping & dinner 🍽️" },
  ]);

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text(`Trip Itinerary to ${destination}`, 10, 10);
    pdf.text(`Duration: ${duration}`, 10, 20);
    pdf.text(`Budget: ${budget}`, 10, 30);
    pdf.text(`People: ${people}`, 10, 40);
    schedule.forEach((item, i) =>
      pdf.text(`${item.time} - ${item.activity}`, 10, 60 + i * 10)
    );
    pdf.save("Trip_Itinerary.pdf");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        🗺️ Your Trip to {destination}
      </h2>
      <p className="text-gray-600 mb-2">
        <b>Duration:</b> {duration} | <b>Budget:</b> {budget} | <b>People:</b> {people}
      </p>

      <div className="mt-6 space-y-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-3 flex justify-between">
            <input
              value={item.time}
              onChange={(e) => {
                const newSch = [...schedule];
                newSch[idx].time = e.target.value;
                setSchedule(newSch);
              }}
              className="border-none outline-none w-24"
            />
            <input
              value={item.activity}
              onChange={(e) => {
                const newSch = [...schedule];
                newSch[idx].activity = e.target.value;
                setSchedule(newSch);
              }}
              className="border-none outline-none flex-1 ml-2"
            />
          </div>
        ))}
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Download Itinerary PDF
      </button>
    </div>
  );
};

export default ItineraryPage;
