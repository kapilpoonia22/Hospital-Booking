import React, { useState, useEffect } from "react";
import './BookAppointment.css';

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    doctor: "",
    date: "",
    time: ""
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("https://hospital-backend-1-nxpm.onrender.com/api/doctors");
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error("Failed to fetch doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://hospital-backend-1-nxpm.onrender.com/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    if (result.success) {
      alert("✅ Appointment Booked Successfully!");
      setForm({ name: "", mobile: "", address: "", doctor: "", date: "", time: "" });
    } else {
      alert("❌ Booking failed!");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc.name}>
              {doc.name}
            </option>
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
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
