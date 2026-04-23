import React from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact bg-black section-padding">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-form-section">

            <div className="section-header">
              <h2>Join Us In Creating <br/>Remarkable Impact</h2>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name *" required />
                <input type="text" placeholder="Last Name *" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email *" required />
                <input type="tel" placeholder="Phone Number *" required />
              </div>
              <input type="text" placeholder="Subject *" required />
              <textarea placeholder="Message *" rows="4" required></textarea>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-item">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Contact</h3>
                  <p>hello@arict.com<br/>+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Open Hours</h3>
                  <p>Mon - Fri: 9:00 - 18:00<br/>Sat - Sun: Closed</p>
                </div>
              </div>

              <div className="social-links-box">
                <span>Stay Connected</span>
                <div className="social-icons">
                  <a href="#">Fb</a>
                  <a href="#">Tw</a>
                  <a href="#">In</a>
                  <a href="#">Be</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
