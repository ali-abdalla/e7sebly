import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from "./components/input";

export default class Order extends React.Component {
    tax;
    service;
    discount;
    other;
    total;
    state = {
        result: ""
    }
    onPressCalculate = () => {
        let res = (
            this.parseStringtoNumber(this.tax) + this.parseStringtoNumber(this.service) - this.parseStringtoNumber(this.discount) + this.parseStringtoNumber(this.other)
        ) / this.parseStringtoNumber(this.total);
        this.setState({
            result: `${this.parseStringtoNumber(res)}`,
        });
    }
    
    parseStringtoNumber(str){
        return isNaN(Number(str))?0.0:Number(str);
    }

    updateStatus = (key, value) => {
        this[key] = value;
    }

    render() {
        return (
            <View style={styles.container}>
                <Input type='numeric' label="Tax" value={this.tax} updateStatus={this.updateStatus.bind(this, "tax")} name="tax"></Input>
                <Input type='numeric' label="Service" value={this.sservice} updateStatus={this.updateStatus.bind(this, "service")} name="service"></Input>
                <Input type='numeric' label="Discount" value={this.discount} updateStatus={this.updateStatus.bind(this, "discount")} name="discount"></Input>
                <Input type='numeric' label="Others" value={this.other} updateStatus={this.updateStatus.bind(this, "other")} name="other"></Input>
                <Input type='numeric' label="Total" value={this.total} updateStatus={this.updateStatus.bind(this, "total")} name="total"></Input>

                <TouchableOpacity onPress={this.onPressCalculate} style={styles.btn}>
                    <Text style={{ color: "white" }}>Calculate</Text>
                </TouchableOpacity>

                <Text>{this.state.result}</Text>
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
        width: "50%"
    }
});
