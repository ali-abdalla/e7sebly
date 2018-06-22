import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CutsomInput from "./components/input";

export default class Order extends React.Component {
    orderDetails = {
        tax: '',
        service: '',
        discount: '',
        other: '',
        total: '',
        orders: '',
    }

    state = {
        result: ""
    }
    onPressCalculate = () => {
        let percentage = (this.parseStringtoNumber(this.orderDetails.tax) + this.parseStringtoNumber(this.orderDetails.service) - this.parseStringtoNumber(this.orderDetails.discount) + this.parseStringtoNumber(this.orderDetails.other))
            / this.parseStringtoNumber(this.orderDetails.total);

        let res = this.sumInputs(this.orderDetails.orders) * (percentage + 1);
        this.setState({
            result: `${this.parseStringtoNumber(res)}`
        });
    }

    parseStringtoNumber(str) {
        return isNaN(Number(str)) ? 0.0 : Number(str);
    }

    sumInputs(data) {
        let nums = data.toString().split(',');
        let sum = nums.reduce((total = 0, num) => {
            return this.parseStringtoNumber(total) + this.parseStringtoNumber(num);
        });
        return sum;
    }
    updateStatus = (key, value) => {
        this.orderDetails[key] = value;
    }

    render() {
        return (
            <View style={styles.container}>
                <CutsomInput type='numeric' label="Tax" value={this.orderDetails.tax} updateStatus={this.updateStatus.bind(this, "tax")}></CutsomInput>
                <CutsomInput type='numeric' label="Service" value={this.orderDetails.sservice} updateStatus={this.updateStatus.bind(this, "service")}></CutsomInput>
                <CutsomInput type='numeric' label="Discount" value={this.orderDetails.discount} updateStatus={this.updateStatus.bind(this, "discount")}></CutsomInput>
                <CutsomInput type='numeric' label="Others" value={this.orderDetails.other} updateStatus={this.updateStatus.bind(this, "other")}></CutsomInput>
                <CutsomInput type='numeric' label="Sub Total" value={this.orderDetails.total} updateStatus={this.updateStatus.bind(this, "total")}></CutsomInput>
                <CutsomInput type='numeric' label="your orders" value={this.orderDetails.orders} updateStatus={this.updateStatus.bind(this, "orders")}></CutsomInput>

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
        left: "1%",
        top: "3%"
    },
    btn: {
        backgroundColor: "#008CBA",
        alignItems: 'center',
        padding: 10,
        width: "50%"
    }
});
