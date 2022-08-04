import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from "lodash";

import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

interface Props {
    types: string[]
}

const Type = (props: Props) => {
    const { types } = props;
    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
                    <Text>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 20,
        marginHorizontal: 10,
    }
})

export { Type }