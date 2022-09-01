import React from "react";
import Button from "../Button/Button";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

// Gets rid of 'e' and '.' in input 
// const cleanInput = (input) => {
//     if (input.key === 'e' || input.key === '.') return input.preventDefault();
//     return true;
// }

const SearchBar = ({ search, PokeNum }) => {
    return (
        <form className={pokedexSearch}  >
            {/* {shortenInput(inputVal(search))} */}
            <input
                type="number"
                min="0"
                max="151"
                maxLength={3}
                onChange={search}
                value={PokeNum > 151 ? 151 : PokeNum }
                placeholder="Search by #"
                pattern="[0-150]"
            />
            {/* <Button name="Query"/> */}
        </form>
    );
};

export default SearchBar;