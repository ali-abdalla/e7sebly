import React from 'react';
import { View,Text } from 'react-native';
import Order from "./order";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: "15%",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#1F64FF"
          }}> 
          <Text style={{ color: 'white' }}>Welcome to E7sebly</Text>  
        </View>
        <Order></Order>
      </View>
    );
  }
}

