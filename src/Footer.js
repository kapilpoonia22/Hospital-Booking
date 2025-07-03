import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Inquiry Box */}
        <div className="footer-inquiry">
          <h3>Have an Inquiry ?</h3>
          <p>Just submit your details and we will call you shortly</p>
          <input type="text" placeholder="Your Name" />
          <input type="tel" placeholder="Phone Number" />
          <button>SUBMIT</button>
        </div>

        {/* Info Links */}
        <div className="footer-links">
          <div>
            <h4>About Us</h4>
            <ul>
              <li>About Hospital</li>
              <li>Core Team</li>
              <li>Gallery</li>
              <li>Press Media</li>
            </ul>
          </div>
          <div>
            <h4>Patient Care & Service</h4>
            <ul>
              <li>Services</li>
              <li>Facilities</li>
              <li>Insurance & TPA</li>
              <li>Rights & Guidelines</li>
              <li>FAQs</li>
              <li>Patient Stories</li>
            </ul>
          </div>
          <div>
            <h4>Stay Healthy</h4>
            <ul>
              <li>Specialities</li>
              <li>Find a Doctor</li>
              <li>Health Check-Up</li>
            </ul>
          </div>
          <div>
            <h4>Other Links</h4>
            <ul>
              <li>Career</li>
              <li>Eye Hospital</li>
              <li>Location</li>
              <li>OPD Source</li>
              <li>CAMP</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              📍 Sector-C, Ganganagar,<br /> Ganganagar (Raj.)
            </p>
            <p>📞 0145 2970501, 2970502, +91 97795-66834</p>
            <button className="call-button">Call Now 📞</button>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Terms & Conditions | Refund Policy | Privacy Policy</p>
        <p>© Kshetrapal Hospital. All rights reserved.</p>
        <p>Made with ❤️ by KAPIL BISHNOI</p>
      </div>
    </footer>
  );
};

export default Footer;
