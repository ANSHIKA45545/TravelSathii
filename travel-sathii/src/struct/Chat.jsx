import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatAgent = () => {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm your AI Travel Agent. Let's plan your perfect trip!" },
    { sender: "bot", text: "Where do you want to go?" },
  ]);
  const [step, setStep] = useState("destination");
  const [tripData, setTripData] = useState({
    destination: "",
    duration: "",
    budget: "",
    people: "",
  });

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    handleBotResponse(input);
    setInput("");
  };

  const handleBotResponse = (input) => {
    let nextStep = step;
    let botMsg = "";

    if (step === "destination") {
      setTripData({ ...tripData, destination: input });
      botMsg = `Nice! How many days do you plan to stay in ${input}?`;
      nextStep = "duration";
    } 
    else if (step === "duration") {
      setTripData({ ...tripData, duration: input });
      botMsg = "Great! What's your total budget (in ₹ or $)?";
      nextStep = "budget";
    } 
    else if (step === "budget") {
      setTripData({ ...tripData, budget: input });
      botMsg = "Got it! How many people are traveling?";
      nextStep = "people";
    } 
    else if (step === "people") {
      setTripData({ ...tripData, people: input });
      botMsg = `Perfect! Generating your itinerary for ${tripData.destination}... ✈️`;
      nextStep = "done";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: botMsg }]);

    if (nextStep === "done") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "✨ Your personalized plan is ready!" },
        ]);
      }, 1000);
    }

    setStep(nextStep);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="w-[90%] md:w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h2 className="font-semibold">AI Travel Agent</h2>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[450px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="border-t flex items-center p-2">
            <input
              type="text"
              className="flex-1 p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your answer..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Send size={16} />
            </button>
          </div>

          {/* Itinerary Button */}
          {step === "done" && (
            <div className="p-3 border-t bg-gray-50 text-center">
              <button
                onClick={() => navigate("/itinerary", { state: tripData })}
                className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Calendar size={16} />
                View My Itinerary
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatAgent;
