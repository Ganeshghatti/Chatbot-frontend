"use client";
import ContactSection from "@/componets/contact";
import DemoSection from "@/componets/demo";
import FAQSection from "@/componets/faq";
import Footer from "@/componets/footer";
import Header from "@/componets/header";
import HeroSection from "@/componets/hero";
import ReadyMadeSection from "@/componets/ready-made";
import ServicesSection from "@/componets/service";
import TestimonialsSection from "@/componets/testimonial";
import React from "react";
import Chatbotpop from "@/componets/chatbotpop";

const Home = () => {
  return (
    <>
      <Chatbotpop />
      <HeroSection />
      <DemoSection />
      <ServicesSection />
      {/* <ReadyMadeSection/> */}
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;
