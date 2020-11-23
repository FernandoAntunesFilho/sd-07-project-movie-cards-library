import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList movie={movies}/>
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
