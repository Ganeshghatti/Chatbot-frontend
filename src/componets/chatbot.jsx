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
  const [isProcessing, setIsProcessing] = useState(false);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const demoQuestions = ["Services", "Types of Chatbots", "Pricing"];
  const [clickedQuestion, setClickedQuestion] = useState(null);

  const sendMessageToAPI = async (message) => {
    const payload = {
      company_id: companyId,
      message,
      conversation_history: messages.map((msg) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      })),
    };

    try {
      const response = await fetch("https://api.chat.thesquirrel.tech/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
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
                setMessages((prev) =>
                  prev.map((msg, idx) =>
                    msg.isStreaming ? { ...msg, text: fullResponse } : msg
                  )
                );
              }
            } catch (e) {
              console.error("Error parsing JSON:", e, "Raw data:", line);
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
    if (isProcessing) return;
    setIsProcessing(true);
    const inputTxt = externalMsg || userInput;
    if (!inputTxt.trim()) {
      setIsProcessing(false);
      return;
    }

    const newUserMessage = { text: inputTxt, isBot: false };
    setMessages((prev) => [
      ...prev,
      newUserMessage,
      { text: "", isBot: true, isStreaming: true },
    ]);
    setUserInput("");
    setExternalMsg && setExternalMsg(null);

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
      setIsProcessing(false);
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (externalMsg) {
      sendMessage();
      setExternalMsg(null);
    }
  }, [externalMsg]);

  useEffect(() => {
    const scrollToBottom = () => {
      chatContainerRef.current &&
        (chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight);
    };
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  return (
    <div className="bg-neutral-900 text-white border-2 border-accent rounded-xl p-5 shadow-2xl w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-accent font-bold">{title}</div>
      </div>

      <div
        ref={chatContainerRef}
        className="space-y-4 mb-6 h-75 overflow-y-auto px-2"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[85%] text-[14px] ${
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
      </div>

      <div className="mb-3">
        <div className="text-gray-400 text-[12px] mb-2">
          Explore Categories:
        </div>
        <div className="flex flex-wrap gap-2">
          {demoQuestions.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setUserInput(category);
                sendMessage();
              }}
              disabled={isProcessing}
              className="bg-neutral-700 hover:bg-neutral-600 text-white text-[12px] py-1 px-3 rounded-full transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center border-t border-neutral-700 pt-4">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none disabled:opacity-50"
          disabled={isProcessing}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-accent p-2 rounded-lg hover:bg-[#e05a00] transition duration-300 cursor-pointer"
          disabled={isProcessing}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
