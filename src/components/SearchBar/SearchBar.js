import React from "react";
import Button from "../Button/Button";
import classes from './SearchBar.module.scss';

const { pokedexSearch } = classes;

const SearchBar = ({ handleChange, pokeNum, moveUp, moveDown }) => {

    const chevUp = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    )

    const chevDown = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    )

    return (
        <>
            <form className={pokedexSearch}>
                <input
                    type="text"
                    maxLength={3}
                    onChange={handleChange}
                    value={pokeNum}
                    placeholder="Search by Pokemon ID #"
                />
            </form>
            <div className='controls-container'>
                <Button
                    name={chevUp}
                    clicked={moveUp}
                />
                <Button
                    name={chevDown}
                    clicked={moveDown}
                />
            </div>
        </>
    );
};

export default SearchBar;