// src/components/Movie/MovieDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});
  const movieId = match.params.id;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=d75e110c&i=${movieId}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className="movie-details">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <ul>
        <li>Year: {movie.Year}</li>
        <li>Rated: {movie.Rated}</li>
        <li>Released: {movie.Released}</li>
        <li>Runtime: {movie.Runtime}</li>
        <li>Genre: {movie.Genre}</li>
        <li>Director: {movie.Director}</li>
        <li>Writer: {movie.Writer}</li>
        <li>Actors: {movie.Actors}</li>
        <li>Plot: {movie.Plot}</li>
      </ul>
    </div>
  );
};

export default MovieDetails;
