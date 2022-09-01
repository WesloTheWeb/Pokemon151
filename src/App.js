import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';

function App() {

  const [pokemonNumber, setPokemonNumber] = useState('');
  const [data, setData] = useState({});

  const handleSearch = (e) => {
    // setTimeout(setPokemonNumber(input.target.value), 2000);
    let value = e.target.value;
    const limit = 3

    setPokemonNumber(value.slice(0, limit));
    console.log(pokemonNumber)
    // input.preventDefault();
  };

  if (pokemonNumber > 151) {
    setPokemonNumber(151);
  }

  if (pokemonNumber < 1) {
    setPokemonNumber(1);
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setData(results);
      });

  }, [pokemonNumber]);

  return (
    <>
      <Header />
      <section className="controls">
        <SearchBar
          search={handleSearch}
          setPokeNum={setPokemonNumber}
          pokeNum={pokemonNumber}
        />
      </section>
      <PokemonDisplay data={data} />
      <Footer />
    </>
  );
}

export default App;