import React, { useState, useEffect, useRef } from "react";
import { markdown } from "markdown";

const Chatbot = ({
  companyId,
  initialMessages = [],
  title = "Chatbot",
  externalMsg,
  setExternalMsg,
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // const [quickQuestions, setQuickQuestions] = useState(demoQuestions);
  const [streamingMessage, setStreamingMessage] = useState("");
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [askedQuestions, setAskedQuestions] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);

  const demoQuestions = ["Services", "Types of Chatbots", "Pricing"];

  // Function to send message to the API with streaming support
  const sendMessageToAPI = async (message) => {
    const payload = {
      company_id: companyId,
      message: message,
      conversation_history: messages.map((msg) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      })),
    };

    try {
      const response = await fetch("https://api.chat.thesquirrel.site/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      setStreamingMessage("");

      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const jsonData = JSON.parse(line.substring(6));
              if (jsonData.chunk !== undefined) {
                fullResponse += jsonData.chunk;
                setStreamingMessage(fullResponse);
              }
            } catch (e) {
              console.error("Error parsing JSON from stream:", e);
            }
          }
        }
      }

      return fullResponse || "Sorry, I couldn't process that request.";
    } catch (error) {
      console.error("API Error:", error);
      return "Sorry, there was an issue connecting to the chat service. Please try again later.";
    }
  };

  const sendMessage = async () => {
    if (isProcessing) {
      console.log("Already processing a message. Ignoring new request.");
      return;
    }

    console.log(
      "Starting to process a new message. Disabling input and quick questions."
    );
    setIsProcessing(true); // Start processing

    const inputTxt = externalMsg || userInput;
    if (!inputTxt.trim()) {
      setIsProcessing(false); // Reset if input is empty
      return;
    }

    const newUserMessage = { text: inputTxt, isBot: false };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");

    if (typeof setExternalMsg === "function") {
      setExternalMsg(null);
    }

    // Add streaming message
    setMessages((prev) => [
      ...prev,
      { text: "", isBot: true, isStreaming: true },
    ]);

    try {
      const botResponse = await sendMessageToAPI(inputTxt);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isStreaming
            ? { text: botResponse, isBot: true, isStreaming: false }
            : msg
        )
      );
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isStreaming
            ? {
                text: "Sorry, something went wrong. Please try again.",
                isBot: true,
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      console.log(
        "Finished processing. Re-enabling input and quick questions."
      );
      setIsProcessing(false); // End processing
      setStreamingMessage("");
      inputRef.current?.focus();
    }
  };

  const handleDemoQuestion = async (question) => {
    setAskedQuestions((prev) => new Set([...prev, question]));

    const newUserMessage = { text: question, isBot: false };
    setMessages((prev) => [...prev, newUserMessage]);

    setMessages((prev) => [
      ...prev,
      { text: "", isBot: true, isStreaming: true },
    ]);

    const botResponse = await sendMessageToAPI(question);

    setMessages((prev) =>
      prev.map((msg) =>
        msg.isStreaming
          ? { text: botResponse, isBot: true, isStreaming: false }
          : msg
      )
    );
    setStreamingMessage("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };

    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages, streamingMessage]);

  useEffect(() => {
    if (externalMsg) {
      setIsTyping(false);
      sendMessage();
      setExternalMsg(null);
    }
  }, [externalMsg]);

  return (
    <div className="bg-neutral-900 !text-white border-2 border-accent rounded-xl p-5 shadow-2xl shadow-accent/10 w-full max-w-md">
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
        ref={chatContainerRef}
        id={`chat-messages-${companyId}`}
        className="space-y-4 mb-6  h-75 overflow-y-auto px-2"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[85%]  text-[14px] animate__animated animate__fadeInUp ${
              message.isBot
                ? "bg-neutral-700 rounded-tl-none"
                : "bg-accent rounded-tr-none ml-auto"
            }`}
          >
            {message.isStreaming ? (
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: markdown.toHTML(message.text),
                }}
              />
            )}
          </div>
        ))}
        {/* {isTyping && !streamingMessage && (
          <div className="bg-neutral-700 p-3 rounded-lg rounded-tl-none max-w-[80%] flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        )} */}
      </div>

      {/* Quick Questions Section */}
      <div className="mb-3 h-12 mt-[-1px]">
        <div className="text-gray-400 text-[12px] mb-2">
          Explore Categories:
        </div>
        <div className="flex flex-wrap gap-2">
          {demoQuestions.map((category, index) => (
            <button
              key={index}
              onClick={() => handleDemoQuestion(category)}
              disabled={isProcessing}
              className={`bg-neutral-700 hover:bg-neutral-600 text-white text-[12px] py-1 px-3 rounded-full transition duration-300 ${
                isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t border-neutral-700 pt-4">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent form submission
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="flex-1 bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
          disabled={isProcessing}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-accent p-2 rounded-lg hover:bg-[#e05a00] transition duration-300 cursor-pointer"
          // disabled={isTyping}
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
