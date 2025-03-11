import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager",
      company: "Trendy Threads",
      quote:
        "The ready-made chatbot from the squirrel increased our conversion rates by 35% within the first month. It was so easy to set up, and the team customized it perfectly for our store!",
      rating: 5,
    },
    {
      name: "Cameron Norris ",
      role: "Co-founder",
      company: "Social Hardware",
      quote:
        "At Social Hardware, we’ve been using The Squirrel’s chatbot for a while now, and it’s been a great addition to our website. It’s been really helpful in handling those everyday customer questions, and what’s impressed us most is how accurately it answers technical questions about our products and services. This has given our team more time to focus on the bigger-picture tasks. What’s stood out to me is how responsive and supportive The Squirrel’s team has been—they’re quick to answer questions and always willing to make tweaks when we need them. The chatbot does exactly what we need it to do, and it’s been a straightforward, no-fuss solution for us. If you’re looking for a chatbot that’s easy to use, handles technical queries well, and gets the job done, I’d definitely recommend The Squirrel—they’ve been an exceptional partner for us.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Lead",
      company: "TravelEasy Agency",
      quote:
        "The multi-channel support feature is a game-changer. Our customers can now book trips via WhatsApp or our website with the same seamless experience. Fantastic support too!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn">
            Hear from businesses like yours who have transformed their customer
            experience with our chatbot solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate__animated animate__fadeInUp">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-6 shadow-xl border-t-4 border-accent transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {Array.from(
                  { length: Math.floor(testimonial.rating) },
                  (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
                {testimonial.rating % 1 !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    <rect x="0" y="0" width="10" height="20" fill="#4b5563" />
                  </svg>
                )}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-accent h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 animate__animated animate__fadeIn">
            Ready to join our satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-accent hover:bg-[#e05a00] text-white font-bold py-3 px-8 rounded-lg transition duration-300 animate__animated animate__pulse animate__infinite animate__slower"
          >
            Get Started Today
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

export default TestimonialsSection;
