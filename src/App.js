import Rating from './components/Rating'
import MovieList from './components/MovieList'
import movies from './data';
import Header from './components/Header'
import React from 'react';
import './App.css';




function App() {  
  return (
    <div className="App">
      <Header/>
      <MovieList movies={movies} />
      <Rating/>
    </div>
  );
}

export default App;
