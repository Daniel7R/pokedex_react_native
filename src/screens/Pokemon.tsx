import React from 'react'
import { ScrollView } from 'react-native'

import { Header } from '../components/Pokemon/Header';
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
        <ScrollView>
            <Header name={pokemon?.name} order={pokemon?.order} image={pokemon?.sprites.other["official-artwork"].front_default} type={pokemon?.types[0].type.name} />
        </ScrollView>
    )
}

export default Pokemon