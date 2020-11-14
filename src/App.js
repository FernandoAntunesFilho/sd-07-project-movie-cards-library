import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieData from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={MovieData}/>
    </div>
  );
}

export default App;
