import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "UI/UX Design",
      title: "Finance Dashboard App",
      img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "Web Development",
      title: "E-Commerce Platform",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="portfolio bg-black section-padding">
      <div className="container">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-img-wrapper">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="portfolio-info">
                <div>
                  <span className="category text-primary">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <button className="icon-btn">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
