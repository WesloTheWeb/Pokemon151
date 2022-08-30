import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';

function App() {

  const [pokemonNumber, setPokemonNumber] = useState(9);

  const handleSearch = (input) => {
    setPokemonNumber(input.target.value);
  };

  useEffect(() => {
    // TODO: Breakdown how Fetch works and why each code.
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((foo) => foo.json())
      .then((json) => {
        console.log(json);
      });
  }, [pokemonNumber]);

  return (
    <>
      <Header />
      <SearchBar search={handleSearch} />
      <PokemonDisplay />
      <Footer />
    </>
  );
}

export default App;
