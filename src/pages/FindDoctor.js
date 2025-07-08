// src/pages/FindDoctor.js
import React, { useEffect, useState } from 'react';
import './FindDoctor.css';
import { Link } from 'react-router-dom';

const FindDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://hospital-backend-1-nxpm.onrender.com/api/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error('Error fetching doctors:', err));
  }, []);

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="find-doc-container">
      <h2>🔍 Find a Doctor</h2>
      <input
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div className="doctor-card" key={doc._id}>
              <img src={doc.image} alt={doc.name} className="doc-img" />
              <h4>{doc.name}</h4>
              <p>{doc.specialization}</p>
              <Link to={`/doctor/${doc._id}`} className="view-profile-btn">
                View Profile
              </Link>
            </div>
          ))
        ) : (
          <p className="no-result">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
