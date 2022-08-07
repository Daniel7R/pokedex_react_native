import React from 'react'
import { ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

import { Header } from '../components/Pokemon/Header';
import { Type } from '../components/Pokemon/Type';
import { Stats } from "../components/Pokemon/Stats";
import { Favorite } from '../components/Favorite';
import { getPokemonDetailApi } from "../api/pokemon";
import { useAuthentication } from '../utils/hooks/useAuthentication';

interface Props {
    route
    navigation
}

const Pokemon = (props: Props) => {
    const [pokemon, setPokemon] = React.useState(null);
    const { route: { params }, navigation } = props;
    const { user } = useAuthentication();

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => user !== undefined && <Favorite id={pokemon?.id} />,
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 20 }}
                    onPress={() => navigation.goBack()}
                />
            )
        })
    }, [navigation, params, user, pokemon])

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