import React from 'react';
import { View,StyleSheet } from 'react-native';
import Home from "./home";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Home></Home>
      </View>
    );
  }
}

let styles=StyleSheet.create({
  Container:{
    backgroundColor:"white"
  }
})

