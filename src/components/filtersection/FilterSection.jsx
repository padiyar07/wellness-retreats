import React from 'react';

const FilterSection = ({ filters, setFilters }) => {
  const handleDateChange = (e) => {
    setFilters({ ...filters, date: e.target.value });
  };

  const handleTypeChange = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  return (
    <div className="filter-section">
      <select value={filters.date} onChange={handleDateChange}>
        <option value="">Select Date</option>
        <option value="2024-08-01">August 1, 2024</option>
        <option value="2024-09-01">September 1, 2024</option>
      </select>
      <select value={filters.type} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
    </div>
  );
};

export default FilterSection;

