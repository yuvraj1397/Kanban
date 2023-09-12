import React from 'react';

function FilterOptions({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) {
  return (
    <div className="filter-options">
      <div className="filter-group">
        <label>Group By:</label>
        <select
          value={groupingOption}
          onChange={(e) => setGroupingOption(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Sort By:</label>
        <select
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default FilterOptions;
