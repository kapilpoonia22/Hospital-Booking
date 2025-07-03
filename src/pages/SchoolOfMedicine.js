import React, { useEffect } from 'react';
import './SchoolOfMedicine.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'MBBS & PG Programs',
    description: 'Undergraduate and Postgraduate medical programs with globally aligned curriculum.',
  },
  {
    title: 'Advanced Labs',
    description: 'Hands-on learning with smart labs equipped with modern simulation tools.',
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from world-class doctors and academic professionals with decades of experience.',
  },
  {
    title: 'Research Focused',
    description: 'Encouraging students to participate in international-level clinical research.',
  },
  {
    title: 'Global Partnerships',
    description: 'Tie-ups with universities and hospitals for exchange programs and internships.',
  },
  {
    title: '24/7 Medical Library',
    description: 'Access to thousands of journals, case studies, and AI-powered medical resources.',
  },
  {
    title: 'Hostel & Campus',
    description: 'Spacious campus with eco-friendly environment, hostels, cafeteria and gym.',
  },
  {
    title: 'Scholarship Opportunities',
    description: 'Merit and need-based scholarships to support future medical leaders.',
  },
];

const SchoolOfMedicine = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="school-container">
      <div className="school-top" data-aos="fade-down">
        <h2>🏥 School of Medicine</h2>
        <p>
          Our School of Medicine is dedicated to excellence in medical education,
          cutting-edge research, and compassionate patient care. We offer a diverse range
          of programs designed to train future healthcare leaders.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card" data-aos="zoom-in" data-aos-delay={idx * 100}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolOfMedicine;
