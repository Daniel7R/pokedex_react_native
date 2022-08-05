import React from 'react'
import { ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

import { Header } from '../components/Pokemon/Header';
import { Type } from '../components/Pokemon/Type';
import { Stats } from "../components/Pokemon/Stats";
import { getPokemonDetailApi } from "../api/pokemon";

interface Props {
    route
    navigation
}

const Pokemon = (props: Props) => {
    const [pokemon, setPokemon] = React.useState(null);
    const { route: { params }, navigation } = props;


    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.goBack}
                />
            )
        })
    }, [navigation, params])

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
        <ScrollView>
            <Header name={pokemon?.name} order={pokemon?.order} image={pokemon?.sprites.other["official-artwork"].front_default} type={pokemon?.types[0].type.name} />
            <Type types={pokemon.types} />
            <Stats stats={pokemon?.stats} />
        </ScrollView>
    )
}

export default Pokemon