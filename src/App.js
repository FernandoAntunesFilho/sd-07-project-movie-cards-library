import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
/* Nesse projeto eu tive ajuda do site do curso Trybe:
  https://app.betrybe.com/course

  Da Documentação do React:
  https://pt-br.reactjs.org/docs/getting-started.html

  E tive uma última ajuda em relação
  ao PropTypes porque o eslint
  não deixava passar... (mesmo o console
  não dando warning):
  https://github.com/yannickcr/eslint-plugin-react/issues/2079#issuecomment-537868142
  Foi o comentário do @LukaGiorgadze.
*/
