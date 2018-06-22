import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from "./components/input";

export default class Order extends React.Component {
    onPressCalculate() {

    }
    render() {
        return (
            <View style={styles.container}>
                <Input label="Tax"></Input>
                <Input label="Service"></Input>
                <Input label="Discount"></Input>
                <Input label="Others"></Input>
                <Input label="Total"></Input>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:"white"}}>Calculate</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        left: "5%",
        top: "5%"
    },
    btn: {
        backgroundColor: "#008CBA",
        alignItems: 'center',
        padding: 10,
        width:"50%"
    }
});
