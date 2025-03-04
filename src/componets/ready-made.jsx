import React from 'react';

const ReadyMadeSection = () => {
  return (
    <section id="readymade" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Ready-Made <span className="text-accent">Chatbots</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn">
            Get up and running quickly with our pre-built chatbot solutions, customized with your company data.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Description */}
          <div className="animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-accent">Free for 1 Month</span>, Then Subscription
            </h3>
            <p className="text-gray-300 mb-6">
              Our ready-made chatbots are designed to get you started immediately. Enjoy a full month of free service while we customize the chatbot to match your business needs. After the trial period, continue with our affordable subscription model.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "Rapid Deployment", desc: "Get your chatbot up and running in as little as 15 minutes. No lengthy setup processes." },
                { title: "Data Customization", desc: "We'll integrate your company information, products, services, and FAQs into the chatbot." },
                { title: "Easy Website Integration", desc: "Simple copy-paste code snippet to add the chatbot to your website. Works with all platforms." },
                { title: "Regular Updates", desc: "We continuously improve the chatbot with new data and functionality during your subscription." }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#pricing" className="bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                View Pricing
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Chat Demo */}
          <div className="bg-neutral-900 border-2 border-accent rounded-xl p-6 shadow-2xl shadow-accent/10 animate__animated animate__fadeInRight">
            <div className="flex items-center justify-between mb-4">
              <div className="text-accent font-bold">Ready-Made Demo</div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex justify-between mb-6 bg-neutral-800 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-accent h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                <div>
                  <div className="text-white font-semibold">Retail Bot</div>
                  <div className="text-gray-400 text-sm">E-commerce assistant</div>
                </div>
              </div>
              <div className="bg-green-500 px-3 py-1 rounded-full text-white text-xs flex items-center">
                Active
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                Hi there! Welcome to [Your Store]. I'm here to help you find the perfect product. What are you looking for today?
              </div>
              <div className="bg-accent p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                I'm looking for running shoes.
              </div>
              <div className="bg-neutral-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                Great choice! We have several running shoes available. What's your budget range?
              </div>
              <div className="bg-accent p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                Around $100
              </div>
              <div className="bg-neutral-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                Perfect! I recommend our TrailRunner X3 for $95.99. It has excellent cushioning and support for long-distance running. Would you like to see more details?
              </div>
            </div>
            <div className="mt-6 border-t border-neutral-700 pt-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "87%", label: "Query Resolution" },
                  { value: "24/7", label: "Availability" },
                  { value: "3s", label: "Avg. Response" }
                ].map((stat, index) => (
                  <div key={index} className="bg-neutral-700 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry Templates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Industry <span className="text-accent">Templates</span> Available
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
            {[
              { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", title: "E-commerce", desc: "Product recommendations & order support" },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Real Estate", desc: "Property listings & viewing scheduling" },
              { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "Hospitality", desc: "Bookings & guest services" },
              { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Education", desc: "Course information & student support" }
            ].map((template, index) => (
              <div key={index} className="bg-neutral-900 p-5 rounded-xl text-center hover:border-accent border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="bg-neutral-800 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={template.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{template.title}</h4>
                <p className="text-gray-400 text-sm">{template.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Features */}
        <div className="bg-neutral-900 rounded-xl p-8 md:p-12 animate__animated animate__fadeIn">
          <h3 className="text-2xl font-bold text-white mb-8">
            Subscription <span className="text-accent">Features</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Monthly Updates", desc: "We regularly update your chatbot with new information, improved responses, and fine-tuned conversation flows based on user interactions." },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Analytics Dashboard", desc: "Access detailed insights about customer interactions, popular questions, conversion rates, and areas for improvement." },
              { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", title: "Human Handoff", desc: "When conversations require human assistance, the chatbot seamlessly transfers to your support team via email or integration with your CRM." },
              { icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4", title: "Content Library", desc: "Access to our growing library of industry-specific conversation templates, responses, and best practices to improve your chatbot." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Security & Compliance", desc: "All chatbots come with GDPR compliance, data encryption, and secure handling of customer information." },
              { icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z", title: "Multi-Channel Support", desc: "Deploy your chatbot across your website, Facebook Messenger, WhatsApp, and other platforms with a single subscription." }
            ].map((feature, index) => (
              <div key={index}>
                <h4 className="flex items-center text-xl font-bold text-white mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                  {feature.title}
                </h4>
                <p className="text-gray-300 pl-9">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate__animated animate__pulse animate__infinite animate__slower">
          <a href="#contact" className="bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
            Start Your Free Month
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyMadeSection;