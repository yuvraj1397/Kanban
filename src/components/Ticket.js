import React, { useState } from 'react';

function Ticket({ title, priority, status, assignedTo, iconName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h3>{title}</h3>
        <button className="expand-button" onClick={toggleExpansion}>
          {isExpanded ? '-' : '...'}
        </button>
      </div>
      {isExpanded && (
        <div className="ticket-details">
          <p>Priority: {priority}</p>
          <p>Status: {status}</p>
          <p>Assigned to: {assignedTo}</p>
        </div>
      )}
    </div>
  );
}

export default Ticket;
