import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { apiFetch } from '../utils/api';
import './SingleEventView.css';

const SingleEventView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    apiFetch('/events/' + id)
      .then(data => {
        if (data) {
          setEvent(data);
        } else {
          setError('Event not found.');
        }
      })
      .catch(err => {
        console.error("Failed to load event:", err);
        setError('Failed to load the event details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="single-event-loading bg-black">
        <div className="loader-pulse"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="single-event-error bg-black">
        <div className="container">
          <h2>Oops!</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/events')} className="btn btn-primary">
            <ArrowLeft size={18} /> Back to Events
          </button>
        </div>
      </div>
    );
  }

  // Strip trailing 'Z' to parse local date properly
  const parseLocalDate = (str) => {
    if (!str) return null;
    return new Date(str.replace(/Z$/, ''));
  };

  const d = parseLocalDate(event.event_date);
  const dateFormatted = d ? d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : '-';
  const timeFormatted = d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-';

  return (
    <article className="single-event bg-black">
      {/* ─── HERO SECTION ─── */}
      <div className="single-event-hero">
        <div className="hero-parallax-bg" style={{ backgroundImage: `url(${event.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80'})` }}></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-content">
          <Link to="/events" className="back-link">
            <ArrowLeft size={16} /> Back to Events
          </Link>
          
          <div className="hero-tags">
            <span className="hero-meta"><Calendar size={14} /> {dateFormatted}</span>
            <span className="hero-meta"><Clock size={14} /> {timeFormatted}</span>
            <span className="hero-meta"><MapPin size={14} /> {event.location || 'TBA'}</span>
          </div>
          
          <h1 className="hero-title">{event.title}</h1>
        </div>
      </div>

      {/* ─── CONTENT SECTION ─── */}
      <div className="container single-event-content-wrapper">
        <div className="single-event-glass-container">
          
          <div className="event-details-grid">
            <div className="event-main-content">
              <h3>About this Event</h3>
              <div className="rich-text-content">
                <p style={{ whiteSpace: 'pre-line' }}>{event.description || "No description available for this event."}</p>
              </div>
            </div>
            
            <div className="event-sidebar">
              <div className="sidebar-card">
                <h4>Event Details</h4>
                <ul className="sidebar-meta-list">
                  <li>
                    <Calendar size={18} className="meta-icon" />
                    <div>
                      <strong>Date</strong>
                      <span>{dateFormatted}</span>
                    </div>
                  </li>
                  <li>
                    <Clock size={18} className="meta-icon" />
                    <div>
                      <strong>Time</strong>
                      <span>{timeFormatted}</span>
                    </div>
                  </li>
                  <li>
                    <MapPin size={18} className="meta-icon" />
                    <div>
                      <strong>Location</strong>
                      <span>{event.location || 'TBA'}</span>
                    </div>
                  </li>
                  <li>
                    <Users size={18} className="meta-icon" />
                    <div>
                      <strong>Capacity</strong>
                      <span>{event.capacity || 'Unlimited'} guests</span>
                    </div>
                  </li>
                </ul>

                {event.registration_link && (
                  <a href={event.registration_link} target="_blank" rel="noreferrer" className="btn btn-primary full-width-btn" style={{ marginTop: '24px' }}>
                    Register Now
                  </a>
                )}
              </div>

              <div className="sidebar-card share-card">
                <h4>Share this Event</h4>
                <p>Invite your friends and colleagues.</p>
                <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success('Event link copied to clipboard!'); }} className="share-btn-full">
                  <Share2 size={16} /> Copy Share Link
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </article>
  );
};

export default SingleEventView;
