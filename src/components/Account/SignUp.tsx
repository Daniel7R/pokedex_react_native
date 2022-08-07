import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../../../firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const [value, setValue] = React.useState({
        email: "",
        password: "",
        error: ""
    });

    const signUpFunction = async () => {
        if (value.email === "" || value.password === "") {
            setValue({
                ...value,
                error: "Email and password are required"
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate("Sign In");
        } catch (err) {
            setValue({
                ...value,
                error: err.message
            })
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>


            <View style={styles.controls}>
                <Input
                    placeholder='Email'
                    containerStyle={styles.control}
                    value={value.email}
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    leftIcon={<Icon
                        name='envelope'
                        size={16}
                    />}
                />

                <Input
                    placeholder='Password'
                    containerStyle={styles.control}
                    value={value.password}
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    secureTextEntry={true}
                    leftIcon={<Icon
                        name='key'
                        size={16}
                    />}
                />

                <Button title="Sign up" buttonStyle={styles.control} onPress={signUpFunction} />
                {!!value.error && <View ><Text style={styles.error}>{value.error}</Text></View>}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    controls: {
        flex: 1,
        width: "70%",
        fontSize: 16
    },

    control: {
        marginTop: 10,
    },
    input: {
        width: "100%"
    },

    error: {
        marginTop: 10,
        padding: 10,
        color: '#ff3838',
    }
});


export { SignUp }