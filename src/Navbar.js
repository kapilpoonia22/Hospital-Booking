import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="nav-logo">
          <span>HealthCare Medicine</span>
        </div>

        <div className="nav-icons">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
            ☰ Menu
          </button>
          <button className="search-button">🔍 Search</button>
        </div>
      </div>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/book">Book</Link>
              <Link to="/patientcare">Patient Care</Link>
              <Link to="/research">Research</Link>
              <Link to="/about">About</Link>
              <Link to="/schoolofmedicine">School of Medicine</Link>
            </div>
            <div>
              <Link to="/mychart">MyChart</Link>
              <Link to="/scheduleAppointment">Schedule Appointment</Link>
              <Link to="/finddoctor">Find a Doctor</Link>
              <Link to="/findtrial">Find a Clinical Trial</Link>
              <Link to="/pay-bill">Pay Bill</Link>
              <Link to="/employment">Employment</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
