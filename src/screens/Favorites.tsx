import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

import { getPokemonsFavoriteApi } from '../api/favorite'

const Favorites = () => {

    React.useEffect(() => {
    }, [])
    const getFavorites = async () => {
        const response = await getPokemonsFavoriteApi();
        console.log(response);

    }
    return (
        <SafeAreaView>
            <Text>Favorites</Text>
            <Button title='get favs' onPress={getFavorites} />
        </SafeAreaView>
    )
}

export { Favorites };