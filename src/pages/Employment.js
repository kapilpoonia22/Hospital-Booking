import React from 'react';
import './Employment.css';

const Employment = () => {
  return (
    <div className="employment-section">
      <div className="employment-header">
        <h1>🏥 Careers & Employment</h1>
        <p>Join our team and make a difference in healthcare!</p>
      </div>

      <div className="employment-content">
        <div className="job-card">
          <h3>👩‍⚕️ Staff Nurse</h3>
          <p>Provide patient care and assist doctors. Required: B.Sc. Nursing.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>🧑‍⚕️ Resident Doctor</h3>
          <p>Handle ward duties and patient consultations. Required: MBBS/MD.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>💻 Medical Receptionist</h3>
          <p>Manage appointments and front desk operations. Required: Any Graduate.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>🧪 Lab Technician</h3>
          <p>Perform diagnostic tests and maintain equipment. Required: DMLT/BMLT.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>📊 HR Executive</h3>
          <p>Handle recruitment, payroll and staff management. Required: MBA HR.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>🧼 Housekeeping Staff</h3>
          <p>Maintain cleanliness and hygiene. No formal education required.</p>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Employment;
