import React from 'react'
import { FlatList, Text, StyleSheet } from "react-native"

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
            keyExtractor={pokemon => String(pokemon.id)}
            renderItem={(pokemon) => <Text>{pokemon.item.name}</Text>}
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})

export { PokemonList }