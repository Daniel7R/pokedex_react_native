import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { signOut, getAuth } from 'firebase/auth';
import { StackScreenProps } from "@react-navigation/stack"
import { initializeApp } from 'firebase/app';
import { useFocusEffect } from '@react-navigation/native';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getPokemonsFavoriteApi } from '../api/favorite';
import { firebaseConfig } from '../../firebaseConfig';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export function Account({ navigation }): React.FC<StackScreenProps<any>> {
    const { user } = useAuthentication();
    const [total, setTotal] = React.useState(0);

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                try {
                    const response = await getPokemonsFavoriteApi();
                    setTotal(response.length);
                } catch (err) {
                    setTotal(0)
                }
            })();
        }, [])
    )

    const signOutFunction = () => {
        signOut(auth)
            .then(() => navigation.navigate("Welcome"))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {user?.email}!</Text>
            <Text>{total} favirite pokemons!</Text>
            <Button title="Sign Out" style={styles.button} onPress={() => signOutFunction(auth)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        marginTop: 10,
        backgroundColor: "#ff3838",
        paddingHorizontal: 30
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});