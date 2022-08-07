import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from "lodash";

import Constants from "expo-constants";

const Stats = (props) => {
    const { stats } = props;

    const barStyles = num => {
        const color = num > 50 ? "#80ff6c" : "#ff3e3e";
        return {
            backgroundColor: color,
            width: `${num}%`,
        }
    }
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {
                map(stats, (item, index) => (
                    <View key={index} style={styles.block}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statname}>{capitalize(item.stat.name)}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>{item.base_stat}</Text>
                            <View style={styles.bgBar}>
                                <View style={[styles.barFill, barStyles(item.base_stat)]}>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 30,
        justifyContent: "center",
        marginBottom: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTitle: {
        width: "30%"
    },
    statname: {
        fontSize: 13,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "70%",
        alignItems: "center",
        flexDirection: "row"
    },
    number: {
        width: "12%",
        fontSize: 12
    },
    bgBar: {
        height: 7,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "#dedede",
        width: "88%"
    },
    barFill: {
        height: 7,
        borderRadius: 20
    }
})

export { Stats }