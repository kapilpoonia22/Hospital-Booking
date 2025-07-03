// src/components/Research.js
import React from 'react';
import './Research.css';

const Research = () => {
  return (
    <section className="research-section">
      <div className="research-header">
        <h1>🔬 Research & Innovation</h1>
        <p>
          Our institution is committed to pioneering medical research and developing
          next-generation healthcare solutions that transform lives.
        </p>
      </div>

      <div className="research-content">
        <div className="research-left">
          <h2>Areas of Focus</h2>
          <ul>
            <li>🧬 Cancer Biology & Treatment Innovation</li>
            <li>🧠 Neuroscience & Brain Mapping</li>
            <li>🦠 Virology, Infectious Diseases & Pandemic Control</li>
            <li>👶 Pediatric & Neonatal Healthcare Research</li>
            <li>💊 Drug Development & Clinical Trials</li>
          </ul>

          <h2>Why We Stand Out?</h2>
          <p>
            With 25+ dedicated labs, international collaborations, and AI-integrated research
            centers, we empower researchers and clinicians to solve real-world health challenges.
          </p>

          <button className="research-btn">Explore Publications</button>
        </div>

        <div className="research-right">
          <div className="research-box">
            <h3>150+</h3>
            <p>Peer-Reviewed Publications</p>
          </div>
          <div className="research-box">
            <h3>50+</h3>
            <p>Ongoing Clinical Trials</p>
          </div>
          <div className="research-box">
            <h3>20+</h3>
            <p>Research Labs & Centers</p>
          </div>
          <div className="research-box">
            <h3>30+</h3>
            <p>Patents Filed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
