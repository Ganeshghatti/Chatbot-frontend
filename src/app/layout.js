import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/componets/header";
import Footer from "@/componets/footer";
import Script from "next/script";

const host_Grotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "The Squirrel - Smart Chatbot Solutions for Your Business",
  description:
    "Elevate your business with The Squirrel's AI-driven chatbots. Offering ready-made and custom chatbot solutions for engaging, personalized customer interactions.",
  keywords:
    "chatbot solutions, AI chatbots, custom chatbots, ready-made chatbots, business automation, customer engagement, The Squirrel",
  authors: [{ name: "The Squirrel Team" }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${host_Grotesk.className}  antialiased overflow-x-hidden`}
      >
        <Header />
        <main className="md:px-3 bg-neutral-900">{children}</main>
        <Footer />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1RZYJ263TQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RZYJ263TQ');
          `}
        </Script>
      </body>
    </html>
  );
}
