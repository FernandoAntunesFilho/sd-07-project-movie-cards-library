import React from 'react';
import Header from '../src/components/Header';
import MovieList from '../src/components/MovieList';
import movies from '../src/data';
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
