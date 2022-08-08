import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'

const Welcome: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome to Pokedex</Text>
            <Text style={{ fontSize: 17, marginTop: 30, marginHorizontal: 10 }}>If you want to see your favorites or account info, you must register first!</Text>

            <View style={styles.buttons}>
                <Pressable style={styles.buttonSI} onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.txtSI}>Sign In</Text>
                </Pressable>
                <Pressable style={styles.buttonSU} onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.txtSU}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    buttons: {
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        marginTop: 80
    },
    buttonSU: {
        backgroundColor: "#ff3838",
        padding: 10,
        borderRadius: 8,
        width: "40%",
        alignItems: "center"
    },
    txtSU: {
        color: "#fff",
    },
    txtSI: {
        color: "#ff3838"
    },
    buttonSI: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderColor: "#ff3838",
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        width: "40%",
        alignItems: "center"
    }
})

export { Welcome }