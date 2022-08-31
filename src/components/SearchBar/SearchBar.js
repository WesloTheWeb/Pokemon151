import React from "react";
import Button from "../Button/Button";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

// Gets rid of 'e' and '.' in input 
const cleanInput = (input) => {
    // shortenInput(input);
    if (input.key == 'e' || input.key == '.') return input.preventDefault();
    return true;
}

const shortenInput = (input) => {
    return input.slice(0, 2);
}

 

const SearchBar = ({ search, PokeNum }) => {
    return (
        <form className={pokedexSearch} >
            {/* {shortenInput(inputVal(search))} */}
            <input
                type="number"
                min="0"
                onKeyDown={search}
                // onChange={search}
                value={PokeNum}
                placeholder="Search by #"
                pattern="[0-150]"
                maxLength="3"
            />
            <Button name="Query"/>
        </form>
    );
};

export default SearchBar;