import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { LoginModal } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import ExplorePage from "./pages/explore/ExplorePage";
import Hotels from "./pages/explore/Hotels";
import Flights from "./pages/explore/Flights";
import Guides from "./pages/explore/Guides";
import Monuments from "./pages/explore/Monuments";
import ChatAgent from "./struct/Chat";
import Itinerary from "./struct/Itinerary";

function App() {
  // State to control Contact panel visibility
  const [showContact, setShowContact] = useState(false);

  // Function to close the Contact panel
  const handleCloseContact = () => setShowContact(false);

  return (
    <>
      <BrowserRouter>
        {/* Pass showContact state and setter to Navbar */}
        <Navbar showContact={showContact} setShowContact={setShowContact} />

        {/* Contact slide-in panel */}
        <Contact showContact={showContact} onClose={handleCloseContact} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/hotels" element={<Hotels />} />
        <Route path="/explore/flights" element={<Flights />} />
        <Route path="/explore/guides" element={<Guides />} />
        <Route path="/explore/monuments" element={<Monuments />} />
        <Route path="/agent" element={<ChatAgent />} />
        <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
