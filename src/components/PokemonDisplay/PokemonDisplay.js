import { React } from "react";
import classes from './PokemonDisplay.module.scss';

const { statsText, displayContainer, pokemonLabel, found, pokemonType, bugType } = classes;

const PokemonDisplay = ({ data }) => {

    const abilities = data.abilities;
    const pokeTypes = data.types;

    const determineType = (pokeType) => {
        switch (pokeType) {
            case 'poison':
                return bugType
        }
    };

    return (
        <section className={displayContainer}>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="image" />
            </div>
            <section>
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
                    <span className={found}>{data.weight} pounds</span>
                </div>
                <div>
                    <label className={pokemonLabel}>abilities</label>
                    {abilities?.map((move) => {
                        return (
                            <div
                                key={move.slot}
                                className={statsText}
                            >
                                {move.ability.name}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <label className={pokemonLabel}>types:</label>
                    {pokeTypes?.map((type) => {
                        return (
                            <div
                                key={type.slot}
                                className={`${statsText} ${pokemonType} ${type.slot % 2 == 0 ? 'uwu' : 'owo'}`}
                            >
                                {type.type.name}
                            </div>
                        )
                    })}
                    <span className={found}></span>
                </div>
            </section>
        </section>
    );
};

export default PokemonDisplay;