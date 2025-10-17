import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([
    { name: "Riya Sharma", stars: 5, review: "Planned my Goa trip perfectly within budget!" },
    { name: "Aarav Mehta", stars: 4, review: "Loved how smart the itinerary suggestions were." },
    { name: "Sneha Kapoor", stars: 5, review: "Booking and customizing was super easy!" },
    { name: "Rohit Singh", stars: 4, review: "Verified guides made travel super safe." },
    { name: "Kavya Patel", stars: 5, review: "Best AI-based planner I’ve ever used!" },
    { name: "Devansh Chauhan", stars: 4, review: "Everything worked smoothly and fast." },
    { name: "Nisha Verma", stars: 5, review: "Perfect for discovering hidden gems in India!" },
    { name: "Vikram Joshi", stars: 4, review: "Made my solo trip experience amazing!" },
    { name: "Anjali Sinha", stars: 5, review: "The recommendations were on point!" },
    { name: "Raj Malhotra", stars: 4, review: "Simple, modern and efficient travel planning." },
    { name: "Tanya Gupta", stars: 5, review: "Loved the sleek UI and smooth process!" },
    { name: "Abhay Kumar", stars: 5, review: "TravelSathii made our family trip perfect." },
  ]);

  const [currentSet, setCurrentSet] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate sets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % Math.ceil(reviews.length / (isMobile ? 3 : 6)));
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews, isMobile]);

  // Pick visible reviews
  const visibleReviews = reviews.slice(
    currentSet * (isMobile ? 3 : 6),
    currentSet * (isMobile ? 3 : 6) + (isMobile ? 3 : 6)
  );

  return (
    <section className="bg-gray-50 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-blue-600">
          What Our Travelers Say 💬
        </h2>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              className={`grid gap-8 ${
                isMobile ? "grid-cols-1" : "md:grid-cols-3"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="text-yellow-400 text-xl mb-2">
                    {"⭐".repeat(review.stars)}
                  </div>
                  <p className="text-gray-700 italic mb-4 line-clamp-3">
                    “{review.review}”
                  </p>
                  <h4 className="text-blue-600 font-semibold">– {review.name}</h4>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
