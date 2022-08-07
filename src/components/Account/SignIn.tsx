import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../../../firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignIn = () => {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    })

    const signInFunction = async () => {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are required.'
            })
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            })
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.controls}>
                <Input
                    placeholder='Email'
                    containerStyle={styles.input}
                    value={value.email}
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    leftIcon={<Icon
                        name='envelope'
                        size={16}
                    />}
                />

                <Input
                    placeholder='Password'
                    containerStyle={styles.input}
                    value={value.password}
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    secureTextEntry={true}
                    style={styles.input}
                    leftIcon={<Icon
                        name='key'
                        size={16}

                    />}
                />

                <Button title="Sign in" buttonStyle={styles.control} onPress={signInFunction} />
                {!!value.error && <View ><Text style={styles.error}>{value.error}</Text></View>}
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        paddingTop: 20,
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
        backgroundColor: '#ff3838'
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

export { SignIn }