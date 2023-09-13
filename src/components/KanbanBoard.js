
import React, { useState } from 'react';
import Ticket from './Ticket';
import AddTicketForm from './AddTicketForm';


function KanbanBoard({ tickets, groupingOption, sortingOption }) {
  // Grouping logic
  const groupedTickets = {};

  if (groupingOption === 'status') {
    // Group by status
    tickets.forEach((ticket) => {
      if (!groupedTickets[ticket.status]) {
        groupedTickets[ticket.status] = [];
      }
      groupedTickets[ticket.status].push(ticket);
    });
  } else if (groupingOption === 'user') {
    // Group by user
    tickets.forEach((ticket) => {
      if (!groupedTickets[ticket.userId]) {
        groupedTickets[ticket.userId] = [];
      }
      groupedTickets[ticket.userId].push(ticket);
    });
  } else if (groupingOption === 'priority') {
    // Group by priority
    tickets.forEach((ticket) => {
      if (!groupedTickets[ticket.priority]) {
        groupedTickets[ticket.priority] = [];
      }
      groupedTickets[ticket.priority].push(ticket);
    });
  }

  // Sorting logic
  if (sortingOption === 'priority') {
    for (const group in groupedTickets) {
      groupedTickets[group].sort((a, b) => b.priority - a.priority);
    }
  } else if (sortingOption === 'title') {
    for (const group in groupedTickets) {
      groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const addNewTicket = (newTicketData) => {
    // Add your logic to handle the new ticket here
    console.log('New Ticket Data:', newTicketData);
    closeForm(); // Close the form after adding the ticket (you can customize this behavior)
  };

  return (
    <div className="kanban-board">
      
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          <button className="add-button" onClick={openForm}>
          +
        </button>
        
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} {...ticket} />
          ))}
        </div>
      ))}
      {isFormOpen && <AddTicketForm onSubmit={addNewTicket} onClose={closeForm} />}
    </div>
  );
}

export default KanbanBoard;