import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';
import IDReader from './components/IDReader/IDReader';

function App() {

  const [pokemonNumber, setPokemonNumber] = useState('');
  const [data, setData] = useState({});
  const [error, isError] = useState(false);

  const handleSearch = (e) => {
    const limit = 3;
    let value = e.target.value;

    if (value > 151) {
      isError(true);
    } else {
      isError(false);
    }
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
      <IDReader 
        error={error}
        id={pokemonNumber} 
      />
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