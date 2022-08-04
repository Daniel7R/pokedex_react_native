import React from 'react'
import { View, Text } from 'react-native'

import { getPokemonDetailApi } from "../api/pokemon";

interface Props {
    route
    navigation
}

const Pokemon = (props: Props) => {
    const [pokemon, setPokemon] = React.useState(null);
    const { route: { params }, navigation } = props;
    console.log(pokemon);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await getPokemonDetailApi(params.id);
                setPokemon(response);
            } catch (err) {
                navigation.goBack();
            }
        })();
    }, [params])

    if (!pokemon) return null;

    return (
        <View>
            <Text>Estamon en un Pokemon </Text>
            <Text>{pokemon?.name}</Text>
        </View>
    )
}

export default Pokemon