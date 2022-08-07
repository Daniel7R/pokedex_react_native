import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { signOut, getAuth } from 'firebase/auth';
import { StackScreenProps } from "@react-navigation/stack"
import { initializeApp } from 'firebase/app';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { firebaseConfig } from '../../firebaseConfig';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export function Account({ navigation }): React.FC<StackScreenProps<any>> {
    const { user } = useAuthentication();

    const signOutFunction = () => {
        signOut(auth)
            .then(() => navigation.navigate("Welcome"))
    }

    return (
        <View style={styles.container}>
            <Text>Welcome, {user?.email}!</Text>
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
        backgroundColor: "#ff3838"
    }
});