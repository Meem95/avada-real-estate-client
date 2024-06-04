import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Frequently Ask <span className="text-[#65bc7b]">Question</span>
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-gray-500 ">
              A blog dedicated to fostering community-driven efforts to share surplus food resources and minimize food waste through innovative solutions and collaborative initiatives.
            </p>
          </div>
          <div className="">
            <motion.div whileHover={{ scale: 1.02 }}>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-200 my-2"
                  onClick={() => handleToggle(index)}
                >
                  <div className="collapse-title text-xl font-medium">
                    {`Focus me to see content ${index + 1}`}
                  </div>
                  {openIndex === index && (
                    <div className="collapse-content">
                      <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
