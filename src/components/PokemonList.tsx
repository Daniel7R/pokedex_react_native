import React from 'react'
import { FlatList, StyleSheet, ActivityIndicator, Platform } from "react-native"

import { PokemonCard } from "./PokemonCard"
interface Pokemon {
    name: string,
    id: number,
    type?: string,
    order: number,
    image: string
}

interface Props {
    pokemons: Pokemon[],
    loadPokemons,
    isNext: string | null
}

const PokemonList = (props: Props) => {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () => {
        loadPokemons();
    };
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={pokemon => pokemon + String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (
                <ActivityIndicator size={"large"} style={styles.spinner} color="#ff1c2f" />
            )
            }
        />
    )
}



const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 20 : 0
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 80 : 60
    }
})

export { PokemonList }