import React from 'react';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';
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
