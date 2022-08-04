import React from 'react'
import { FlatList, Text, StyleSheet } from "react-native"

import { PokemonCard } from "./PokemonCard"
interface Pokemon {
    name: string,
    id: number,
    type?: string,
    order: number,
    imagen: string
}

interface Props {
    pokemons: Pokemon[]
}

const PokemonList = (props: Props) => {
    const { pokemons } = props;
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={pokemon => pokemon + String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}



const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    }
})

export { PokemonList }