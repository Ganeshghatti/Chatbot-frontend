import React, { useState, useEffect } from 'react';

const Chatbot = ({ companyId, initialMessages = [], demoQuestions = [], title = "Chatbot" }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Function to send message to the real API
  const sendMessageToAPI = async (message) => {
    const payload = {
      company_id: companyId,
      message: message,
      conversation_history: messages.map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      }))
    };

    try {
      const response = await fetch('https://api.chat.thesquirrel.site/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Assuming the API returns a response field with the chatbot's reply
      return data.response || "Sorry, I couldn't process that request.";
    } catch (error) {
      console.error('API Error:', error);
      return "Sorry, there was an issue connecting to the chat service. Please try again later.";
    }
  };

  // Handle sending user message
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { text: userInput, isBot: false };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    setUserInput('');

    const botResponse = await sendMessageToAPI(userInput);
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    setIsTyping(false);
  };

  // Handle demo question clicks
  const handleDemoQuestion = async (question) => {
    const newUserMessage = { text: question, isBot: false };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    const botResponse = await sendMessageToAPI(question);
    setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    setIsTyping(false);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    const chatContainer = document.getElementById(`chat-messages-${companyId}`);
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping, companyId]);

  return (
    <div className="bg-neutral-900 !text-white border-2 border-accent rounded-xl p-6 shadow-2xl shadow-accent/10 w-full max-w-md">
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-accent font-bold">{title}</div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        id={`chat-messages-${companyId}`}
        className="space-y-4 mb-6 h-64 overflow-y-auto px-2"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] animate__animated animate__fadeInUp ${
              message.isBot
                ? "bg-neutral-700 rounded-tl-none"
                : "bg-accent rounded-tr-none ml-auto"
            }`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        ))}
        {isTyping && (
          <div className="bg-neutral-700 p-3 rounded-lg rounded-tl-none max-w-[80%] flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </div>

      {/* Demo Questions (Optional) */}
      {demoQuestions.length > 0 && (
        <div className="mb-4">
          <div className="text-gray-400 text-sm mb-2">Quick Questions:</div>
          <div className="flex flex-wrap gap-2">
            {demoQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleDemoQuestion(question)}
                className="bg-neutral-700 hover:bg-neutral-600 text-white text-sm py-1 px-3 rounded-full transition duration-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-center border-t border-neutral-700 pt-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="bg-neutral-700 rounded-lg px-4 py-2 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-accent p-2 rounded-lg hover:bg-[#e05a00] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;