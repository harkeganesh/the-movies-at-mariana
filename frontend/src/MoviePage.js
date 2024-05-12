import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieTable from './MovieTable';
import Filter from './Filter';
import Search from './Search';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8000/movies/get_movies/');
            setMovies(response.data);
            const allGenres = response.data.flatMap(movie => movie.genre.split(','));
            const uniqueGenres = Array.from(new Set(allGenres));
            setGenres(uniqueGenres);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleSearchChange = (search) => {
        setSearchTerm(search);
    };

    const filteredMovies = selectedGenre
        ? movies.filter(movie => movie.genre.includes(selectedGenre))
        : movies;

    const searchedMovies = searchTerm
        ? filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : filteredMovies;

    return (
        <div className="container">
            <h1 className="my-4">The Movies@Mariana</h1>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Filter genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
            <MovieTable movies={searchedMovies} />
        </div>
    );
};

export default MoviesPage;
