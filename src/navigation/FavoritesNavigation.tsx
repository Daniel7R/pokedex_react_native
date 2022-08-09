import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Favorites } from '../screens/Favorites'
import Pokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

const FavoritesNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoritesS" component={Favorites} options={{
                title: "Favorites",
                headerTitleAlign: "center"
            }} />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{
                    title: "",
                    headerTransparent: true
                }}
            />

        </Stack.Navigator>
    )
}

export { FavoritesNavigation }