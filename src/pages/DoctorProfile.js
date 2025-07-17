// src/pages/DoctorProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DoctorProfile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch(`https://hospital-backend-1-nxpm.onrender.com/api/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [id]);

  if (!doctor) return <p style={{ textAlign: 'center', padding: '50px' }}>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-left" data-aos="fade-right">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        <button className="download-btn">⬇️ Download Profile</button>
      </div>

      <div className="profile-right" data-aos="fade-left">
        <h2 className="doc-name">{doctor.name}</h2>
        <h4 className="doc-spec">{doctor.specialization}</h4>

        <div className="doc-details">
          <p><strong>🧑‍⚕️ Experience:</strong> {doctor.experience || "15+ years"}</p>
          <p><strong>⚧ Gender:</strong> {doctor.gender || "Male"}</p>
        </div>

        <div className="glass-box hospital-box">
          <h3>🏥 Select Hospital</h3>
          <label>
            <input type="radio" name="hospital" defaultChecked /> Metro Hospital, Noida
          </label>
          <label>
            <input type="radio" name="hospital" /> Metro Hospital, Delhi
          </label>
          <button className="book-btn">📅 Book an Appointment</button>
        </div>

        <div className="glass-box opd-box">
          <h3>🩺 OPD Schedule</h3>
          <p>🕘 Monday to Saturday: 10AM – 4PM</p>
          <p>📍 Sector 11, Noida</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
