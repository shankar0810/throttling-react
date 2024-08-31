import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <p>Search term: <span className="highlight">{searchTerm}</span></p>
      <p>Debounced search term: <span className="highlight">{debouncedSearchTerm}</span></p>
    </div>
  );
}

export default DebouncedSearch;