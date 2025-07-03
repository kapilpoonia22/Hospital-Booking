import React from 'react';
import './PatientCare.css';

const PatientCare = () => {
  return (
    <div className="patientcare-container">
      <div className="patientcare-header">
        <h2>💙 Patient Care & Services</h2>
        <p>
          At our hospital, we are committed to providing compassionate, high-quality care
          that addresses the unique needs of every patient. Our services span across diagnosis,
          treatment, recovery, and ongoing support to ensure your health and well-being.
        </p>
      </div>

      <div className="care-boxes">
        <div className="care-card">
          <h3>🏥 Inpatient & Outpatient Services</h3>
          <p>Comprehensive care with modern wards, ICU & day-care treatment facilities.</p>
        </div>

        <div className="care-card">
          <h3>💊 Pharmacy & Medication</h3>
          <p>24/7 pharmacy with expert pharmacists to guide your prescriptions safely.</p>
        </div>

        <div className="care-card">
          <h3>🧪 Diagnostics & Lab</h3>
          <p>Advanced radiology, pathology, and diagnostic testing for accurate results.</p>
        </div>

        <div className="care-card">
          <h3>🚑 Emergency Services</h3>
          <p>Round-the-clock ambulance and emergency response team available at call.</p>
        </div>

        <div className="care-card">
          <h3>🧘‍♂️ Recovery & Wellness</h3>
          <p>Post-treatment rehabilitation, yoga therapy, physiotherapy, and counseling.</p>
        </div>

        <div className="care-card">
          <h3>👨‍👩‍👧‍👦 Family Support Services</h3>
          <p>Comfortable waiting areas, visitor support, billing guidance, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCare;
