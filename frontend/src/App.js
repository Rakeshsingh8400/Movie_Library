// src/App.js
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MovieSearch from './components/Movie/MovieSearch';
import MovieList from './components/Movie/MovieList';
import setAuthToken from './utils/setAuthToken';
import AuthContext from './context/AuthContext';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, [authContext]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MovieSearch />} />
        <Route path="/lists" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;
