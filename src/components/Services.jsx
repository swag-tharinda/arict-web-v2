import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: "01",
    title: "SEO & Social Media Campaigns",
    tags: ["Social Media", "SEO", "Email Campaigns"],
    description: "Boost your online presence and engage with your audience effectively."
  },
  {
    id: "02",
    title: "Website Development",
    tags: ["React", "Next.js", "WordPress"],
    description: "Custom, responsive, and high-performance websites built for your business."
  },
  {
    id: "03",
    title: "UX/UI Design",
    tags: ["Wireframing", "Prototyping", "User Research"],
    description: "Intuitive and beautiful user interfaces that enhance user experience."
  },
  {
    id: "04",
    title: "Creative Design",
    tags: ["Branding", "Illustration", "Graphics"],
    description: "Stand out with unique and memorable visual identities."
  },
  {
    id: "05",
    title: "Digital Marketing",
    tags: ["PPC", "Content Strategy", "Analytics"],
    description: "Data-driven marketing strategies to maximize your ROI."
  }
];

const Services = () => {
  return (
    <section id="services" className="services bg-gray section-padding">
      <div className="container">
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-number">{service.id}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <div className="service-tags">
                  {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <p>{service.description}</p>
              </div>
              <button className="service-btn">
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
