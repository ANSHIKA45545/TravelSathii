import { motion } from "framer-motion";
import React from "react";
import SideImage from "/img1.png"; // replace with your image

const steps = [
  { icon: "🧑‍💼", title: "Tell Us Your Plan", desc: "Enter your budget, destination, and number of travelers. Let us know your preferences and interests." },
  { icon: "🤖", title: "AI Builds Your Journey", desc: "Our AI suggests the best hotels, guides, and activities tailored to your plan, saving you hours of research." },
  { icon: "✨", title: "Enjoy & Explore", desc: "Travel safely, explore confidently, and enjoy your trip with all bookings and guides confirmed in advance." },
];

// Example logos – replace with actual logo URLs
const partnerLogos = [
  "/airbnb.png",
  "/bookings.png",
  "/google-maps.png",
  "/TripAdvisor-logo-1.jpg",
  "/Uber-logo.jpg",
  "/IRCTC-Symbol.png",
  "/makemytrip.png",
  "/skyscanner.png"
];

const HowItWorksFullPage = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* Full-page hero */}
      <section className="h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 w-full">

          {/* Left Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img 
              src={SideImage} 
              alt="Travel Illustration" 
              className="w-72 md:w-96 lg:w-[28rem] h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold text-lg md:text-xl mb-2">Easy and Fast</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Book your next trip <br /> in 3 simple steps
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8">
              Planning your trip has never been easier. Let our AI-powered platform create the perfect journey for you, so you can focus on exploring and enjoying every moment.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl md:text-4xl">{step.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl md:text-2xl">{step.title}</h3>
                    <p className="text-gray-700 text-base md:text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Partners Logos Marquee */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }} // moves left to right effect
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
          >
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img src={logo} alt={`Partner ${index}`} className="object-contain h-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksFullPage;
