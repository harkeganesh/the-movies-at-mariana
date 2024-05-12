import React from 'react';

const Filter = ({ genres, selectedGenre, onGenreChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor="genreSelect" className="form-label">Filter by Genre:</label>
            <select
                id="genreSelect"
                className="form-select"
                value={selectedGenre}
                onChange={(e) => onGenreChange(e.target.value)}
            >
                <option value="">All Genres</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
