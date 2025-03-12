import React, { useState, useEffect } from "react";
import Chatbot from "./chatbot";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbotpop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatKey, setChatKey] = useState(Date.now());
  const [hasError, setHasError] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (hasError) setHasError(false);
    setChatKey(Date.now());
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isTouchEvent = e.type === "touchstart";
      const targetElement = isTouchEvent
        ? e.changedTouches[0].target
        : e.target;

      if (isOpen && !targetElement.closest(".chatbot-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const initialMessages = [
    {
      text: "👋 Hi there! I'm the Squirrel demo bot. How can I assist you today?",
      isBot: true,
    },
  ];
  const demoQuestions = ["What types of chatbots do you offer?"];

  return (
    <div className="chatbot-container fixed bottom-14 right-6 lg:left-auto md:left-auto left-6  lg:right-22 lg:bottom-0 z-[9999]">
      {isOpen && (
        <div className="animate__animated animate__fadeInUp mb-4">
          <Chatbot
            key={chatKey}
            companyId="the_squirrel_511912"
            initialMessages={initialMessages}
            demoQuestions={demoQuestions}
            onError={() => setHasError(true)}
          />
        </div>
      )}

      <button
        className="fixed lg:bottom-5 bottom-3 right-5 bg-accent hover:bg-accent-400 text-white rounded-full p-3 lg:p-4 shadow-lg text-xl hover:bg-accent-600 cursor-pointer focus:outline-none z-10"
        onClick={handleToggle}
      >
        <span className="text-2xl ">
          {isOpen ? (
            <FaTimes className="text-2xl transition-opacity duration-300" />
          ) : (
            <FaRobot className="text-2xl transition-opacity duration-300" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Chatbotpop;
