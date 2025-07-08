// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://hospital-backend-1-nxpm.onrender.com/api/doctors')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const viewProfile = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Our Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc._id} className="doctor-card">
            <img src={doc.image} alt="Doctor" className="doctor-image" />
            <h4 className="doctor-name">Dr  {doc.name}</h4>
            <p className="doctor-spec">{doc.specialization}</p>
            <button onClick={() => viewProfile(doc._id)} className="view-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
