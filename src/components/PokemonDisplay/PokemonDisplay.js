import { React } from "react";
import classes from './PokemonDisplay.module.scss';

const { displayContainer, pokemonLabel, found } = classes;

const PokemonDisplay = ({
    name,
    height,
    weight,
    abilities,
    types,
    picture,
    pictureText
}) => {
    return (
        <section className={displayContainer}>
            <div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/493.png" />
            </div>
            <div>
                <div>
                    <label className={pokemonLabel}>name: {name} </label>
                    <span className={found}>{name}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>height: {height} </label>
                    <span className={found}>{height}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>weight: {weight} </label>
                    <span className={found}>{weight}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>abilities: {abilities}</label>
                    <span className={found}>{abilities}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>types: {types} </label>
                    <span className={found}>{types}</span>
                </div>
            </div>

            <img src={picture} alt={pictureText} />
        </section>
    );
};

export default PokemonDisplay;
