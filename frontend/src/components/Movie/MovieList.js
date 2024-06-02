// src/components/Movie/MovieList.js
import React, { useEffect, useContext, useState } from 'react';
import MovieContext from '../../context/MovieContext';
import AuthContext from '../../context/AuthContext';

const MovieList = () => {
  const [listName, setListName] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const movieContext = useContext(MovieContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    movieContext.getLists();
  }, []);

  const onChangeName = (e) => setListName(e.target.value);
  const onChangePublic = (e) => setIsPublic(e.target.checked);

  const onSubmit = async (e) => {
    e.preventDefault();
    await movieContext.createList({ name: listName, isPublic });
    setListName('');
    setIsPublic(false);
  };

  return (
    <div className="list-container">
      <h1>Your Movie Lists</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listName"
          value={listName}
          onChange={onChangeName}
          placeholder="New List Name"
          required
        />
        <label>
          <input type="checkbox" checked={isPublic} onChange={onChangePublic} />
          Public
        </label>
        <input type="submit" value="Create List" className="btn btn-primary btn-block" />
      </form>
      <div className="lists">
        {movieContext.lists.map(list => (
          <div key={list._id} className="list">
            <h2>{list.name}</h2>
            <p>{list.isPublic ? 'Public' : 'Private'}</p>
            <ul>
              {list.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
