import { createStackNavigator } from "@react-navigation/stack";

import { Account } from "../screens/Account";

const Stack = createStackNavigator();

const AccountNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accounts" component={Account} options={{
                title: "Account",
                headerTitleAlign: "center"
            }} />
        </Stack.Navigator>
    )
}

export default AccountNavigation;