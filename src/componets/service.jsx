import React from 'react';
import { Package, Code, Check, Clock, DollarSign, Zap, BarChart, Layers, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Our <span className="text-accent">Chatbot Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn">
            Choose the perfect AI-powered chatbot for your business—whether you need a quick-start solution or a fully customized experience.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ready-Made Chatbots */}
          <div className="bg-neutral-800 rounded-xl p-8 border-t-4 border-accent shadow-xl transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInLeft">
            <div className="flex items-start mb-6">
              <div className="bg-accent/30 bg-opacity-20 p-3 rounded-lg mr-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Ready-Made Chatbots</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Fast and affordable pre-built chatbots, free for the first month, then continue with a subscription model. Ideal for businesses wanting instant AI engagement.
            </p>
            <div className="mb-8">
              {[
                { text: "Free for the first month", icon: <DollarSign className="h-5 w-5 text-accent mr-3" /> },
                { text: "Quick 15-minute deployment", icon: <Clock className="h-5 w-5 text-accent mr-3" /> },
                { text: "Customized with your data", icon: <Layers className="h-5 w-5 text-accent mr-3" /> },
                { text: "24/7 customer support", icon: <MessageSquare className="h-5 w-5 text-accent mr-3" /> },
                { text: "Affordable subscription after trial", icon: <DollarSign className="h-5 w-5 text-accent mr-3" /> }
              ].map((feature, index) => (
                <div key={index} className="flex items-center mb-4">
                  {feature.icon}
                  <p className="text-gray-200">{feature.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <a href="#readymade" className="inline-block bg-neutral-700 hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Custom Chatbots */}
          <div className="bg-neutral-800 rounded-xl p-8 border-t-4 border-accent shadow-xl transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInRight">
            <div className="flex items-start mb-6">
              <div className="bg-accent/30 bg-opacity-20 p-3 rounded-lg mr-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Custom Chatbots</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Bespoke chatbots developed on demand to meet your unique business needs. A premium, paid solution built from scratch for maximum customization.
            </p>
            <div className="mb-8">
              {[
                { text: "Built specifically for your needs", icon: <Code className="h-5 w-5 text-accent mr-3" /> },
                { text: "Advanced feature customization", icon: <Zap className="h-5 w-5 text-accent mr-3" /> },
                { text: "Seamless system integrations", icon: <Layers className="h-5 w-5 text-accent mr-3" /> },
                { text: "Branded design & experience", icon: <BarChart className="h-5 w-5 text-accent mr-3" /> },
                { text: "One-time development fee", icon: <DollarSign className="h-5 w-5 text-accent mr-3" /> }
              ].map((feature, index) => (
                <div key={index} className="flex items-center mb-4">
                  {feature.icon}
                  <p className="text-gray-200">{feature.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <a href="#custom" className="inline-block bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 animate__animated animate__fadeIn">
            How It <span className="text-accent">Works</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
            {[
              { step: 1, icon: <MessageSquare className="h-12 w-12 text-accent" />, title: "Consultation", desc: "We discuss your business needs and recommend the best solution." },
              { step: 2, icon: <Layers className="h-12 w-12 text-accent" />, title: "Data Collection", desc: "We gather your company information and knowledge base content." },
              { step: 3, icon: <Code className="h-12 w-12 text-accent" />, title: "Development", desc: "We customize and develop your chatbot to meet your requirements." },
              { step: 4, icon: <Check className="h-12 w-12 text-accent" />, title: "Deployment", desc: "We integrate the chatbot with your website and provide ongoing support." }
            ].map((step) => (
              <div key={step.step} className="bg-neutral-800 rounded-xl p-6 text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="h-20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <div className="bg-neutral-800 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 animate__animated animate__fadeIn">
              Why Choose <span className="text-accent">the squirrel</span> Chatbots?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 animate__animated animate__fadeInUp">
              {[
                { icon: <Clock className="h-6 w-6 text-accent" />, title: "24/7 Availability", desc: "Never miss a customer inquiry with always-online chatbots." },
                { icon: <DollarSign className="h-6 w-6 text-accent" />, title: "Cost Reduction", desc: "Cut support costs by up to 30% with automated assistance." },
                { icon: <BarChart className="h-6 w-6 text-accent" />, title: "Data Insights", desc: "Gain valuable insights from chat logs and analytics." },
                { icon: <Zap className="h-6 w-6 text-accent" />, title: "Quick Response", desc: "Deliver instant replies to customer queries." },
                { icon: <Layers className="h-6 w-6 text-accent" />, title: "Increased Sales", desc: "Boost conversions with proactive engagement." },
                { icon: <MessageSquare className="h-6 w-6 text-accent" />, title: "Multi-Channel", desc: "Reach customers across website, Facebook, WhatsApp, and more." }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="bg-accent/30 bg-opacity-20 p-3 rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#readymade" className="inline-block bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 animate__animated animate__pulse animate__infinite animate__slower">
            Explore Our Chatbot Options
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;