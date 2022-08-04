import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import { capitalize } from "lodash";

import { getColorByPokemonType } from "../utils/getColorByPokemonType";

interface PokemonProps {
    name: string,
    id: number,
    type?: string,
    order: number,
    image: string
}

const PokemonCard = (props: PokemonProps) => {
    const { pokemon }: PokemonProps = props;
    const pokemonColor = getColorByPokemonType(pokemon.type)
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }
    const goToPokemon = () => {
        console.log(pokemon);

    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image style={styles.image} source={{ uri: pokemon.image }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        fontSize: 12,
        color: "#fff"

    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    }
});

export { PokemonCard }