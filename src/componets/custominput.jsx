import React from "react";

const CustomInput = ({ value, onChange, onSend, isTyping }) => {
  return (
    <div className="flex items-center border-t border-neutral-700 pt-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            onSend();
          }
        }}
        placeholder="Type your message..."
        className="bg-neutral-700 rounded-lg px-4 py-2 flex-grow text-white focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        onClick={onSend}
        className="ml-2 bg-accent p-2 rounded-lg hover:bg-[#e05a00] transition duration-300 cursor-pointer"
        disabled={isTyping}
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
  );
};

export default CustomInput;
