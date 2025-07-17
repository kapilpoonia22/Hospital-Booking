import React, { useState, useEffect } from 'react';
import './PayBill.css';

const PayBill = () => {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    method: '',
    transactionId: ''
  });

  const [payments, setPayments] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://hospital-backend-1-nxpm.onrender.com/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const result = await res.json();
    if (result.success) {
      alert("✅ Payment Success!");
      setForm({ name: '', amount: '', method: '', transactionId: '' });
      fetchPayments();
    } else {
      alert("❌ Payment Failed");
    }
  };

  const fetchPayments = async () => {
    const res = await fetch("http://localhost:8000/api/payments");
    const data = await res.json();
    setPayments(data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className="paybill-container">
      <h2>💳 Pay Your Hospital Bill</h2>

      <form className="bill-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Patient Name" value={form.name} onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Amount ₹" value={form.amount} onChange={handleChange} required />
        <select name="method" value={form.method} onChange={handleChange} required>
          <option value="">Select Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
          <option value="Cash">Cash</option>
        </select>
        <input type="text" name="transactionId" placeholder="Transaction ID" value={form.transactionId} onChange={handleChange} required />
        <button type="submit">Pay Now</button>
      </form>

      <h3>🧾 Recent Payments</h3>
      <table className="bill-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Transaction</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>₹{p.amount}</td>
              <td>{p.method}</td>
              <td>{p.transactionId}</td>
              <td>{new Date(p.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayBill;
