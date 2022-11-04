import { React } from "react";
import classes from './PokemonDisplay.module.scss';

const { statsText, displayContainer, pokemonLabel, found, pokemonType,
    bugType, dragonType, electricType, fightingType, fireType,
    flyingType, ghostType, grassType, groundType, iceType,
    normalType, poisonType, psychicType, rockType, waterType } = classes;

const PokemonDisplay = ({ data }) => {

    const abilities = data.abilities;
    const pokeTypes = data.types;

    const determineType = (pokeType) => {
        switch (pokeType) {
            case 'bug':
                return bugType

            case 'dragon':
                return dragonType

            case 'electric':
                return electricType

            case 'fighting':
                return fightingType

            case 'fire':
                return fireType

            case 'flying':
                return flyingType

            case 'ghost':
                return ghostType

            case 'grass':
                return grassType

            case 'ground':
                return groundType

            case 'ice':
                return iceType

            case 'poison':
                return poisonType

            case 'psychic':
                return psychicType

            case 'rock':
                return rockType

            case 'water':
                return waterType

            default:
                return normalType
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
                                className={`${statsText} ${pokemonType} ${determineType(type.type.name)}`}
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