import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import moviesData from '../src/data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={moviesData} />
    </div>
  );
}

export default App;
