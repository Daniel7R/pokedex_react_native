import React from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailApi } from '../api/pokemon'
import { PokemonList } from "../components/PokemonList"

interface Pokemon {
    name: string,
    id: number,
    type?: string,
    order: number,
    image: string
}

const Favorites = () => {

    const [pokemons, setPokemons] = React.useState<Pokemon[]>()
    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                const response = await getPokemonsFavoriteApi();
                console.log("response", response);

                const pokemonsArray: Pokemon[] = [];

                for await (const id of response) {
                    const pokemonDetails = await getPokemonDetailApi(id);
                    pokemonsArray.push({
                        id: pokemonDetails?.id,
                        name: pokemonDetails?.name,
                        type: pokemonDetails?.types[0].type.name,
                        order: pokemonDetails?.order,
                        image: pokemonDetails?.sprites.other['official-artwork'].front_default
                    });
                }
                setPokemons(pokemonsArray);
            })();
        }, [])
    )



    return (
        <PokemonList pokemons={pokemons} />
    )
}

export { Favorites };