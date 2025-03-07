"use client";
import React from "react";
import { useState } from "react";
import Chatbot from "./chatbot";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbotpop = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible((prevState) => !prevState);
  };

  const initialMessages = [
    {
      text: "👋 Hi there! I'm the Squirrel demo bot. How can I assist you today?",
      isBot: true,
    },
  ];
  const demoQuestions = ["What types of chatbots do you offer?"];

  return (
    <div>
      <button
        className="fixed lg:bottom-5 bottom-3 right-5 bg-accent hover:bg-accent-400 text-white rounded-full p-3 lg:p-4 shadow-lg text-xl hover:bg-accent-600 cursor-pointer focus:outline-none z-10"
        onClick={toggleChatbot}
      >
        <span className="text-2xl ">
          {isChatbotVisible ? (
            <FaTimes className="text-2xl transition-opacity duration-300" />
          ) : (
            <FaRobot className="text-2xl transition-opacity duration-300" />
          )}
        </span>
      </button>

      <div
        className={`fixed lg:bottom-40 bottom-53 lg:right-18 shadow-lg rounded-lg lg:p-5 p-6 w-92 lg:w-100 lg:h-96 h-95 z-20 transition-transform duration-500 ease-in-out ${isChatbotVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
          }`}
      >
        {isChatbotVisible && (
          <Chatbot
            companyId="the_squirrel_511912"
            initialMessages={initialMessages}
            demoQuestions={demoQuestions}
            title="Ask Squirrel Bot"
          />
        )}
      </div>
    </div>
  );
};

export default Chatbotpop;
