'use client'
import ContactSection from '@/componets/contact'
import DemoSection from '@/componets/demo'
import FAQSection from '@/componets/faq'
import Footer from '@/componets/footer'
import Header from '@/componets/header'
import HeroSection from '@/componets/hero'
import ReadyMadeSection from '@/componets/ready-made'
import ServicesSection from '@/componets/service'
import TestimonialsSection from '@/componets/testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <DemoSection/>
    <ServicesSection/>
    {/* <ReadyMadeSection/> */}
    <FAQSection/>
    <TestimonialsSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Home