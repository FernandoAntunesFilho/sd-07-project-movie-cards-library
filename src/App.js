import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';

function App() {
  return (
    <center>
      <div className="App">
        <Header />
        <MovieList movies={Movies} />
      </div></center>
  );
}

export default App;
