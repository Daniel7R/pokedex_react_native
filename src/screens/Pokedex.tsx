import { SafeAreaView } from 'react-native'
import React from 'react'

import { PokemonList } from '../components/PokemonList';
import { getPokemonsApi, getPokemonDetailsApi } from '../api/pokemon';

interface PokemonDetails {
    name: string,
    id: number,
    type?: string,
    order: number,
    image: string
}

export function Pokedex() {

    const [pokemons, setPokemons] = React.useState<PokemonDetails[]>([]);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi();
            const pokemonsArray: PokemonDetails[] = [];

            for await (let pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsApi(pokemon?.url);
                pokemonsArray.push({
                    id: pokemonDetails?.id,
                    name: pokemonDetails?.name,
                    type: pokemonDetails?.types[0].type.name,
                    order: pokemonDetails?.order,
                    image: pokemonDetails?.sprites.other['official-artwork'].front_default
                })
                setPokemons([...pokemons, ...pokemonsArray]);
            }

        } catch (err) {
            console.error(err);
        }
    }

    React.useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, [])

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    )
}