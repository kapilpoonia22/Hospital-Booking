// src/pages/FindTrial.js
import React, { useState, useEffect } from "react";
import './FindTrial.css';

const FindTrial = () => {
  const [trials, setTrials] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/trials")
      .then(res => res.json())
      .then(data => setTrials(data))
      .catch(err => console.error("Error fetching trials:", err));
  }, []);

  const filteredTrials = trials.filter((trial) =>
    trial.condition.toLowerCase().includes(search.toLowerCase()) ||
    trial.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="trial-container">
      <h2>🔬 Find a Clinical Trial</h2>
      <input
        type="text"
        className="trial-search"
        placeholder="Search by condition or keyword"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="trial-grid">
        {filteredTrials.length > 0 ? (
          filteredTrials.map((trial) => (
            <div className="trial-card" key={trial._id}>
              <h3>{trial.title}</h3>
              <p><strong>Condition:</strong> {trial.condition}</p>
              <p><strong>Location:</strong> {trial.location}</p>
              <p><strong>Start Date:</strong> {trial.startDate}</p>
              <a href={trial.moreInfo} target="_blank" rel="noreferrer" className="trial-btn">
                View Details
              </a>
            </div>
          ))
        ) : (
          <p className="no-data">No trials found.</p>
        )}
      </div>
    </div>
  );
};

export default FindTrial;
