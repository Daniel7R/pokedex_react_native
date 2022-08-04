import { createStackNavigator } from "@react-navigation/stack";
import { Pokedex } from "../screens/Pokedex";

import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PokedexS" component={Pokedex} options={{
                title: "Pokedex"
            }} />
            <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
    )
}