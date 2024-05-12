import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor="searchInput" className="form-label">Search by Title:</label>
            <input
                type="text"
                id="searchInput"
                className="form-control"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default Search;
