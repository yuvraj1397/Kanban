// src/data/api.js

export async function fetchTickets() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      return data.tickets; // Extract the 'tickets' array from the API response
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  