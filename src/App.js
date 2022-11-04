import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import Footer from './components/Footer/Footer';
import IDReader from './components/IDReader/IDReader';


// TODO: Prep and clean the code optimize and refactor.
// TODO: Mobile responsive media queries.
function App() {

  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [data, setData] = useState({});
  const [error, isError] = useState(false);

  const handleChange = (evnt) => {
    let number = evnt.target.value;
    const regEx = /\D/g;

    setPokemonNumber(number.replaceAll(regEx, ""));

    if (number > 151) {
      setPokemonNumber(151);
      isError(true);
    } else {
      isError(false);
    };
  };

  if (pokemonNumber <= 0) {
    setPokemonNumber(1);
  };

  const moveUp = () => {
    return setPokemonNumber(pokemonNumber + 1);
  };

  const moveDown = () => {
    return setPokemonNumber(pokemonNumber - 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((res) => res.json())
      .then((results) => {
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
          handleChange={handleChange}
          pokeNum={pokemonNumber}
          moveUp={moveUp}
          moveDown={moveDown}
        />
      </section>
      <PokemonDisplay data={data} />
      <Footer />
    </>
  );
}

export default App;