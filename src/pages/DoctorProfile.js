// src/pages/DoctorProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);

  if (!doctor) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-left">
        <img src={doctor.image} alt={doctor.name} />
        <button className="download-btn">Download Profile</button>
      </div>

      <div className="profile-right">
        <h2>{doctor.name}</h2>
        <h4>{doctor.specialization}</h4>
        <p><strong>Experience:</strong> {doctor.experience || "15+ years"}</p>
        <p><strong>Gender:</strong> {doctor.gender || "Male"}</p>

        <div className="hospital-box">
          <h3>Select Hospital</h3>
          <label>
            <input type="radio" name="hospital" defaultChecked /> Metro Hospital, Noida
          </label>
          <label>
            <input type="radio" name="hospital" /> Metro Hospital, Delhi
          </label>
          <button className="book-btn">Book an Appointment</button>
        </div>

        <div className="opd-box">
          <h3>OPD Schedule</h3>
          <p>🕘 Monday to Saturday: 10AM – 4PM</p>
          <p>📍 Sector 11, Noida</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
