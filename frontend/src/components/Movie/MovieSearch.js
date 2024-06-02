import React, { useState, useContext } from 'react';
import MovieContext from '../../context/MovieContext';

const MovieSearch = () => {
  const [text, setText] = useState('');
  const movieContext = useContext(MovieContext);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    await movieContext.searchMovies(text);
    setText('');
  };

  return (
    <div className="search-container" >
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
      <h1>Search Movies</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" value={text} onChange={onChange} placeholder="Search Movies..." style={{text:"8px",color:"blue"}}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      </div>
      </div>
      <div className="movies" style={{justifyContent:"center",margin:"44px"}}>
        {movieContext.movies.map(movie => (
          <div key={movie.imdbID} className="movie">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default MovieSearch;
