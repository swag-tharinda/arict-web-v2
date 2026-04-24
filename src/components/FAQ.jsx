import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What events does your association organize?",
      answer: "We organize a comprehensive range of events including technical symposiums, hackathons, career guidance seminars, and interactive workshops."
    },
    {
      question: "How long does it take to build a custom website?",
      answer: "The timeline varies depending on the project's complexity. A standard corporate website might take 4-6 weeks, while a complex e-commerce platform could take 12-16 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer various support and maintenance packages to ensure your website remains secure, up-to-date, and performs optimally post-launch."
    },
    {
      question: "What is your typical process for a new project?",
      answer: "Our process typically involves Discovery & Strategy, Design & Prototyping, Development, Testing & Quality Assurance, and finally Deployment & Optimization."
    },
    {
      question: "Can you help redesign an existing website?",
      answer: "Absolutely. We can audit your current website, identify areas for improvement in terms of UI/UX, performance, and SEO, and execute a comprehensive redesign."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq bg-white section-padding">
      <div className="container">

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="faq-toggle">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
