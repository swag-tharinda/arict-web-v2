import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Events.css';

const events = [
  {
    id: "01",
    title: "Annual Tech Symposium",
    tags: ["Technology", "Networking", "Workshops"],
    description: "Join us for our flagship event featuring keynote speakers, interactive sessions, and the latest in ICT."
  },
  {
    id: "02",
    title: "Hackathon 2024",
    tags: ["Coding", "Competition", "Innovation"],
    description: "A 24-hour coding challenge to solve real-world problems. Build, innovate, and win exciting prizes."
  },
  {
    id: "03",
    title: "Career Guidance Seminar",
    tags: ["Career", "Guidance", "Industry Experts"],
    description: "Expert advice on navigating the tech industry, resume building, and acing technical interviews."
  },
  {
    id: "04",
    title: "Web Development Bootcamp",
    tags: ["React", "Node.js", "Hands-on"],
    description: "A comprehensive bootcamp covering modern web technologies from frontend to backend."
  },
  {
    id: "05",
    title: "AI & Machine Learning Workshop",
    tags: ["AI", "Machine Learning", "Python"],
    description: "Dive deep into the world of Artificial Intelligence with practical, hands-on examples."
  }
];

const Events = () => {
  return (
    <section id="events" className="events bg-gray section-padding">
      <div className="container">
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-number">{event.id}</div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-tags">
                  {event.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <p>{event.description}</p>
              </div>
              <button className="event-btn">
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
