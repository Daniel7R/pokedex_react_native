import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { getPokemonsFavoriteApi } from '../api/favorite'

const Favorites = () => {
    const [favorites, setFavorites] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            const response = await getPokemonsFavoriteApi();
            console.log(response);

        })();
    }, [])

    return (
        <SafeAreaView>
            <Text>Favorites</Text>
        </SafeAreaView>
    )
}

export { Favorites };