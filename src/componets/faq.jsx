import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the difference between ready-made and custom chatbots?",
      answer: "Ready-made chatbots are pre-built solutions that can be quickly deployed with your company data customized within 15 minutes to 48 hours, featuring a free first month followed by a subscription. Custom chatbots are built from scratch to meet your specific business requirements, offering advanced integrations and tailored conversation flows, requiring 2-4 weeks of development with a one-time fee plus maintenance."
    },
    {
      question: "How do I integrate a chatbot into my website?",
      answer: "For ready-made chatbots, we provide a simple code snippet that you can copy and paste into your website's HTML. For custom chatbots, our team handles the integration process, ensuring seamless compatibility with your website and any other systems (like CRM or payment platforms) you use."
    },
    {
      question: "Can your chatbots work on platforms other than my website?",
      answer: "Yes! Our chatbots support multi-channel deployment, including Facebook Messenger, WhatsApp, and other platforms. This is available with both ready-made (subscription tier) and custom chatbots, allowing you to engage customers wherever they are."
    },
    {
      question: "What kind of support do you offer after deployment?",
      answer: "For ready-made chatbots, we provide 24/7 customer support and monthly updates as part of the subscription. For custom chatbots, we offer ongoing maintenance, performance optimization, and priority support tailored to your needs, included in the maintenance fee."
    },
    {
      question: "Are your chatbots secure and compliant with regulations?",
      answer: "Absolutely. All our chatbots feature data encryption and GDPR compliance. Custom chatbots can be built to meet additional industry-specific regulations like HIPAA for healthcare or PCI-DSS for payments, ensuring your customers' data is secure."
    },
    {
      question: "How do your chatbots handle complex customer queries?",
      answer: "Ready-made chatbots handle common queries using pre-trained responses and can escalate to human agents when needed. Custom chatbots use advanced NLP to understand complex queries and context, with custom flows designed for your specific use cases, reducing the need for escalation."
    },
    {
      question: "What happens if I want to cancel my subscription?",
      answer: "For ready-made chatbots, you can cancel anytime after the free month with no penalties—just let us know, and we'll deactivate the chatbot. Custom chatbots are a one-time development purchase with optional maintenance; you own the solution and can discontinue maintenance anytime."
    }
  ];

  return (
    <section id="faq" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn">
            Have questions? We've got answers. Here are some of the most common inquiries about our chatbot services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto animate__animated animate__fadeInUp">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center bg-neutral-800 hover:bg-neutral-700 p-5 rounded-lg focus:outline-none transition duration-300"
              >
                <span className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-accent transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-neutral-800 p-5 rounded-b-lg border-t border-neutral-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 animate__animated animate__fadeIn">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 animate__animated animate__pulse animate__infinite animate__slower"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;