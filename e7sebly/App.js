import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Order from "./order";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Welcome to E7sebly', style: { color: '#fff' } }}
        />
        <Order></Order>
      </View>
    );
  }
}

