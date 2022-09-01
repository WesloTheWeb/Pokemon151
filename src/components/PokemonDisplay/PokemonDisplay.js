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
    pictureText,
    data
}) => {
    console.log(data.name);
    return (
        <section className={displayContainer}>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="image" />
            </div>
            <div>
                <div>
                    <label className={pokemonLabel}>name:</label>
                    <span className={found}>{data.name}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>height:</label>
                    <span className={found}>{data.height}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>weight:</label>
                    <span className={found}>{data.weight}</span>
                </div>
                <div>
                    <label className={pokemonLabel}>abilities:</label>
                    <span className={found}></span>
                </div>
                <div>
                    <label className={pokemonLabel}>types:</label>
                    <span className={found}></span>
                </div>
            </div>

            <img src={picture} alt={pictureText} />
        </section>
    );
};

export default PokemonDisplay;
