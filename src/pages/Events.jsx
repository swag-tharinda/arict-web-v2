import React from 'react';
import EventsComponent from '../components/Events';

const Events = () => {
  return (
    <div className="page-transition">
      {/* Page Header / Hero */}
      <div 
        className="events-page-header"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(10, 10, 10, 1)), url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
            Discover the Future
          </div>
          <h1 style={{ color: '#fff', marginBottom: '20px', fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: 1.1 }}>
            Unleash Your <br/><span style={{ color: 'var(--color-primary)' }}>Potential.</span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
            Join the Association of Rajarata ICT for groundbreaking symposiums, hands-on hackathons, and exclusive workshops. Connect with industry leaders and elevate your skills.
          </p>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={() => document.getElementById('events-grid').scrollIntoView({behavior: 'smooth'})}>
              Explore Events
            </button>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600, margin: 0, marginLeft: '20px' }}>
              ARICT <span style={{ margin: '0 8px', color: 'var(--color-primary)' }}>&gt;</span> Events
            </p>
          </div>
        </div>
      </div>

      {/* Grid Component */}
      <EventsComponent />
    </div>
  );
};

export default Events;
