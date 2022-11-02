import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';
import IDReader from './components/IDReader/IDReader';

function App() {

  const [pokemonNumber, setPokemonNumber] = useState("");
  const [data, setData] = useState({});
  const [error, isError] = useState(false);

  const handleChange = (evnt) => {
    let number = evnt.target.value;
    const lastChar = number[number.length - 1];
    const regEx = /\D/g;

    // if (isNaN(parseInt(lastChar))) return;
    setPokemonNumber(number.replaceAll(regEx, ""));
    console.log(pokemonNumber);

    if (number > 151) {
      setPokemonNumber(151);
      isError(true);
    } else {
      isError(false);
    };
  };

  if (pokemonNumber < 1) {
    setPokemonNumber(1);
  };

  const handleSearch = (evnt) => {
    evnt.preventDefault();
    let num = evnt.target.value;
    const regEx = /\D/g;

    // setPokemonNumber(value.slice(0, limit).replaceAll(regEx, ''));
    setPokemonNumber(num.replaceAll(regEx, ""));

    // console.log(pokemonNumber)

    if (num > 151) {
      setPokemonNumber(151);
      isError(true);
    } else {
      isError(false);
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((results) => {
        // console.log(results);
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
          search={handleChange}
          pokeNum={pokemonNumber}
        />
      </section>
      <PokemonDisplay data={data} />
      <Footer />
    </>
  );
}

export default App;