import React, { useState, useEffect } from 'react';
import Chatbot from './chatbot';

const DemoSection = () => {
  const initialMessages = [
    {
      text: "👋 Hi there! I'm the Squirrel demo bot. I can help you learn about our chatbot services. What would you like to know?",
      isBot: true
    }
  ];
  const demoQuestions = [
    "What types of chatbots do you offer?",
    "How much does a custom chatbot cost?",
    "How long does it take to set up a chatbot?",
    "What industries do your chatbots work for?",
    "Can the chatbot handle customer support?"
  ];

  return (
    <section id="demo" className="bg-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Try Our <span className="text-accent">Interactive Demo</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn">
            Experience firsthand how our chatbots can transform your customer interactions. Ask questions, get product information, and see the power of AI-driven conversations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Chat Interface using Chatbot Component */}
          <div className="lg:w-1/2 order-2 lg:order-1 animate__animated animate__fadeInUp">
            <Chatbot
              companyId="social_hardware_159183"
              initialMessages={initialMessages}
              demoQuestions={[]}
              title="Live Demo Bot"
            />
          </div>

          {/* Demo Questions */}
          <div className="lg:w-1/2 order-1 lg:order-2 animate__animated animate__fadeInUp">
            <div className="bg-neutral-900 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Common Questions to Ask:</h3>
              <ul className="space-y-4">
                {demoQuestions.map((question, index) => (
                  <li key={index}>
                    <button
                      // onClick={() => document.getElementById(`chat-messages-social_hardware_159183`).parentElement.querySelector('button').click(question)} // Simplified for demo; ideally handled by Chatbot
                      className="demo-question bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg w-full text-left text-gray-300 hover:text-white transition duration-300 border-l-4 border-accent"
                    >
                      {question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate__animated animate__fadeIn">
          <a href="#services" className="inline-flex items-center text-accent font-semibold hover:text-white transition duration-300">
            Learn more about our services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;