// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch('http://localhost:8000/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const viewProfile = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="home-container">
      <h2 className="home-title" data-aos="fade-down">Meet Our Specialists</h2>
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div
            key={doc._id}
            className="doctor-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={doc.image} alt={doc.name} className="doctor-image" />
            <h4 className="doctor-name">{doc.name}</h4>
            <p className="doctor-spec">{doc.specialization}</p>
            <button onClick={() => viewProfile(doc._id)} className="view-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
