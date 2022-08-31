import React from "react";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

const cleanInput = (input) => {
    // shortenInput(input);
    if (input.key == 'e' || input.key == '.') return input.preventDefault();
    return true;
}

const shortenInput = (input) => {
    return input.slice(0, 2);
}

 

const SearchBar = ({ search }) => {
    return (
        <section className={pokedexSearch} >
            {/* {shortenInput(inputVal(search))} */}
            <input
                type="number"
                onKeyDown={cleanInput}
                onChange={search}
                placeholder="Search by #"
                pattern="/^-?\d+\.?\d*$/"
                maxlength="3"
            />
        </section>
    );
};

export default SearchBar;