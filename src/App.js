import React from 'react';
import movies from './data.js';
import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
