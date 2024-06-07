import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the process for buying a home?",
      answer: "The home buying process involves several steps: getting pre-approved for a mortgage, finding a real estate agent, searching for homes, making an offer, getting a home inspection, securing financing, and closing the deal. Each step is crucial to ensure a smooth transaction."
    },
    {
      question: "How do I determine the value of my home?",
      answer: "To determine the value of your home, you can get a professional appraisal, compare recent sales of similar properties in your area, and consult with a real estate agent. Online home valuation tools can also provide a rough estimate based on current market trends."
    },
    {
      question: "What should I consider when choosing a neighborhood?",
      answer: "When choosing a neighborhood, consider factors such as the quality of schools, proximity to work, safety, amenities (shops, parks, restaurants), public transportation, and future development plans. Visiting the neighborhood at different times of the day can also give you a better sense of the area."
    },
    {
      question: "What are the benefits of working with a real estate agent?",
      answer: "Real estate agents provide expertise in market conditions, help you navigate the buying or selling process, negotiate on your behalf, and offer access to exclusive listings. Their knowledge and experience can save you time and potentially get you a better deal."
    },
    {
      question: "How can I prepare my home for sale?",
      answer: "To prepare your home for sale, start by decluttering and deep cleaning. Make necessary repairs and consider minor upgrades like fresh paint or updated fixtures. Staging your home to highlight its best features and enhancing curb appeal can also attract more potential buyers."
    }
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center my-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Frequently Ask <span className="text-[#65bc7b]">Questions</span>
            </h1>
            <p className="max-w-5xl mx-auto mt-4 text-gray-500">
              Welcome to our real estate FAQ section. Here you'll find answers to the most common questions about buying, selling, and renting properties. Our goal is to provide you with the information you need to make informed decisions and have a smooth real estate experience.
            </p>
          </div>
          <div className="">
            {faqData.map((faq, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}>
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-200 my-2"
                  onClick={() => handleToggle(index)}
                >
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                  </div>
                  {openIndex === index && (
                    <div className="collapse-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
