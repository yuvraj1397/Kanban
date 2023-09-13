import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Import the FaUser icon from react-icons library

function Ticket({ id, title, priority, status, assignedTo }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`ticket ${expanded ? 'expanded' : ''}`}>
      <div className="ticket-header">
        <span className="ticket-number">{id}</span>
        <FaUser className="profile-icon" /> {/* Display the user profile icon */}
      </div>
      <div className="ticket-content">
        {expanded ? (
          <div className="ticket-details">
            <h3>{title}</h3>
            <p>Priority: {priority}</p>
            <p>Status: {status}</p>
            <p>Assigned to: {assignedTo}</p>
          </div>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <button className="expand-button" onClick={toggleExpand}>
        {expanded ? 'Hide' : '...'}
      </button>
    </div>
  );
}

export default Ticket;
