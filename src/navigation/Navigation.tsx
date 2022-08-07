import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import { Image } from 'react-native';

import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
// import AccountNavigation from './AccountNavigation';
import { AccountAuthNavigation } from './AccountAuthNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorites" component={FavoritesNavigation} options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="star" color={color} size={size} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
                headerShown: false
            }} />
            <Tab.Screen name="Log In" component={AccountAuthNavigation} options={{
                tabBarLabel: "Log In",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

const renderPokeball = () => (
    <Image source={require("../assets/pokeball.png")} style={{ width: 75, height: 75, top: -15 }} />
)

export { Navigation };