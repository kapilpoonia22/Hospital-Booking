import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading" data-aos="fade-down">About Our Hospital</h2>
        <p className="about-description" data-aos="fade-up">
          Welcome to our hospital, where compassionate care meets modern technology.
          We are committed to providing the highest quality medical services through
          world-class doctors and advanced facilities. Whether you're looking for preventive
          care or specialized treatment, we're here for your health every step of the way.
        </p>

        <div className="about-cards">
          <div className="about-card" data-aos="zoom-in">
            <h3>🏥 24x7 Emergency</h3>
            <p>Our emergency department is open all day, every day, with fully equipped trauma care.</p>
          </div>
          <div className="about-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>👩‍⚕️ Expert Doctors</h3>
            <p>Our specialists are highly experienced and committed to excellence in patient care.</p>
          </div>
          <div className="about-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>🧪 Advanced Labs</h3>
            <p>State-of-the-art diagnostic laboratories with quick & accurate test results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
