import { Link, useNavigate } from "react-router-dom";
import GirlImage from "/img1.png";
import LandingSections from "./Features";
import TrustSection from "./Reviews";
import PartnersMarquee from "./Reviews";
import { Footer } from "../pages/Footer";

const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <section className="relative h-[40rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 bg-white">
        
        {/* Text Content on Left */}
        <div className="z-10 max-w-lg text-gray-900 space-y-6 md:mr-8">
          <div className="text-red-500 py-10 font-semibold">BEST DESTINATIONS AROUND THE WORLD</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Travel <span className="text-blue-600">Smart</span> <br /> 
            Explore <span className="text-blue-400">Freely</span>
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-700">
            Your AI-powered travel partner — plan your trip, find the best guides, hotels, and book monuments effortlessly.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate("/agent")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Chat with Agent
            </button>

            <Link
              to="/itinerary"
              className="bg-transparent border border-gray-900 hover:bg-gray-100 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Create My Trip Plan 🗺️
            </Link>
          </div>
        </div>

        {/* Girl Image on Right */}
        <div className="hidden md:block flex-1">
          <img 
            src={GirlImage} 
            alt="Girl" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <div>
        <LandingSections />
        <PartnersMarquee />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
