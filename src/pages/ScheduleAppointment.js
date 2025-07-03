// src/pages/ScheduleAppointment.js
import React, { useEffect, useState } from 'react';
import './ScheduleAppointment.css';

const ScheduleAppointment = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    date: '',
    time: '',
    doctor: '',
    reason: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Replace this with actual API endpoint
    fetch('http://localhost:8000/api/doctors')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    if (result.success) {
      setSubmitted(true);
      setForm({ name: '', mobile: '', date: '', time: '', doctor: '', reason: '' });
    } else {
      alert('❌ Failed to book appointment.');
    }
  };

  return (
    <div className="schedule-container">
      <h2>📆 Schedule an Appointment</h2>

      {submitted && <p className="success-msg">✅ Appointment Scheduled Successfully!</p>}

      <form onSubmit={handleSubmit} className="schedule-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <select name="doctor" value={form.doctor} onChange={handleChange} required>
          <option value="">Select Doctor</option>
          {doctors.map(doc => (
            <option key={doc._id} value={doc.name}>{doc.name}</option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason for visit (optional)"
          value={form.reason}
          onChange={handleChange}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
