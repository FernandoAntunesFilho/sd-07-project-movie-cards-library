import React from 'react';
import './App.css';
import listMovies from './data'
import MovieList from './components/MovieList'
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      <Header />
      <MovieList movies={listMovies} />
    </div>
  );
}

export default App;
