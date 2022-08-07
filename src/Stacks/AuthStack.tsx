import { createStackNavigator } from "@react-navigation/stack";

// import { Account } from "../screens/Account";
import { Welcome } from "../components/Account/Welcome";
import { SignIn } from "../components/Account/SignIn";
import { SignUp } from "../components/Account/SignUp";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{
                title: "",
                headerTitleAlign: "center"
            }} />
            <Stack.Screen name="Sign In" component={SignIn} options={{
                title: "",
                headerTitleAlign: "center"
            }} />
            <Stack.Screen name="Sign Up" component={SignUp} options={{
                title: "",
            }} />
        </Stack.Navigator>
    )
}

export default AuthStack;