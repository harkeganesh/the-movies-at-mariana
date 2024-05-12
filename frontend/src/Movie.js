import React from 'react';
import './styles.css';

function Movie({ title, poster, genres, rating, year, metacriticRating, runtime }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie-details">
                <h2>{title}</h2>
                <p>Genres: {genres ? genres.join(', ') : 'N/A'}</p>
                <p>Rating: {rating}</p>
                <p>Year: {year}</p>
                <p>Metacritic Rating: {metacriticRating}</p>
                <p>Runtime: {runtime}</p>
            </div>
        </div>
    );
}

export default Movie;
