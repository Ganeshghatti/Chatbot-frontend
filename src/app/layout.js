import {Host_Grotesk } from "next/font/google";
import "./globals.css";

const host_Grotesk = Host_Grotesk({
  subsets: ["latin"],
});


export const metadata = {
  title: "The Squirrel - Smart Chatbot Solutions for Your Business",
  description: "Elevate your business with The Squirrel's AI-driven chatbots. Offering ready-made and custom chatbot solutions for engaging, personalized customer interactions.",
  keywords: "chatbot solutions, AI chatbots, custom chatbots, ready-made chatbots, business automation, customer engagement, The Squirrel",
  authors: [{ name: "The Squirrel Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body
        className={`${host_Grotesk.className}  antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
