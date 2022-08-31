import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';

function App() {

  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [data, setData] = useState({});

  const handleSearch = (input) => {
    // setTimeout(setPokemonNumber(input.target.value), 2000);
    let value = input.target.value;
    setPokemonNumber(value);

    if (pokemonNumber > 151) {
      setPokemonNumber(151);
    }

    if (pokemonNumber < 1) {
      setPokemonNumber(0);
    }

    console.log(pokemonNumber)
  };

  useEffect(() => {
    // TODO: Breakdown how Fetch works and why each code.
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setData({ results });
      });

  }, [pokemonNumber]);

  return (
    <>
      <Header />
      <section className="controls">
        <SearchBar search={handleSearch} />
        <Button name='Search' />
      </section>
      <PokemonDisplay {...data} />
      <Footer />
    </>
  );
}

export default App;