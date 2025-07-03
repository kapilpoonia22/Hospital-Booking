// src/pages/MyChart.js
import React, { useEffect, useState } from 'react';
import './MyChart.css';

const MyChart = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Dummy fetch simulation — replace with your backend endpoint
    const fetchData = async () => {
      const data = {
        name: 'Kapil Poonia',
        age: 29,
        gender: 'Male',
        email: 'kapil@example.com',
        appointments: [
          { date: '2025-07-01', doctor: 'Dr. Sharma', status: 'Completed' },
          { date: '2025-07-05', doctor: 'Dr. Verma', status: 'Upcoming' }
        ],
        prescriptions: [
          { medicine: 'Paracetamol', dosage: '500mg', frequency: '2x/day' },
          { medicine: 'Vitamin D3', dosage: '60k IU', frequency: 'Weekly' }
        ],
        labReports: [
          { test: 'Blood Test', date: '2025-06-29', result: 'Normal' },
          { test: 'X-Ray', date: '2025-06-25', result: 'Mild Infection' }
        ]
      };

      setTimeout(() => setPatientData(data), 1000);
    };

    fetchData();
  }, []);

  if (!patientData) return <div className="mychart-loading">📡 Loading MyChart...</div>;

  return (
    <div className="mychart-container">
      <h2>📊 MyChart - Personal Health Record</h2>

      <div className="profile-section">
        <h3>🧑‍⚕️ Patient Profile</h3>
        <p><strong>Name:</strong> {patientData.name}</p>
        <p><strong>Age:</strong> {patientData.age}</p>
        <p><strong>Gender:</strong> {patientData.gender}</p>
        <p><strong>Email:</strong> {patientData.email}</p>
      </div>

      <div className="section">
        <h3>📅 Appointments</h3>
        <ul>
          {patientData.appointments.map((a, i) => (
            <li key={i}>
              <span>{a.date}</span> - <strong>{a.doctor}</strong> ({a.status})
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>💊 Prescriptions</h3>
        <ul>
          {patientData.prescriptions.map((p, i) => (
            <li key={i}>
              <strong>{p.medicine}</strong> - {p.dosage} ({p.frequency})
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>🧪 Lab Reports</h3>
        <ul>
          {patientData.labReports.map((r, i) => (
            <li key={i}>
              <strong>{r.test}</strong> - {r.date} → <em>{r.result}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyChart;
