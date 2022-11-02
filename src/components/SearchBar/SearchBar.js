import React from "react";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

const SearchBar = ({ handleChange, pokeNum }) => {
    return (
        <form className={pokedexSearch}>
            <input
                type="text"
                maxLength={3}
                onChange={handleChange}
                value={pokeNum}
                placeholder="Search by Pokemon ID #"
            />
        </form>
    );
};

export default SearchBar;