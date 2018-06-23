import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Order from "./order";

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <View
                    style={styles.container}>
                    <Text style={styles.text}>Welcome to E7sebly</Text>
                </View>
                <Order></Order>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fb8200"
    },
    text: {
        color: 'white',
        fontWeight:'bold'
    }
})



