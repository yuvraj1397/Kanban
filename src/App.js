import React, { useState, useEffect } from 'react';
import './App.css'; 
import KanbanBoard from './components/KanbanBoard';
import FilterOptions from './components/FilterOptions';
import { getSavedViewState, saveViewState } from './utils/localStorage';
import { fetchTickets } from './data/api';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const savedState = getSavedViewState();
    if (savedState) {
      setGroupingOption(savedState.groupingOption);
      setSortingOption(savedState.sortingOption);
    }
  }, []);

  useEffect(() => {
    saveViewState({ groupingOption, sortingOption });
  }, [groupingOption, sortingOption]);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <FilterOptions
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <KanbanBoard
        tickets={tickets}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
      />
    </div>
  );
}

export default App;
