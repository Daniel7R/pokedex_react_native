import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Favorites } from '../screens/Favorites'

const Stack = createStackNavigator()

const FavoritesNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoritesS" component={Favorites} options={{
                title: "Favorites"
            }} />
        </Stack.Navigator>
    )
}

export default FavoritesNavigation