import { createContext, useReducer } from 'react';
import axios from 'axios';

const MovieContext = createContext();

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return { ...state, movies: action.payload, loading: false };
    case 'CREATE_LIST':
      return { ...state, lists: [...state.lists, action.payload], loading: false };
    case 'GET_LISTS':
      return { ...state, lists: action.payload, loading: false };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const initialState = { movies: [], lists: [], loading: true };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const searchMovies = async text => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=d75e110c&s=${text}`);
    dispatch({ type: 'SEARCH_MOVIES', payload: res.data.Search });
  };

  const createList = async list => {
    const res = await axios.post('/api/movies/create', list);
    dispatch({ type: 'CREATE_LIST', payload: res.data });
  };

  const getLists = async () => {
    const res = await axios.get('/api/movies/user');
    dispatch({ type: 'GET_LISTS', payload: res.data });
  };

  return (
    <MovieContext.Provider value={{ ...state, searchMovies, createList, getLists }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
