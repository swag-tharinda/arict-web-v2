import React from 'react';
import { MapPin, Clock, Heart, Hourglass } from 'lucide-react';
import './Events.css';

const standardEvents = Array(8).fill({
  id: "std",
  title: "The Phantom of the Opera",
  location: "Hamilton - Live in London",
  time: "12:00 pm to 01:00 pm",
  dateBadge: { day: "18", month: "Feb" },
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
}).map((item, index) => ({ ...item, id: `std-${index}` }));

const featuredEvents = [
  {
    id: "feat-1",
    title: "Music Event",
    desc: "Experience an unforgettable night with Coldplay, featuring their biggest hits and a mesmerizing light show!",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    time: { h: "07", m: "49", s: "39" }
  },
  {
    id: "feat-2",
    title: "Music Event",
    desc: "Experience an unforgettable night with Coldplay, featuring their biggest hits and a mesmerizing light show!",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    time: { h: "07", m: "49", s: "39" }
  },
  {
    id: "feat-3",
    title: "Music Event",
    desc: "Experience an unforgettable night with Coldplay, featuring their biggest hits and a mesmerizing light show!",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80",
    time: { h: "07", m: "49", s: "39" }
  }
];

const upcomingEvents = Array(4).fill({
  id: "up",
  date: "18",
  monthYear: "February\n2025",
  title: "The Phantom of the Opera",
  location: "Hamilton - Live in London",
  time: "12:00 pm to 01:00 pm",
}).map((item, index) => ({ ...item, id: `up-${index}` }));


const Events = () => {
  return (
    <>
      {/* SECTION 1: Standard Grid */}
      <section id="events-grid" className="events-standard section-padding bg-black">
        <div className="container">
          <div className="section-header-flex">
            <h2>Events Near By Your City</h2>
            <a href="#" className="view-all-link">View All Events ↗</a>
          </div>
          
          <div className="events-grid-4">
            {standardEvents.slice(0, 4).map(event => (
              <div key={event.id} className="std-event-card">
                <div className="std-event-img-wrap">
                  <img src={event.image} alt={event.title} />
                  <div className="date-badge">
                    <span className="db-day">{event.dateBadge.day}</span>
                    <span className="db-month">{event.dateBadge.month}</span>
                  </div>
                  <button className="heart-btn"><Heart size={16} /></button>
                </div>
                <div className="std-event-info">
                  <h3>{event.title}</h3>
                  <div className="std-event-meta">
                    <span><MapPin size={12} /> {event.location}</span>
                    <span><Clock size={12} /> {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Grid (Dark Theme) */}
      <section className="events-featured section-padding bg-black-light">
        <div className="container">
          <div className="events-featured-header">
            <h2>Events For You</h2>
            <div className="event-filters">
              <button className="filter-pill active">Today</button>
              <button className="filter-pill">Tomorrow</button>
              <button className="filter-pill">This weekend</button>
            </div>
          </div>

          <div className="events-grid-3">
            {featuredEvents.map(event => (
              <div key={event.id} className="feat-event-card">
                <img src={event.image} alt={event.title} className="feat-img" />
                <div className="feat-event-info">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                  
                  <div className="countdown-box">
                    <div className="cd-title">
                      <span>Remaining times</span>
                      <Hourglass size={14} className="hg-icon" />
                    </div>
                    <div className="cd-timers">
                      <div className="cd-item">
                        <strong>{event.time.h}</strong>
                        <span>Hours</span>
                      </div>
                      <div className="cd-item">
                        <strong>{event.time.m}</strong>
                        <span>Minutes</span>
                      </div>
                      <div className="cd-item">
                        <strong>{event.time.s}</strong>
                        <span>Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Standard Grid (Bottom) */}
      <section className="events-standard section-padding bg-black">
        <div className="container">
          <div className="section-header-flex">
            <h2>Events Near By Your City</h2>
            <a href="#" className="view-all-link">View All Events ↗</a>
          </div>
          
          <div className="events-grid-4">
            {standardEvents.slice(4, 8).map(event => (
              <div key={event.id} className="std-event-card">
                <div className="std-event-img-wrap">
                  <img src={event.image} alt={event.title} />
                  <div className="date-badge">
                    <span className="db-day">{event.dateBadge.day}</span>
                    <span className="db-month">{event.dateBadge.month}</span>
                  </div>
                  <button className="heart-btn"><Heart size={16} /></button>
                </div>
                <div className="std-event-info">
                  <h3>{event.title}</h3>
                  <div className="std-event-meta">
                    <span><MapPin size={12} /> {event.location}</span>
                    <span><Clock size={12} /> {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Upcoming Events (List View, Dark Theme) */}
      <section className="events-upcoming section-padding bg-black-light">
        <div className="container">
          <div className="section-header-flex">
            <h2>Upcoming Events</h2>
            <a href="#" className="view-all-link">View All Events ↗</a>
          </div>

          <div className="upcoming-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="upcoming-row">
                <div className="up-date">
                  <span className="up-day">{event.date}</span>
                  <span className="up-month" style={{ whiteSpace: 'pre-line' }}>{event.monthYear}</span>
                </div>
                
                <div className="up-info">
                  <h3>{event.title}</h3>
                  <div className="up-meta">
                    <span><MapPin size={14} /> {event.location}</span>
                    <span><Clock size={14} /> {event.time}</span>
                  </div>
                </div>
                
                <div className="up-action">
                  <button className="buy-ticket-btn">Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
