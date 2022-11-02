import React from "react";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

const SearchBar = ({ search, PokeNum }) => {
    return (
        <form className={pokedexSearch}  >
            <input
                type="text"
                maxLength={3}
                onChange={search}
                value={PokeNum}
                placeholder="Search by Pokemon ID #"
            />
        </form>
    );
};

export default SearchBar;