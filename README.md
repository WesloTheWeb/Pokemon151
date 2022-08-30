# PROMPT 
Build a React App that uses the api data from (https:pokeapi.co). Only includes
the first generation of ids 1 - 151.

API Reference Docs: (https://pokeapi.co/docs/v2)

Users should be able to:
 - text field where you enter the pokemon by #
 - load and display the info for that pokemon

Data displayed:
- name
- height (ftin)
- weight (lbs)
- abilities (name of each)
- types (name of each)
- picture of pokemon from generation-i - front_default

# APPROACH
- App will be the global parent component
within App:
- Make the API call
- Fetch the data

and pass to other PokemonData 

## Searchbar component that will interact with our 
PokemonData component (i.e input field)
- button that will affect the PokemonData component

## PokemonData
dynamically loads data from the api
displays:
 load and display the info for that pokemon
 name
 height (ftin)
 weight (lbs)
 abilities (name of each)
 types (name of each)
 picture of pokemon from generation-i - front_default


