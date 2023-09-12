import React, { useState } from 'react';

function AddTicketForm({ onSubmit, onClose }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    // Perform data validation and submit the ticket data
    const ticketData = { title, priority, status };
    onSubmit(ticketData);
    
    // Clear form fields and close the modal
    setTitle('');
    setPriority('');
    setStatus('');
    onClose();
  };

  return (
    <div className="add-ticket-form">
      <h2>Add New Ticket</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddTicketForm;
