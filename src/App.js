import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList moviesData={data} />
    </div>
  );
}

export default App;
