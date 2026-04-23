import React from 'react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials bg-gray section-padding text-center">
      <div className="container">

        <div className="testimonial-slider">
          <button className="slider-btn prev">
            <ArrowLeft size={24} />
          </button>
          
          <div className="testimonial-content">
            <div className="client-img-wrapper">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Client" className="client-img" />
              <div className="quote-icon">
                <Quote size={20} fill="currentColor" />
              </div>
            </div>
            
            <div className="client-feedback">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p className="feedback-text">
                "Arict agency transformed our business with their innovative approach and deep understanding of our market. Their team is exceptionally talented and dedicated to client success."
              </p>
              <div className="client-info">
                <h4>Sarah Palmer</h4>
                <span>Marketing Director, TechCorp</span>
              </div>
            </div>
          </div>

          <button className="slider-btn next">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
