import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import { Account } from '../screens/Account';
const Stack = createStackNavigator();

const AccountNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accounts" component={Account} />
        </Stack.Navigator>
    )
}

export default AccountNavigation