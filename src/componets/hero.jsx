import React from 'react';
import Chatbot from './chatbot';

const HeroSection = () => {
  const initialMessages = [
    { text: "👋 Hi there! I'm the Squirrel demo bot. How can I assist you today?", isBot: true }
  ];
  const demoQuestions = [
    "What types of chatbots do you offer?",
    // "How much does a custom chatbot cost?", // Commented out as per your request
  ];

  return (
    <section id="hero" className="bg-neutral-900 text-white py-10 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-accent">ChatGPT</span> That Speaks Your Brand!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Elevate your business with AI-driven chatbots designed to provide engaging, personalized conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center animate__animated animate__pulse animate__infinite animate__slower"
              >
                Try Demo Bot
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-accent hover:bg-accent hover:bg-opacity-20 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column - Chatbot Preview */}
          <div className="md:w-1/2 flex justify-center relative animate__animated animate__fadeInRight">
            <Chatbot
              companyId="the_squirrel_511912"
              initialMessages={initialMessages}
              demoQuestions={demoQuestions}
              title="Ask Squirrel Bot"
            />

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accent opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-8 animate__animated animate__fadeIn">
            <div className="text-center">
              <div className="text-accent text-2xl sm:text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">Availability</div>
            </div>
            <div className="h-12 w-px bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-accent text-2xl sm:text-3xl md:text-4xl font-bold mb-2">30%</div>
              <div className="text-gray-400 text-sm sm:text-base">More Conversions</div>
            </div>
            <div className="h-12 w-px bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-accent text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Free</div>
              <div className="text-gray-400 text-sm sm:text-base">Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;