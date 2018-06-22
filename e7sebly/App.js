import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Order from "./order";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome to E7sebly</Text>
        <Order></Order>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
