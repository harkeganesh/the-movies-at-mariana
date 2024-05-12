import React from 'react';

const MovieTable = ({ movies }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead class='thead-dark'>
                            <tr>
                                <th>Title</th>
                                <th>Poster</th>
                                <th>Genre(s)</th>
                                <th>Rating</th>
                                <th>Year Release</th>
                                <th>Metacritic Rating</th>
                                <th>Runtime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.title}</td>
                            <td>
                                <img src={movie.poster} alt={movie.title} style={{ width: '100px' }} className="img-thumbnail" />
                            </td>
                            <td>{Array.isArray(movie.genre)
                                ? movie.genre.join(', ')
                                : movie.genre}</td>
                            <td>{movie.rated}</td>
                            <td>{new Date(movie.released).getFullYear()}</td>
                            <td>{movie.meta_score}</td>
                            <td>{movie.runtime}</td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MovieTable;
